# # ProductAdsPaymentEvent

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**posted_date** | **\DateTime** | Fields with a schema type of date are in ISO 8601 date time format (for example GroupBeginDate). | [optional]
**transaction_type** | **string** | Indicates if the transaction is for a charge or a refund.  Possible values:  * charge - Charge  * refund - Refund | [optional]
**invoice_id** | **string** | Identifier for the invoice that the transaction appears in. | [optional]
**base_value** | [**\OpenAPI\Client\Model\financesv0\Currency**](Currency.md) |  | [optional]
**tax_value** | [**\OpenAPI\Client\Model\financesv0\Currency**](Currency.md) |  | [optional]
**transaction_value** | [**\OpenAPI\Client\Model\financesv0\Currency**](Currency.md) |  | [optional]

[[Back to Model list]](../../README.md#models) [[Back to API list]](../../README.md#endpoints) [[Back to README]](../../README.md)
