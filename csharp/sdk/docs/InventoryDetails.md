# software.amzn.spapi.Model.fba.inventory.v1.InventoryDetails
Summarized inventory details. This object will not appear if the details parameter in the request is false.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**FulfillableQuantity** | **int** | The item quantity that can be picked, packed, and shipped. | [optional] 
**InboundWorkingQuantity** | **int** | The number of units in an inbound shipment for which you have notified Amazon. | [optional] 
**InboundShippedQuantity** | **int** | The number of units in an inbound shipment that you have notified Amazon about and have provided a tracking number. | [optional] 
**InboundReceivingQuantity** | **int** | The number of units that have not yet been received at an Amazon fulfillment center for processing, but are part of an inbound shipment with some units that have already been received and processed. | [optional] 
**ReservedQuantity** | [**ReservedQuantity**](ReservedQuantity.md) |  | [optional] 
**ResearchingQuantity** | [**ResearchingQuantity**](ResearchingQuantity.md) |  | [optional] 
**UnfulfillableQuantity** | [**UnfulfillableQuantity**](UnfulfillableQuantity.md) |  | [optional] 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

