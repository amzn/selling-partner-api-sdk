# software.amzn.spapi.Model.catalogItems.v2022_04_01.ItemVendorDetailsByMarketplace
The vendor details that are associated with an Amazon catalog item for the specified `marketplaceId`.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**MarketplaceId** | **string** | Amazon marketplace identifier. To find the ID for your marketplace, refer to [Marketplace IDs](https://developer-docs.amazon.com/sp-api/docs/marketplace-ids). | 
**BrandCode** | **string** | The brand code that is associated with an Amazon catalog item. | [optional] 
**ManufacturerCode** | **string** | The manufacturer code that is associated with an Amazon catalog item. | [optional] 
**ManufacturerCodeParent** | **string** | The parent vendor code of the manufacturer code. | [optional] 
**ProductCategory** | [**ItemVendorDetailsCategory**](ItemVendorDetailsCategory.md) |  | [optional] 
**ProductGroup** | **string** | The product group that is associated with an Amazon catalog item. | [optional] 
**ProductSubcategory** | [**ItemVendorDetailsCategory**](ItemVendorDetailsCategory.md) |  | [optional] 
**ReplenishmentCategory** | **string** | The replenishment category that is associated with an Amazon catalog item. | [optional] 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

