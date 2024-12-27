# # GetDocumentResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**document_id** | **string** | The identifier for the Data Kiosk document. This identifier is unique only in combination with a selling partner account ID. |
**document_url** | **string** | A presigned URL that can be used to retrieve the Data Kiosk document. This URL expires after 5 minutes. If the Data Kiosk document is compressed, the &#x60;Content-Encoding&#x60; header will indicate the compression algorithm.  **Note:** Most HTTP clients are capable of automatically decompressing downloaded files based on the &#x60;Content-Encoding&#x60; header. |

[[Back to Model list]](../../README.md#models) [[Back to API list]](../../README.md#endpoints) [[Back to README]](../../README.md)
