# # FailedAdhocDisbursementEvent

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**funds_transfers_type** | **string** | The type of fund transfer.   Example \&quot;Refund\&quot; | [optional]
**transfer_id** | **string** | The transfer identifier. | [optional]
**disbursement_id** | **string** | The disbursement identifier. | [optional]
**payment_disbursement_type** | **string** | The type of payment for disbursement.   Example &#x60;CREDIT_CARD&#x60; | [optional]
**status** | **string** | The status of the failed &#x60;AdhocDisbursement&#x60;.   Example &#x60;HARD_DECLINED&#x60; | [optional]
**transfer_amount** | [**\OpenAPI\Client\Model\financesV0\Currency**](Currency.md) |  | [optional]
**posted_date** | **\DateTime** | Fields with a schema type of date are in ISO 8601 date time format (for example GroupBeginDate). | [optional]

[[Back to Model list]](../../README.md#models) [[Back to API list]](../../README.md#endpoints) [[Back to README]](../../README.md)
