# software.amzn.spapi.Model.messaging.v1.CreateWarrantyRequest
The request schema for the createWarranty operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Attachments** | [**List&lt;Attachment&gt;**](Attachment.md) | Attachments to include in the message to the buyer. If any text is included in the attachment, the text must be written in the buyer&#39;s language of preference, which can be retrieved from the GetAttributes operation. | [optional] 
**CoverageStartDate** | **DateTime** | The start date of the warranty coverage to include in the message to the buyer. | [optional] 
**CoverageEndDate** | **DateTime** | The end date of the warranty coverage to include in the message to the buyer. | [optional] 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

