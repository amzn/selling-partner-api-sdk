# # ListOffersResponseOffer

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**sku** | **string** | The SKU. This property is only supported for sellers and not for vendors. | [optional]
**asin** | **string** | The Amazon Standard Identification Number (ASIN). | [optional]
**marketplace_id** | **string** | The marketplace identifier. The supported marketplaces for both sellers and vendors are US, CA, ES, UK, FR, IT, IN, DE and JP. The supported marketplaces for vendors only are BR, AU, MX, AE and NL. Refer to [Marketplace IDs](https://developer-docs.amazon.com/sp-api/docs/marketplace-ids) to find the identifier for the marketplace. | [optional]
**eligibility** | [**\OpenAPI\Client\Model\replenishment\EligibilityStatus**](EligibilityStatus.md) |  | [optional]
**offer_program_configuration** | [**\OpenAPI\Client\Model\replenishment\OfferProgramConfiguration**](OfferProgramConfiguration.md) |  | [optional]
**program_type** | [**\OpenAPI\Client\Model\replenishment\ProgramType**](ProgramType.md) |  | [optional]
**vendor_codes** | **string[]** | A list of vendor codes associated with the offer. | [optional]

[[Back to Model list]](../../README.md#models) [[Back to API list]](../../README.md#endpoints) [[Back to README]](../../README.md)
