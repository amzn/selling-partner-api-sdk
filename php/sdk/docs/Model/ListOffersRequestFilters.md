# # ListOffersRequestFilters

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**marketplace_id** | **string** | The marketplace identifier. The supported marketplaces for both sellers and vendors are US, CA, ES, UK, FR, IT, IN, DE and JP. The supported marketplaces for vendors only are BR, AU, MX, AE and NL. Refer to [Marketplace IDs](https://developer-docs.amazon.com/sp-api/docs/marketplace-ids) to find the identifier for the marketplace. |
**skus** | **string[]** | A list of SKUs to filter. This filter is only supported for sellers and not for vendors. | [optional]
**asins** | **string[]** | A list of Amazon Standard Identification Numbers (ASINs). | [optional]
**eligibilities** | [**\OpenAPI\Client\Model\replenishment\EligibilityStatus[]**](EligibilityStatus.md) | A list of eligibilities associated with an offer. | [optional]
**preferences** | [**\OpenAPI\Client\Model\replenishment\Preference**](Preference.md) |  | [optional]
**promotions** | [**\OpenAPI\Client\Model\replenishment\Promotion**](Promotion.md) |  | [optional]
**program_types** | [**\OpenAPI\Client\Model\replenishment\ProgramType[]**](ProgramType.md) | A list of replenishment program types. |

[[Back to Model list]](../../README.md#models) [[Back to API list]](../../README.md#endpoints) [[Back to README]](../../README.md)
