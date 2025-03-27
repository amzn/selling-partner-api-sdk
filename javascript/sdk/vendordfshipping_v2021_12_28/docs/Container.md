# SellingPartnerApiForDirectFulfillmentShipping.Container

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**containerType** | **String** | The type of container. | 
**containerIdentifier** | **String** | The container identifier. | 
**trackingNumber** | **String** | The tracking number. | [optional] 
**manifestId** | **String** | The manifest identifier. | [optional] 
**manifestDate** | **String** | The date of the manifest. | [optional] 
**shipMethod** | **String** | The shipment method. This property is required when calling the &#x60;submitShipmentConfirmations&#x60; operation, and optional otherwise. | [optional] 
**scacCode** | **String** | SCAC code required for NA VOC vendors only. | [optional] 
**carrier** | **String** | Carrier required for EU VOC vendors only. | [optional] 
**containerSequenceNumber** | **Number** | An integer that must be submitted for multi-box shipments only, where one item may come in separate packages. | [optional] 
**dimensions** | [**Dimensions**](Dimensions.md) |  | [optional] 
**weight** | [**Weight**](Weight.md) |  | 
**packedItems** | [**[PackedItem]**](PackedItem.md) | A list of packed items. | 



## Enum: ContainerTypeEnum


* `Carton` (value: `"Carton"`)

* `Pallet` (value: `"Pallet"`)




