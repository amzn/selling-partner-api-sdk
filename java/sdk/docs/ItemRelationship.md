# ItemRelationship

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**childAsins** | **List&lt;String&gt;** | Identifiers (ASINs) of the related items that are children of this item. |  [optional]
**parentAsins** | **List&lt;String&gt;** | Identifiers (ASINs) of the related items that are parents of this item. |  [optional]
**variationTheme** | [**ItemVariationTheme**](ItemVariationTheme.md) |  |  [optional]
**type** | [**TypeEnum**](#TypeEnum) | Type of relationship. | 

<a name="TypeEnum"></a>
## Enum: TypeEnum
Name | Value
---- | -----
VARIATION | &quot;VARIATION&quot;
PACKAGE_HIERARCHY | &quot;PACKAGE_HIERARCHY&quot;
