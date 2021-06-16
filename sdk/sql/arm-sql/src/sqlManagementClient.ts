/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as msRest from "@azure/ms-rest-js";
import { TokenCredential } from "@azure/core-auth";
import * as Models from "./models";
import * as Mappers from "./models/mappers";
import * as operations from "./operations";
import { SqlManagementClientContext } from "./sqlManagementClientContext";


class SqlManagementClient extends SqlManagementClientContext {
  // Operation groups
  recoverableDatabases: operations.RecoverableDatabases;
  restorableDroppedDatabases: operations.RestorableDroppedDatabases;
  servers: operations.Servers;
  serverConnectionPolicies: operations.ServerConnectionPolicies;
  databaseThreatDetectionPolicies: operations.DatabaseThreatDetectionPolicies;
  dataMaskingPolicies: operations.DataMaskingPolicies;
  dataMaskingRules: operations.DataMaskingRules;
  firewallRules: operations.FirewallRules;
  geoBackupPolicies: operations.GeoBackupPolicies;
  databases: operations.Databases;
  elasticPools: operations.ElasticPools;
  recommendedElasticPools: operations.RecommendedElasticPools;
  replicationLinks: operations.ReplicationLinks;
  serverAzureADAdministrators: operations.ServerAzureADAdministrators;
  serverCommunicationLinks: operations.ServerCommunicationLinks;
  serviceObjectives: operations.ServiceObjectives;
  elasticPoolActivities: operations.ElasticPoolActivities;
  elasticPoolDatabaseActivities: operations.ElasticPoolDatabaseActivities;
  serviceTierAdvisors: operations.ServiceTierAdvisors;
  transparentDataEncryptions: operations.TransparentDataEncryptions;
  transparentDataEncryptionActivities: operations.TransparentDataEncryptionActivities;
  serverUsages: operations.ServerUsages;
  databaseUsages: operations.DatabaseUsages;
  databaseAutomaticTuning: operations.DatabaseAutomaticTuningOperations;
  encryptionProtectors: operations.EncryptionProtectors;
  failoverGroups: operations.FailoverGroups;
  operations: operations.Operations;
  serverKeys: operations.ServerKeys;
  syncAgents: operations.SyncAgents;
  syncGroups: operations.SyncGroups;
  syncMembers: operations.SyncMembers;
  subscriptionUsages: operations.SubscriptionUsages;
  virtualClusters: operations.VirtualClusters;
  virtualNetworkRules: operations.VirtualNetworkRules;
  extendedDatabaseBlobAuditingPolicies: operations.ExtendedDatabaseBlobAuditingPolicies;
  extendedServerBlobAuditingPolicies: operations.ExtendedServerBlobAuditingPolicies;
  serverBlobAuditingPolicies: operations.ServerBlobAuditingPolicies;
  databaseBlobAuditingPolicies: operations.DatabaseBlobAuditingPolicies;
  databaseVulnerabilityAssessmentRuleBaselines: operations.DatabaseVulnerabilityAssessmentRuleBaselines;
  databaseVulnerabilityAssessments: operations.DatabaseVulnerabilityAssessments;
  jobAgents: operations.JobAgents;
  jobCredentials: operations.JobCredentials;
  jobExecutions: operations.JobExecutions;
  jobs: operations.Jobs;
  jobStepExecutions: operations.JobStepExecutions;
  jobSteps: operations.JobSteps;
  jobTargetExecutions: operations.JobTargetExecutions;
  jobTargetGroups: operations.JobTargetGroups;
  jobVersions: operations.JobVersions;
  longTermRetentionBackups: operations.LongTermRetentionBackups;
  backupLongTermRetentionPolicies: operations.BackupLongTermRetentionPolicies;
  managedBackupShortTermRetentionPolicies: operations.ManagedBackupShortTermRetentionPolicies;
  managedRestorableDroppedDatabaseBackupShortTermRetentionPolicies: operations.ManagedRestorableDroppedDatabaseBackupShortTermRetentionPolicies;
  serverAutomaticTuning: operations.ServerAutomaticTuningOperations;
  serverDnsAliases: operations.ServerDnsAliases;
  serverSecurityAlertPolicies: operations.ServerSecurityAlertPolicies;
  restorableDroppedManagedDatabases: operations.RestorableDroppedManagedDatabases;
  restorePoints: operations.RestorePoints;
  managedDatabaseSecurityAlertPolicies: operations.ManagedDatabaseSecurityAlertPolicies;
  managedServerSecurityAlertPolicies: operations.ManagedServerSecurityAlertPolicies;
  sensitivityLabels: operations.SensitivityLabels;
  managedInstanceAdministrators: operations.ManagedInstanceAdministrators;
  databaseOperations: operations.DatabaseOperations;
  elasticPoolOperations: operations.ElasticPoolOperations;
  capabilities: operations.Capabilities;
  databaseVulnerabilityAssessmentScans: operations.DatabaseVulnerabilityAssessmentScans;
  managedDatabaseVulnerabilityAssessmentRuleBaselines: operations.ManagedDatabaseVulnerabilityAssessmentRuleBaselines;
  managedDatabaseVulnerabilityAssessmentScans: operations.ManagedDatabaseVulnerabilityAssessmentScans;
  managedDatabaseVulnerabilityAssessments: operations.ManagedDatabaseVulnerabilityAssessments;
  instanceFailoverGroups: operations.InstanceFailoverGroups;
  backupShortTermRetentionPolicies: operations.BackupShortTermRetentionPolicies;
  tdeCertificates: operations.TdeCertificates;
  managedInstanceTdeCertificates: operations.ManagedInstanceTdeCertificates;
  managedInstanceKeys: operations.ManagedInstanceKeys;
  managedInstanceEncryptionProtectors: operations.ManagedInstanceEncryptionProtectors;
  recoverableManagedDatabases: operations.RecoverableManagedDatabases;
  managedInstanceVulnerabilityAssessments: operations.ManagedInstanceVulnerabilityAssessments;
  serverVulnerabilityAssessments: operations.ServerVulnerabilityAssessments;
  managedDatabaseSensitivityLabels: operations.ManagedDatabaseSensitivityLabels;
  instancePools: operations.InstancePools;
  usages: operations.Usages;
  managedInstances: operations.ManagedInstances;
  managedDatabaseRestoreDetails: operations.ManagedDatabaseRestoreDetails;
  managedDatabases: operations.ManagedDatabases;
  privateEndpointConnections: operations.PrivateEndpointConnections;
  privateLinkResources: operations.PrivateLinkResources;

