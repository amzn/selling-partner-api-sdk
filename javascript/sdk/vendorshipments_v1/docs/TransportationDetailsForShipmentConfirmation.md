# SellingPartnerApiForRetailProcurementShipments.TransportationDetailsForShipmentConfirmation

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**carrierScac** | **String** | Code that identifies the carrier for the shipment. The Standard Carrier Alpha Code (SCAC) is a unique two to four letter code used to identify a carrier. Carrier SCAC codes are assigned and maintained by the NMFTA (National Motor Freight Association). This field is mandatory for US, CA, MX shipment confirmations. | [optional] 
**carrierShipmentReferenceNumber** | **String** | The field also known as PRO number is a unique number assigned by the carrier. It is used to identify and track the shipment that goes out for delivery. This field is mandatory for UA, CA, MX shipment confirmations. | [optional] 
**transportationMode** | **String** | The mode of transportation for this shipment. | [optional] 
**billOfLadingNumber** | **String** | The Bill of Lading (BOL) number is a unique number assigned to each shipment of goods by the vendor or shipper during the creation of the Bill of Lading. This number must be unique for every shipment and cannot be a date/time or single character. The BOL numer is mandatory in Shipment Confirmation message for FTL and LTL shipments, and must match the paper BOL provided with the shipment. Instead of BOL, an alternative reference number (like Delivery Note Number) for the shipment can also be sent in this field. | [optional] 



## Enum: TransportationModeEnum


* `Road` (value: `"Road"`)

* `Air` (value: `"Air"`)

* `Ocean` (value: `"Ocean"`)




