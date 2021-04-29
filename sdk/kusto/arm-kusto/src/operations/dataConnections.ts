/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as msRest from "@azure/ms-rest-js";
import * as msRestAzure from "@azure/ms-rest-azure-js";
import * as Models from "../models";
import * as Mappers from "../models/dataConnectionsMappers";
import * as Parameters from "../models/parameters";
import { KustoManagementClientContext } from "../kustoManagementClientContext";

/** Class representing a DataConnections. */
export class DataConnections {
  private readonly client: KustoManagementClientContext;

  /**
   * Create a DataConnections.
   * @param {KustoManagementClientContext} client Reference to the service client.
   */
  constructor(client: KustoManagementClientContext) {
    this.client = client;
  }

  /**
   * Returns the list of data connections of the given Kusto database.
   * @param resourceGroupName The name of the resource group containing the Kusto cluster.
   * @param clusterName The name of the Kusto cluster.
   * @param databaseName The name of the database in the Kusto cluster.
   * @param [options] The optional parameters
   * @returns Promise<Models.DataConnectionsListByDatabaseResponse>
   */
  listByDatabase(
    resourceGroupName: string,
    clusterName: string,
    databaseName: string,
    options?: msRest.RequestOptionsBase
  ): Promise<Models.DataConnectionsListByDatabaseResponse>;
  /**
   * @param resourceGroupName The name of the resource group containing the Kusto cluster.
   * @param clusterName The name of the Kusto cluster.
   * @param databaseName The name of the database in the Kusto cluster.
   * @param callback The callback
   */
  listByDatabase(
    resourceGroupName: string,
    clusterName: string,
    databaseName: string,
    callback: msRest.ServiceCallback<Models.DataConnectionListResult>
  ): void;
  /**
   * @param resourceGroupName The name of the resource group containing the Kusto cluster.
   * @param clusterName The name of the Kusto cluster.
   * @param databaseName The name of the database in the Kusto cluster.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByDatabase(
    resourceGroupName: string,
    clusterName: string,
    databaseName: string,
    options: msRest.RequestOptionsBase,
    callback: msRest.ServiceCallback<Models.DataConnectionListResult>
  ): void;
  listByDatabase(
    resourceGroupName: string,
    clusterName: string,
    databaseName: string,
    options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.DataConnectionListResult>,
    callback?: msRest.ServiceCallback<Models.DataConnectionListResult>
  ): Promise<Models.DataConnectionsListByDatabaseResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        clusterName,
        databaseName,
        options
      },
      listByDatabaseOperationSpec,
      callback
    ) as Promise<Models.DataConnectionsListByDatabaseResponse>;
  }

  /**
   * Checks that the data connection parameters are valid.
   * @param resourceGroupName The name of the resource group containing the Kusto cluster.
   * @param clusterName The name of the Kusto cluster.
   * @param databaseName The name of the database in the Kusto cluster.
   * @param parameters The data connection parameters supplied to the CreateOrUpdate operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.DataConnectionsDataConnectionValidationMethodResponse>
   */
  dataConnectionValidationMethod(
    resourceGroupName: string,
    clusterName: string,
    databaseName: string,
    parameters: Models.DataConnectionValidation,
    options?: msRest.RequestOptionsBase
  ): Promise<Models.DataConnectionsDataConnectionValidationMethodResponse> {
    return this.beginDataConnectionValidationMethod(
      resourceGroupName,
      clusterName,
      databaseName,
      parameters,
      options
    ).then((lroPoller) => lroPoller.pollUntilFinished()) as Promise<
      Models.DataConnectionsDataConnectionValidationMethodResponse
    >;
  }

