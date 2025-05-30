# software.amzn.spapi.Model.vendor.shipments.v1.TransportationDetails
Transportation details for this shipment.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ShipMode** | **string** | The type of shipment. | [optional] 
**TransportationMode** | **string** | The mode of transportation for this shipment. | [optional] 
**ShippedDate** | **DateTime** | Date when shipment is performed by the Vendor to Buyer | [optional] 
**EstimatedDeliveryDate** | **DateTime** | Estimated Date on which shipment will be delivered from Vendor to Buyer | [optional] 
**ShipmentDeliveryDate** | **DateTime** | Date on which shipment will be delivered from Vendor to Buyer | [optional] 
**CarrierDetails** | [**CarrierDetails**](CarrierDetails.md) |  | [optional] 
**BillOfLadingNumber** | **string** | The Bill of Lading (BOL) number is a unique number assigned to each shipment of goods by the vendor or shipper during the creation of the Bill of Lading. This number must be unique for every shipment and cannot be a date/time or single character. The BOL numer is mandatory in Shipment Confirmation message for FTL and LTL shipments, and must match the paper BOL provided with the shipment. Instead of BOL, an alternative reference number (like Delivery Note Number) for the shipment can also be sent in this field. | [optional] 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

