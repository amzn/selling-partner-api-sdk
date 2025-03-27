# TheSellingPartnerApiForFbaInboundOperations.PackingOption

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**discounts** | [**[Incentive]**](Incentive.md) | Discount for the offered option. | 
**expiration** | **Date** | The time at which this packing option is no longer valid. In [ISO 8601](https://developer-docs.amazon.com/sp-api/docs/iso-8601) datetime format with pattern &#x60;yyyy-MM-ddTHH:mm:ss.sssZ&#x60;. | [optional] 
**fees** | [**[Incentive]**](Incentive.md) | Fee for the offered option. | 
**packingGroups** | **[String]** | Packing group IDs. | 
**packingOptionId** | **String** | Identifier of a packing option. | 
**status** | **String** | The status of the packing option. Possible values: &#x60;OFFERED&#x60;, &#x60;ACCEPTED&#x60;, &#x60;EXPIRED&#x60;. | 
**supportedConfigurations** | [**[PackingConfiguration]**](PackingConfiguration.md) | A list of possible configurations for this option. | 
**supportedShippingConfigurations** | [**[ShippingConfiguration]**](ShippingConfiguration.md) | **This field is deprecated**. Use the &#x60;shippingRequirements&#x60; property under &#x60;supportedConfigurations&#x60; instead. List of supported shipping modes. | 


