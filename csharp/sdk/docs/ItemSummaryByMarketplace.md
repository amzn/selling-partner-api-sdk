# software.amzn.spapi.Model.listings.items.v2021_08_01.ItemSummaryByMarketplace
Summary details of a listings item for an Amazon marketplace.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**MarketplaceId** | **string** | A marketplace identifier. Identifies the Amazon marketplace for the listings item. | 
**Asin** | **string** | Amazon Standard Identification Number (ASIN) of the listings item. | [optional] 
**ProductType** | **string** | The Amazon product type of the listings item. | 
**ConditionType** | **string** | Identifies the condition of the listings item. | [optional] 
**Status** | **List&lt;ItemSummaryByMarketplace.StatusEnum&gt;** | Statuses that apply to the listings item. | 
**FnSku** | **string** | The fulfillment network stock keeping unit is an identifier used by Amazon fulfillment centers to identify each unique item. | [optional] 
**ItemName** | **string** | The name or title associated with an Amazon catalog item. | [optional] 
**CreatedDate** | **DateTime** | The date the listings item was created in ISO 8601 format. | 
**LastUpdatedDate** | **DateTime** | The date the listings item was last updated in ISO 8601 format. | 
**MainImage** | [**ItemImage**](ItemImage.md) |  | [optional] 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

