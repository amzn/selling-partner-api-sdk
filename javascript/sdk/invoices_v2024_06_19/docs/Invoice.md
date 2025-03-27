# TheSellingPartnerApiForInvoices.Invoice

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**date** | **Date** | The date and time the invoice is issued. Values are in [ISO 8601](https://developer-docs.amazon.com/sp-api/docs/iso-8601) date-time format. | [optional] 
**errorCode** | **String** | If the invoice is in an error state, this attribute displays the error code. | [optional] 
**externalInvoiceId** | **String** | The invoice identifier that is used by an external party. This is typically the government agency that authorized the invoice. | [optional] 
**govResponse** | **String** | The response message from the government authority when there is an error during invoice issuance. | [optional] 
**id** | **String** | The invoice identifier. | [optional] 
**invoiceType** | **String** | The classification of the invoice type. This varies across marketplaces. Use the &#x60;getInvoicesAttributes&#x60; operation to check &#x60;invoiceType&#x60; options. | [optional] 
**series** | **String** | Use this identifier in conjunction with &#x60;externalInvoiceId&#x60; to identify invoices from the same seller. | [optional] 
**status** | **String** | The invoice status classification. Use the &#x60;getInvoicesAttributes&#x60; operation to check invoice status options. | [optional] 
**transactionIds** | [**[TransactionIdentifier]**](TransactionIdentifier.md) | List with identifiers for the transactions associated to the invoice. | [optional] 
**transactionType** | **String** | Classification of the transaction that originated this invoice. Use the &#x60;getInvoicesAttributes&#x60; operation to check &#x60;transactionType&#x60; options. | [optional] 


