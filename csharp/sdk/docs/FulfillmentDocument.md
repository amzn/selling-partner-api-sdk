# software.amzn.spapi.Model.services.v1.FulfillmentDocument
Document that captured during service appointment fulfillment that portrays proof of completion

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**UploadDestinationId** | **string** | The identifier of the upload destination. Get this value by calling the &#x60;createServiceDocumentUploadDestination&#x60; operation of the Services API. | [optional] 
**ContentSha256** | **string** | Sha256 hash of the file content. This value is used to determine if the file has been corrupted or tampered with during transit. | [optional] 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

