# # RegulatedOrderVerificationStatus

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**status** | [**\OpenAPI\Client\Model\orders\VerificationStatus**](VerificationStatus.md) |  |
**requires_merchant_action** | **bool** | When true, the regulated information provided in the order requires a review by the merchant. |
**valid_rejection_reasons** | [**\OpenAPI\Client\Model\orders\RejectionReason[]**](RejectionReason.md) | A list of valid rejection reasons that may be used to reject the order&#39;s regulated information. |
**rejection_reason** | [**\OpenAPI\Client\Model\orders\RejectionReason**](RejectionReason.md) |  | [optional]
**review_date** | **string** | The date the order was reviewed. In [ISO 8601](https://developer-docs.amazon.com/sp-api/docs/iso-8601) date time format. | [optional]
**external_reviewer_id** | **string** | The identifier for the order&#39;s regulated information reviewer. | [optional]
**valid_verification_details** | [**\OpenAPI\Client\Model\orders\ValidVerificationDetail[]**](ValidVerificationDetail.md) | A list of valid verification details that may be provided and the criteria required for when the verification detail can be provided. | [optional]

[[Back to Model list]](../../README.md#models) [[Back to API list]](../../README.md#endpoints) [[Back to README]](../../README.md)
