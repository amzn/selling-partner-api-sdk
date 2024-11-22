# Containers

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**containerType** | [**ContainerTypeEnum**](#ContainerTypeEnum) | The type of container. | 
**containerSequenceNumber** | **String** | An integer that must be submitted for multi-box shipments only, where one item may come in separate packages. |  [optional]
**containerIdentifiers** | [**List&lt;ContainerIdentification&gt;**](ContainerIdentification.md) | A list of carton identifiers. | 
**trackingNumber** | **String** | The tracking number used for identifying the shipment. |  [optional]
**dimensions** | [**Dimensions**](Dimensions.md) |  |  [optional]
**weight** | [**Weight**](Weight.md) |  |  [optional]
**tier** | **Integer** | Number of layers per pallet. |  [optional]
**block** | **Integer** | Number of cartons per layer on the pallet. |  [optional]
**innerContainersDetails** | [**InnerContainersDetails**](InnerContainersDetails.md) |  |  [optional]
**packedItems** | [**List&lt;PackedItems&gt;**](PackedItems.md) | A list of packed items. |  [optional]

<a name="ContainerTypeEnum"></a>
## Enum: ContainerTypeEnum
Name | Value
---- | -----
CARTON | &quot;carton&quot;
PALLET | &quot;pallet&quot;
