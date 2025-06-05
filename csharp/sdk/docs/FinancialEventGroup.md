# software.amzn.spapi.Model.finances.v0.FinancialEventGroup
Information related to a financial event group.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**FinancialEventGroupId** | **string** | A unique identifier for the financial event group. | [optional] 
**ProcessingStatus** | **string** | The processing status of the financial event group indicates whether the balance of the financial event group is settled.  Possible values:  * Open  * Closed | [optional] 
**FundTransferStatus** | **string** | The status of the fund transfer. | [optional] 
**OriginalTotal** | [**Currency**](Currency.md) |  | [optional] 
**ConvertedTotal** | [**Currency**](Currency.md) |  | [optional] 
**FundTransferDate** | **DateTime** | Fields with a schema type of date are in ISO 8601 date time format (for example GroupBeginDate). | [optional] 
**TraceId** | **string** | The trace identifier used by sellers to look up transactions externally. | [optional] 
**AccountTail** | **string** | The account tail of the payment instrument. | [optional] 
**BeginningBalance** | [**Currency**](Currency.md) |  | [optional] 
**FinancialEventGroupStart** | **DateTime** | Fields with a schema type of date are in ISO 8601 date time format (for example GroupBeginDate). | [optional] 
**FinancialEventGroupEnd** | **DateTime** | Fields with a schema type of date are in ISO 8601 date time format (for example GroupBeginDate). | [optional] 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

