# SellingPartnerApiForRetailProcurementShipments.Containers

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**containerType** | **String** | The type of container. | 
**containerSequenceNumber** | **String** | An integer that must be submitted for multi-box shipments only, where one item may come in separate packages. | [optional] 
**containerIdentifiers** | [**[ContainerIdentification]**](ContainerIdentification.md) | A list of carton identifiers. | 
**trackingNumber** | **String** | The tracking number used for identifying the shipment. | [optional] 
**dimensions** | [**Dimensions**](Dimensions.md) |  | [optional] 
**weight** | [**Weight**](Weight.md) |  | [optional] 
**tier** | **Number** | Number of layers per pallet. | [optional] 
**block** | **Number** | Number of cartons per layer on the pallet. | [optional] 
**innerContainersDetails** | [**InnerContainersDetails**](InnerContainersDetails.md) |  | [optional] 
**packedItems** | [**[PackedItems]**](PackedItems.md) | A list of packed items. | [optional] 



## Enum: ContainerTypeEnum


* `carton` (value: `"carton"`)

* `pallet` (value: `"pallet"`)




