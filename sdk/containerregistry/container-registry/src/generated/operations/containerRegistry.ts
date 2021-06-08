/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { GeneratedClientContext } from "../generatedClientContext";
import {
  ContainerRegistryGetManifestOptionalParams,
  ContainerRegistryGetManifestResponse,
  Manifest,
  ContainerRegistryCreateManifestResponse,
  ContainerRegistryGetRepositoriesOptionalParams,
  ContainerRegistryGetRepositoriesResponse,
  ContainerRegistryGetPropertiesResponse,
  ContainerRegistryUpdatePropertiesOptionalParams,
  ContainerRegistryUpdatePropertiesResponse,
  ContainerRegistryGetTagsOptionalParams,
  ContainerRegistryGetTagsResponse,
  ContainerRegistryGetTagPropertiesResponse,
  ContainerRegistryUpdateTagAttributesOptionalParams,
  ContainerRegistryUpdateTagAttributesResponse,
  ContainerRegistryGetManifestsOptionalParams,
  ContainerRegistryGetManifestsResponse,
  ContainerRegistryGetManifestPropertiesResponse,
  ContainerRegistryUpdateManifestPropertiesOptionalParams,
  ContainerRegistryUpdateManifestPropertiesResponse,
  ContainerRegistryGetRepositoriesNextOptionalParams,
  ContainerRegistryGetRepositoriesNextResponse,
  ContainerRegistryGetTagsNextOptionalParams,
  ContainerRegistryGetTagsNextResponse,
  ContainerRegistryGetManifestsNextOptionalParams,
  ContainerRegistryGetManifestsNextResponse
} from "../models";

/** Class representing a ContainerRegistry. */
export class ContainerRegistry {
  private readonly client: GeneratedClientContext;

  /**
   * Initialize a new instance of the class ContainerRegistry class.
   * @param client Reference to the service client
   */
  constructor(client: GeneratedClientContext) {
    this.client = client;
  }

  /**
   * Tells whether this Docker Registry instance supports Docker Registry HTTP API v2
   * @param options The options parameters.
   */
  checkDockerV2Support(options?: coreClient.OperationOptions): Promise<void> {
    return this.client.sendOperationRequest(
      { options },
      checkDockerV2SupportOperationSpec
    );
  }

  /**
   * Get the manifest identified by `name` and `reference` where `reference` can be a tag or digest.
   * @param name Name of the image (including the namespace)
   * @param reference A tag or a digest, pointing to a specific image
   * @param options The options parameters.
   */
  getManifest(
    name: string,
    reference: string,
    options?: ContainerRegistryGetManifestOptionalParams
  ): Promise<ContainerRegistryGetManifestResponse> {
    return this.client.sendOperationRequest(
      { name, reference, options },
      getManifestOperationSpec
    );
  }

  /**
   * Put the manifest identified by `name` and `reference` where `reference` can be a tag or digest.
   * @param name Name of the image (including the namespace)
   * @param reference A tag or a digest, pointing to a specific image
   * @param payload Manifest body, can take v1 or v2 values depending on accept header
   * @param options The options parameters.
   */
  createManifest(
    name: string,
    reference: string,
    payload: Manifest,
    options?: coreClient.OperationOptions
  ): Promise<ContainerRegistryCreateManifestResponse> {
    return this.client.sendOperationRequest(
      { name, reference, payload, options },
      createManifestOperationSpec
    );
  }

  /**
   * Delete the manifest identified by `name` and `reference`. Note that a manifest can _only_ be deleted
   * by `digest`.
   * @param name Name of the image (including the namespace)
   * @param reference Digest of a BLOB
   * @param options The options parameters.
   */
  deleteManifest(
    name: string,
    reference: string,
    options?: coreClient.OperationOptions
  ): Promise<void> {
    return this.client.sendOperationRequest(
      { name, reference, options },
      deleteManifestOperationSpec
    );
  }

  /**
   * List repositories
   * @param options The options parameters.
   */
  getRepositories(
    options?: ContainerRegistryGetRepositoriesOptionalParams
  ): Promise<ContainerRegistryGetRepositoriesResponse> {
    return this.client.sendOperationRequest(
      { options },
      getRepositoriesOperationSpec
    );
  }

  /**
   * Get repository attributes
   * @param name Name of the image (including the namespace)
   * @param options The options parameters.
   */
  getProperties(
    name: string,
    options?: coreClient.OperationOptions
  ): Promise<ContainerRegistryGetPropertiesResponse> {
    return this.client.sendOperationRequest(
      { name, options },
      getPropertiesOperationSpec
    );
  }

