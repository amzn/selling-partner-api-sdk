# software.amzn.spapi.Model.finances.v0.ChargeRefundEvent
An event related to charge refund.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**PostedDate** | **DateTime** | Fields with a schema type of date are in ISO 8601 date time format (for example GroupBeginDate). | [optional] 
**ReasonCode** | **string** | The reason given for a charge refund.  Example: &#x60;SubscriptionFeeCorrection&#x60; | [optional] 
**ReasonCodeDescription** | **string** | A description of the Reason Code.   Example: &#x60;SubscriptionFeeCorrection&#x60; | [optional] 
**ChargeRefundTransactions** | [**List&lt;ChargeRefundTransaction&gt;**](ChargeRefundTransaction.md) | A list of &#x60;ChargeRefund&#x60; transactions | [optional] 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

