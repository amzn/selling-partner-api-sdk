# ShipmentEvent

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**amazonOrderId** | **String** | An Amazon-defined identifier for an order. |  [optional]
**sellerOrderId** | **String** | A seller-defined identifier for an order. |  [optional]
**marketplaceName** | **String** | The name of the marketplace where the event occurred. |  [optional]
**storeName** | **String** | The name of the store where the event occurred. |  [optional]
**orderChargeList** | [**ChargeComponentList**](ChargeComponentList.md) |  |  [optional]
**orderChargeAdjustmentList** | [**ChargeComponentList**](ChargeComponentList.md) |  |  [optional]
**shipmentFeeList** | [**FeeComponentList**](FeeComponentList.md) |  |  [optional]
**shipmentFeeAdjustmentList** | [**FeeComponentList**](FeeComponentList.md) |  |  [optional]
**orderFeeList** | [**FeeComponentList**](FeeComponentList.md) |  |  [optional]
**orderFeeAdjustmentList** | [**FeeComponentList**](FeeComponentList.md) |  |  [optional]
**directPaymentList** | [**DirectPaymentList**](DirectPaymentList.md) |  |  [optional]
**postedDate** | [**OffsetDateTime**](OffsetDateTime.md) |  |  [optional]
**shipmentItemList** | [**ShipmentItemList**](ShipmentItemList.md) |  |  [optional]
**shipmentItemAdjustmentList** | [**ShipmentItemList**](ShipmentItemList.md) |  |  [optional]
