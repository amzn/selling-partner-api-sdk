# # TransportationDetails

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ship_mode** | **string** | The type of shipment. | [optional]
**transportation_mode** | **string** | The mode of transportation for this shipment. | [optional]
**shipped_date** | **\DateTime** | Date when shipment is performed by the Vendor to Buyer | [optional]
**estimated_delivery_date** | **\DateTime** | Estimated Date on which shipment will be delivered from Vendor to Buyer | [optional]
**shipment_delivery_date** | **\DateTime** | Date on which shipment will be delivered from Vendor to Buyer | [optional]
**carrier_details** | [**\OpenAPI\Client\Model\vendor.shipments\CarrierDetails**](CarrierDetails.md) |  | [optional]
**bill_of_lading_number** | **string** | The Bill of Lading (BOL) number is a unique number assigned to each shipment of goods by the vendor or shipper during the creation of the Bill of Lading. This number must be unique for every shipment and cannot be a date/time or single character. The BOL numer is mandatory in Shipment Confirmation message for FTL and LTL shipments, and must match the paper BOL provided with the shipment. Instead of BOL, an alternative reference number (like Delivery Note Number) for the shipment can also be sent in this field. | [optional]

[[Back to Model list]](../../README.md#models) [[Back to API list]](../../README.md#endpoints) [[Back to README]](../../README.md)
