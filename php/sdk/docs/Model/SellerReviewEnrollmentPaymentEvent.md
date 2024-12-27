# # SellerReviewEnrollmentPaymentEvent

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**posted_date** | **\DateTime** | Fields with a schema type of date are in ISO 8601 date time format (for example GroupBeginDate). | [optional]
**enrollment_id** | **string** | An enrollment identifier. | [optional]
**parent_asin** | **string** | The Amazon Standard Identification Number (ASIN) of the item that was enrolled in the Early Reviewer Program. | [optional]
**fee_component** | [**\OpenAPI\Client\Model\financesv0\FeeComponent**](FeeComponent.md) |  | [optional]
**charge_component** | [**\OpenAPI\Client\Model\financesv0\ChargeComponent**](ChargeComponent.md) |  | [optional]
**total_amount** | [**\OpenAPI\Client\Model\financesv0\Currency**](Currency.md) |  | [optional]

[[Back to Model list]](../../README.md#models) [[Back to API list]](../../README.md#endpoints) [[Back to README]](../../README.md)
