# # CouponPaymentEvent

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**posted_date** | **\DateTime** | Fields with a schema type of date are in ISO 8601 date time format (for example GroupBeginDate). | [optional]
**coupon_id** | **string** | A coupon identifier. | [optional]
**seller_coupon_description** | **string** | The description provided by the seller when they created the coupon. | [optional]
**clip_or_redemption_count** | **int** | The number of coupon clips or redemptions. | [optional]
**payment_event_id** | **string** | A payment event identifier. | [optional]
**fee_component** | [**\OpenAPI\Client\Model\finances\v0\FeeComponent**](FeeComponent.md) |  | [optional]
**charge_component** | [**\OpenAPI\Client\Model\finances\v0\ChargeComponent**](ChargeComponent.md) |  | [optional]
**total_amount** | [**\OpenAPI\Client\Model\finances\v0\Currency**](Currency.md) |  | [optional]

[[Back to Model list]](../../README.md#models) [[Back to API list]](../../README.md#endpoints) [[Back to README]](../../README.md)
