# software.amzn.spapi.Model.vendor.shipments.v1.PurchaseOrders
Transport Request pickup date

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**PurchaseOrderNumber** | **string** | Purchase order numbers involved in this shipment, list all the PO that are involved as part of this shipment. | [optional] 
**PurchaseOrderDate** | **DateTime** | Purchase order numbers involved in this shipment, list all the PO that are involved as part of this shipment. | [optional] 
**ShipWindow** | **string** | Date range in which shipment is expected for these purchase orders. | [optional] 
**Items** | [**List&lt;PurchaseOrderItems&gt;**](PurchaseOrderItems.md) | A list of the items that are associated to the PO in this transport and their associated details. | [optional] 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

