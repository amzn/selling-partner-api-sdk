# software.amzn.spapi.Model.replenishment.v2022_11_07.ListOfferMetricsRequestFilters
Use these parameters to filter results. Any result must match all provided parameters. For any parameter that is an array, the result must match at least one element in the provided array.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AggregationFrequency** | **AggregationFrequency** |  | [optional] 
**TimeInterval** | [**TimeInterval**](TimeInterval.md) |  | 
**TimePeriodType** | **TimePeriodType** |  | 
**MarketplaceId** | **string** | The marketplace identifier. The supported marketplaces for both sellers and vendors are US, CA, ES, UK, FR, IT, IN, DE and JP. The supported marketplaces for vendors only are BR, AU, MX, AE and NL. Refer to [Marketplace IDs](https://developer-docs.amazon.com/sp-api/docs/marketplace-ids) to find the identifier for the marketplace. | 
**ProgramTypes** | [**List&lt;ProgramType&gt;**](ProgramType.md) | A list of replenishment program types. | 
**Asins** | **List&lt;string&gt;** | A list of Amazon Standard Identification Numbers (ASINs). | [optional] 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

