# software.amzn.spapi.Model.fulfillment.inbound.v2024_03_20.BoxUpdateInput
Input information for updating a box

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ContentInformationSource** | **BoxContentInformationSource** |  | 
**Dimensions** | [**Dimensions**](Dimensions.md) |  | 
**Items** | [**List&lt;ItemInput&gt;**](ItemInput.md) | The items and their quantity in the box. This must be empty if the box &#x60;contentInformationSource&#x60; is &#x60;BARCODE_2D&#x60; or &#x60;MANUAL_PROCESS&#x60;. | [optional] 
**PackageId** | **string** | Primary key to uniquely identify a Box Package. PackageId must be provided if the intent is to update an existing box. Adding a new box will not require providing this value. Any existing PackageIds not provided will be treated as to-be-removed | [optional] 
**Quantity** | **int** | The number of containers where all other properties like weight or dimensions are identical. | 
**Weight** | [**Weight**](Weight.md) |  | 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

