# software.amzn.spapi.Model.fulfillment.inbound.v2024_03_20.PackingOption
A packing option contains a set of pack groups plus additional information about the packing option, such as any discounts or fees if it's selected.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Discounts** | [**List&lt;Incentive&gt;**](Incentive.md) | Discount for the offered option. | 
**Expiration** | **DateTime** | The time at which this packing option is no longer valid. In [ISO 8601](https://developer-docs.amazon.com/sp-api/docs/iso-8601) datetime format with pattern &#x60;yyyy-MM-ddTHH:mm:ss.sssZ&#x60;. | [optional] 
**Fees** | [**List&lt;Incentive&gt;**](Incentive.md) | Fee for the offered option. | 
**PackingGroups** | **List&lt;string&gt;** | Packing group IDs. | 
**PackingOptionId** | **string** | Identifier of a packing option. | 
**Status** | **string** | The status of the packing option. Possible values: &#x60;OFFERED&#x60;, &#x60;ACCEPTED&#x60;, &#x60;EXPIRED&#x60;. | 
**SupportedConfigurations** | [**List&lt;PackingConfiguration&gt;**](PackingConfiguration.md) | A list of possible configurations for this option. | 
**SupportedShippingConfigurations** | [**List&lt;ShippingConfiguration&gt;**](ShippingConfiguration.md) | **This field is deprecated**. Use the &#x60;shippingRequirements&#x60; property under &#x60;supportedConfigurations&#x60; instead. List of supported shipping modes. | 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

