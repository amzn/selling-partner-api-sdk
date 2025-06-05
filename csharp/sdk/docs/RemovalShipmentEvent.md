# software.amzn.spapi.Model.finances.v0.RemovalShipmentEvent
A removal shipment event for a removal order.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**PostedDate** | **DateTime** | Fields with a schema type of date are in ISO 8601 date time format (for example GroupBeginDate). | [optional] 
**MerchantOrderId** | **string** | The merchant removal orderId. | [optional] 
**OrderId** | **string** | The identifier for the removal shipment order. | [optional] 
**TransactionType** | **string** | The type of removal order.  Possible values:  * WHOLESALE_LIQUIDATION | [optional] 
**StoreName** | **string** | The name of the store where the event occurred. | [optional] 
**RemovalShipmentItemList** | [**List&lt;RemovalShipmentItem&gt;**](RemovalShipmentItem.md) | A list of information about removal shipment items. | [optional] 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

