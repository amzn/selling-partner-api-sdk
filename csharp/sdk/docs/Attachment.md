# software.amzn.spapi.Model.messaging.v1.Attachment
Represents a file that was uploaded to a destination that was created by the Uploads API [`createUploadDestinationForResource`](https://developer-docs.amazon.com/sp-api/docs/uploads-api-reference#post-uploads2020-11-01uploaddestinationsresource) operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**UploadDestinationId** | **string** | The identifier for the upload destination. To retrieve this value, call the Uploads API [&#x60;createUploadDestinationForResource&#x60;](https://developer-docs.amazon.com/sp-api/docs/uploads-api-reference#post-uploads2020-11-01uploaddestinationsresource) operation. | 
**FileName** | **string** | The name of the file, including the extension. This is the file name that will appear in the message. This does not need to match the file name of the file that you uploaded. | 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

