/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as msRest from "@azure/ms-rest-js";

export const acceptLanguage: msRest.OperationParameter = {
  parameterPath: "acceptLanguage",
  mapper: {
    serializedName: "accept-language",
    defaultValue: "en-US",
    type: {
      name: "String"
    }
  }
};
export const accountName: msRest.OperationURLParameter = {
  parameterPath: "accountName",
  mapper: {
    required: true,
    serializedName: "accountName",
    constraints: {
      MaxLength: 24,
      MinLength: 3
    },
    type: {
      name: "String"
    }
  }
};
export const apiVersion: msRest.OperationQueryParameter = {
  parameterPath: "apiVersion",
  mapper: {
    required: true,
    serializedName: "api-version",
    constraints: {
      MinLength: 1
    },
    type: {
      name: "String"
    }
  }
};
export const blobInventoryPolicyName: msRest.OperationURLParameter = {
  parameterPath: "blobInventoryPolicyName",
  mapper: {
    required: true,
    isConstant: true,
    serializedName: "blobInventoryPolicyName",
    defaultValue: "default",
    type: {
      name: "String"
    }
  }
};
export const blobServicesName: msRest.OperationURLParameter = {
  parameterPath: "blobServicesName",
  mapper: {
    required: true,
    isConstant: true,
    serializedName: "BlobServicesName",
    defaultValue: "default",
    type: {
      name: "String"
    }
  }
};
export const containerName: msRest.OperationURLParameter = {
  parameterPath: "containerName",
  mapper: {
    required: true,
    serializedName: "containerName",
    constraints: {
      MaxLength: 63,
      MinLength: 3
    },
    type: {
      name: "String"
    }
  }
};
export const deletedAccountName: msRest.OperationURLParameter = {
  parameterPath: "deletedAccountName",
  mapper: {
    required: true,
    serializedName: "deletedAccountName",
    constraints: {
      MaxLength: 24,
      MinLength: 3
    },
    type: {
      name: "String"
    }
  }
};
export const encryptionScopeName: msRest.OperationURLParameter = {
  parameterPath: "encryptionScopeName",
  mapper: {
    required: true,
    serializedName: "encryptionScopeName",
    constraints: {
      MaxLength: 63,
      MinLength: 3
    },
    type: {
      name: "String"
    }
  }
};
export const expand0: msRest.OperationQueryParameter = {
  parameterPath: ["options", "expand"],
  mapper: {
    serializedName: "$expand",
    type: {
      name: "Enum",
      allowedValues: ["geoReplicationStats", "blobRestoreStatus"]
    }
  }
};
export const expand1: msRest.OperationQueryParameter = {
  parameterPath: ["options", "expand"],
  mapper: {
    serializedName: "$expand",
    type: {
      name: "Enum",
      allowedValues: ["kerb"]
    }
  }
};
export const expand2: msRest.OperationQueryParameter = {
  parameterPath: ["options", "expand"],
  mapper: {
    serializedName: "$expand",
    type: {
      name: "String"
    }
  }
};
export const expand3: msRest.OperationQueryParameter = {
  parameterPath: ["options", "expand"],
  mapper: {
    serializedName: "$expand",
    type: {
      name: "Enum",
      allowedValues: ["stats"]
    }
  }
};
export const fileServicesName: msRest.OperationURLParameter = {
  parameterPath: "fileServicesName",
  mapper: {
    required: true,
    isConstant: true,
    serializedName: "FileServicesName",
    defaultValue: "default",
    type: {
      name: "String"
    }
  }
};
export const filter: msRest.OperationQueryParameter = {
  parameterPath: ["options", "filter"],
  mapper: {
    serializedName: "$filter",
    type: {
      name: "String"
    }
  }
};
export const ifMatch0: msRest.OperationParameter = {
  parameterPath: ["options", "ifMatch"],
  mapper: {
    serializedName: "If-Match",
    type: {
      name: "String"
    }
  }
};
export const ifMatch1: msRest.OperationParameter = {
  parameterPath: "ifMatch",
  mapper: {
    required: true,
    serializedName: "If-Match",
    type: {
      name: "String"
    }
  }
};
export const immutabilityPolicyName: msRest.OperationURLParameter = {
  parameterPath: "immutabilityPolicyName",
  mapper: {
    required: true,
    isConstant: true,
    serializedName: "immutabilityPolicyName",
    defaultValue: "default",
    type: {
      name: "String"
    }
  }
};
export const include: msRest.OperationQueryParameter = {
  parameterPath: ["options", "include"],
  mapper: {
    serializedName: "$include",
    type: {
      name: "String"
    }
  }
};
export const location: msRest.OperationURLParameter = {
  parameterPath: "location",
  mapper: {
    required: true,
    serializedName: "location",
    type: {
      name: "String"
    }
  }
};
export const managementPolicyName: msRest.OperationURLParameter = {
  parameterPath: "managementPolicyName",
  mapper: {
    required: true,
    isConstant: true,
    serializedName: "managementPolicyName",
    defaultValue: "default",
    type: {
      name: "String"
    }
  }
};
export const maxpagesize: msRest.OperationQueryParameter = {
  parameterPath: ["options", "maxpagesize"],
  mapper: {
    serializedName: "$maxpagesize",
    type: {
      name: "String"
    }
  }
};
export const nextPageLink: msRest.OperationURLParameter = {
  parameterPath: "nextPageLink",
  mapper: {
    required: true,
    serializedName: "nextLink",
    type: {
      name: "String"
    }
  },
  skipEncoding: true
};
export const objectReplicationPolicyId: msRest.OperationURLParameter = {
  parameterPath: "objectReplicationPolicyId",
  mapper: {
    required: true,
    serializedName: "objectReplicationPolicyId",
    constraints: {
      MinLength: 1
    },
    type: {
      name: "String"
    }
  }
};
export const privateEndpointConnectionName: msRest.OperationURLParameter = {
  parameterPath: "privateEndpointConnectionName",
  mapper: {
    required: true,
    serializedName: "privateEndpointConnectionName",
    type: {
      name: "String"
    }
  }
};
export const queueName: msRest.OperationURLParameter = {
  parameterPath: "queueName",
  mapper: {
    required: true,
    serializedName: "queueName",
    constraints: {
      MaxLength: 63,
      MinLength: 3,
      Pattern: /^[a-z0-9]([a-z0-9]|(-(?!-))){1,61}[a-z0-9]$/
    },
    type: {
      name: "String"
    }
  }
};
export const queueServiceName: msRest.OperationURLParameter = {
  parameterPath: "queueServiceName",
  mapper: {
    required: true,
    isConstant: true,
    serializedName: "queueServiceName",
    defaultValue: "default",
    type: {
      name: "String"
    }
  }
};
export const resourceGroupName: msRest.OperationURLParameter = {
  parameterPath: "resourceGroupName",
  mapper: {
    required: true,
    serializedName: "resourceGroupName",
    constraints: {
      MaxLength: 90,
      MinLength: 1,
      Pattern: /^[-\w\._\(\)]+$/
    },
    type: {
      name: "String"
    }
  }
};
export const shareName: msRest.OperationURLParameter = {
  parameterPath: "shareName",
  mapper: {
    required: true,
    serializedName: "shareName",
    constraints: {
      MaxLength: 63,
      MinLength: 3
    },
    type: {
      name: "String"
    }
  }
};
export const subscriptionId: msRest.OperationURLParameter = {
  parameterPath: "subscriptionId",
  mapper: {
    required: true,
    serializedName: "subscriptionId",
    constraints: {
      MinLength: 1
    },
    type: {
      name: "String"
    }
  }
};
export const tableName: msRest.OperationURLParameter = {
  parameterPath: "tableName",
  mapper: {
    required: true,
    serializedName: "tableName",
    constraints: {
      MaxLength: 63,
      MinLength: 3,
      Pattern: /^[A-Za-z][A-Za-z0-9]{2,62}$/
    },
    type: {
      name: "String"
    }
  }
};
export const tableServiceName: msRest.OperationURLParameter = {
  parameterPath: "tableServiceName",
  mapper: {
    required: true,
    isConstant: true,
    serializedName: "tableServiceName",
    defaultValue: "default",
    type: {
      name: "String"
    }
  }
};
export const xMsSnapshot: msRest.OperationParameter = {
  parameterPath: ["options", "xMsSnapshot"],
  mapper: {
    serializedName: "x-ms-snapshot",
    type: {
      name: "String"
    }
  }
};
