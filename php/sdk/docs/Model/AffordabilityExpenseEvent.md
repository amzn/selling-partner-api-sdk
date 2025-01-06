# # AffordabilityExpenseEvent

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**amazon_order_id** | **string** | An Amazon-defined identifier for an order. | [optional]
**posted_date** | **\DateTime** | Fields with a schema type of date are in ISO 8601 date time format (for example GroupBeginDate). | [optional]
**marketplace_id** | **string** | An encrypted, Amazon-defined marketplace identifier. | [optional]
**transaction_type** | **string** | Indicates the type of transaction.   Possible values:  * Charge - For an affordability promotion expense.  * Refund - For an affordability promotion expense reversal. | [optional]
**base_expense** | [**\OpenAPI\Client\Model\financesV0\Currency**](Currency.md) |  | [optional]
**tax_type_cgst** | [**\OpenAPI\Client\Model\financesV0\Currency**](Currency.md) |  |
**tax_type_sgst** | [**\OpenAPI\Client\Model\financesV0\Currency**](Currency.md) |  |
**tax_type_igst** | [**\OpenAPI\Client\Model\financesV0\Currency**](Currency.md) |  |
**total_expense** | [**\OpenAPI\Client\Model\financesV0\Currency**](Currency.md) |  | [optional]

[[Back to Model list]](../../README.md#models) [[Back to API list]](../../README.md#endpoints) [[Back to README]](../../README.md)
