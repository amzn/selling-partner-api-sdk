# software.amzn.spapi.Model.vendor.shipments.v1.Containers
A list of the items in this transportation and their associated inner container details. If any of the item detail fields are common at a carton or a pallet level, provide them at the corresponding carton or pallet level.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ContainerType** | **string** | The type of container. | 
**ContainerSequenceNumber** | **string** | An integer that must be submitted for multi-box shipments only, where one item may come in separate packages. | [optional] 
**ContainerIdentifiers** | [**List&lt;ContainerIdentification&gt;**](ContainerIdentification.md) | A list of carton identifiers. | 
**TrackingNumber** | **string** | The tracking number used for identifying the shipment. | [optional] 
**Dimensions** | [**Dimensions**](Dimensions.md) |  | [optional] 
**Weight** | [**Weight**](Weight.md) |  | [optional] 
**Tier** | **int** | Number of layers per pallet. | [optional] 
**Block** | **int** | Number of cartons per layer on the pallet. | [optional] 
**InnerContainersDetails** | [**InnerContainersDetails**](InnerContainersDetails.md) |  | [optional] 
**PackedItems** | [**List&lt;PackedItems&gt;**](PackedItems.md) | A list of packed items. | [optional] 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