  /**
   * Delete the repository identified by `name`
   * @param name Name of the image (including the namespace)
   * @param options The options parameters.
   */
  deleteRepository(
    name: string,
    options?: coreClient.OperationOptions
  ): Promise<void> {
    return this.client.sendOperationRequest(
      { name, options },
      deleteRepositoryOperationSpec
    );
  }

  /**
   * Update the attribute identified by `name` where `reference` is the name of the repository.
   * @param name Name of the image (including the namespace)
   * @param options The options parameters.
   */
  updateProperties(
    name: string,
    options?: ContainerRegistryUpdatePropertiesOptionalParams
  ): Promise<ContainerRegistryUpdatePropertiesResponse> {
    return this.client.sendOperationRequest(
      { name, options },
      updatePropertiesOperationSpec
    );
  }

  /**
   * List tags of a repository
   * @param name Name of the image (including the namespace)
   * @param options The options parameters.
   */
  getTags(
    name: string,
    options?: ContainerRegistryGetTagsOptionalParams
  ): Promise<ContainerRegistryGetTagsResponse> {
    return this.client.sendOperationRequest(
      { name, options },
      getTagsOperationSpec
    );
  }

  /**
   * Get tag attributes by tag
   * @param name Name of the image (including the namespace)
   * @param reference Tag name
   * @param options The options parameters.
   */
  getTagProperties(
    name: string,
    reference: string,
    options?: coreClient.OperationOptions
  ): Promise<ContainerRegistryGetTagPropertiesResponse> {
    return this.client.sendOperationRequest(
      { name, reference, options },
      getTagPropertiesOperationSpec
    );
  }

  /**
   * Update tag attributes
   * @param name Name of the image (including the namespace)
   * @param reference Tag name
   * @param options The options parameters.
   */
  updateTagAttributes(
    name: string,
    reference: string,
    options?: ContainerRegistryUpdateTagAttributesOptionalParams
  ): Promise<ContainerRegistryUpdateTagAttributesResponse> {
    return this.client.sendOperationRequest(
      { name, reference, options },
      updateTagAttributesOperationSpec
    );
  }

  /**
   * Delete tag
   * @param name Name of the image (including the namespace)
   * @param reference Tag name
   * @param options The options parameters.
   */
  deleteTag(
    name: string,
    reference: string,
    options?: coreClient.OperationOptions
  ): Promise<void> {
    return this.client.sendOperationRequest(
      { name, reference, options },
      deleteTagOperationSpec
    );
  }

  /**
   * List manifests of a repository
   * @param name Name of the image (including the namespace)
   * @param options The options parameters.
   */
  getManifests(
    name: string,
    options?: ContainerRegistryGetManifestsOptionalParams
  ): Promise<ContainerRegistryGetManifestsResponse> {
    return this.client.sendOperationRequest(
      { name, options },
      getManifestsOperationSpec
    );
  }

  /**
   * Get manifest attributes
   * @param name Name of the image (including the namespace)
   * @param digest Digest of a BLOB
   * @param options The options parameters.
   */
  getManifestProperties(
    name: string,
    digest: string,
    options?: coreClient.OperationOptions
  ): Promise<ContainerRegistryGetManifestPropertiesResponse> {
    return this.client.sendOperationRequest(
      { name, digest, options },
      getManifestPropertiesOperationSpec
    );
  }

  /**
   * Update properties of a manifest
   * @param name Name of the image (including the namespace)
   * @param digest Digest of a BLOB
   * @param options The options parameters.
   */
  updateManifestProperties(
    name: string,
    digest: string,
    options?: ContainerRegistryUpdateManifestPropertiesOptionalParams
  ): Promise<ContainerRegistryUpdateManifestPropertiesResponse> {
    return this.client.sendOperationRequest(
      { name, digest, options },
      updateManifestPropertiesOperationSpec
    );
  }

  /**
   * GetRepositoriesNext
   * @param nextLink The nextLink from the previous successful call to the GetRepositories method.
   * @param options The options parameters.
   */
  getRepositoriesNext(
    nextLink: string,
    options?: ContainerRegistryGetRepositoriesNextOptionalParams
  ): Promise<ContainerRegistryGetRepositoriesNextResponse> {
    return this.client.sendOperationRequest(
      { nextLink, options },
      getRepositoriesNextOperationSpec
    );
  }

