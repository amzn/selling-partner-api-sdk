# software.amzn.spapi.Model.datakiosk.v2023_11_15.GetDocumentResponse
The response for the `getDocument` operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**DocumentId** | **string** | The identifier for the Data Kiosk document. This identifier is unique only in combination with a selling partner account ID. | 
**DocumentUrl** | **string** | A presigned URL that can be used to retrieve the Data Kiosk document. This URL expires after 5 minutes. If the Data Kiosk document is compressed, the &#x60;Content-Encoding&#x60; header will indicate the compression algorithm.  **Note:** Most HTTP clients are capable of automatically decompressing downloaded files based on the &#x60;Content-Encoding&#x60; header. | 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

