# software.amzn.spapi.Model.vendor.shipments.v1.Carton
Details of the carton/package being shipped.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CartonIdentifiers** | [**List&lt;ContainerIdentification&gt;**](ContainerIdentification.md) | A list of carton identifiers. | [optional] 
**CartonSequenceNumber** | **string** | Carton sequence number for the carton. The first carton will be 001, the second 002, and so on. This number is used as a reference to refer to this carton from the pallet level. | 
**Dimensions** | [**Dimensions**](Dimensions.md) |  | [optional] 
**Weight** | [**Weight**](Weight.md) |  | [optional] 
**TrackingNumber** | **string** | This is required to be provided for every carton in the small parcel shipments. | [optional] 
**Items** | [**List&lt;ContainerItem&gt;**](ContainerItem.md) | A list of container item details. | 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

