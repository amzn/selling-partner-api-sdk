# OneClickShipmentRequest

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**shipTo** | [**Address**](Address.md) |  |  [optional]
**shipFrom** | [**Address**](Address.md) |  | 
**returnTo** | [**Address**](Address.md) |  |  [optional]
**shipDate** | [**OffsetDateTime**](OffsetDateTime.md) | The ship date and time (the requested pickup). This defaults to the current date and time. |  [optional]
**packages** | [**PackageList**](PackageList.md) |  | 
**valueAddedServicesDetails** | [**OneClickShipmentValueAddedServiceDetails**](OneClickShipmentValueAddedServiceDetails.md) |  |  [optional]
**taxDetails** | [**TaxDetailList**](TaxDetailList.md) |  |  [optional]
**channelDetails** | [**ChannelDetails**](ChannelDetails.md) |  | 
**labelSpecifications** | [**RequestedDocumentSpecification**](RequestedDocumentSpecification.md) |  | 
**serviceSelection** | [**ServiceSelection**](ServiceSelection.md) |  | 
**shipperInstruction** | [**ShipperInstruction**](ShipperInstruction.md) |  |  [optional]
**destinationAccessPointDetails** | [**AccessPointDetails**](AccessPointDetails.md) |  |  [optional]
