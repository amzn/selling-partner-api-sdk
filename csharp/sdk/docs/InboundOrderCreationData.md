# software.amzn.spapi.Model.awd.v2024_05_09.InboundOrderCreationData
Payload for creating an inbound order.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ExternalReferenceId** | **string** | Reference ID that can be used to correlate the order with partner resources. | [optional] 
**OriginAddress** | [**Address**](Address.md) |  | 
**PackagesToInbound** | [**List&lt;DistributionPackageQuantity&gt;**](DistributionPackageQuantity.md) | List of packages to be inbounded. | 
**Preferences** | [**InboundPreferences**](InboundPreferences.md) |  | [optional] 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

