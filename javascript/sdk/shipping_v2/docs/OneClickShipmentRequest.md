# AmazonShippingApi.OneClickShipmentRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**shipTo** | [**Address**](Address.md) |  | [optional] 
**shipFrom** | [**Address**](Address.md) |  | 
**returnTo** | [**Address**](Address.md) |  | [optional] 
**shipDate** | **Date** | The ship date and time (the requested pickup). This defaults to the current date and time. | [optional] 
**goodsOwner** | [**GoodsOwner**](GoodsOwner.md) |  | [optional] 
**packages** | [**[Package]**](Package.md) | A list of packages to be shipped through a shipping service offering. | 
**valueAddedServicesDetails** | [**[OneClickShipmentValueAddedService]**](OneClickShipmentValueAddedService.md) | The value-added services to be added to a shipping service purchase. | [optional] 
**taxDetails** | [**[TaxDetail]**](TaxDetail.md) | A list of tax detail information. | [optional] 
**channelDetails** | [**ChannelDetails**](ChannelDetails.md) |  | 
**labelSpecifications** | [**RequestedDocumentSpecification**](RequestedDocumentSpecification.md) |  | 
**serviceSelection** | [**ServiceSelection**](ServiceSelection.md) |  | 
**shipperInstruction** | [**ShipperInstruction**](ShipperInstruction.md) |  | [optional] 
**destinationAccessPointDetails** | [**AccessPointDetails**](AccessPointDetails.md) |  | [optional] 


