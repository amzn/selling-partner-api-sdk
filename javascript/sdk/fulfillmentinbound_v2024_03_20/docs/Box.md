# TheSellingPartnerApiForFbaInboundOperations.Box

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**boxId** | **String** | The ID provided by Amazon that identifies a given box. This ID is comprised of the external shipment ID (which is generated after transportation has been confirmed) and the index of the box. | [optional] 
**contentInformationSource** | [**BoxContentInformationSource**](BoxContentInformationSource.md) |  | [optional] 
**destinationRegion** | [**Region**](Region.md) |  | [optional] 
**dimensions** | [**Dimensions**](Dimensions.md) |  | [optional] 
**externalContainerIdentifier** | **String** | The external identifier for this container / box. | [optional] 
**externalContainerIdentifierType** | **String** | Type of the external identifier used. Can be: &#x60;AMAZON&#x60;, &#x60;SSCC&#x60;. | [optional] 
**items** | [**[Item]**](Item.md) | Items contained within the box. | [optional] 
**packageId** | **String** | Primary key to uniquely identify a Package (Box or Pallet). | 
**quantity** | **Number** | The number of containers where all other properties like weight or dimensions are identical. | [optional] 
**templateName** | **String** | Template name of the box. | [optional] 
**weight** | [**Weight**](Weight.md) |  | [optional] 


