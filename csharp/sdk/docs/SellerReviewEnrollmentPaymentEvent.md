# software.amzn.spapi.Model.finances.v0.SellerReviewEnrollmentPaymentEvent
A fee payment event for the Early Reviewer Program.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**PostedDate** | **DateTime** | Fields with a schema type of date are in ISO 8601 date time format (for example GroupBeginDate). | [optional] 
**EnrollmentId** | **string** | An enrollment identifier. | [optional] 
**ParentASIN** | **string** | The Amazon Standard Identification Number (ASIN) of the item that was enrolled in the Early Reviewer Program. | [optional] 
**FeeComponent** | [**FeeComponent**](FeeComponent.md) |  | [optional] 
**ChargeComponent** | [**ChargeComponent**](ChargeComponent.md) |  | [optional] 
**TotalAmount** | [**Currency**](Currency.md) |  | [optional] 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

