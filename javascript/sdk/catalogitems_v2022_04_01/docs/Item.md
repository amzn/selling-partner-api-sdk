# SellingPartnerApiForCatalogItems.Item

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**asin** | **String** | The unique identifier of an item in the Amazon catalog. | 
**attributes** | **{String: Object}** | A JSON object containing structured item attribute data that is keyed by attribute name. Catalog item attributes conform to the related Amazon product type definitions that you can get from the [Product Type Definitions API](https://developer-docs.amazon.com/sp-api/docs/product-type-definitions-api-v2020-09-01-reference). | [optional] 
**classifications** | [**[ItemBrowseClassificationsByMarketplace]**](ItemBrowseClassificationsByMarketplace.md) | An array of classifications (browse nodes) that is associated with the item in the Amazon catalog, grouped by &#x60;marketplaceId&#x60;. | [optional] 
**dimensions** | [**[ItemDimensionsByMarketplace]**](ItemDimensionsByMarketplace.md) | An array of dimensions that are associated with the item in the Amazon catalog, grouped by &#x60;marketplaceId&#x60;. | [optional] 
**identifiers** | [**[ItemIdentifiersByMarketplace]**](ItemIdentifiersByMarketplace.md) | Identifiers associated with the item in the Amazon catalog, such as UPC and EAN identifiers. | [optional] 
**images** | [**[ItemImagesByMarketplace]**](ItemImagesByMarketplace.md) | The images for an item in the Amazon catalog. | [optional] 
**productTypes** | [**[ItemProductTypeByMarketplace]**](ItemProductTypeByMarketplace.md) | Product types that are associated with the Amazon catalog item. | [optional] 
**relationships** | [**[ItemRelationshipsByMarketplace]**](ItemRelationshipsByMarketplace.md) | Relationships grouped by &#x60;marketplaceId&#x60; for an Amazon catalog item (for example, variations). | [optional] 
**salesRanks** | [**[ItemSalesRanksByMarketplace]**](ItemSalesRanksByMarketplace.md) | Sales ranks of an Amazon catalog item. | [optional] 
**summaries** | [**[ItemSummaryByMarketplace]**](ItemSummaryByMarketplace.md) | Summaries of Amazon catalog items. | [optional] 
**vendorDetails** | [**[ItemVendorDetailsByMarketplace]**](ItemVendorDetailsByMarketplace.md) | The vendor details that are associated with an Amazon catalog item. Vendor details are only available to vendors. | [optional] 


