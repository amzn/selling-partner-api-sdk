# # GetFeatureSkuResult

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**marketplace_id** | **string** | The requested marketplace. |
**feature_name** | **string** | The name of the feature. |
**is_eligible** | **bool** | When true, the seller SKU is eligible for the requested feature. |
**ineligible_reasons** | **string[]** | A list of one or more reasons that the seller SKU is ineligibile for the feature.  Possible values: * &#x60;MERCHANT_NOT_ENROLLED&#x60; - The merchant isn&#39;t enrolled for the feature. * &#x60;SKU_NOT_ELIGIBLE&#x60; - The SKU doesn&#39;t reside in a warehouse that supports the feature. * &#x60;INVALID_SKU&#x60; - There is an issue with the SKU provided. | [optional]
**sku_info** | [**\OpenAPI\Client\Model\fulfillmentoutbound\FeatureSku**](FeatureSku.md) |  | [optional]

[[Back to Model list]](../../README.md#models) [[Back to API list]](../../README.md#endpoints) [[Back to README]](../../README.md)
