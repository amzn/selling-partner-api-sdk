# # ShipmentEvent

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**amazon_order_id** | **string** | An Amazon-defined identifier for an order. | [optional]
**seller_order_id** | **string** | A seller-defined identifier for an order. | [optional]
**marketplace_name** | **string** | The name of the marketplace where the event occurred. | [optional]
**store_name** | **string** | The name of the store where the event occurred. | [optional]
**order_charge_list** | [**\OpenAPI\Client\Model\financesV0\ChargeComponent[]**](ChargeComponent.md) | A list of charge information on the seller&#39;s account. | [optional]
**order_charge_adjustment_list** | [**\OpenAPI\Client\Model\financesV0\ChargeComponent[]**](ChargeComponent.md) | A list of charge information on the seller&#39;s account. | [optional]
**shipment_fee_list** | [**\OpenAPI\Client\Model\financesV0\FeeComponent[]**](FeeComponent.md) | A list of fee component information. | [optional]
**shipment_fee_adjustment_list** | [**\OpenAPI\Client\Model\financesV0\FeeComponent[]**](FeeComponent.md) | A list of fee component information. | [optional]
**order_fee_list** | [**\OpenAPI\Client\Model\financesV0\FeeComponent[]**](FeeComponent.md) | A list of fee component information. | [optional]
**order_fee_adjustment_list** | [**\OpenAPI\Client\Model\financesV0\FeeComponent[]**](FeeComponent.md) | A list of fee component information. | [optional]
**direct_payment_list** | [**\OpenAPI\Client\Model\financesV0\DirectPayment[]**](DirectPayment.md) | A list of direct payment information. | [optional]
**posted_date** | **\DateTime** | Fields with a schema type of date are in ISO 8601 date time format (for example GroupBeginDate). | [optional]
**shipment_item_list** | [**\OpenAPI\Client\Model\financesV0\ShipmentItem[]**](ShipmentItem.md) | A list of shipment items. | [optional]
**shipment_item_adjustment_list** | [**\OpenAPI\Client\Model\financesV0\ShipmentItem[]**](ShipmentItem.md) | A list of shipment items. | [optional]

[[Back to Model list]](../../README.md#models) [[Back to API list]](../../README.md#endpoints) [[Back to README]](../../README.md)
