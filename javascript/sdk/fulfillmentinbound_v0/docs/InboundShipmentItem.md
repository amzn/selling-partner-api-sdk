# SellingPartnerApiForFulfillmentInbound.InboundShipmentItem

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**shipmentId** | **String** | A shipment identifier originally returned by the createInboundShipmentPlan operation. | [optional] 
**sellerSKU** | **String** | The seller SKU of the item. | 
**fulfillmentNetworkSKU** | **String** | Amazon&#39;s fulfillment network SKU of the item. | [optional] 
**quantityShipped** | **Number** | The item quantity. | 
**quantityReceived** | **Number** | The item quantity. | [optional] 
**quantityInCase** | **Number** | The item quantity. | [optional] 
**releaseDate** | **Date** | Type containing date in string format | [optional] 
**prepDetailsList** | [**[PrepDetails]**](PrepDetails.md) | A list of preparation instructions and who is responsible for that preparation. | [optional] 


