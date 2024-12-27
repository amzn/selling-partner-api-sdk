# # Export

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**error_message** | **string** | When the export generation fails, this attribute contains a description of the error. | [optional]
**export_id** | **string** | The export identifier. | [optional]
**generate_export_finished_at** | **\DateTime** | The date and time when the export generation finished. Vales are in [ISO 8601](https://developer-docs.amazon.com/sp-api/docs/iso-8601) date-time format. | [optional]
**generate_export_started_at** | **\DateTime** | The date and time when the export generation started. Values are in [ISO 8601](https://developer-docs.amazon.com/sp-api/docs/iso-8601) date-time format. | [optional]
**invoices_document_ids** | **string[]** | The identifier for the export documents. To get the information required to retrieve the export document&#39;s contents, pass each ID in the &#x60;getInvoicesDocument&#x60; operation.  This list is empty until the status is &#x60;DONE&#x60;. | [optional]
**status** | [**\OpenAPI\Client\Model\invoices\ExportStatus**](ExportStatus.md) |  | [optional]

[[Back to Model list]](../../README.md#models) [[Back to API list]](../../README.md#endpoints) [[Back to README]](../../README.md)
