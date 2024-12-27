# # ProductTypeDefinition

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**meta_schema** | [**\OpenAPI\Client\Model\producttypedefinitions\SchemaLink**](SchemaLink.md) |  | [optional]
**schema** | [**\OpenAPI\Client\Model\producttypedefinitions\SchemaLink**](SchemaLink.md) |  |
**requirements** | **string** | Name of the requirements set represented in this product type definition. |
**requirements_enforced** | **string** | Identifies if the required attributes for a requirements set are enforced by the product type definition schema. Non-enforced requirements enable structural validation of individual attributes without all of the required attributes being present (such as for partial updates). |
**property_groups** | [**array<string,\OpenAPI\Client\Model\producttypedefinitions\PropertyGroup>**](PropertyGroup.md) | Mapping of property group names to property groups. Property groups represent logical groupings of schema properties that can be used for display or informational purposes. |
**locale** | **string** | Locale of the display elements contained in the product type definition. |
**marketplace_ids** | **string[]** | Amazon marketplace identifiers for which the product type definition is applicable. |
**product_type** | **string** | The name of the Amazon product type that this product type definition applies to. |
**display_name** | **string** | Human-readable and localized description of the Amazon product type. |
**product_type_version** | [**\OpenAPI\Client\Model\producttypedefinitions\ProductTypeVersion**](ProductTypeVersion.md) |  |

[[Back to Model list]](../../README.md#models) [[Back to API list]](../../README.md#endpoints) [[Back to README]](../../README.md)
