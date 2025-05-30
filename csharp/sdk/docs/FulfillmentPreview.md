# software.amzn.spapi.Model.fulfillment.outbound.v2020_07_01.FulfillmentPreview
Information about a fulfillment order preview, including delivery and fee information based on shipping method.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ShippingSpeedCategory** | **ShippingSpeedCategory** |  | 
**ScheduledDeliveryInfo** | [**ScheduledDeliveryInfo**](ScheduledDeliveryInfo.md) |  | [optional] 
**IsFulfillable** | **bool** | When true, this fulfillment order preview is fulfillable. | 
**IsCODCapable** | **bool** | When true, this fulfillment order preview is for COD (Cash On Delivery). | 
**EstimatedShippingWeight** | [**Weight**](Weight.md) |  | [optional] 
**EstimatedFees** | [**List&lt;Fee&gt;**](Fee.md) | An array of fee type and cost pairs. | [optional] 
**FulfillmentPreviewShipments** | [**List&lt;FulfillmentPreviewShipment&gt;**](FulfillmentPreviewShipment.md) | An array of fulfillment preview shipment information. | [optional] 
**UnfulfillablePreviewItems** | [**List&lt;UnfulfillablePreviewItem&gt;**](UnfulfillablePreviewItem.md) | An array of unfulfillable preview item information. | [optional] 
**OrderUnfulfillableReasons** | **List&lt;string&gt;** | String list | [optional] 
**MarketplaceId** | **string** | The marketplace the fulfillment order is placed against. | 
**FeatureConstraints** | [**List&lt;FeatureSettings&gt;**](FeatureSettings.md) | A list of features and their fulfillment policies to apply to the order. | [optional] 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

