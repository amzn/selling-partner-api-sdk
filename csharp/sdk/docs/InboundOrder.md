# software.amzn.spapi.Model.awd.v2024_05_09.InboundOrder
Represents an AWD inbound order.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CreatedAt** | **DateTime** | Date when this order was created. | 
**DestinationDetails** | [**DestinationDetails**](DestinationDetails.md) |  | [optional] 
**ExternalReferenceId** | **string** | Reference ID that can be used to correlate the order with partner resources. | [optional] 
**OrderId** | **string** | Inbound order ID. | 
**OrderStatus** | **InboundStatus** |  | 
**OriginAddress** | [**Address**](Address.md) |  | 
**PackagesToInbound** | [**List&lt;DistributionPackageQuantity&gt;**](DistributionPackageQuantity.md) | List of packages to be inbounded. | 
**Preferences** | [**InboundPreferences**](InboundPreferences.md) |  | [optional] 
**UpdatedAt** | **DateTime** | Date when this order was last updated. | [optional] 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

