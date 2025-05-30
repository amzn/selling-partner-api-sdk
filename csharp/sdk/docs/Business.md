# software.amzn.spapi.Model.sellers.v1.Business
Information about the seller's business. Certain fields may be omitted depending on the seller's `businessType`.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | **string** | The registered business name. | 
**RegisteredBusinessAddress** | [**Address**](Address.md) |  | 
**CompanyRegistrationNumber** | **string** | The seller&#39;s company registration number, if applicable. This field will be absent for individual sellers and sole proprietorships. | [optional] 
**CompanyTaxIdentificationNumber** | **string** | The seller&#39;s company tax identification number, if applicable. This field will be present for certain business types only, such as sole proprietorships. | [optional] 
**NonLatinName** | **string** | The non-Latin script version of the registered business name, if applicable. | [optional] 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

