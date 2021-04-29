// Copyright (c) Microsoft Corporation.
// Licensed under the MIT Licence.

/**
 *   @summary (ONLY AVAILABLE IN NODE.JS RUNTIME) Use AAD token credentials when sending a SMS message.
 */

/*
  ONLY AVAILABLE IN NODE.JS RUNTIME
  If you are using the browser, you can use the InteractiveBrowserCredential provided via @azure/identity or any other feasible implementation of TokenCredential.

  Setup :
    Please ensure that your Communication Services resource is in US East, US East 2, or West Europe
    region. AAD Role Based Access Control is not supported in other regions yet.

    Register a new application in AAD
      - See https://docs.microsoft.com/en-us/azure/active-directory/develop/quickstart-register-app
        to register a new application in the Azure Active Directory.
      - Note down the CLIENT_ID and TENANT_ID from the above step.
      - In the "Certificates & Secrets" tab, create a secret and note that down.
      - In the Azure portal, go to your Communication Services resource and click on the Access control (IAM)
        tab. Here, assign the "Owner" role to the registered application.
      
    - Environment setup for the sample
      - From the overview page of your AAD Application, note down the `CLIENT ID` and `TENANT ID`. In the "Certificates & Secrets" tab, create a secret and note that down.
      - Make sure you have AZURE_TENANT_ID, AZURE_CLIENT_ID, AZURE_CLIENT_SECRET as environment variables to successfully execute the sample (Can leverage process.env).
*/

import { SmsClient } from "@azure/communication-sms";
import { DefaultAzureCredential } from "@azure/identity";

// Load the .env file if it exists
import * as dotenv from "dotenv";
dotenv.config();

export async function main() {
  const endpoint =
    process.env["COMMUNICATION_ENDPOINT"] || "https://<resource-name>.communication.azure.com";
  // Azure AD Credential information is required to run this sample:
  if (
    !process.env.AZURE_TENANT_ID ||
    !process.env.AZURE_CLIENT_ID ||
    !process.env.AZURE_CLIENT_SECRET
  ) {
    console.error(
      "Azure AD authentication information not provided, but it is required to run this sample. Exiting."
    );
    return;
  }

  const client = new SmsClient(endpoint, new DefaultAzureCredential());
  const sendResults = await client.send({
    // Phone numbers must be in E.164 format
    from: "<from-phone-number>",
    to: ["<to-phone-number-1>"],
    message: "Hello World via SMS!"
  });

  for (const sendResult of sendResults) {
    if (sendResult.successful) {
      console.log("Success: ", sendResult);
    } else {
      console.error("Something went wrong when trying to send this message: ", sendResult);
    }
  }
}

main().catch((error) => {
  console.error("Encountered an error while sending SMS: ", error);
  process.exit(1);
});
