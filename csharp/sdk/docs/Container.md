# software.amzn.spapi.Model.vendor.df.shipping.v2021_12_28.Container
A container used for shipping and packing items.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ContainerType** | **string** | The type of container. | 
**ContainerIdentifier** | **string** | The container identifier. | 
**TrackingNumber** | **string** | The tracking number. | [optional] 
**ManifestId** | **string** | The manifest identifier. | [optional] 
**ManifestDate** | **string** | The date of the manifest. | [optional] 
**ShipMethod** | **string** | The shipment method. This property is required when calling the &#x60;submitShipmentConfirmations&#x60; operation, and optional otherwise. | [optional] 
**ScacCode** | **string** | SCAC code required for NA VOC vendors only. | [optional] 
**Carrier** | **string** | Carrier required for EU VOC vendors only. | [optional] 
**ContainerSequenceNumber** | **int** | An integer that must be submitted for multi-box shipments only, where one item may come in separate packages. | [optional] 
**Dimensions** | [**Dimensions**](Dimensions.md) |  | [optional] 
**Weight** | [**Weight**](Weight.md) |  | 
**PackedItems** | [**List&lt;PackedItem&gt;**](PackedItem.md) | A list of packed items. | 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

