# software.amzn.spapi.Model.productTypeDefinitions.v2020_09_01.ProductTypeDefinition
A product type definition represents the attributes and data requirements for a product type in the Amazon catalog. Product type definitions are used interchangeably between the Selling Partner API for Listings Items, Selling Partner API for Catalog Items, and JSON-based listings feeds in the Selling Partner API for Feeds.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**MetaSchema** | [**SchemaLink**](SchemaLink.md) |  | [optional] 
**Schema** | [**SchemaLink**](SchemaLink.md) |  | 
**Requirements** | **string** | Name of the requirements set represented in this product type definition. | 
**RequirementsEnforced** | **string** | Identifies if the required attributes for a requirements set are enforced by the product type definition schema. Non-enforced requirements enable structural validation of individual attributes without all of the required attributes being present (such as for partial updates). | 
**PropertyGroups** | [**Dictionary&lt;string, PropertyGroup&gt;**](PropertyGroup.md) | Mapping of property group names to property groups. Property groups represent logical groupings of schema properties that can be used for display or informational purposes. | 
**Locale** | **string** | Locale of the display elements contained in the product type definition. | 
**MarketplaceIds** | **List&lt;string&gt;** | Amazon marketplace identifiers for which the product type definition is applicable. | 
**ProductType** | **string** | The name of the Amazon product type that this product type definition applies to. | 
**DisplayName** | **string** | Human-readable and localized description of the Amazon product type. | 
**ProductTypeVersion** | [**ProductTypeVersion**](ProductTypeVersion.md) |  | 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

