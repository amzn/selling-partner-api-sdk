# SellingPartnerApiForReplenishment.ListOffersResponseOffer

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**sku** | **String** | The SKU. This property is only supported for sellers and not for vendors. | [optional] 
**asin** | **String** | The Amazon Standard Identification Number (ASIN). | [optional] 
**marketplaceId** | **String** | The marketplace identifier. The supported marketplaces for both sellers and vendors are US, CA, ES, UK, FR, IT, IN, DE and JP. The supported marketplaces for vendors only are BR, AU, MX, AE and NL. Refer to [Marketplace IDs](https://developer-docs.amazon.com/sp-api/docs/marketplace-ids) to find the identifier for the marketplace. | [optional] 
**eligibility** | [**EligibilityStatus**](EligibilityStatus.md) |  | [optional] 
**offerProgramConfiguration** | [**OfferProgramConfiguration**](OfferProgramConfiguration.md) |  | [optional] 
**programType** | [**ProgramType**](ProgramType.md) |  | [optional] 
**vendorCodes** | **[String]** | A list of vendor codes associated with the offer. | [optional] 


