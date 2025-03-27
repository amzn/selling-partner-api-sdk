# TheSellingPartnerApiForFbaInboundOperations.BoxUpdateInput

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**contentInformationSource** | [**BoxContentInformationSource**](BoxContentInformationSource.md) |  | 
**dimensions** | [**Dimensions**](Dimensions.md) |  | 
**items** | [**[ItemInput]**](ItemInput.md) | The items and their quantity in the box. This must be empty if the box &#x60;contentInformationSource&#x60; is &#x60;BARCODE_2D&#x60; or &#x60;MANUAL_PROCESS&#x60;. | [optional] 
**packageId** | **String** | Primary key to uniquely identify a Box Package. PackageId must be provided if the intent is to update an existing box. Adding a new box will not require providing this value. Any existing PackageIds not provided will be treated as to-be-removed | [optional] 
**quantity** | **Number** | The number of containers where all other properties like weight or dimensions are identical. | 
**weight** | [**Weight**](Weight.md) |  | 


