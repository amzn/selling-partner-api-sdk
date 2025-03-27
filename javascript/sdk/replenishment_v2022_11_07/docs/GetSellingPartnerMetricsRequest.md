# SellingPartnerApiForReplenishment.GetSellingPartnerMetricsRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**aggregationFrequency** | [**AggregationFrequency**](AggregationFrequency.md) |  | [optional] 
**timeInterval** | [**TimeInterval**](TimeInterval.md) |  | 
**metrics** | [**[Metric]**](Metric.md) | The list of metrics requested. If no metric value is provided, data for all of the metrics will be returned. | [optional] 
**timePeriodType** | [**TimePeriodType**](TimePeriodType.md) |  | 
**marketplaceId** | **String** | The marketplace identifier. The supported marketplaces for both sellers and vendors are US, CA, ES, UK, FR, IT, IN, DE and JP. The supported marketplaces for vendors only are BR, AU, MX, AE and NL. Refer to [Marketplace IDs](https://developer-docs.amazon.com/sp-api/docs/marketplace-ids) to find the identifier for the marketplace. | 
**programTypes** | [**[ProgramType]**](ProgramType.md) | A list of replenishment program types. | 


