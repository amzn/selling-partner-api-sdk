# # CreateWarrantyRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**attachments** | [**\OpenAPI\Client\Model\messaging\Attachment[]**](Attachment.md) | Attachments to include in the message to the buyer. If any text is included in the attachment, the text must be written in the buyer&#39;s language of preference, which can be retrieved from the GetAttributes operation. | [optional]
**coverage_start_date** | **\DateTime** | The start date of the warranty coverage to include in the message to the buyer. | [optional]
**coverage_end_date** | **\DateTime** | The end date of the warranty coverage to include in the message to the buyer. | [optional]

[[Back to Model list]](../../README.md#models) [[Back to API list]](../../README.md#endpoints) [[Back to README]](../../README.md)
