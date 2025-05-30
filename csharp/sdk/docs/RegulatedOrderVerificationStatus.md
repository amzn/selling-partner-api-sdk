# software.amzn.spapi.Model.orders.v0.RegulatedOrderVerificationStatus
The verification status of the order, along with associated approval or rejection metadata.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Status** | **VerificationStatus** |  | 
**RequiresMerchantAction** | **bool** | When true, the regulated information provided in the order requires a review by the merchant. | 
**ValidRejectionReasons** | [**List&lt;RejectionReason&gt;**](RejectionReason.md) | A list of valid rejection reasons that may be used to reject the order&#39;s regulated information. | 
**RejectionReason** | [**RejectionReason**](RejectionReason.md) |  | [optional] 
**ReviewDate** | **string** | The date the order was reviewed. In [ISO 8601](https://developer-docs.amazon.com/sp-api/docs/iso-8601) date time format. | [optional] 
**ExternalReviewerId** | **string** | The identifier for the order&#39;s regulated information reviewer. | [optional] 
**ValidVerificationDetails** | [**List&lt;ValidVerificationDetail&gt;**](ValidVerificationDetail.md) | A list of valid verification details that may be provided and the criteria required for when the verification detail can be provided. | [optional] 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

