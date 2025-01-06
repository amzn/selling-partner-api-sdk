# # ShippingService

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**shipping_service_name** | **string** | A plain text representation of a carrier&#39;s shipping service. For example, \&quot;UPS Ground\&quot; or \&quot;FedEx Standard Overnight\&quot;. |
**carrier_name** | **string** | The name of the carrier. |
**shipping_service_id** | **string** | An Amazon-defined shipping service identifier. |
**shipping_service_offer_id** | **string** | An Amazon-defined shipping service offer identifier. |
**ship_date** | **\DateTime** | Date-time formatted timestamp. |
**earliest_estimated_delivery_date** | **\DateTime** | Date-time formatted timestamp. | [optional]
**latest_estimated_delivery_date** | **\DateTime** | Date-time formatted timestamp. | [optional]
**rate** | [**\OpenAPI\Client\Model\merchantFulfillment\CurrencyAmount**](CurrencyAmount.md) |  |
**shipping_service_options** | [**\OpenAPI\Client\Model\merchantFulfillment\ShippingServiceOptions**](ShippingServiceOptions.md) |  |
**available_shipping_service_options** | [**\OpenAPI\Client\Model\merchantFulfillment\AvailableShippingServiceOptions**](AvailableShippingServiceOptions.md) |  | [optional]
**available_label_formats** | [**\OpenAPI\Client\Model\merchantFulfillment\LabelFormat[]**](LabelFormat.md) | List of label formats. | [optional]
**available_format_options_for_label** | [**\OpenAPI\Client\Model\merchantFulfillment\LabelFormatOption[]**](LabelFormatOption.md) | The available label formats. | [optional]
**requires_additional_seller_inputs** | **bool** | When true, additional seller inputs are required. |
**benefits** | [**\OpenAPI\Client\Model\merchantFulfillment\Benefits**](Benefits.md) |  | [optional]

[[Back to Model list]](../../README.md#models) [[Back to API list]](../../README.md#endpoints) [[Back to README]](../../README.md)
