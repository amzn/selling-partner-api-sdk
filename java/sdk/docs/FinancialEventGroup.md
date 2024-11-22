# FinancialEventGroup

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**financialEventGroupId** | **String** | A unique identifier for the financial event group. |  [optional]
**processingStatus** | **String** | The processing status of the financial event group indicates whether the balance of the financial event group is settled.  Possible values:  * Open  * Closed |  [optional]
**fundTransferStatus** | **String** | The status of the fund transfer. |  [optional]
**originalTotal** | [**Currency**](Currency.md) |  |  [optional]
**convertedTotal** | [**Currency**](Currency.md) |  |  [optional]
**fundTransferDate** | [**OffsetDateTime**](OffsetDateTime.md) |  |  [optional]
**traceId** | **String** | The trace identifier used by sellers to look up transactions externally. |  [optional]
**accountTail** | **String** | The account tail of the payment instrument. |  [optional]
**beginningBalance** | [**Currency**](Currency.md) |  |  [optional]
**financialEventGroupStart** | [**OffsetDateTime**](OffsetDateTime.md) |  |  [optional]
**financialEventGroupEnd** | [**OffsetDateTime**](OffsetDateTime.md) |  |  [optional]
