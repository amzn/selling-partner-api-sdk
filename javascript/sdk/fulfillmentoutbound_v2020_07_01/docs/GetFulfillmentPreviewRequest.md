# SellingPartnerApisForFulfillmentOutbound.GetFulfillmentPreviewRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**marketplaceId** | **String** | The marketplace the fulfillment order is placed against. | [optional] 
**address** | [**Address**](Address.md) |  | 
**items** | [**[GetFulfillmentPreviewItem]**](GetFulfillmentPreviewItem.md) | An array of fulfillment preview item information. | 
**shippingSpeedCategories** | [**[ShippingSpeedCategory]**](ShippingSpeedCategory.md) | ShippingSpeedCategory List | [optional] 
**includeCODFulfillmentPreview** | **Boolean** | When true, returns all fulfillment order previews both for COD and not for COD. Otherwise, returns only fulfillment order previews that are not for COD. | [optional] 
**includeDeliveryWindows** | **Boolean** | When true, returns the &#x60;ScheduledDeliveryInfo&#x60; response object, which contains the available delivery windows for a Scheduled Delivery. The &#x60;ScheduledDeliveryInfo&#x60; response object can only be returned for fulfillment order previews with &#x60;ShippingSpeedCategories&#x60; &#x3D; &#x60;ScheduledDelivery&#x60;. | [optional] 
**featureConstraints** | [**[FeatureSettings]**](FeatureSettings.md) | A list of features and their fulfillment policies to apply to the order. | [optional] 


