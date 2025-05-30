# software.amzn.spapi.Model.finances.v0.AffordabilityExpenseEvent
An expense related to an affordability promotion.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AmazonOrderId** | **string** | An Amazon-defined identifier for an order. | [optional] 
**PostedDate** | **DateTime** | Fields with a schema type of date are in ISO 8601 date time format (for example GroupBeginDate). | [optional] 
**MarketplaceId** | **string** | An encrypted, Amazon-defined marketplace identifier. | [optional] 
**TransactionType** | **string** | Indicates the type of transaction.   Possible values:  * Charge - For an affordability promotion expense.  * Refund - For an affordability promotion expense reversal. | [optional] 
**BaseExpense** | [**Currency**](Currency.md) |  | [optional] 
**TaxTypeCGST** | [**Currency**](Currency.md) |  | 
**TaxTypeSGST** | [**Currency**](Currency.md) |  | 
**TaxTypeIGST** | [**Currency**](Currency.md) |  | 
**TotalExpense** | [**Currency**](Currency.md) |  | [optional] 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

