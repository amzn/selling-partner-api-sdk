# SellingPartnerApiForDirectFulfillmentShipping.ShippingLabel

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**purchaseOrderNumber** | **String** | This field will contain the Purchase Order Number for this order. | 
**sellingParty** | [**PartyIdentification**](PartyIdentification.md) |  | 
**shipFromParty** | [**PartyIdentification**](PartyIdentification.md) |  | 
**labelFormat** | **String** | Format of the label. | 
**labelData** | [**[LabelData]**](LabelData.md) | Provides the details of the packages in this shipment. | 



## Enum: LabelFormatEnum


* `PNG` (value: `"PNG"`)

* `ZPL` (value: `"ZPL"`)




