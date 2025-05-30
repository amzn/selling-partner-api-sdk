# software.amzn.spapi.Model.invoices.v2024_06_19.Export
Detailed information about the export.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ErrorMessage** | **string** | When the export generation fails, this attribute contains a description of the error. | [optional] 
**ExportId** | **string** | The export identifier. | [optional] 
**GenerateExportFinishedAt** | **DateTime** | The date and time when the export generation finished. Vales are in [ISO 8601](https://developer-docs.amazon.com/sp-api/docs/iso-8601) date-time format. | [optional] 
**GenerateExportStartedAt** | **DateTime** | The date and time when the export generation started. Values are in [ISO 8601](https://developer-docs.amazon.com/sp-api/docs/iso-8601) date-time format. | [optional] 
**InvoicesDocumentIds** | **List&lt;string&gt;** | The identifier for the export documents. To get the information required to retrieve the export document&#39;s contents, pass each ID in the &#x60;getInvoicesDocument&#x60; operation.  This list is empty until the status is &#x60;DONE&#x60;. | [optional] 
**Status** | **ExportStatus** |  | [optional] 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

