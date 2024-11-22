# FulfillmentPreview

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**shippingSpeedCategory** | [**ShippingSpeedCategory**](ShippingSpeedCategory.md) |  | 
**scheduledDeliveryInfo** | [**ScheduledDeliveryInfo**](ScheduledDeliveryInfo.md) |  |  [optional]
**isFulfillable** | **Boolean** | When true, this fulfillment order preview is fulfillable. | 
**isCODCapable** | **Boolean** | When true, this fulfillment order preview is for COD (Cash On Delivery). | 
**estimatedShippingWeight** | [**Weight**](Weight.md) |  |  [optional]
**estimatedFees** | [**FeeList**](FeeList.md) |  |  [optional]
**fulfillmentPreviewShipments** | [**FulfillmentPreviewShipmentList**](FulfillmentPreviewShipmentList.md) |  |  [optional]
**unfulfillablePreviewItems** | [**UnfulfillablePreviewItemList**](UnfulfillablePreviewItemList.md) |  |  [optional]
**orderUnfulfillableReasons** | [**StringList**](StringList.md) |  |  [optional]
**marketplaceId** | **String** | The marketplace the fulfillment order is placed against. | 
**featureConstraints** | [**List&lt;FeatureSettings&gt;**](FeatureSettings.md) | A list of features and their fulfillment policies to apply to the order. |  [optional]
