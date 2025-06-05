# software.amzn.spapi.Model.fulfillment.inbound.v2024_03_20.Box
Contains information about a box that is used in the inbound plan. The box is a container that holds multiple items.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**BoxId** | **string** | The ID provided by Amazon that identifies a given box. This ID is comprised of the external shipment ID (which is generated after transportation has been confirmed) and the index of the box. | [optional] 
**ContentInformationSource** | **BoxContentInformationSource** |  | [optional] 
**DestinationRegion** | [**Region**](Region.md) |  | [optional] 
**Dimensions** | [**Dimensions**](Dimensions.md) |  | [optional] 
**ExternalContainerIdentifier** | **string** | The external identifier for this container / box. | [optional] 
**ExternalContainerIdentifierType** | **string** | Type of the external identifier used. Can be: &#x60;AMAZON&#x60;, &#x60;SSCC&#x60;. | [optional] 
**Items** | [**List&lt;Item&gt;**](Item.md) | Items contained within the box. | [optional] 
**PackageId** | **string** | Primary key to uniquely identify a Package (Box or Pallet). | 
**Quantity** | **int** | The number of containers where all other properties like weight or dimensions are identical. | [optional] 
**TemplateName** | **string** | Template name of the box. | [optional] 
**Weight** | [**Weight**](Weight.md) |  | [optional] 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

