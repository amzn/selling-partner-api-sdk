# SellingPartnerApiForOrders.RegulatedOrderVerificationStatus

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**status** | [**VerificationStatus**](VerificationStatus.md) |  | 
**requiresMerchantAction** | **Boolean** | When true, the regulated information provided in the order requires a review by the merchant. | 
**validRejectionReasons** | [**[RejectionReason]**](RejectionReason.md) | A list of valid rejection reasons that may be used to reject the order&#39;s regulated information. | 
**rejectionReason** | [**RejectionReason**](RejectionReason.md) |  | [optional] 
**reviewDate** | **String** | The date the order was reviewed. In [ISO 8601](https://developer-docs.amazon.com/sp-api/docs/iso-8601) date time format. | [optional] 
**externalReviewerId** | **String** | The identifier for the order&#39;s regulated information reviewer. | [optional] 
**validVerificationDetails** | [**[ValidVerificationDetail]**](ValidVerificationDetail.md) | A list of valid verification details that may be provided and the criteria required for when the verification detail can be provided. | [optional] 


