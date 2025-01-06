# # GetFulfillmentPreviewRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**marketplace_id** | **string** | The marketplace the fulfillment order is placed against. | [optional]
**address** | [**\OpenAPI\Client\Model\fulfillmentOutbound\Address**](Address.md) |  |
**items** | [**\OpenAPI\Client\Model\fulfillmentOutbound\GetFulfillmentPreviewItem[]**](GetFulfillmentPreviewItem.md) | An array of fulfillment preview item information. |
**shipping_speed_categories** | [**\OpenAPI\Client\Model\fulfillmentOutbound\ShippingSpeedCategory[]**](ShippingSpeedCategory.md) | ShippingSpeedCategory List | [optional]
**include_cod_fulfillment_preview** | **bool** | When true, returns all fulfillment order previews both for COD and not for COD. Otherwise, returns only fulfillment order previews that are not for COD. | [optional]
**include_delivery_windows** | **bool** | When true, returns the &#x60;ScheduledDeliveryInfo&#x60; response object, which contains the available delivery windows for a Scheduled Delivery. The &#x60;ScheduledDeliveryInfo&#x60; response object can only be returned for fulfillment order previews with &#x60;ShippingSpeedCategories&#x60; &#x3D; &#x60;ScheduledDelivery&#x60;. | [optional]
**feature_constraints** | [**\OpenAPI\Client\Model\fulfillmentOutbound\FeatureSettings[]**](FeatureSettings.md) | A list of features and their fulfillment policies to apply to the order. | [optional]

[[Back to Model list]](../../README.md#models) [[Back to API list]](../../README.md#endpoints) [[Back to README]](../../README.md)
