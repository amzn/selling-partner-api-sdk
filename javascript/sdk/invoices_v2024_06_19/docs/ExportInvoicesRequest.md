# TheSellingPartnerApiForInvoices.ExportInvoicesRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**dateEnd** | **Date** | The latest invoice creation date for invoices that you want to include in the response. Dates are in [ISO 8601](https://developer-docs.amazon.com/sp-api/docs/iso-8601) date-time format. The default is the time of the request. | [optional] 
**dateStart** | **Date** | The earliest invoice creation date for invoices that you want to include in the response. Dates are in [ISO 8601](https://developer-docs.amazon.com/sp-api/docs/iso-8601) date-time format. The default is 24 hours prior to the time of the request. | [optional] 
**externalInvoiceId** | **String** | The external ID of the invoices you want included in the response. | [optional] 
**fileFormat** | [**FileFormat**](FileFormat.md) |  | [optional] 
**invoiceType** | **String** | The marketplace-specific classification of the invoice type. Use the &#x60;getInvoicesAttributes&#x60; operation to check &#x60;invoiceType&#x60; options. | [optional] 
**marketplaceId** | **String** | The ID of the marketplace from which you want the invoices. | 
**series** | **String** | The series number of the invoices you want included in the response. | [optional] 
**statuses** | **[String]** | A list of statuses that you can use to filter invoices. Use the &#x60;getInvoicesAttributes&#x60; operation to check invoice status options.  Min count: 1 | [optional] 
**transactionIdentifier** | [**TransactionIdentifier**](TransactionIdentifier.md) |  | [optional] 
**transactionType** | **String** | The marketplace-specific classification of the transaction type for which the invoice was created. Use the &#x60;getInvoicesAttributes&#x60; operation to check &#x60;transactionType&#x60; options | [optional] 


