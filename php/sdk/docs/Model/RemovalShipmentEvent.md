# # RemovalShipmentEvent

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**posted_date** | **\DateTime** | Fields with a schema type of date are in ISO 8601 date time format (for example GroupBeginDate). | [optional]
**merchant_order_id** | **string** | The merchant removal orderId. | [optional]
**order_id** | **string** | The identifier for the removal shipment order. | [optional]
**transaction_type** | **string** | The type of removal order.  Possible values:  * WHOLESALE_LIQUIDATION | [optional]
**store_name** | **string** | The name of the store where the event occurred. | [optional]
**removal_shipment_item_list** | [**\OpenAPI\Client\Model\financesv0\RemovalShipmentItem[]**](RemovalShipmentItem.md) | A list of information about removal shipment items. | [optional]

[[Back to Model list]](../../README.md#models) [[Back to API list]](../../README.md#endpoints) [[Back to README]](../../README.md)
