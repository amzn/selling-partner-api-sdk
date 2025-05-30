# software.amzn.spapi.Model.finances.v0.CouponPaymentEvent
An event related to coupon payments.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**PostedDate** | **DateTime** | Fields with a schema type of date are in ISO 8601 date time format (for example GroupBeginDate). | [optional] 
**CouponId** | **string** | A coupon identifier. | [optional] 
**SellerCouponDescription** | **string** | The description provided by the seller when they created the coupon. | [optional] 
**ClipOrRedemptionCount** | **long** | The number of coupon clips or redemptions. | [optional] 
**PaymentEventId** | **string** | A payment event identifier. | [optional] 
**FeeComponent** | [**FeeComponent**](FeeComponent.md) |  | [optional] 
**ChargeComponent** | [**ChargeComponent**](ChargeComponent.md) |  | [optional] 
**TotalAmount** | [**Currency**](Currency.md) |  | [optional] 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

