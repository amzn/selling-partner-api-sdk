# Carton

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cartonIdentifiers** | [**List&lt;ContainerIdentification&gt;**](ContainerIdentification.md) | A list of carton identifiers. |  [optional]
**cartonSequenceNumber** | **String** | Carton sequence number for the carton. The first carton will be 001, the second 002, and so on. This number is used as a reference to refer to this carton from the pallet level. | 
**dimensions** | [**Dimensions**](Dimensions.md) |  |  [optional]
**weight** | [**Weight**](Weight.md) |  |  [optional]
**trackingNumber** | **String** | This is required to be provided for every carton in the small parcel shipments. |  [optional]
**items** | [**List&lt;ContainerItem&gt;**](ContainerItem.md) | A list of container item details. | 
