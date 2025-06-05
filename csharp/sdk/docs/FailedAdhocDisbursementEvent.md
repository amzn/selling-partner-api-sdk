# software.amzn.spapi.Model.finances.v0.FailedAdhocDisbursementEvent
Failed ad hoc disbursement event list.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**FundsTransfersType** | **string** | The type of fund transfer.   Example \&quot;Refund\&quot; | [optional] 
**TransferId** | **string** | The transfer identifier. | [optional] 
**DisbursementId** | **string** | The disbursement identifier. | [optional] 
**PaymentDisbursementType** | **string** | The type of payment for disbursement.   Example &#x60;CREDIT_CARD&#x60; | [optional] 
**Status** | **string** | The status of the failed &#x60;AdhocDisbursement&#x60;.   Example &#x60;HARD_DECLINED&#x60; | [optional] 
**TransferAmount** | [**Currency**](Currency.md) |  | [optional] 
**PostedDate** | **DateTime** | Fields with a schema type of date are in ISO 8601 date time format (for example GroupBeginDate). | [optional] 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

