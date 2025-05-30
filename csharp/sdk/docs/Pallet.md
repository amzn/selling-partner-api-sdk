# software.amzn.spapi.Model.vendor.shipments.v1.Pallet
Details of the Pallet/Tare being shipped.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**PalletIdentifiers** | [**List&lt;ContainerIdentification&gt;**](ContainerIdentification.md) | A list of pallet identifiers. | 
**Tier** | **int** | Number of layers per pallet. Only applicable to container type Pallet. | [optional] 
**Block** | **int** | Number of cartons per layer on the pallet. Only applicable to container type Pallet. | [optional] 
**Dimensions** | [**Dimensions**](Dimensions.md) |  | [optional] 
**Weight** | [**Weight**](Weight.md) |  | [optional] 
**CartonReferenceDetails** | [**CartonReferenceDetails**](CartonReferenceDetails.md) |  | [optional] 
**Items** | [**List&lt;ContainerItem&gt;**](ContainerItem.md) | A list of container item details. | [optional] 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

