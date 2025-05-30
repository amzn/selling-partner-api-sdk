# software.amzn.spapi.Model.fulfillment.inbound.v0.InboundShipmentInfo
Information about the seller's inbound shipments. Returned by the listInboundShipments operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ShipmentId** | **string** | The shipment identifier submitted in the request. | [optional] 
**ShipmentName** | **string** | The name for the inbound shipment. | [optional] 
**ShipFromAddress** | [**Address**](Address.md) |  | 
**DestinationFulfillmentCenterId** | **string** | An Amazon fulfillment center identifier created by Amazon. | [optional] 
**ShipmentStatus** | **ShipmentStatus** |  | [optional] 
**LabelPrepType** | **LabelPrepType** |  | [optional] 
**AreCasesRequired** | **bool** | Indicates whether or not an inbound shipment contains case-packed boxes. When AreCasesRequired &#x3D; true for an inbound shipment, all items in the inbound shipment must be case packed. | 
**ConfirmedNeedByDate** | **DateOnly** | Type containing date in string format | [optional] 
**BoxContentsSource** | **BoxContentsSource** |  | [optional] 
**EstimatedBoxContentsFee** | [**BoxContentsFeeDetails**](BoxContentsFeeDetails.md) |  | [optional] 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

