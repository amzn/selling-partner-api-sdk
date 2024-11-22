# PackingOption

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**discounts** | [**List&lt;Incentive&gt;**](Incentive.md) | Discount for the offered option. | 
**expiration** | [**OffsetDateTime**](OffsetDateTime.md) | The time at which this packing option is no longer valid. In [ISO 8601](https://developer-docs.amazon.com/sp-api/docs/iso-8601) datetime format with pattern &#x60;yyyy-MM-ddTHH:mm:ss.sssZ&#x60;. |  [optional]
**fees** | [**List&lt;Incentive&gt;**](Incentive.md) | Fee for the offered option. | 
**packingGroups** | **List&lt;String&gt;** | Packing group IDs. | 
**packingOptionId** | **String** | Identifier of a packing option. | 
**status** | **String** | The status of the packing option. Possible values: &#x60;OFFERED&#x60;, &#x60;ACCEPTED&#x60;, &#x60;EXPIRED&#x60;. | 
**supportedShippingConfigurations** | [**List&lt;ShippingConfiguration&gt;**](ShippingConfiguration.md) | List of supported shipping modes. | 
