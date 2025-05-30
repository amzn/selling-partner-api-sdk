# software.amzn.spapi.Model.merchantFulfillment.v0.SellerInputDefinition
Specifies characteristics that apply to a seller input.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**IsRequired** | **bool** | When true, the additional input field is required. | 
**DataType** | **string** | The data type of the additional input field. | 
**Constraints** | [**List&lt;Constraint&gt;**](Constraint.md) | List of constraints. | 
**InputDisplayText** | **string** | The display text for the additional input field. | 
**InputTarget** | **InputTargetType** |  | [optional] 
**StoredValue** | [**AdditionalSellerInput**](AdditionalSellerInput.md) |  | 
**RestrictedSetValues** | **List&lt;string&gt;** | The set of fixed values in an additional seller input. | [optional] 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

