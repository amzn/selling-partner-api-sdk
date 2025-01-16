# # PackingOption

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**discounts** | [**\OpenAPI\Client\Model\fulfillment\inbound\v2024_03_20\Incentive[]**](Incentive.md) | Discount for the offered option. |
**expiration** | **\DateTime** | The time at which this packing option is no longer valid. In [ISO 8601](https://developer-docs.amazon.com/sp-api/docs/iso-8601) datetime format with pattern &#x60;yyyy-MM-ddTHH:mm:ss.sssZ&#x60;. | [optional]
**fees** | [**\OpenAPI\Client\Model\fulfillment\inbound\v2024_03_20\Incentive[]**](Incentive.md) | Fee for the offered option. |
**packing_groups** | **string[]** | Packing group IDs. |
**packing_option_id** | **string** | Identifier of a packing option. |
**status** | **string** | The status of the packing option. Possible values: &#x60;OFFERED&#x60;, &#x60;ACCEPTED&#x60;, &#x60;EXPIRED&#x60;. |
**supported_shipping_configurations** | [**\OpenAPI\Client\Model\fulfillment\inbound\v2024_03_20\ShippingConfiguration[]**](ShippingConfiguration.md) | List of supported shipping modes. |

[[Back to Model list]](../../README.md#models) [[Back to API list]](../../README.md#endpoints) [[Back to README]](../../README.md)
