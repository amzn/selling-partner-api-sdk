# ShipmentInformation

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**vendorDetails** | [**VendorDetails**](VendorDetails.md) |  |  [optional]
**buyerReferenceNumber** | **String** | Buyer Reference number which is a unique number. |  [optional]
**shipToParty** | [**PartyIdentification**](PartyIdentification.md) |  |  [optional]
**shipFromParty** | [**PartyIdentification**](PartyIdentification.md) |  |  [optional]
**warehouseId** | **String** | Vendor Warehouse ID from where the shipment is scheduled to be picked up by buyer / Carrier. |  [optional]
**masterTrackingId** | **String** | Unique Id with  which  the shipment can be tracked for Small Parcels. |  [optional]
**totalLabelCount** | **Integer** | Number of Labels that are created as part of this shipment. |  [optional]
**shipMode** | [**ShipModeEnum**](#ShipModeEnum) | Type of shipment whether it is Small Parcel |  [optional]

<a name="ShipModeEnum"></a>
## Enum: ShipModeEnum
Name | Value
---- | -----
SMALLPARCEL | &quot;SmallParcel&quot;
LTL | &quot;LTL&quot;
