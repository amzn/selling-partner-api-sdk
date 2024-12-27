# # Invoice

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**date** | **\DateTime** | The date and time the invoice is issued. Values are in [ISO 8601](https://developer-docs.amazon.com/sp-api/docs/iso-8601) date-time format. | [optional]
**error_code** | **string** | If the invoice is in an error state, this attribute displays the error code. | [optional]
**external_invoice_id** | **string** | The invoice identifier that is used by an external party. This is typically the government agency that authorized the invoice. | [optional]
**gov_response** | **string** | The response message from the government authority when there is an error during invoice issuance. | [optional]
**id** | **string** | The invoice identifier. | [optional]
**invoice_type** | **string** | The classification of the invoice type. This varies across marketplaces. Use the &#x60;getInvoicesAttributes&#x60; operation to check &#x60;invoiceType&#x60; options. | [optional]
**series** | **string** | Use this identifier in conjunction with &#x60;externalInvoiceId&#x60; to identify invoices from the same seller. | [optional]
**status** | **string** | The invoice status classification. Use the &#x60;getInvoicesAttributes&#x60; operation to check invoice status options. | [optional]
**transaction_ids** | [**\OpenAPI\Client\Model\invoices\TransactionIdentifier[]**](TransactionIdentifier.md) | List with identifiers for the transactions associated to the invoice. | [optional]
**transaction_type** | **string** | Classification of the transaction that originated this invoice. Use the &#x60;getInvoicesAttributes&#x60; operation to check &#x60;transactionType&#x60; options. | [optional]

[[Back to Model list]](../../README.md#models) [[Back to API list]](../../README.md#endpoints) [[Back to README]](../../README.md)
