# software.amzn.spapi.Model.finances.v0.RemovalShipmentAdjustmentEvent
A financial adjustment event for FBA liquidated inventory. A positive value indicates money owed to Amazon by the buyer (for example, when the charge was incorrectly calculated as less than it should be). A negative value indicates a full or partial refund owed to the buyer (for example, when the buyer receives damaged items or fewer items than ordered).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**PostedDate** | **DateTime** | Fields with a schema type of date are in ISO 8601 date time format (for example GroupBeginDate). | [optional] 
**AdjustmentEventId** | **string** | The unique identifier for the adjustment event. | [optional] 
**MerchantOrderId** | **string** | The merchant removal orderId. | [optional] 
**OrderId** | **string** | The orderId for shipping inventory. | [optional] 
**TransactionType** | **string** | The type of removal order.  Possible values:  * WHOLESALE_LIQUIDATION. | [optional] 
**RemovalShipmentItemAdjustmentList** | [**List&lt;RemovalShipmentItemAdjustment&gt;**](RemovalShipmentItemAdjustment.md) | A comma-delimited list of Removal shipmentItemAdjustment details for FBA inventory. | [optional] 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

