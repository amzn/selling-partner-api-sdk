# SellingPartnerApiForReplenishment.ListOfferMetricsRequestFilters

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**aggregationFrequency** | [**AggregationFrequency**](AggregationFrequency.md) |  | [optional] 
**timeInterval** | [**TimeInterval**](TimeInterval.md) |  | 
**timePeriodType** | [**TimePeriodType**](TimePeriodType.md) |  | 
**marketplaceId** | **String** | The marketplace identifier. The supported marketplaces for both sellers and vendors are US, CA, ES, UK, FR, IT, IN, DE and JP. The supported marketplaces for vendors only are BR, AU, MX, AE and NL. Refer to [Marketplace IDs](https://developer-docs.amazon.com/sp-api/docs/marketplace-ids) to find the identifier for the marketplace. | 
**programTypes** | [**[ProgramType]**](ProgramType.md) | A list of replenishment program types. | 
**asins** | **[String]** | A list of Amazon Standard Identification Numbers (ASINs). | [optional] 


