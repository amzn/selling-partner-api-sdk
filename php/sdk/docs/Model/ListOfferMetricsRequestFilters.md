# # ListOfferMetricsRequestFilters

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**aggregation_frequency** | [**\OpenAPI\Client\Model\replenishment\AggregationFrequency**](AggregationFrequency.md) |  | [optional]
**time_interval** | [**\OpenAPI\Client\Model\replenishment\TimeInterval**](TimeInterval.md) |  |
**time_period_type** | [**\OpenAPI\Client\Model\replenishment\TimePeriodType**](TimePeriodType.md) |  |
**marketplace_id** | **string** | The marketplace identifier. The supported marketplaces for both sellers and vendors are US, CA, ES, UK, FR, IT, IN, DE and JP. The supported marketplaces for vendors only are BR, AU, MX, AE and NL. Refer to [Marketplace IDs](https://developer-docs.amazon.com/sp-api/docs/marketplace-ids) to find the identifier for the marketplace. |
**program_types** | [**\OpenAPI\Client\Model\replenishment\ProgramType[]**](ProgramType.md) | A list of replenishment program types. |
**asins** | **string[]** | A list of Amazon Standard Identification Numbers (ASINs). | [optional]

[[Back to Model list]](../../README.md#models) [[Back to API list]](../../README.md#endpoints) [[Back to README]](../../README.md)
