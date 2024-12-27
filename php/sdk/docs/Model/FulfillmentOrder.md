# # FulfillmentOrder

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**seller_fulfillment_order_id** | **string** | The fulfillment order identifier submitted with the &#x60;createFulfillmentOrder&#x60; operation. |
**marketplace_id** | **string** | The identifier for the marketplace the fulfillment order is placed against. |
**displayable_order_id** | **string** | A fulfillment order identifier submitted with the &#x60;createFulfillmentOrder&#x60; operation. Displays as the order identifier in recipient-facing materials such as the packing slip. |
**displayable_order_date** | **\DateTime** | Date timestamp |
**displayable_order_comment** | **string** | A text block submitted with the &#x60;createFulfillmentOrder&#x60; operation. Displays in recipient-facing materials such as the packing slip. |
**shipping_speed_category** | [**\OpenAPI\Client\Model\fulfillmentoutbound\ShippingSpeedCategory**](ShippingSpeedCategory.md) |  |
**delivery_window** | [**\OpenAPI\Client\Model\fulfillmentoutbound\DeliveryWindow**](DeliveryWindow.md) |  | [optional]
**destination_address** | [**\OpenAPI\Client\Model\fulfillmentoutbound\Address**](Address.md) |  |
**fulfillment_action** | [**\OpenAPI\Client\Model\fulfillmentoutbound\FulfillmentAction**](FulfillmentAction.md) |  | [optional]
**fulfillment_policy** | [**\OpenAPI\Client\Model\fulfillmentoutbound\FulfillmentPolicy**](FulfillmentPolicy.md) |  | [optional]
**cod_settings** | [**\OpenAPI\Client\Model\fulfillmentoutbound\CODSettings**](CODSettings.md) |  | [optional]
**received_date** | **\DateTime** | Date timestamp |
**fulfillment_order_status** | [**\OpenAPI\Client\Model\fulfillmentoutbound\FulfillmentOrderStatus**](FulfillmentOrderStatus.md) |  |
**status_updated_date** | **\DateTime** | Date timestamp |
**notification_emails** | **string[]** | A list of email addresses that the seller provides that are used by Amazon to send ship-complete notifications to recipients on behalf of the seller. | [optional]
**feature_constraints** | [**\OpenAPI\Client\Model\fulfillmentoutbound\FeatureSettings[]**](FeatureSettings.md) | A list of features and their fulfillment policies to apply to the order. | [optional]

[[Back to Model list]](../../README.md#models) [[Back to API list]](../../README.md#endpoints) [[Back to README]](../../README.md)
