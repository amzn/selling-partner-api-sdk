# SellingPartnerApiForFinances.ShipmentEvent

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**amazonOrderId** | **String** | An Amazon-defined identifier for an order. | [optional] 
**sellerOrderId** | **String** | A seller-defined identifier for an order. | [optional] 
**marketplaceName** | **String** | The name of the marketplace where the event occurred. | [optional] 
**storeName** | **String** | The name of the store where the event occurred. | [optional] 
**orderChargeList** | [**[ChargeComponent]**](ChargeComponent.md) | A list of charge information on the seller&#39;s account. | [optional] 
**orderChargeAdjustmentList** | [**[ChargeComponent]**](ChargeComponent.md) | A list of charge information on the seller&#39;s account. | [optional] 
**shipmentFeeList** | [**[FeeComponent]**](FeeComponent.md) | A list of fee component information. | [optional] 
**shipmentFeeAdjustmentList** | [**[FeeComponent]**](FeeComponent.md) | A list of fee component information. | [optional] 
**orderFeeList** | [**[FeeComponent]**](FeeComponent.md) | A list of fee component information. | [optional] 
**orderFeeAdjustmentList** | [**[FeeComponent]**](FeeComponent.md) | A list of fee component information. | [optional] 
**directPaymentList** | [**[DirectPayment]**](DirectPayment.md) | A list of direct payment information. | [optional] 
**postedDate** | **Date** | Fields with a schema type of date are in ISO 8601 date time format (for example GroupBeginDate). | [optional] 
**shipmentItemList** | [**[ShipmentItem]**](ShipmentItem.md) | A list of shipment items. | [optional] 
**shipmentItemAdjustmentList** | [**[ShipmentItem]**](ShipmentItem.md) | A list of shipment items. | [optional] 


