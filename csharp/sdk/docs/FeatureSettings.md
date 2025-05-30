# software.amzn.spapi.Model.fulfillment.outbound.v2020_07_01.FeatureSettings
`FeatureSettings` allows users to apply fulfillment features to an order. To block an order from being shipped using Amazon Logistics (AMZL) and an AMZL tracking number, use `featureName` as `BLOCK_AMZL` and `featureFulfillmentPolicy` as `Required`. Blocking AMZL will incur an additional fee surcharge on your MCF orders and increase the risk of some of your orders being unfulfilled or delivered late if there are no alternative carriers available. Using `BLOCK_AMZL` in an order request will take precedence over your Seller Central account setting. To ship in non-Amazon branded packaging (blank boxes), use featureName `BLANK_BOX`.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**FeatureName** | **string** | The name of the feature. | [optional] 
**FeatureFulfillmentPolicy** | **string** | Specifies the policy to use when fulfilling an order. | [optional] 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

