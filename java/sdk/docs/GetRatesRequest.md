# GetRatesRequest

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**shipTo** | [**Address**](Address.md) |  |  [optional]
**shipFrom** | [**Address**](Address.md) |  | 
**returnTo** | [**Address**](Address.md) |  |  [optional]
**shipDate** | [**OffsetDateTime**](OffsetDateTime.md) | The ship date and time (the requested pickup). This defaults to the current date and time. |  [optional]
**shipperInstruction** | [**ShipperInstruction**](ShipperInstruction.md) |  |  [optional]
**packages** | [**PackageList**](PackageList.md) |  | 
**valueAddedServices** | [**ValueAddedServiceDetails**](ValueAddedServiceDetails.md) |  |  [optional]
**taxDetails** | [**TaxDetailList**](TaxDetailList.md) |  |  [optional]
**channelDetails** | [**ChannelDetails**](ChannelDetails.md) |  | 
**clientReferenceDetails** | [**ClientReferenceDetails**](ClientReferenceDetails.md) |  |  [optional]
**shipmentType** | [**ShipmentType**](ShipmentType.md) |  |  [optional]
**destinationAccessPointDetails** | [**AccessPointDetails**](AccessPointDetails.md) |  |  [optional]
