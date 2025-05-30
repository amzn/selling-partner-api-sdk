# software.amzn.spapi.Model.shipping.v2.CreateClaimRequest
The request schema for the CreateClaim operation

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**TrackingId** | **string** | The carrier generated identifier for a package in a purchased shipment. | 
**DeclaredValue** | [**Currency**](Currency.md) |  | [optional] 
**ClaimReason** | **ClaimReason** |  | 
**IsReplacementPackageSent** | **bool** | Applicable for only On Amazon shipments to identify if replacement was sent | [optional] 
**Proofs** | **List&lt;string&gt;** | A list of proof URLs for a claim. Basic URL validation will happen for each URLs present in the list | [optional] 
**SettlementType** | **SettlementType** |  | 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

