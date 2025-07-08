# software.amzn.spapi.Model.finances.v2024_06_19.Breakdown
Breakdown provides details regarding the money movement under the financial transaction. Breakdowns get categorized further into breakdown types, breakdown amounts, and further breakdowns into a hierarchical structure.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**BreakdownType** | **string** | The type of charge. | [optional] 
**BreakdownAmount** | [**Currency**](Currency.md) |  | [optional] 
**Breakdowns** | [**List&lt;Breakdown&gt;**](Breakdown.md) | A list of breakdowns that detail how the total amount is calculated for the transaction. | [optional] 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

