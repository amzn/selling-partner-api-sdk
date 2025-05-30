# software.amzn.spapi.Model.replenishment.v2022_11_07.ListOffersResponseOffer
An object which contains details about an offer.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Sku** | **string** | The SKU. This property is only supported for sellers and not for vendors. | [optional] 
**Asin** | **string** | The Amazon Standard Identification Number (ASIN). | [optional] 
**MarketplaceId** | **string** | The marketplace identifier. The supported marketplaces for both sellers and vendors are US, CA, ES, UK, FR, IT, IN, DE and JP. The supported marketplaces for vendors only are BR, AU, MX, AE and NL. Refer to [Marketplace IDs](https://developer-docs.amazon.com/sp-api/docs/marketplace-ids) to find the identifier for the marketplace. | [optional] 
**Eligibility** | **EligibilityStatus** |  | [optional] 
**OfferProgramConfiguration** | [**OfferProgramConfiguration**](OfferProgramConfiguration.md) |  | [optional] 
**ProgramType** | **ProgramType** |  | [optional] 
**VendorCodes** | **List&lt;string&gt;** | A list of vendor codes associated with the offer. | [optional] 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

