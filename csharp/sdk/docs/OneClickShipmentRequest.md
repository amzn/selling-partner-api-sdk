# software.amzn.spapi.Model.shipping.v2.OneClickShipmentRequest
The request schema for the OneClickShipment operation. When the channelType is not Amazon, shipTo is required and when channelType is Amazon shipTo is ignored.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ShipTo** | [**Address**](Address.md) |  | [optional] 
**ShipFrom** | [**Address**](Address.md) |  | 
**ReturnTo** | [**Address**](Address.md) |  | [optional] 
**ShipDate** | **DateTime** | The ship date and time (the requested pickup). This defaults to the current date and time. | [optional] 
**GoodsOwner** | [**GoodsOwner**](GoodsOwner.md) |  | [optional] 
**Packages** | [**List&lt;Package&gt;**](Package.md) | A list of packages to be shipped through a shipping service offering. | 
**ValueAddedServicesDetails** | [**List&lt;OneClickShipmentValueAddedService&gt;**](OneClickShipmentValueAddedService.md) | The value-added services to be added to a shipping service purchase. | [optional] 
**TaxDetails** | [**List&lt;TaxDetail&gt;**](TaxDetail.md) | A list of tax detail information. | [optional] 
**ChannelDetails** | [**ChannelDetails**](ChannelDetails.md) |  | 
**LabelSpecifications** | [**RequestedDocumentSpecification**](RequestedDocumentSpecification.md) |  | 
**ServiceSelection** | [**ServiceSelection**](ServiceSelection.md) |  | 
**ShipperInstruction** | [**ShipperInstruction**](ShipperInstruction.md) |  | [optional] 
**DestinationAccessPointDetails** | [**AccessPointDetails**](AccessPointDetails.md) |  | [optional] 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

