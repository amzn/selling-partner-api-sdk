# software.amzn.spapi.Model.catalogItems.v2022_04_01.ItemSalesRanksByMarketplace
Sales ranks of an Amazon catalog item, grouped by `marketplaceId`.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**MarketplaceId** | **string** | Amazon marketplace identifier. To find the ID for your marketplace, refer to [Marketplace IDs](https://developer-docs.amazon.com/sp-api/docs/marketplace-ids). | 
**ClassificationRanks** | [**List&lt;ItemClassificationSalesRank&gt;**](ItemClassificationSalesRank.md) | Sales ranks of an Amazon catalog item for a &#x60;marketplaceId&#x60;, grouped by classification. | [optional] 
**DisplayGroupRanks** | [**List&lt;ItemDisplayGroupSalesRank&gt;**](ItemDisplayGroupSalesRank.md) | Sales ranks of an Amazon catalog item for a &#x60;marketplaceId&#x60;, grouped by website display group. | [optional] 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

