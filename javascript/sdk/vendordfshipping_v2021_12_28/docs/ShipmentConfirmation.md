# SellingPartnerApiForDirectFulfillmentShipping.ShipmentConfirmation

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**purchaseOrderNumber** | **String** | Purchase order number corresponding to the shipment. | 
**shipmentDetails** | [**ShipmentDetails**](ShipmentDetails.md) |  | 
**sellingParty** | [**PartyIdentification**](PartyIdentification.md) |  | 
**shipFromParty** | [**PartyIdentification**](PartyIdentification.md) |  | 
**items** | [**[Item]**](Item.md) | Provide the details of the items in this shipment. If any of the item details field is common at a package or a pallet level, then provide them at the corresponding package. | 
**containers** | [**[Container]**](Container.md) | Provide the details of the items in this shipment. If any of the item details field is common at a package or a pallet level, then provide them at the corresponding package. | [optional] 


