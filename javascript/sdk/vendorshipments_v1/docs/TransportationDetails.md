# SellingPartnerApiForRetailProcurementShipments.TransportationDetails

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**shipMode** | **String** | The type of shipment. | [optional] 
**transportationMode** | **String** | The mode of transportation for this shipment. | [optional] 
**shippedDate** | **Date** | Date when shipment is performed by the Vendor to Buyer | [optional] 
**estimatedDeliveryDate** | **Date** | Estimated Date on which shipment will be delivered from Vendor to Buyer | [optional] 
**shipmentDeliveryDate** | **Date** | Date on which shipment will be delivered from Vendor to Buyer | [optional] 
**carrierDetails** | [**CarrierDetails**](CarrierDetails.md) |  | [optional] 
**billOfLadingNumber** | **String** | The Bill of Lading (BOL) number is a unique number assigned to each shipment of goods by the vendor or shipper during the creation of the Bill of Lading. This number must be unique for every shipment and cannot be a date/time or single character. The BOL numer is mandatory in Shipment Confirmation message for FTL and LTL shipments, and must match the paper BOL provided with the shipment. Instead of BOL, an alternative reference number (like Delivery Note Number) for the shipment can also be sent in this field. | [optional] 



## Enum: ShipModeEnum


* `TruckLoad` (value: `"TruckLoad"`)

* `LessThanTruckLoad` (value: `"LessThanTruckLoad"`)

* `SmallParcel` (value: `"SmallParcel"`)





## Enum: TransportationModeEnum


* `Road` (value: `"Road"`)

* `Air` (value: `"Air"`)

* `Ocean` (value: `"Ocean"`)




