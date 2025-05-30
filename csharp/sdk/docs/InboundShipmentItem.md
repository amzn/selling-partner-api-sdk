# software.amzn.spapi.Model.fulfillment.inbound.v0.InboundShipmentItem
Item information for an inbound shipment. Submitted with a call to the createInboundShipment or updateInboundShipment operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ShipmentId** | **string** | A shipment identifier originally returned by the createInboundShipmentPlan operation. | [optional] 
**SellerSKU** | **string** | The seller SKU of the item. | 
**FulfillmentNetworkSKU** | **string** | Amazon&#39;s fulfillment network SKU of the item. | [optional] 
**QuantityShipped** | **int** | The item quantity. | 
**QuantityReceived** | **int** | The item quantity. | [optional] 
**QuantityInCase** | **int** | The item quantity. | [optional] 
**ReleaseDate** | **DateOnly** | Type containing date in string format | [optional] 
**PrepDetailsList** | [**List&lt;PrepDetails&gt;**](PrepDetails.md) | A list of preparation instructions and who is responsible for that preparation. | [optional] 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

