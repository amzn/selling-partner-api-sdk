# software.amzn.spapi.Model.listings.items.v2021_08_01.ListingsItemSubmissionResponse
Response containing the results of a submission to the Selling Partner API for Listings Items.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Sku** | **string** | A selling partner provided identifier for an Amazon listing. | 
**Status** | **string** | The status of the listings item submission. | 
**SubmissionId** | **string** | The unique identifier of the listings item submission. | 
**Issues** | [**List&lt;Issue&gt;**](Issue.md) | Listings item issues related to the listings item submission. | [optional] 
**Identifiers** | [**List&lt;ItemIdentifiersByMarketplace&gt;**](ItemIdentifiersByMarketplace.md) | Identity attributes associated with the item in the Amazon catalog, such as the ASIN. | [optional] 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

