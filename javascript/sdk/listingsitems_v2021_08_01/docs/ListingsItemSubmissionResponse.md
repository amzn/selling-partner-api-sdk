# SellingPartnerApiForListingsItems.ListingsItemSubmissionResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**sku** | **String** | A selling partner provided identifier for an Amazon listing. | 
**status** | **String** | The status of the listings item submission. | 
**submissionId** | **String** | The unique identifier of the listings item submission. | 
**issues** | [**[Issue]**](Issue.md) | Listings item issues related to the listings item submission. | [optional] 
**identifiers** | [**[ItemIdentifiersByMarketplace]**](ItemIdentifiersByMarketplace.md) | Identity attributes associated with the item in the Amazon catalog, such as the ASIN. | [optional] 



## Enum: StatusEnum


* `ACCEPTED` (value: `"ACCEPTED"`)

* `INVALID` (value: `"INVALID"`)

* `VALID` (value: `"VALID"`)




