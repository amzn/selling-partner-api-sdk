# software.amzn.spapi.Model.finances.v0.ShipmentEvent
A shipment, refund, guarantee claim, or chargeback.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AmazonOrderId** | **string** | An Amazon-defined identifier for an order. | [optional] 
**SellerOrderId** | **string** | A seller-defined identifier for an order. | [optional] 
**MarketplaceName** | **string** | The name of the marketplace where the event occurred. | [optional] 
**StoreName** | **string** | The name of the store where the event occurred. | [optional] 
**OrderChargeList** | [**List&lt;ChargeComponent&gt;**](ChargeComponent.md) | A list of charge information on the seller&#39;s account. | [optional] 
**OrderChargeAdjustmentList** | [**List&lt;ChargeComponent&gt;**](ChargeComponent.md) | A list of charge information on the seller&#39;s account. | [optional] 
**ShipmentFeeList** | [**List&lt;FeeComponent&gt;**](FeeComponent.md) | A list of fee component information. | [optional] 
**ShipmentFeeAdjustmentList** | [**List&lt;FeeComponent&gt;**](FeeComponent.md) | A list of fee component information. | [optional] 
**OrderFeeList** | [**List&lt;FeeComponent&gt;**](FeeComponent.md) | A list of fee component information. | [optional] 
**OrderFeeAdjustmentList** | [**List&lt;FeeComponent&gt;**](FeeComponent.md) | A list of fee component information. | [optional] 
**DirectPaymentList** | [**List&lt;DirectPayment&gt;**](DirectPayment.md) | A list of direct payment information. | [optional] 
**PostedDate** | **DateTime** | Fields with a schema type of date are in ISO 8601 date time format (for example GroupBeginDate). | [optional] 
**ShipmentItemList** | [**List&lt;ShipmentItem&gt;**](ShipmentItem.md) | A list of shipment items. | [optional] 
**ShipmentItemAdjustmentList** | [**List&lt;ShipmentItem&gt;**](ShipmentItem.md) | A list of shipment items. | [optional] 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