  /**
   * Checks that the data connection name is valid and is not already in use.
   * @param resourceGroupName The name of the resource group containing the Kusto cluster.
   * @param clusterName The name of the Kusto cluster.
   * @param databaseName The name of the database in the Kusto cluster.
   * @param dataConnectionName The name of the data connection.
   * @param [options] The optional parameters
   * @returns Promise<Models.DataConnectionsCheckNameAvailabilityResponse>
   */
  checkNameAvailability(
    resourceGroupName: string,
    clusterName: string,
    databaseName: string,
    dataConnectionName: Models.DataConnectionCheckNameRequest,
    options?: msRest.RequestOptionsBase
  ): Promise<Models.DataConnectionsCheckNameAvailabilityResponse>;
  /**
   * @param resourceGroupName The name of the resource group containing the Kusto cluster.
   * @param clusterName The name of the Kusto cluster.
   * @param databaseName The name of the database in the Kusto cluster.
   * @param dataConnectionName The name of the data connection.
   * @param callback The callback
   */
  checkNameAvailability(
    resourceGroupName: string,
    clusterName: string,
    databaseName: string,
    dataConnectionName: Models.DataConnectionCheckNameRequest,
    callback: msRest.ServiceCallback<Models.CheckNameResult>
  ): void;
  /**
   * @param resourceGroupName The name of the resource group containing the Kusto cluster.
   * @param clusterName The name of the Kusto cluster.
   * @param databaseName The name of the database in the Kusto cluster.
   * @param dataConnectionName The name of the data connection.
   * @param options The optional parameters
   * @param callback The callback
   */
  checkNameAvailability(
    resourceGroupName: string,
    clusterName: string,
    databaseName: string,
    dataConnectionName: Models.DataConnectionCheckNameRequest,
    options: msRest.RequestOptionsBase,
    callback: msRest.ServiceCallback<Models.CheckNameResult>
  ): void;
  checkNameAvailability(
    resourceGroupName: string,
    clusterName: string,
    databaseName: string,
    dataConnectionName: Models.DataConnectionCheckNameRequest,
    options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.CheckNameResult>,
    callback?: msRest.ServiceCallback<Models.CheckNameResult>
  ): Promise<Models.DataConnectionsCheckNameAvailabilityResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        clusterName,
        databaseName,
        dataConnectionName,
        options
      },
      checkNameAvailabilityOperationSpec,
      callback
    ) as Promise<Models.DataConnectionsCheckNameAvailabilityResponse>;
  }

  /**
   * Returns a data connection.
   * @param resourceGroupName The name of the resource group containing the Kusto cluster.
   * @param clusterName The name of the Kusto cluster.
   * @param databaseName The name of the database in the Kusto cluster.
   * @param dataConnectionName The name of the data connection.
   * @param [options] The optional parameters
   * @returns Promise<Models.DataConnectionsGetResponse>
   */
  get(
    resourceGroupName: string,
    clusterName: string,
    databaseName: string,
    dataConnectionName: string,
    options?: msRest.RequestOptionsBase
  ): Promise<Models.DataConnectionsGetResponse>;
  /**
   * @param resourceGroupName The name of the resource group containing the Kusto cluster.
   * @param clusterName The name of the Kusto cluster.
   * @param databaseName The name of the database in the Kusto cluster.
   * @param dataConnectionName The name of the data connection.
   * @param callback The callback
   */
  get(
    resourceGroupName: string,
    clusterName: string,
    databaseName: string,
    dataConnectionName: string,
    callback: msRest.ServiceCallback<Models.DataConnectionUnion>
  ): void;
  /**
   * @param resourceGroupName The name of the resource group containing the Kusto cluster.
   * @param clusterName The name of the Kusto cluster.
   * @param databaseName The name of the database in the Kusto cluster.
   * @param dataConnectionName The name of the data connection.
   * @param options The optional parameters
   * @param callback The callback
   */
  get(
    resourceGroupName: string,
    clusterName: string,
    databaseName: string,
    dataConnectionName: string,
    options: msRest.RequestOptionsBase,
    callback: msRest.ServiceCallback<Models.DataConnectionUnion>
  ): void;
  get(
    resourceGroupName: string,
    clusterName: string,
    databaseName: string,
    dataConnectionName: string,
    options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.DataConnectionUnion>,
    callback?: msRest.ServiceCallback<Models.DataConnectionUnion>
  ): Promise<Models.DataConnectionsGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        clusterName,
        databaseName,
        dataConnectionName,
        options
      },
      getOperationSpec,
      callback
    ) as Promise<Models.DataConnectionsGetResponse>;
  }

  /**
   * Creates or updates a data connection.
   * @param resourceGroupName The name of the resource group containing the Kusto cluster.
   * @param clusterName The name of the Kusto cluster.
   * @param databaseName The name of the database in the Kusto cluster.
   * @param dataConnectionName The name of the data connection.
   * @param parameters The data connection parameters supplied to the CreateOrUpdate operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.DataConnectionsCreateOrUpdateResponse>
   */
  createOrUpdate(
    resourceGroupName: string,
    clusterName: string,
    databaseName: string,
    dataConnectionName: string,
    parameters: Models.DataConnectionUnion,
    options?: msRest.RequestOptionsBase
  ): Promise<Models.DataConnectionsCreateOrUpdateResponse> {
    return this.beginCreateOrUpdate(
      resourceGroupName,
      clusterName,
      databaseName,
      dataConnectionName,
      parameters,
      options
    ).then((lroPoller) => lroPoller.pollUntilFinished()) as Promise<
      Models.DataConnectionsCreateOrUpdateResponse
    >;
  }

  /**
   * Updates a data connection.
   * @param resourceGroupName The name of the resource group containing the Kusto cluster.
   * @param clusterName The name of the Kusto cluster.
   * @param databaseName The name of the database in the Kusto cluster.
   * @param dataConnectionName The name of the data connection.
   * @param parameters The data connection parameters supplied to the Update operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.DataConnectionsUpdateResponse>
   */
  update(
    resourceGroupName: string,
    clusterName: string,
    databaseName: string,
    dataConnectionName: string,
    parameters: Models.DataConnectionUnion,
    options?: msRest.RequestOptionsBase
  ): Promise<Models.DataConnectionsUpdateResponse> {
    return this.beginUpdate(
      resourceGroupName,
      clusterName,
      databaseName,
      dataConnectionName,
      parameters,
      options
    ).then((lroPoller) => lroPoller.pollUntilFinished()) as Promise<
      Models.DataConnectionsUpdateResponse
    >;
  }

  /**
   * Deletes the data connection with the given name.
   * @param resourceGroupName The name of the resource group containing the Kusto cluster.
   * @param clusterName The name of the Kusto cluster.
   * @param databaseName The name of the database in the Kusto cluster.
   * @param dataConnectionName The name of the data connection.
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  deleteMethod(
    resourceGroupName: string,
    clusterName: string,
    databaseName: string,
    dataConnectionName: string,
    options?: msRest.RequestOptionsBase
  ): Promise<msRest.RestResponse> {
    return this.beginDeleteMethod(
      resourceGroupName,
      clusterName,
      databaseName,
      dataConnectionName,
      options
    ).then((lroPoller) => lroPoller.pollUntilFinished());
  }

  /**
   * Checks that the data connection parameters are valid.
   * @param resourceGroupName The name of the resource group containing the Kusto cluster.
   * @param clusterName The name of the Kusto cluster.
   * @param databaseName The name of the database in the Kusto cluster.
   * @param parameters The data connection parameters supplied to the CreateOrUpdate operation.
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginDataConnectionValidationMethod(
    resourceGroupName: string,
    clusterName: string,
    databaseName: string,
    parameters: Models.DataConnectionValidation,
    options?: msRest.RequestOptionsBase
  ): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        clusterName,
        databaseName,
        parameters,
        options
      },
      beginDataConnectionValidationMethodOperationSpec,
      options
    );
  }

  /**
   * Creates or updates a data connection.
   * @param resourceGroupName The name of the resource group containing the Kusto cluster.
   * @param clusterName The name of the Kusto cluster.
   * @param databaseName The name of the database in the Kusto cluster.
   * @param dataConnectionName The name of the data connection.
   * @param parameters The data connection parameters supplied to the CreateOrUpdate operation.
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginCreateOrUpdate(
    resourceGroupName: string,
    clusterName: string,
    databaseName: string,
    dataConnectionName: string,
    parameters: Models.DataConnectionUnion,
    options?: msRest.RequestOptionsBase
  ): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        clusterName,
        databaseName,
        dataConnectionName,
        parameters,
        options
      },
      beginCreateOrUpdateOperationSpec,
      options
    );
  }

  /**
   * Updates a data connection.
   * @param resourceGroupName The name of the resource group containing the Kusto cluster.
   * @param clusterName The name of the Kusto cluster.
   * @param databaseName The name of the database in the Kusto cluster.
   * @param dataConnectionName The name of the data connection.
   * @param parameters The data connection parameters supplied to the Update operation.
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginUpdate(
    resourceGroupName: string,
    clusterName: string,
    databaseName: string,
    dataConnectionName: string,
    parameters: Models.DataConnectionUnion,
    options?: msRest.RequestOptionsBase
  ): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        clusterName,
        databaseName,
        dataConnectionName,
        parameters,
        options
      },
      beginUpdateOperationSpec,
      options
    );
  }

  /**
   * Deletes the data connection with the given name.
   * @param resourceGroupName The name of the resource group containing the Kusto cluster.
   * @param clusterName The name of the Kusto cluster.
   * @param databaseName The name of the database in the Kusto cluster.
   * @param dataConnectionName The name of the data connection.
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginDeleteMethod(
    resourceGroupName: string,
    clusterName: string,
    databaseName: string,
    dataConnectionName: string,
    options?: msRest.RequestOptionsBase
  ): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        clusterName,
        databaseName,
        dataConnectionName,
        options
      },
      beginDeleteMethodOperationSpec,
      options
    );
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const listByDatabaseOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path:
    "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Kusto/clusters/{clusterName}/databases/{databaseName}/dataConnections",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.clusterName,
    Parameters.databaseName,
    Parameters.subscriptionId
  ],
  queryParameters: [Parameters.apiVersion],
  headerParameters: [Parameters.acceptLanguage],
  responses: {
    200: {
      bodyMapper: Mappers.DataConnectionListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const checkNameAvailabilityOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path:
    "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Kusto/clusters/{clusterName}/databases/{databaseName}/checkNameAvailability",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.clusterName,
    Parameters.databaseName,
    Parameters.subscriptionId
  ],
  queryParameters: [Parameters.apiVersion],
  headerParameters: [Parameters.acceptLanguage],
  requestBody: {
    parameterPath: "dataConnectionName",
    mapper: {
      ...Mappers.DataConnectionCheckNameRequest,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.CheckNameResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path:
    "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Kusto/clusters/{clusterName}/databases/{databaseName}/dataConnections/{dataConnectionName}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.clusterName,
    Parameters.databaseName,
    Parameters.dataConnectionName,
    Parameters.subscriptionId
  ],
  queryParameters: [Parameters.apiVersion],
  headerParameters: [Parameters.acceptLanguage],
  responses: {
    200: {
      bodyMapper: Mappers.DataConnection
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const beginDataConnectionValidationMethodOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path:
    "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Kusto/clusters/{clusterName}/databases/{databaseName}/dataConnectionValidation",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.clusterName,
    Parameters.databaseName,
    Parameters.subscriptionId
  ],
  queryParameters: [Parameters.apiVersion],
  headerParameters: [Parameters.acceptLanguage],
  requestBody: {
    parameterPath: "parameters",
    mapper: {
      ...Mappers.DataConnectionValidation,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.DataConnectionValidationListResult
    },
    202: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const beginCreateOrUpdateOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path:
    "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Kusto/clusters/{clusterName}/databases/{databaseName}/dataConnections/{dataConnectionName}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.clusterName,
    Parameters.databaseName,
    Parameters.dataConnectionName,
    Parameters.subscriptionId
  ],
  queryParameters: [Parameters.apiVersion],
  headerParameters: [Parameters.acceptLanguage],
  requestBody: {
    parameterPath: "parameters",
    mapper: {
      ...Mappers.DataConnection,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.DataConnection
    },
    201: {
      bodyMapper: Mappers.DataConnection
    },
    202: {
      bodyMapper: Mappers.DataConnection
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const beginUpdateOperationSpec: msRest.OperationSpec = {
  httpMethod: "PATCH",
  path:
    "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Kusto/clusters/{clusterName}/databases/{databaseName}/dataConnections/{dataConnectionName}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.clusterName,
    Parameters.databaseName,
    Parameters.dataConnectionName,
    Parameters.subscriptionId
  ],
  queryParameters: [Parameters.apiVersion],
  headerParameters: [Parameters.acceptLanguage],
  requestBody: {
    parameterPath: "parameters",
    mapper: {
      ...Mappers.DataConnection,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.DataConnection
    },
    201: {
      bodyMapper: Mappers.DataConnection
    },
    202: {
      bodyMapper: Mappers.DataConnection
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const beginDeleteMethodOperationSpec: msRest.OperationSpec = {
  httpMethod: "DELETE",
  path:
    "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Kusto/clusters/{clusterName}/databases/{databaseName}/dataConnections/{dataConnectionName}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.clusterName,
    Parameters.databaseName,
    Parameters.dataConnectionName,
    Parameters.subscriptionId
  ],
  queryParameters: [Parameters.apiVersion],
  headerParameters: [Parameters.acceptLanguage],
  responses: {
    200: {},
    202: {},
    204: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};
