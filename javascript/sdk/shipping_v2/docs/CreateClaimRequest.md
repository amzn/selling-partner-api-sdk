# AmazonShippingApi.CreateClaimRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**trackingId** | **String** | The carrier generated identifier for a package in a purchased shipment. | 
**declaredValue** | [**Currency**](Currency.md) |  | [optional] 
**claimReason** | [**ClaimReason**](ClaimReason.md) |  | 
**isReplacementPackageSent** | **Boolean** | Applicable for only On Amazon shipments to identify if replacement was sent | [optional] 
**proofs** | **[String]** | A list of proof URLs for a claim. Basic URL validation will happen for each URLs present in the list | [optional] 
**settlementType** | [**SettlementType**](SettlementType.md) |  | 


