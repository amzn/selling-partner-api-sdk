# InboundShipmentInfo

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**shipmentId** | **String** | The shipment identifier submitted in the request. |  [optional]
**shipmentName** | **String** | The name for the inbound shipment. |  [optional]
**shipFromAddress** | [**Address**](Address.md) |  | 
**destinationFulfillmentCenterId** | **String** | An Amazon fulfillment center identifier created by Amazon. |  [optional]
**shipmentStatus** | [**ShipmentStatus**](ShipmentStatus.md) |  |  [optional]
**labelPrepType** | [**LabelPrepType**](LabelPrepType.md) |  |  [optional]
**areCasesRequired** | **Boolean** | Indicates whether or not an inbound shipment contains case-packed boxes. When AreCasesRequired &#x3D; true for an inbound shipment, all items in the inbound shipment must be case packed. | 
**confirmedNeedByDate** | [**LocalDate**](LocalDate.md) |  |  [optional]
**boxContentsSource** | [**BoxContentsSource**](BoxContentsSource.md) |  |  [optional]
**estimatedBoxContentsFee** | [**BoxContentsFeeDetails**](BoxContentsFeeDetails.md) |  |  [optional]
