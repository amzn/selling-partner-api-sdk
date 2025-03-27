# SellingPartnerApiForFinances.RemovalShipmentEvent

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**postedDate** | **Date** | Fields with a schema type of date are in ISO 8601 date time format (for example GroupBeginDate). | [optional] 
**merchantOrderId** | **String** | The merchant removal orderId. | [optional] 
**orderId** | **String** | The identifier for the removal shipment order. | [optional] 
**transactionType** | **String** | The type of removal order.  Possible values:  * WHOLESALE_LIQUIDATION | [optional] 
**storeName** | **String** | The name of the store where the event occurred. | [optional] 
**removalShipmentItemList** | [**[RemovalShipmentItem]**](RemovalShipmentItem.md) | A list of information about removal shipment items. | [optional] 


