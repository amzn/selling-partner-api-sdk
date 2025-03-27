# SellingPartnerApiForRetailProcurementShipments.ItemQuantity

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**amount** | **Number** | Amount of units shipped for a specific item at a shipment level. If the item is present only in certain cartons or pallets within the shipment, please provide this at the appropriate carton or pallet level. | 
**unitOfMeasure** | **String** | Unit of measure for the shipped quantity. | 
**unitSize** | **Number** | The case size, in the event that we ordered using cases. Otherwise, 1. | [optional] 
**totalWeight** | [**TotalWeight**](TotalWeight.md) |  | [optional] 



## Enum: UnitOfMeasureEnum


* `Cases` (value: `"Cases"`)

* `Eaches` (value: `"Eaches"`)




