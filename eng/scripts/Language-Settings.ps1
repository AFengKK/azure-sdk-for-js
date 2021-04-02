$Language = "javascript"
$LanguageShort = "js"
$LanguageDisplayName = "JavaScript"
$PackageRepository = "NPM"
$packagePattern = "*.tgz"
$MetadataUri = "https://raw.githubusercontent.com/Azure/azure-sdk/master/_data/releases/latest/js-packages.csv"
$BlobStorageUrl = "https://azuresdkdocs.blob.core.windows.net/%24web?restype=container&comp=list&prefix=javascript%2F&delimiter=%2F"

function Confirm-NodeInstallation {
  if (!(Get-Command npm -ErrorAction SilentlyContinue)) {
    LogError "Could not locate npm. Install NodeJS (includes npm and npx) https://nodejs.org/en/download"
    exit 1
  }
}

function Get-javascript-PackageInfoFromRepo ($pkgPath, $serviceDirectory) {
  $projectPath = Join-Path $pkgPath "package.json"
  if (Test-Path $projectPath) {
    $projectJson = Get-Content $projectPath | ConvertFrom-Json
    $jsStylePkgName = $projectJson.name.Replace("@", "").Replace("/", "-")

    $pkgProp = [PackageProps]::new($projectJson.name, $projectJson.version, $pkgPath, $serviceDirectory)
    if ($projectJson.psobject.properties.name -contains 'sdk-type') {
      $pkgProp.SdkType = $projectJson.psobject.properties['sdk-type'].value
    }
    else {
      $pkgProp.SdkType = "unknown"
    }
    if ($projectJson.name.StartsWith("@azure/arm")) {
      $pkgProp.SdkType = "mgmt"
    }
    $pkgProp.IsNewSdk = $pkgProp.SdkType -eq "client"
    $pkgProp.ArtifactName = $jsStylePkgName
    return $pkgProp
  }
  return $null
}

# Returns the npm publish status of a package id and version.
function IsNPMPackageVersionPublished ($pkgId, $pkgVersion) {
  Confirm-NodeInstallation
  $npmVersions = (npm show $pkgId versions)
  if ($LastExitCode -ne 0) {
    npm ping
    if ($LastExitCode -eq 0) {
      return $False
    }
    Write-Host "Could not find a deployed version of $pkgId, and NPM connectivity check failed."
    exit(1)
  }
  $npmVersionList = $npmVersions.split(",") | ForEach-Object { return $_.replace("[", "").replace("]", "").Trim() }
  return $npmVersionList.Contains($pkgVersion)
}

