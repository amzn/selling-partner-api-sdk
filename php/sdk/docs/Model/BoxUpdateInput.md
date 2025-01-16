# # BoxUpdateInput

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**content_information_source** | [**\OpenAPI\Client\Model\fulfillment\inbound\v2024_03_20\BoxContentInformationSource**](BoxContentInformationSource.md) |  |
**dimensions** | [**\OpenAPI\Client\Model\fulfillment\inbound\v2024_03_20\Dimensions**](Dimensions.md) |  |
**items** | [**\OpenAPI\Client\Model\fulfillment\inbound\v2024_03_20\ItemInput[]**](ItemInput.md) | The items and their quantity in the box. This must be empty if the box &#x60;contentInformationSource&#x60; is &#x60;BARCODE_2D&#x60; or &#x60;MANUAL_PROCESS&#x60;. | [optional]
**package_id** | **string** | Primary key to uniquely identify a Box Package. PackageId must be provided if the intent is to update an existing box. Adding a new box will not require providing this value. Any existing PackageIds not provided will be treated as to-be-removed | [optional]
**quantity** | **int** | The number of containers where all other properties like weight or dimensions are identical. |
**weight** | [**\OpenAPI\Client\Model\fulfillment\inbound\v2024_03_20\Weight**](Weight.md) |  |

[[Back to Model list]](../../README.md#models) [[Back to API list]](../../README.md#endpoints) [[Back to README]](../../README.md)
