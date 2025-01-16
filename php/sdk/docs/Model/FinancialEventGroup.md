# # FinancialEventGroup

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**financial_event_group_id** | **string** | A unique identifier for the financial event group. | [optional]
**processing_status** | **string** | The processing status of the financial event group indicates whether the balance of the financial event group is settled.  Possible values:  * Open  * Closed | [optional]
**fund_transfer_status** | **string** | The status of the fund transfer. | [optional]
**original_total** | [**\OpenAPI\Client\Model\finances\v0\Currency**](Currency.md) |  | [optional]
**converted_total** | [**\OpenAPI\Client\Model\finances\v0\Currency**](Currency.md) |  | [optional]
**fund_transfer_date** | **\DateTime** | Fields with a schema type of date are in ISO 8601 date time format (for example GroupBeginDate). | [optional]
**trace_id** | **string** | The trace identifier used by sellers to look up transactions externally. | [optional]
**account_tail** | **string** | The account tail of the payment instrument. | [optional]
**beginning_balance** | [**\OpenAPI\Client\Model\finances\v0\Currency**](Currency.md) |  | [optional]
**financial_event_group_start** | **\DateTime** | Fields with a schema type of date are in ISO 8601 date time format (for example GroupBeginDate). | [optional]
**financial_event_group_end** | **\DateTime** | Fields with a schema type of date are in ISO 8601 date time format (for example GroupBeginDate). | [optional]

[[Back to Model list]](../../README.md#models) [[Back to API list]](../../README.md#endpoints) [[Back to README]](../../README.md)
