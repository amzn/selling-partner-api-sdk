# software.amzn.spapi.Model.fulfillment.outbound.v2020_07_01.GetFulfillmentPreviewRequest
The request body schema for the `getFulfillmentPreview` operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**MarketplaceId** | **string** | The marketplace the fulfillment order is placed against. | [optional] 
**Address** | [**Address**](Address.md) |  | 
**Items** | [**List&lt;GetFulfillmentPreviewItem&gt;**](GetFulfillmentPreviewItem.md) | An array of fulfillment preview item information. | 
**ShippingSpeedCategories** | [**List&lt;ShippingSpeedCategory&gt;**](ShippingSpeedCategory.md) | ShippingSpeedCategory List | [optional] 
**IncludeCODFulfillmentPreview** | **bool** | When true, returns all fulfillment order previews both for COD and not for COD. Otherwise, returns only fulfillment order previews that are not for COD. | [optional] 
**IncludeDeliveryWindows** | **bool** | When true, returns the &#x60;ScheduledDeliveryInfo&#x60; response object, which contains the available delivery windows for a Scheduled Delivery. The &#x60;ScheduledDeliveryInfo&#x60; response object can only be returned for fulfillment order previews with &#x60;ShippingSpeedCategories&#x60; &#x3D; &#x60;ScheduledDelivery&#x60;. | [optional] 
**FeatureConstraints** | [**List&lt;FeatureSettings&gt;**](FeatureSettings.md) | A list of features and their fulfillment policies to apply to the order. | [optional] 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

