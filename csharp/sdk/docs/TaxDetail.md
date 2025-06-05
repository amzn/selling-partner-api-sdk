# software.amzn.spapi.Model.vendor.df.payments.v1.TaxDetail
Details of tax amount applied.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**TaxType** | **string** | Type of the tax applied. | 
**TaxRate** | **string** | A decimal number with no loss of precision. Useful when precision loss is unacceptable, as with currencies. Follows RFC7159 for number representation. &lt;br&gt;**Pattern** : &#x60;^-?(0|([1-9]\\d*))(\\.\\d+)?([eE][+-]?\\d+)?$&#x60;. | [optional] 
**TaxAmount** | [**Money**](Money.md) |  | 
**TaxableAmount** | [**Money**](Money.md) |  | [optional] 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

