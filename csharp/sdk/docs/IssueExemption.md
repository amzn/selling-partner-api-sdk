# software.amzn.spapi.Model.listings.items.v2021_08_01.IssueExemption
Conveying the status of the listed enforcement actions and, if applicable, provides information about the exemption's expiry date.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Status** | **string** | This field indicates the current exemption status for the listed enforcement actions. It can take values such as &#x60;EXEMPT&#x60;, signifying permanent exemption, &#x60;EXEMPT_UNTIL_EXPIRY_DATE&#x60; indicating temporary exemption until a specified date, or &#x60;NOT_EXEMPT&#x60; signifying no exemptions, and enforcement actions were already applied. | 
**ExpiryDate** | **DateTime** | Represents the timestamp, in ISO 8601 format, that specifies the date when the temporary exemptions expires, and Amazon begins enforcing the listed actions. | [optional] 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

