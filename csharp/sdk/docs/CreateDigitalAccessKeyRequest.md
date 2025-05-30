# software.amzn.spapi.Model.messaging.v1.CreateDigitalAccessKeyRequest
The request schema for the `createDigitalAccessKey` operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Text** | **string** | The text that is sent to the buyer. Only links that are related to the digital access key are allowed. Do not include HTML or email addresses. The text must be written in the buyer&#39;s preferred language, which you can retrieve from the &#x60;GetAttributes&#x60; operation. | [optional] 
**Attachments** | [**List&lt;Attachment&gt;**](Attachment.md) | Attachments that you want to include in the message to the buyer. | [optional] 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

