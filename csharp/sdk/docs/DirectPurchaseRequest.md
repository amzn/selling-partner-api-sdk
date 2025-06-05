# software.amzn.spapi.Model.shipping.v2.DirectPurchaseRequest
The request schema for the directPurchaseShipment operation. When the channel type is Amazon, the shipTo address is not required and will be ignored.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ShipTo** | [**Address**](Address.md) |  | [optional] 
**ShipFrom** | [**Address**](Address.md) |  | [optional] 
**ReturnTo** | [**Address**](Address.md) |  | [optional] 
**Packages** | [**List&lt;Package&gt;**](Package.md) | A list of packages to be shipped through a shipping service offering. | [optional] 
**ChannelDetails** | [**ChannelDetails**](ChannelDetails.md) |  | 
**LabelSpecifications** | [**RequestedDocumentSpecification**](RequestedDocumentSpecification.md) |  | [optional] 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

