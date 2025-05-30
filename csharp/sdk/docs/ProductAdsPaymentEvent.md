# software.amzn.spapi.Model.finances.v0.ProductAdsPaymentEvent
A Sponsored Products payment event.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**PostedDate** | **DateTime** | Fields with a schema type of date are in ISO 8601 date time format (for example GroupBeginDate). | [optional] 
**TransactionType** | **string** | Indicates if the transaction is for a charge or a refund.  Possible values:  * charge - Charge  * refund - Refund | [optional] 
**InvoiceId** | **string** | Identifier for the invoice that the transaction appears in. | [optional] 
**BaseValue** | [**Currency**](Currency.md) |  | [optional] 
**TaxValue** | [**Currency**](Currency.md) |  | [optional] 
**TransactionValue** | [**Currency**](Currency.md) |  | [optional] 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

