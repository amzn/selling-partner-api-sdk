# # ChargeRefundEvent

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**posted_date** | **\DateTime** | Fields with a schema type of date are in ISO 8601 date time format (for example GroupBeginDate). | [optional]
**reason_code** | **string** | The reason given for a charge refund.  Example: &#x60;SubscriptionFeeCorrection&#x60; | [optional]
**reason_code_description** | **string** | A description of the Reason Code.   Example: &#x60;SubscriptionFeeCorrection&#x60; | [optional]
**charge_refund_transactions** | [**\OpenAPI\Client\Model\financesv0\ChargeRefundTransaction[]**](ChargeRefundTransaction.md) | A list of &#x60;ChargeRefund&#x60; transactions | [optional]

[[Back to Model list]](../../README.md#models) [[Back to API list]](../../README.md#endpoints) [[Back to README]](../../README.md)
