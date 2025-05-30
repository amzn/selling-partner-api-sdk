# software.amzn.spapi.Model.shipping.v2.RequestedDocumentSpecification
The document specifications requested. For calls to the purchaseShipment operation, the shipment purchase fails if the specified document specifications are not among those returned in the response to the getRates operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Format** | **DocumentFormat** |  | 
**Size** | [**DocumentSize**](DocumentSize.md) |  | 
**Dpi** | **int** | The dots per inch (DPI) value used in printing. This value represents a measure of the resolution of the document. | [optional] 
**PageLayout** | **string** | Indicates the position of the label on the paper. Should be the same value as returned in getRates response. | [optional] 
**NeedFileJoining** | **bool** | When true, files should be stitched together. Otherwise, files should be returned separately. Defaults to false. | 
**RequestedDocumentTypes** | [**List&lt;DocumentType&gt;**](DocumentType.md) | A list of the document types requested. | 
**RequestedLabelCustomization** | [**RequestedLabelCustomization**](RequestedLabelCustomization.md) |  | [optional] 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

