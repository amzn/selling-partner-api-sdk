# SellingPartnerApiForCatalogItems.ItemSummaryByMarketplace

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**marketplaceId** | **String** | Amazon marketplace identifier. To find the ID for your marketplace, refer to [Marketplace IDs](https://developer-docs.amazon.com/sp-api/docs/marketplace-ids). | 
**adultProduct** | **Boolean** | When &#x60;true&#x60;, the Amazon catalog item is intended for an adult audience or is sexual in nature. | [optional] 
**autographed** | **Boolean** | When &#x60;true&#x60;, the Amazon catalog item is autographed. | [optional] 
**brand** | **String** | Name of the brand that is associated with the Amazon catalog item. | [optional] 
**browseClassification** | [**ItemBrowseClassification**](ItemBrowseClassification.md) |  | [optional] 
**color** | **String** | The color that is associated with the Amazon catalog item. | [optional] 
**contributors** | [**[ItemContributor]**](ItemContributor.md) | Individual contributors to the creation of the item, such as the authors or actors. | [optional] 
**itemClassification** | **String** | Classification type that is associated with the Amazon catalog item. | [optional] 
**itemName** | **String** | The name that is associated with the Amazon catalog item. | [optional] 
**manufacturer** | **String** | The name of the manufacturer that is associated with the Amazon catalog item. | [optional] 
**memorabilia** | **Boolean** | When true, the item is classified as memorabilia. | [optional] 
**modelNumber** | **String** | The model number that is associated with the Amazon catalog item. | [optional] 
**packageQuantity** | **Number** | The quantity of the Amazon catalog item within one package. | [optional] 
**partNumber** | **String** | The part number that is associated with the Amazon catalog item. | [optional] 
**releaseDate** | **Date** | The earliest date on which the Amazon catalog item can be shipped to customers. | [optional] 
**size** | **String** | The name of the size of the Amazon catalog item. | [optional] 
**style** | **String** | The name of the style that is associated with the Amazon catalog item. | [optional] 
**tradeInEligible** | **Boolean** | When true, the Amazon catalog item is eligible for trade-in. | [optional] 
**websiteDisplayGroup** | **String** | The identifier of the website display group that is associated with the Amazon catalog item. | [optional] 
**websiteDisplayGroupName** | **String** | The display name of the website display group that is associated with the Amazon catalog item. | [optional] 



## Enum: ItemClassificationEnum


* `BASE_PRODUCT` (value: `"BASE_PRODUCT"`)

* `OTHER` (value: `"OTHER"`)

* `PRODUCT_BUNDLE` (value: `"PRODUCT_BUNDLE"`)

* `VARIATION_PARENT` (value: `"VARIATION_PARENT"`)