  /**
   * GetTagsNext
   * @param name Name of the image (including the namespace)
   * @param nextLink The nextLink from the previous successful call to the GetTags method.
   * @param options The options parameters.
   */
  getTagsNext(
    name: string,
    nextLink: string,
    options?: ContainerRegistryGetTagsNextOptionalParams
  ): Promise<ContainerRegistryGetTagsNextResponse> {
    return this.client.sendOperationRequest(
      { name, nextLink, options },
      getTagsNextOperationSpec
    );
  }

  /**
   * GetManifestsNext
   * @param name Name of the image (including the namespace)
   * @param nextLink The nextLink from the previous successful call to the GetManifests method.
   * @param options The options parameters.
   */
  getManifestsNext(
    name: string,
    nextLink: string,
    options?: ContainerRegistryGetManifestsNextOptionalParams
  ): Promise<ContainerRegistryGetManifestsNextResponse> {
    return this.client.sendOperationRequest(
      { name, nextLink, options },
      getManifestsNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const checkDockerV2SupportOperationSpec: coreClient.OperationSpec = {
  path: "/v2/",
  httpMethod: "GET",
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.AcrErrors
    }
  },
  urlParameters: [Parameters.url],
  headerParameters: [Parameters.accept],
  serializer
};
const getManifestOperationSpec: coreClient.OperationSpec = {
  path: "/v2/{name}/manifests/{reference}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.Manifest
    },
    default: {
      bodyMapper: Mappers.AcrErrors
    }
  },
  urlParameters: [Parameters.url, Parameters.name, Parameters.reference],
  headerParameters: [Parameters.accept, Parameters.accept1],
  serializer
};
const createManifestOperationSpec: coreClient.OperationSpec = {
  path: "/v2/{name}/manifests/{reference}",
  httpMethod: "PUT",
  responses: {
    201: {
      bodyMapper: { type: { name: "any" } },
      headersMapper: Mappers.ContainerRegistryCreateManifestHeaders
    },
    default: {
      bodyMapper: Mappers.AcrErrors
    }
  },
  requestBody: Parameters.payload,
  urlParameters: [Parameters.url, Parameters.name, Parameters.reference],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const deleteManifestOperationSpec: coreClient.OperationSpec = {
  path: "/v2/{name}/manifests/{reference}",
  httpMethod: "DELETE",
  responses: {
    202: {},
    404: {},
    default: {
      bodyMapper: Mappers.AcrErrors
    }
  },
  urlParameters: [Parameters.url, Parameters.name, Parameters.reference],
  headerParameters: [Parameters.accept],
  serializer
};
const getRepositoriesOperationSpec: coreClient.OperationSpec = {
  path: "/acr/v1/_catalog",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.Repositories,
      headersMapper: Mappers.ContainerRegistryGetRepositoriesHeaders
    },
    default: {
      bodyMapper: Mappers.AcrErrors
    }
  },
  queryParameters: [Parameters.last, Parameters.n],
  urlParameters: [Parameters.url],
  headerParameters: [Parameters.accept],
  serializer
};
const getPropertiesOperationSpec: coreClient.OperationSpec = {
  path: "/acr/v1/{name}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ContainerRepositoryProperties
    },
    default: {
      bodyMapper: Mappers.AcrErrors
    }
  },
  urlParameters: [Parameters.url, Parameters.name],
  headerParameters: [Parameters.accept],
  serializer
};
const deleteRepositoryOperationSpec: coreClient.OperationSpec = {
  path: "/acr/v1/{name}",
  httpMethod: "DELETE",
  responses: {
    202: {},
    404: {},
    default: {
      bodyMapper: Mappers.AcrErrors
    }
  },
  urlParameters: [Parameters.url, Parameters.name],
  headerParameters: [Parameters.accept],
  serializer
};
const updatePropertiesOperationSpec: coreClient.OperationSpec = {
  path: "/acr/v1/{name}",
  httpMethod: "PATCH",
  responses: {
    200: {
      bodyMapper: Mappers.ContainerRepositoryProperties
    },
    default: {
      bodyMapper: Mappers.AcrErrors
    }
  },
  requestBody: Parameters.value,
  urlParameters: [Parameters.url, Parameters.name],
  headerParameters: [Parameters.accept, Parameters.contentType1],
  mediaType: "json",
  serializer
};
const getTagsOperationSpec: coreClient.OperationSpec = {
  path: "/acr/v1/{name}/_tags",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.TagList,
      headersMapper: Mappers.ContainerRegistryGetTagsHeaders
    },
    default: {
      bodyMapper: Mappers.AcrErrors
    }
  },
  queryParameters: [
    Parameters.last,
    Parameters.n,
    Parameters.orderby,
    Parameters.digest
  ],
  urlParameters: [Parameters.url, Parameters.name],
  headerParameters: [Parameters.accept],
  serializer
};
const getTagPropertiesOperationSpec: coreClient.OperationSpec = {
  path: "/acr/v1/{name}/_tags/{reference}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ArtifactTagProperties
    },
    default: {
      bodyMapper: Mappers.AcrErrors
    }
  },
  urlParameters: [Parameters.url, Parameters.name, Parameters.reference],
  headerParameters: [Parameters.accept],
  serializer
};
const updateTagAttributesOperationSpec: coreClient.OperationSpec = {
  path: "/acr/v1/{name}/_tags/{reference}",
  httpMethod: "PATCH",
  responses: {
    200: {
      bodyMapper: Mappers.ArtifactTagProperties
    },
    default: {
      bodyMapper: Mappers.AcrErrors
    }
  },
  requestBody: Parameters.value1,
  urlParameters: [Parameters.url, Parameters.name, Parameters.reference],
  headerParameters: [Parameters.accept, Parameters.contentType1],
  mediaType: "json",
  serializer
};
const deleteTagOperationSpec: coreClient.OperationSpec = {
  path: "/acr/v1/{name}/_tags/{reference}",
  httpMethod: "DELETE",
  responses: {
    202: {},
    404: {},
    default: {
      bodyMapper: Mappers.AcrErrors
    }
  },
  urlParameters: [Parameters.url, Parameters.name, Parameters.reference],
  headerParameters: [Parameters.accept],
  serializer
};
const getManifestsOperationSpec: coreClient.OperationSpec = {
  path: "/acr/v1/{name}/_manifests",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.AcrManifests,
      headersMapper: Mappers.ContainerRegistryGetManifestsHeaders
    },
    default: {
      bodyMapper: Mappers.AcrErrors
    }
  },
  queryParameters: [Parameters.last, Parameters.n, Parameters.orderby],
  urlParameters: [Parameters.url, Parameters.name],
  headerParameters: [Parameters.accept],
  serializer
};
const getManifestPropertiesOperationSpec: coreClient.OperationSpec = {
  path: "/acr/v1/{name}/_manifests/{digest}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ArtifactManifestProperties
    },
    default: {
      bodyMapper: Mappers.AcrErrors
    }
  },
  urlParameters: [Parameters.url, Parameters.name, Parameters.digest1],
  headerParameters: [Parameters.accept],
  serializer
};
const updateManifestPropertiesOperationSpec: coreClient.OperationSpec = {
  path: "/acr/v1/{name}/_manifests/{digest}",
  httpMethod: "PATCH",
  responses: {
    200: {
      bodyMapper: Mappers.ArtifactManifestProperties
    },
    default: {
      bodyMapper: Mappers.AcrErrors
    }
  },
  requestBody: Parameters.value2,
  urlParameters: [Parameters.url, Parameters.name, Parameters.digest1],
  headerParameters: [Parameters.accept, Parameters.contentType1],
  mediaType: "json",
  serializer
};
const getRepositoriesNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.Repositories,
      headersMapper: Mappers.ContainerRegistryGetRepositoriesNextHeaders
    },
    default: {
      bodyMapper: Mappers.AcrErrors
    }
  },
  queryParameters: [Parameters.last, Parameters.n],
  urlParameters: [Parameters.url, Parameters.nextLink],
  headerParameters: [Parameters.accept],
  serializer
};
const getTagsNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.TagList,
      headersMapper: Mappers.ContainerRegistryGetTagsNextHeaders
    },
    default: {
      bodyMapper: Mappers.AcrErrors
    }
  },
  queryParameters: [
    Parameters.last,
    Parameters.n,
    Parameters.orderby,
    Parameters.digest
  ],
  urlParameters: [Parameters.url, Parameters.name, Parameters.nextLink],
  headerParameters: [Parameters.accept],
  serializer
};
const getManifestsNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.AcrManifests,
      headersMapper: Mappers.ContainerRegistryGetManifestsNextHeaders
    },
    default: {
      bodyMapper: Mappers.AcrErrors
    }
  },
  queryParameters: [Parameters.last, Parameters.n, Parameters.orderby],
  urlParameters: [Parameters.url, Parameters.name, Parameters.nextLink],
  headerParameters: [Parameters.accept],
  serializer
};
