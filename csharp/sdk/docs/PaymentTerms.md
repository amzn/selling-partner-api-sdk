# software.amzn.spapi.Model.vendor.invoices.v1.PaymentTerms
Terms of the payment for the invoice. The basis of the payment terms is the invoice date.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** | **string** | The payment term type for the invoice. | [optional] 
**DiscountPercent** | **string** | A decimal number with no loss of precision. Useful when precision loss is unacceptable, as with currencies. Follows RFC7159 for number representation. &lt;br&gt;**Pattern** : &#x60;^-?(0|([1-9]\\d*))(\\.\\d+)?([eE][+-]?\\d+)?$&#x60;. | [optional] 
**DiscountDueDays** | **decimal** | The number of calendar days from the Base date (Invoice date) until the discount is no longer valid. | [optional] 
**NetDueDays** | **decimal** | The number of calendar days from the base date (invoice date) until the total amount on the invoice is due. | [optional] 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

