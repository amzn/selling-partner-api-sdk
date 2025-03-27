# SellingPartnerApiForCatalogItems.ItemVendorDetailsByMarketplace

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**marketplaceId** | **String** | Amazon marketplace identifier. To find the ID for your marketplace, refer to [Marketplace IDs](https://developer-docs.amazon.com/sp-api/docs/marketplace-ids). | 
**brandCode** | **String** | The brand code that is associated with an Amazon catalog item. | [optional] 
**manufacturerCode** | **String** | The manufacturer code that is associated with an Amazon catalog item. | [optional] 
**manufacturerCodeParent** | **String** | The parent vendor code of the manufacturer code. | [optional] 
**productCategory** | [**ItemVendorDetailsCategory**](ItemVendorDetailsCategory.md) |  | [optional] 
**productGroup** | **String** | The product group that is associated with an Amazon catalog item. | [optional] 
**productSubcategory** | [**ItemVendorDetailsCategory**](ItemVendorDetailsCategory.md) |  | [optional] 
**replenishmentCategory** | **String** | The replenishment category that is associated with an Amazon catalog item. | [optional] 



## Enum: ReplenishmentCategoryEnum


* `ALLOCATED` (value: `"ALLOCATED"`)

* `BASIC_REPLENISHMENT` (value: `"BASIC_REPLENISHMENT"`)

* `IN_SEASON` (value: `"IN_SEASON"`)

* `LIMITED_REPLENISHMENT` (value: `"LIMITED_REPLENISHMENT"`)

* `MANUFACTURER_OUT_OF_STOCK` (value: `"MANUFACTURER_OUT_OF_STOCK"`)

* `NEW_PRODUCT` (value: `"NEW_PRODUCT"`)

* `NON_REPLENISHABLE` (value: `"NON_REPLENISHABLE"`)

* `NON_STOCKUPABLE` (value: `"NON_STOCKUPABLE"`)

* `OBSOLETE` (value: `"OBSOLETE"`)

* `PLANNED_REPLENISHMENT` (value: `"PLANNED_REPLENISHMENT"`)




