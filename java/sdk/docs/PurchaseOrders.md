# PurchaseOrders

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**purchaseOrderNumber** | **String** | Purchase order numbers involved in this shipment, list all the PO that are involved as part of this shipment. |  [optional]
**purchaseOrderDate** | [**OffsetDateTime**](OffsetDateTime.md) | Purchase order numbers involved in this shipment, list all the PO that are involved as part of this shipment. |  [optional]
**shipWindow** | **String** | Date range in which shipment is expected for these purchase orders. |  [optional]
**items** | [**List&lt;PurchaseOrderItems&gt;**](PurchaseOrderItems.md) | A list of the items that are associated to the PO in this transport and their associated details. |  [optional]
