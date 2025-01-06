# # BoxInput

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**content_information_source** | [**\OpenAPI\Client\Model\fulfillmentInbound\BoxContentInformationSource**](BoxContentInformationSource.md) |  |
**dimensions** | [**\OpenAPI\Client\Model\fulfillmentInbound\Dimensions**](Dimensions.md) |  |
**items** | [**\OpenAPI\Client\Model\fulfillmentInbound\ItemInput[]**](ItemInput.md) | The items and their quantity in the box. This must be empty if the box &#x60;contentInformationSource&#x60; is &#x60;BARCODE_2D&#x60; or &#x60;MANUAL_PROCESS&#x60;. | [optional]
**quantity** | **int** | The number of containers where all other properties like weight or dimensions are identical. |
**weight** | [**\OpenAPI\Client\Model\fulfillmentInbound\Weight**](Weight.md) |  |

[[Back to Model list]](../../README.md#models) [[Back to API list]](../../README.md#endpoints) [[Back to README]](../../README.md)
