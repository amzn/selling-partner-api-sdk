# SellingPartnerApiForOrders.UpdateVerificationStatusRequestBody

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**status** | [**VerificationStatus**](VerificationStatus.md) |  | [optional] 
**externalReviewerId** | **String** | The identifier of the order&#39;s regulated information reviewer. | 
**rejectionReasonId** | **String** | The unique identifier of the rejection reason used for rejecting the order&#39;s regulated information. Only required if the new status is rejected. | [optional] 
**verificationDetails** | [**VerificationDetails**](VerificationDetails.md) |  | [optional] 


