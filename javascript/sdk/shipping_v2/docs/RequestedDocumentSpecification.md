# AmazonShippingApi.RequestedDocumentSpecification

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**format** | [**DocumentFormat**](DocumentFormat.md) |  | 
**size** | [**DocumentSize**](DocumentSize.md) |  | 
**dpi** | **Number** | The dots per inch (DPI) value used in printing. This value represents a measure of the resolution of the document. | [optional] 
**pageLayout** | **String** | Indicates the position of the label on the paper. Should be the same value as returned in getRates response. | [optional] 
**needFileJoining** | **Boolean** | When true, files should be stitched together. Otherwise, files should be returned separately. Defaults to false. | 
**requestedDocumentTypes** | [**[DocumentType]**](DocumentType.md) | A list of the document types requested. | 
**requestedLabelCustomization** | [**RequestedLabelCustomization**](RequestedLabelCustomization.md) |  | [optional] 


