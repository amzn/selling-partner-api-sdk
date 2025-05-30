# software.amzn.spapi.Model.fba.eligibility.v1.ItemEligibilityPreview
The response object which contains the ASIN, marketplaceId if required, eligibility program, the eligibility status (boolean), and a list of ineligibility reason codes.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Asin** | **string** | The ASIN for which eligibility was determined. | 
**MarketplaceId** | **string** | The marketplace for which eligibility was determined. | [optional] 
**Program** | **string** | The program for which eligibility was determined. | 
**IsEligibleForProgram** | **bool** | Indicates if the item is eligible for the program. | 
**IneligibilityReasonList** | **List&lt;ItemEligibilityPreview.IneligibilityReasonListEnum&gt;** | Potential Ineligibility Reason Codes. | [optional] 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

