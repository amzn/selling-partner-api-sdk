# PackedQuantity

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**amount** | **Integer** | Amount of units shipped for a specific item at a shipment level. If the item is present only in certain cartons or pallets within the shipment, please provide this at the appropriate carton or pallet level. | 
**unitOfMeasure** | [**UnitOfMeasureEnum**](#UnitOfMeasureEnum) | Unit of measure for the shipped quantity. | 
**unitSize** | **Integer** | The case size, in the event that we ordered using cases. Otherwise, 1. |  [optional]

<a name="UnitOfMeasureEnum"></a>
## Enum: UnitOfMeasureEnum
Name | Value
---- | -----
CASES | &quot;Cases&quot;
EACHES | &quot;Eaches&quot;
