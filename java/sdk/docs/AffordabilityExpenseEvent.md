# AffordabilityExpenseEvent

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**amazonOrderId** | **String** | An Amazon-defined identifier for an order. |  [optional]
**postedDate** | [**OffsetDateTime**](OffsetDateTime.md) |  |  [optional]
**marketplaceId** | **String** | An encrypted, Amazon-defined marketplace identifier. |  [optional]
**transactionType** | **String** | Indicates the type of transaction.   Possible values:  * Charge - For an affordability promotion expense.  * Refund - For an affordability promotion expense reversal. |  [optional]
**baseExpense** | [**Currency**](Currency.md) |  |  [optional]
**taxTypeCGST** | [**Currency**](Currency.md) |  | 
**taxTypeSGST** | [**Currency**](Currency.md) |  | 
**taxTypeIGST** | [**Currency**](Currency.md) |  | 
**totalExpense** | [**Currency**](Currency.md) |  |  [optional]
