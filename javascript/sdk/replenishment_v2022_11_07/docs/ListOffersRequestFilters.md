# SellingPartnerApiForReplenishment.ListOffersRequestFilters

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**marketplaceId** | **String** | The marketplace identifier. The supported marketplaces for both sellers and vendors are US, CA, ES, UK, FR, IT, IN, DE and JP. The supported marketplaces for vendors only are BR, AU, MX, AE and NL. Refer to [Marketplace IDs](https://developer-docs.amazon.com/sp-api/docs/marketplace-ids) to find the identifier for the marketplace. | 
**skus** | **[String]** | A list of SKUs to filter. This filter is only supported for sellers and not for vendors. | [optional] 
**asins** | **[String]** | A list of Amazon Standard Identification Numbers (ASINs). | [optional] 
**eligibilities** | [**[EligibilityStatus]**](EligibilityStatus.md) | A list of eligibilities associated with an offer. | [optional] 
**preferences** | [**Preference**](Preference.md) |  | [optional] 
**promotions** | [**Promotion**](Promotion.md) |  | [optional] 
**programTypes** | [**[ProgramType]**](ProgramType.md) | A list of replenishment program types. | 


