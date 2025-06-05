# software.amzn.spapi.Model.invoices.v2024_06_19.ExportInvoicesRequest
The information required to create the export request.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**DateEnd** | **DateOnly** | The latest invoice creation date for invoices that you want to include in the response. Dates are in [ISO 8601](https://developer-docs.amazon.com/sp-api/docs/iso-8601) date-time format. The default is the time of the request. | [optional] 
**DateStart** | **DateOnly** | The earliest invoice creation date for invoices that you want to include in the response. Dates are in [ISO 8601](https://developer-docs.amazon.com/sp-api/docs/iso-8601) date-time format. The default is 24 hours prior to the time of the request. | [optional] 
**ExternalInvoiceId** | **string** | The external ID of the invoices you want included in the response. | [optional] 
**FileFormat** | **FileFormat** |  | [optional] 
**InvoiceType** | **string** | The marketplace-specific classification of the invoice type. Use the &#x60;getInvoicesAttributes&#x60; operation to check &#x60;invoiceType&#x60; options. | [optional] 
**MarketplaceId** | **string** | The ID of the marketplace from which you want the invoices. | 
**Series** | **string** | The series number of the invoices you want included in the response. | [optional] 
**Statuses** | **List&lt;string&gt;** | A list of statuses that you can use to filter invoices. Use the &#x60;getInvoicesAttributes&#x60; operation to check invoice status options.  Min count: 1 | [optional] 
**TransactionIdentifier** | [**TransactionIdentifier**](TransactionIdentifier.md) |  | [optional] 
**TransactionType** | **string** | The marketplace-specific classification of the transaction type for which the invoice was created. Use the &#x60;getInvoicesAttributes&#x60; operation to check &#x60;transactionType&#x60; options | [optional] 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

