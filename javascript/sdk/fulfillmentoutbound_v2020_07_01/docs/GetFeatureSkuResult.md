# SellingPartnerApisForFulfillmentOutbound.GetFeatureSkuResult

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**marketplaceId** | **String** | The requested marketplace. | 
**featureName** | **String** | The name of the feature. | 
**isEligible** | **Boolean** | When true, the seller SKU is eligible for the requested feature. | 
**ineligibleReasons** | **[String]** | A list of one or more reasons that the seller SKU is ineligibile for the feature.  Possible values: * &#x60;MERCHANT_NOT_ENROLLED&#x60; - The merchant isn&#39;t enrolled for the feature. * &#x60;SKU_NOT_ELIGIBLE&#x60; - The SKU doesn&#39;t reside in a warehouse that supports the feature. * &#x60;INVALID_SKU&#x60; - There is an issue with the SKU provided. | [optional] 
**skuInfo** | [**FeatureSku**](FeatureSku.md) |  | [optional] 