  /**
   * Initializes a new instance of the SqlManagementClient class.
   * @param credentials Credentials needed for the client to connect to Azure. Credentials
   * implementing the TokenCredential interface from the @azure/identity package are recommended. For
   * more information about these credentials, see
   * {@link https://www.npmjs.com/package/@azure/identity}. Credentials implementing the
   * ServiceClientCredentials interface from the older packages @azure/ms-rest-nodeauth and
   * @azure/ms-rest-browserauth are also supported.
   * @param subscriptionId The subscription ID that identifies an Azure subscription.
   * @param [options] The parameter options
   */
  constructor(credentials: msRest.ServiceClientCredentials | TokenCredential, subscriptionId: string, options?: Models.SqlManagementClientOptions) {
    super(credentials, subscriptionId, options);
    this.recoverableDatabases = new operations.RecoverableDatabases(this);
    this.restorableDroppedDatabases = new operations.RestorableDroppedDatabases(this);
    this.servers = new operations.Servers(this);
    this.serverConnectionPolicies = new operations.ServerConnectionPolicies(this);
    this.databaseThreatDetectionPolicies = new operations.DatabaseThreatDetectionPolicies(this);
    this.dataMaskingPolicies = new operations.DataMaskingPolicies(this);
    this.dataMaskingRules = new operations.DataMaskingRules(this);
    this.firewallRules = new operations.FirewallRules(this);
    this.geoBackupPolicies = new operations.GeoBackupPolicies(this);
    this.databases = new operations.Databases(this);
    this.elasticPools = new operations.ElasticPools(this);
    this.recommendedElasticPools = new operations.RecommendedElasticPools(this);
    this.replicationLinks = new operations.ReplicationLinks(this);
    this.serverAzureADAdministrators = new operations.ServerAzureADAdministrators(this);
    this.serverCommunicationLinks = new operations.ServerCommunicationLinks(this);
    this.serviceObjectives = new operations.ServiceObjectives(this);
    this.elasticPoolActivities = new operations.ElasticPoolActivities(this);
    this.elasticPoolDatabaseActivities = new operations.ElasticPoolDatabaseActivities(this);
    this.serviceTierAdvisors = new operations.ServiceTierAdvisors(this);
    this.transparentDataEncryptions = new operations.TransparentDataEncryptions(this);
    this.transparentDataEncryptionActivities = new operations.TransparentDataEncryptionActivities(this);
    this.serverUsages = new operations.ServerUsages(this);
    this.databaseUsages = new operations.DatabaseUsages(this);
    this.databaseAutomaticTuning = new operations.DatabaseAutomaticTuningOperations(this);
    this.encryptionProtectors = new operations.EncryptionProtectors(this);
    this.failoverGroups = new operations.FailoverGroups(this);
    this.operations = new operations.Operations(this);
    this.serverKeys = new operations.ServerKeys(this);
    this.syncAgents = new operations.SyncAgents(this);
    this.syncGroups = new operations.SyncGroups(this);
    this.syncMembers = new operations.SyncMembers(this);
    this.subscriptionUsages = new operations.SubscriptionUsages(this);
    this.virtualClusters = new operations.VirtualClusters(this);
    this.virtualNetworkRules = new operations.VirtualNetworkRules(this);
    this.extendedDatabaseBlobAuditingPolicies = new operations.ExtendedDatabaseBlobAuditingPolicies(this);
    this.extendedServerBlobAuditingPolicies = new operations.ExtendedServerBlobAuditingPolicies(this);
    this.serverBlobAuditingPolicies = new operations.ServerBlobAuditingPolicies(this);
    this.databaseBlobAuditingPolicies = new operations.DatabaseBlobAuditingPolicies(this);
    this.databaseVulnerabilityAssessmentRuleBaselines = new operations.DatabaseVulnerabilityAssessmentRuleBaselines(this);
    this.databaseVulnerabilityAssessments = new operations.DatabaseVulnerabilityAssessments(this);
    this.jobAgents = new operations.JobAgents(this);
    this.jobCredentials = new operations.JobCredentials(this);
    this.jobExecutions = new operations.JobExecutions(this);
    this.jobs = new operations.Jobs(this);
    this.jobStepExecutions = new operations.JobStepExecutions(this);
    this.jobSteps = new operations.JobSteps(this);
    this.jobTargetExecutions = new operations.JobTargetExecutions(this);
    this.jobTargetGroups = new operations.JobTargetGroups(this);
    this.jobVersions = new operations.JobVersions(this);
    this.longTermRetentionBackups = new operations.LongTermRetentionBackups(this);
    this.backupLongTermRetentionPolicies = new operations.BackupLongTermRetentionPolicies(this);
    this.managedBackupShortTermRetentionPolicies = new operations.ManagedBackupShortTermRetentionPolicies(this);
    this.managedRestorableDroppedDatabaseBackupShortTermRetentionPolicies = new operations.ManagedRestorableDroppedDatabaseBackupShortTermRetentionPolicies(this);
    this.serverAutomaticTuning = new operations.ServerAutomaticTuningOperations(this);
    this.serverDnsAliases = new operations.ServerDnsAliases(this);
    this.serverSecurityAlertPolicies = new operations.ServerSecurityAlertPolicies(this);
    this.restorableDroppedManagedDatabases = new operations.RestorableDroppedManagedDatabases(this);
    this.restorePoints = new operations.RestorePoints(this);
    this.managedDatabaseSecurityAlertPolicies = new operations.ManagedDatabaseSecurityAlertPolicies(this);
    this.managedServerSecurityAlertPolicies = new operations.ManagedServerSecurityAlertPolicies(this);
    this.sensitivityLabels = new operations.SensitivityLabels(this);
    this.managedInstanceAdministrators = new operations.ManagedInstanceAdministrators(this);
    this.databaseOperations = new operations.DatabaseOperations(this);
    this.elasticPoolOperations = new operations.ElasticPoolOperations(this);
    this.capabilities = new operations.Capabilities(this);
    this.databaseVulnerabilityAssessmentScans = new operations.DatabaseVulnerabilityAssessmentScans(this);
    this.managedDatabaseVulnerabilityAssessmentRuleBaselines = new operations.ManagedDatabaseVulnerabilityAssessmentRuleBaselines(this);
    this.managedDatabaseVulnerabilityAssessmentScans = new operations.ManagedDatabaseVulnerabilityAssessmentScans(this);
    this.managedDatabaseVulnerabilityAssessments = new operations.ManagedDatabaseVulnerabilityAssessments(this);
    this.instanceFailoverGroups = new operations.InstanceFailoverGroups(this);
    this.backupShortTermRetentionPolicies = new operations.BackupShortTermRetentionPolicies(this);
    this.tdeCertificates = new operations.TdeCertificates(this);
    this.managedInstanceTdeCertificates = new operations.ManagedInstanceTdeCertificates(this);
    this.managedInstanceKeys = new operations.ManagedInstanceKeys(this);
    this.managedInstanceEncryptionProtectors = new operations.ManagedInstanceEncryptionProtectors(this);
    this.recoverableManagedDatabases = new operations.RecoverableManagedDatabases(this);
    this.managedInstanceVulnerabilityAssessments = new operations.ManagedInstanceVulnerabilityAssessments(this);
    this.serverVulnerabilityAssessments = new operations.ServerVulnerabilityAssessments(this);
    this.managedDatabaseSensitivityLabels = new operations.ManagedDatabaseSensitivityLabels(this);
    this.instancePools = new operations.InstancePools(this);
    this.usages = new operations.Usages(this);
    this.managedInstances = new operations.ManagedInstances(this);
    this.managedDatabaseRestoreDetails = new operations.ManagedDatabaseRestoreDetails(this);
    this.managedDatabases = new operations.ManagedDatabases(this);
    this.privateEndpointConnections = new operations.PrivateEndpointConnections(this);
    this.privateLinkResources = new operations.PrivateLinkResources(this);
  }
}

// Operation Specifications

export {
  SqlManagementClient,
  SqlManagementClientContext,
  Models as SqlManagementModels,
  Mappers as SqlManagementMappers
};
export * from "./operations";
