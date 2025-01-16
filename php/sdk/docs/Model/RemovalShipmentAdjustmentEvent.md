# # RemovalShipmentAdjustmentEvent

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**posted_date** | **\DateTime** | Fields with a schema type of date are in ISO 8601 date time format (for example GroupBeginDate). | [optional]
**adjustment_event_id** | **string** | The unique identifier for the adjustment event. | [optional]
**merchant_order_id** | **string** | The merchant removal orderId. | [optional]
**order_id** | **string** | The orderId for shipping inventory. | [optional]
**transaction_type** | **string** | The type of removal order.  Possible values:  * WHOLESALE_LIQUIDATION. | [optional]
**removal_shipment_item_adjustment_list** | [**\OpenAPI\Client\Model\finances\v0\RemovalShipmentItemAdjustment[]**](RemovalShipmentItemAdjustment.md) | A comma-delimited list of Removal shipmentItemAdjustment details for FBA inventory. | [optional]

[[Back to Model list]](../../README.md#models) [[Back to API list]](../../README.md#endpoints) [[Back to README]](../../README.md)
