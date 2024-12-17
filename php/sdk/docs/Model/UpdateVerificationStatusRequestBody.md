# # UpdateVerificationStatusRequestBody

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**status** | [**\OpenAPI\Client\Model\orders\VerificationStatus**](VerificationStatus.md) |  | [optional]
**external_reviewer_id** | **string** | The identifier of the order&#39;s regulated information reviewer. |
**rejection_reason_id** | **string** | The unique identifier of the rejection reason used for rejecting the order&#39;s regulated information. Only required if the new status is rejected. | [optional]
**verification_details** | [**\OpenAPI\Client\Model\orders\VerificationDetails**](VerificationDetails.md) |  | [optional]

[[Back to Model list]](../../README.md#models) [[Back to API list]](../../README.md#endpoints) [[Back to README]](../../README.md)
