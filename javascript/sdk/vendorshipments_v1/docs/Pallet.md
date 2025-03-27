# SellingPartnerApiForRetailProcurementShipments.Pallet

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**palletIdentifiers** | [**[ContainerIdentification]**](ContainerIdentification.md) | A list of pallet identifiers. | 
**tier** | **Number** | Number of layers per pallet. Only applicable to container type Pallet. | [optional] 
**block** | **Number** | Number of cartons per layer on the pallet. Only applicable to container type Pallet. | [optional] 
**dimensions** | [**Dimensions**](Dimensions.md) |  | [optional] 
**weight** | [**Weight**](Weight.md) |  | [optional] 
**cartonReferenceDetails** | [**CartonReferenceDetails**](CartonReferenceDetails.md) |  | [optional] 
**items** | [**[ContainerItem]**](ContainerItem.md) | A list of container item details. | [optional] 


