# # ItemInput

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**expiration** | **string** | The expiration date of the MSKU. In [ISO 8601](https://developer-docs.amazon.com/sp-api/docs/iso-8601) datetime format with pattern &#x60;YYYY-MM-DD&#x60;. Items with the same MSKU but different expiration dates cannot go into the same box. | [optional]
**label_owner** | [**\OpenAPI\Client\Model\fulfillment\inbound\v2024_03_20\LabelOwner**](LabelOwner.md) |  |
**manufacturing_lot_code** | **string** | The manufacturing lot code. | [optional]
**msku** | **string** | The merchant SKU, a merchant-supplied identifier of a specific SKU. |
**prep_owner** | [**\OpenAPI\Client\Model\fulfillment\inbound\v2024_03_20\PrepOwner**](PrepOwner.md) |  |
**quantity** | **int** | The number of units of the specified MSKU that will be shipped. |

[[Back to Model list]](../../README.md#models) [[Back to API list]](../../README.md#endpoints) [[Back to README]](../../README.md)
