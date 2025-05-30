# software.amzn.spapi.Model.fulfillment.inbound.v2024_03_20.CreateMarketplaceItemLabelsRequest
The `createMarketplaceItemLabels` request.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Height** | **decimal** | The height of the item label. | [optional] 
**LabelType** | **LabelPrintType** |  | 
**LocaleCode** | **string** | The locale code constructed from ISO 639 language code and ISO 3166-1 alpha-2 standard of country codes separated by an underscore character. | [optional] [default to "en_US"]
**MarketplaceId** | **string** | The Marketplace ID. For a list of possible values, refer to [Marketplace IDs](https://developer-docs.amazon.com/sp-api/docs/marketplace-ids). | 
**MskuQuantities** | [**List&lt;MskuQuantity&gt;**](MskuQuantity.md) | Represents the quantity of an MSKU to print item labels for. | 
**PageType** | **ItemLabelPageType** |  | [optional] 
**Width** | **decimal** | The width of the item label. | [optional] 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

