# SellingPartnerApiForFbaInventory.InventoryDetails

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**fulfillableQuantity** | **Number** | The item quantity that can be picked, packed, and shipped. | [optional] 
**inboundWorkingQuantity** | **Number** | The number of units in an inbound shipment for which you have notified Amazon. | [optional] 
**inboundShippedQuantity** | **Number** | The number of units in an inbound shipment that you have notified Amazon about and have provided a tracking number. | [optional] 
**inboundReceivingQuantity** | **Number** | The number of units that have not yet been received at an Amazon fulfillment center for processing, but are part of an inbound shipment with some units that have already been received and processed. | [optional] 
**reservedQuantity** | [**ReservedQuantity**](ReservedQuantity.md) |  | [optional] 
**researchingQuantity** | [**ResearchingQuantity**](ResearchingQuantity.md) |  | [optional] 
**unfulfillableQuantity** | [**UnfulfillableQuantity**](UnfulfillableQuantity.md) |  | [optional] 


