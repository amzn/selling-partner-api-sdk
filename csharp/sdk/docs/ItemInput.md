# software.amzn.spapi.Model.fulfillment.inbound.v2024_03_20.ItemInput
Defines an item's input parameters.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Expiration** | **string** | The expiration date of the MSKU. In [ISO 8601](https://developer-docs.amazon.com/sp-api/docs/iso-8601) datetime format with pattern &#x60;YYYY-MM-DD&#x60;. Items with the same MSKU but different expiration dates cannot go into the same box. | [optional] 
**LabelOwner** | **LabelOwner** |  | 
**ManufacturingLotCode** | **string** | The manufacturing lot code. | [optional] 
**Msku** | **string** | The merchant SKU, a merchant-supplied identifier of a specific SKU. | 
**PrepOwner** | **PrepOwner** |  | 
**Quantity** | **int** | The number of units of the specified MSKU that will be shipped. | 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