# make certain to always take the package json closest to the top
function ResolvePkgJson($workFolder) {
  $pathsWithComplexity = @()
  foreach ($file in (Get-ChildItem -Path $workFolder -Recurse -Include "package.json")) {
    $complexity = ($file.FullName -Split { $_ -eq "/" -or $_ -eq "\" }).Length
    $pathsWithComplexity += New-Object PSObject -Property @{
      Path       = $file
      Complexity = $complexity
    }
  }

  return ($pathsWithComplexity | Sort-Object -Property Complexity)[0].Path
}

# Parse out package publishing information given a .tgz npm artifact
function Get-javascript-PackageInfoFromPackageFile ($pkg, $workingDirectory) {
  $workFolder = "$workingDirectory$($pkg.Basename)"
  $origFolder = Get-Location
  $releaseNotes = ""
  $readmeContent = ""

  New-Item -ItemType Directory -Force -Path $workFolder
  Set-Location $workFolder

  tar -xzf $pkg

  $packageJSON = ResolvePkgJson -workFolder $workFolder | Get-Content | ConvertFrom-Json
  $pkgId = $packageJSON.name
  $docsReadMeName = $pkgId -replace "^@azure/" , ""
  $pkgVersion = $packageJSON.version

  $changeLogLoc = @(Get-ChildItem -Path $workFolder -Recurse -Include "CHANGELOG.md")[0]
  if ($changeLogLoc) {
    $releaseNotes = Get-ChangeLogEntryAsString -ChangeLogLocation $changeLogLoc -VersionString $pkgVersion
  }

  $readmeContentLoc = @(Get-ChildItem -Path $workFolder -Recurse -Include "README.md") | Select-Object -Last 1
  if ($readmeContentLoc) {
    $readmeContent = Get-Content -Raw $readmeContentLoc
  }

  Set-Location $origFolder
  Remove-Item $workFolder -Force -Recurse -ErrorAction SilentlyContinue

  $resultObj = New-Object PSObject -Property @{
    PackageId      = $pkgId
    PackageVersion = $pkgVersion
    ReleaseTag     = "$($pkgId)_$($pkgVersion)"
    Deployable     = $forceCreate -or !(IsNPMPackageVersionPublished -pkgId $pkgId -pkgVersion $pkgVersion)
    ReleaseNotes   = $releaseNotes
    ReadmeContent  = $readmeContent
    DocsReadMeName = $docsReadMeName
  }

  return $resultObj
}

# Stage and Upload Docs to blob Storage
function Publish-javascript-GithubIODocs ($DocLocation, $PublicArtifactLocation) {
  $PublishedDocs = Get-ChildItem "$($DocLocation)/documentation" | Where-Object -FilterScript { $_.Name.EndsWith(".zip") }

  foreach ($Item in $PublishedDocs) {
    Expand-Archive -Force -Path "$($DocLocation)/documentation/$($Item.Name)" -DestinationPath "$($DocLocation)/documentation/$($Item.BaseName)"
    $dirList = Get-ChildItem "$($DocLocation)/documentation/$($Item.BaseName)/$($Item.BaseName)" -Attributes Directory

    if ($dirList.Length -eq 1) {
      $DocVersion = $dirList[0].Name
      $pkgs = Get-ChildItem -Path $PublicArtifactLocation -Include "*.tgz" -Recurse -File
      # set default package name
      $PkgName = "azure-$($Item.BaseName)"
      if ($pkgs -and $pkgs.Count -eq 1) {
        $parsedPackage = Get-javascript-PackageInfoFromPackageFile $pkgs[0] $PublicArtifactLocation
        $PkgName = $parsedPackage.PackageId.Replace("@", "").Replace("/", "-")
      }
      else {
        Write-Host "Package info is not available from artifact. Assuming package is in default scope @azure."
      }
      Write-Host "Uploading Doc for $($PkgName) Version:- $($DocVersion)..."
      $releaseTag = RetrieveReleaseTag $PublicArtifactLocation
      Upload-Blobs -DocDir "$($DocLocation)/documentation/$($Item.BaseName)/$($Item.BaseName)/$($DocVersion)" -PkgName $PkgName -DocVersion $DocVersion -ReleaseTag $releaseTag
    }
    else {
      Write-Host "found more than 1 folder under the documentation for package - $($Item.Name)"
    }
  }
}

function Get-javascript-GithubIoDocIndex() {
  # Update the main.js and docfx.json language content
  UpdateDocIndexFiles -appTitleLang JavaScript -packageRegex "/\@(.*)\//i" -regexReplacement "`$1-"
  # Fetch out all package metadata from csv file.
  $metadata = Get-CSVMetadata -MetadataUri $MetadataUri
  # Get the artifacts name from blob storage
  $artifacts = Get-BlobStorage-Artifacts -blobStorageUrl $BlobStorageUrl -blobDirectoryRegex "^javascript/([a-z]*)-(.*)/$" -blobArtifactsReplacement "@`${1}/`${2}"
  # Build up the artifact to service name mapping for GithubIo toc.
  $tocContent = Get-TocMapping -metadata $metadata -artifacts $artifacts
  # Generate yml/md toc files and build site.
  GenerateDocfxTocContent -tocContent $tocContent -lang "JavaScript"
}

# Updates a js CI configuration json.
# For "latest", we simply set a target package name
# For "preview", we add @next to the target package name
function Update-javascript-CIConfig($ciRepo, $locationInDocRepo) {
  $metadata = Get-CSVMetadata -MetadataUri $MetadataUri | Where-Object { $_.New -eq "true" }  | Where-Object { $_.Hide -ne "true" } 
  $previewMetadata = $metadata | Where-Object { $_.VersionPreview }
  $latestMetadata = $metadata | Where-Object { $_.VersionGA }
  $previewPackageList = @()
  $latestPackageList = @()
  for ($i = 0; $i -lt $previewMetadata.Length; $i++) {
    $preview_object = @{}
    $preview_object["name"] = "$($previewMetadata[$i].Package)@next"
    $previewPackageList += $preview_object
  }
  for ($i = 0; $i -lt $latestMetadata.Length; $i++) {
    $latest_object = @{}
    $latest_object["name"] = "$($latestMetadata[$i].Package)"
    $latestPackageList += $latest_object
  }
  # Read package list from package.json
  $pkgLatestJsonLoc = (Join-Path -Path $ciRepo -ChildPath $locationInDocRepo[0])
  $pkgPreviewJsonLoc = (Join-Path -Path $ciRepo -ChildPath $locationInDocRepo[1])
  if (-not (Test-Path $pkgLatestJsonLoc)) {
    Write-Error "Unable to locate latest package csv at location $pkgLatestJsonLoc, exiting."
    exit(1)
  }
  if (-not (Test-Path $pkgPreviewJsonLoc)) {
    Write-Error "Unable to locate latest package csv at location $pkgPreviewJsonLoc, exiting."
    exit(1)
  }
  
  $allLatestCSVRows = Get-Content $pkgLatestJsonLoc | Out-String | ConvertFrom-Json
  $allPreviewCSVRows = Get-Content $pkgPreviewJsonLoc | Out-String | ConvertFrom-Json
  $latestPackages = $allLatestCSVRows.npm_package_sources
  for ($j = 0; $j -lt $latestPackages.Length; $j++) {
    $pkg = $latestPackages[$j].name
    if (!($latestMetadata.Package -contains $pkg)) {
      $latestPackageList += $latestPackages[$j]
    }
  }
  $previewPackages = $allPreviewCSVRows.npm_package_sources
  for ($j = 0; $j -lt $previewPackages.Length; $j++) {
    $pkg = "$($previewPackages[$j].name)" -replace "(.*)@next", "$1"
    if (!($previewPackages.Package -contains $pkg)) {
      $previewPackageList += $previewPackages[$j]
    }
  }
  $allLatestCSVRows.npm_package_sources = $latestPackageList
  $allPreviewCSVRows.npm_package_sources = $previewPackageList
  $allLatestCSVRows | ConvertTo-Json -depth 100 | Out-File $pkgLatestJsonLoc         
  $allPreviewCSVRows | ConvertTo-Json -depth 100 | Out-File $pkgPreviewJsonLoc                                               
}

# function is used to auto generate API View
function Find-javascript-Artifacts-For-Apireview($artifactDir, $packageName = "") {
  # Find api.json file in service temp directory
  [regex]$pattern = "azure-"
  $pkgName = $pattern.replace($packageName, "", 1)
  $packageDir = Join-Path $artifactDir $pkgName "temp"
  if (Test-Path $packageDir) {
    Write-Host "Searching for *.api.json in path $($packageDir)"
    $files = Get-ChildItem "${packageDir}" | Where-Object -FilterScript { $_.Name.EndsWith(".api.json") }
    if (!$files) {
      Write-Host "$($packageDir) does not have api review json for package"
      Write-Host "API Extractor must be enabled for $($packageName). Please ensure api-extractor.json is present in package directory and api extract script included in build script"
      return $null
    }
    elseif ($files.Count -ne 1) {
      Write-Host "$($packageDir) should contain only one api review for $($packageName)"
      Write-Host "No of Packages $($files.Count)"
      return $null
    }
  }
  else {
    Write-Host "$($pkgName) does not have api review json"
    return $null
  }  

  $packages = @{
    $files[0].Name = $files[0].FullName
  }
  return $packages
}

function SetPackageVersion ($PackageName, $Version, $ReleaseDate) {
  if ($null -eq $ReleaseDate) {
    $ReleaseDate = Get-Date -Format "yyyy-MM-dd"
  }
  Push-Location "$EngDir/tools/versioning"
  Confirm-NodeInstallation
  npm install
  $artifactName = $PackageName.Replace("@", "").Replace("/", "-")
  node ./set-version.js --artifact-name $artifactName --new-version $Version --release-date $ReleaseDate --repo-root $RepoRoot
  Pop-Location
}

# PackageName: Pass full package name e.g. @azure/abort-controller
# You can obtain full pacakge name using the 'Get-PkgProperties' function in 'eng\common\scripts\Package-Properties.Ps1'
function GetExistingPackageVersions ($PackageName, $GroupId = $null) {
  try {
    $existingVersion = Invoke-RestMethod -Method GET -Uri "http://registry.npmjs.com/${PackageName}"
    return ($existingVersion.versions | Get-Member -MemberType NoteProperty).Name
  }
  catch {
    LogError "Failed to retrieve package versions. `n$_"
    return $null
  }
}
