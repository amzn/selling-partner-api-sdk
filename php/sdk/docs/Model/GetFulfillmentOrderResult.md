# # GetFulfillmentOrderResult

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**fulfillment_order** | [**\OpenAPI\Client\Model\fulfillmentoutbound\FulfillmentOrder**](FulfillmentOrder.md) |  |
**fulfillment_order_items** | [**\OpenAPI\Client\Model\fulfillmentoutbound\FulfillmentOrderItem[]**](FulfillmentOrderItem.md) | An array of fulfillment order item information. |
**fulfillment_shipments** | [**\OpenAPI\Client\Model\fulfillmentoutbound\FulfillmentShipment[]**](FulfillmentShipment.md) | An array of fulfillment shipment information. | [optional]
**return_items** | [**\OpenAPI\Client\Model\fulfillmentoutbound\ReturnItem[]**](ReturnItem.md) | An array of items that Amazon accepted for return. Returns empty if no items were accepted for return. |
**return_authorizations** | [**\OpenAPI\Client\Model\fulfillmentoutbound\ReturnAuthorization[]**](ReturnAuthorization.md) | An array of return authorization information. |
**payment_information** | [**\OpenAPI\Client\Model\fulfillmentoutbound\PaymentInformation[]**](PaymentInformation.md) | An array of various payment attributes related to this fulfillment order. | [optional]

[[Back to Model list]](../../README.md#models) [[Back to API list]](../../README.md#endpoints) [[Back to README]](../../README.md)
