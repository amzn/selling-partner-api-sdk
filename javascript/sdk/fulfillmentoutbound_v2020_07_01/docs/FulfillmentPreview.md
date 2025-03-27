# SellingPartnerApisForFulfillmentOutbound.FulfillmentPreview

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**shippingSpeedCategory** | [**ShippingSpeedCategory**](ShippingSpeedCategory.md) |  | 
**scheduledDeliveryInfo** | [**ScheduledDeliveryInfo**](ScheduledDeliveryInfo.md) |  | [optional] 
**isFulfillable** | **Boolean** | When true, this fulfillment order preview is fulfillable. | 
**isCODCapable** | **Boolean** | When true, this fulfillment order preview is for COD (Cash On Delivery). | 
**estimatedShippingWeight** | [**Weight**](Weight.md) |  | [optional] 
**estimatedFees** | [**[Fee]**](Fee.md) | An array of fee type and cost pairs. | [optional] 
**fulfillmentPreviewShipments** | [**[FulfillmentPreviewShipment]**](FulfillmentPreviewShipment.md) | An array of fulfillment preview shipment information. | [optional] 
**unfulfillablePreviewItems** | [**[UnfulfillablePreviewItem]**](UnfulfillablePreviewItem.md) | An array of unfulfillable preview item information. | [optional] 
**orderUnfulfillableReasons** | **[String]** | String list | [optional] 
**marketplaceId** | **String** | The marketplace the fulfillment order is placed against. | 
**featureConstraints** | [**[FeatureSettings]**](FeatureSettings.md) | A list of features and their fulfillment policies to apply to the order. | [optional] 


