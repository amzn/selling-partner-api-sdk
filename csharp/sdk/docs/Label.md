# software.amzn.spapi.Model.merchantFulfillment.v0.Label
Data for creating a shipping label and dimensions for printing the label.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CustomTextForLabel** | **string** | Custom text to print on the label. Note: Custom text is only included on labels that are in ZPL format (ZPL203). FedEx does not support &#x60;CustomTextForLabel&#x60;. | [optional] 
**Dimensions** | [**LabelDimensions**](LabelDimensions.md) |  | 
**FileContents** | [**FileContents**](FileContents.md) |  | 
**LabelFormat** | **LabelFormat** |  | [optional] 
**StandardIdForLabel** | **StandardIdForLabel** |  | [optional] 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

