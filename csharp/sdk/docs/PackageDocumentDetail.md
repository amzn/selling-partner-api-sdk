# software.amzn.spapi.Model.shipping.v2.PackageDocumentDetail
The post-purchase details of a package that will be shipped using a shipping service.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**PackageClientReferenceId** | **string** | A client provided unique identifier for a package being shipped. This value should be saved by the client to pass as a parameter to the getShipmentDocuments operation. | 
**PackageDocuments** | [**List&lt;PackageDocument&gt;**](PackageDocument.md) | A list of documents related to a package. | 
**TrackingId** | **string** | The carrier generated identifier for a package in a purchased shipment. | [optional] 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

