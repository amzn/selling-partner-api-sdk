# software.amzn.spapi.Model.fulfillment.outbound.v2020_07_01.GetFeatureInventoryResult
The payload for the `getEligibileInventory` operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**MarketplaceId** | **string** | The requested marketplace. | 
**FeatureName** | **string** | The name of the feature. | 
**NextToken** | **string** | When present and not empty, pass this string token in the next request to return the next response page. | [optional] 
**FeatureSkus** | [**List&lt;FeatureSku&gt;**](FeatureSku.md) | An array of SKUs eligible for this feature and the quantity available. | [optional] 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

