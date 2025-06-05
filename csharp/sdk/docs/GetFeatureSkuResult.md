# software.amzn.spapi.Model.fulfillment.outbound.v2020_07_01.GetFeatureSkuResult
The payload for the `getFeatureSKU` operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**MarketplaceId** | **string** | The requested marketplace. | 
**FeatureName** | **string** | The name of the feature. | 
**IsEligible** | **bool** | When true, the seller SKU is eligible for the requested feature. | 
**IneligibleReasons** | **List&lt;string&gt;** | A list of one or more reasons that the seller SKU is ineligibile for the feature.  Possible values: * &#x60;MERCHANT_NOT_ENROLLED&#x60; - The merchant isn&#39;t enrolled for the feature. * &#x60;SKU_NOT_ELIGIBLE&#x60; - The SKU doesn&#39;t reside in a warehouse that supports the feature. * &#x60;INVALID_SKU&#x60; - There is an issue with the SKU provided. | [optional] 
**SkuInfo** | [**FeatureSku**](FeatureSku.md) |  | [optional] 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

