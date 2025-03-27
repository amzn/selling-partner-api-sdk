# TheSellingPartnerApiForAmazonWarehousingAndDistribution.InboundOrder

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**createdAt** | **Date** | Date when this order was created. | 
**destinationDetails** | [**DestinationDetails**](DestinationDetails.md) |  | [optional] 
**externalReferenceId** | **String** | Reference ID that can be used to correlate the order with partner resources. | [optional] 
**orderId** | **String** | Inbound order ID. | 
**orderStatus** | [**InboundStatus**](InboundStatus.md) |  | 
**originAddress** | [**Address**](Address.md) |  | 
**packagesToInbound** | [**[DistributionPackageQuantity]**](DistributionPackageQuantity.md) | List of packages to be inbounded. | 
**preferences** | [**InboundPreferences**](InboundPreferences.md) |  | [optional] 
**updatedAt** | **Date** | Date when this order was last updated. | [optional] 


