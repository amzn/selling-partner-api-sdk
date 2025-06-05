# software.amzn.spapi.Model.pricing.v0.GetOffersResult
The payload for the getListingOffers and getItemOffers operations.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**MarketplaceID** | **string** | A marketplace identifier. | 
**ASIN** | **string** | The Amazon Standard Identification Number (ASIN) of the item. | [optional] 
**SKU** | **string** | The stock keeping unit (SKU) of the item. | [optional] 
**ItemCondition** | **ConditionType** |  | 
**Status** | **string** | The status of the operation. | 
**Identifier** | [**ItemIdentifier**](ItemIdentifier.md) |  | 
**Summary** | [**Summary**](Summary.md) |  | 
**Offers** | [**List&lt;OfferDetail&gt;**](OfferDetail.md) | A list of offer details. The list is the same length as the TotalOfferCount in the Summary or 20, whichever is less. | 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

