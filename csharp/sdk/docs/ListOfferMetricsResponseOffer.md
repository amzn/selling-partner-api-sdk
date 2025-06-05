# software.amzn.spapi.Model.replenishment.v2022_11_07.ListOfferMetricsResponseOffer
An object which contains offer metrics.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Asin** | **string** | The Amazon Standard Identification Number (ASIN). | [optional] 
**NotDeliveredDueToOOS** | **double** | The percentage of items that were not shipped out of the total shipped units over a period of time due to being out of stock. Applicable to PERFORMANCE timePeriodType. | [optional] 
**TotalSubscriptionsRevenue** | **double** | The revenue generated from subscriptions over a period of time. Applicable to PERFORMANCE timePeriodType. | [optional] 
**ShippedSubscriptionUnits** | **decimal** | The number of units shipped to the subscribers over a period of time. Applicable to PERFORMANCE timePeriodType. | [optional] 
**ActiveSubscriptions** | **decimal** | The number of active subscriptions present at the end of the period. Applicable to PERFORMANCE timePeriodType. | [optional] 
**RevenuePenetration** | **double** | The percentage of total program revenue out of total product revenue. Applicable to PERFORMANCE timePeriodType. | [optional] 
**LostRevenueDueToOOS** | **double** | The revenue that would have been generated had there not been out of stock. Applicable to PERFORMANCE timePeriodType. | [optional] 
**CouponsRevenuePenetration** | **double** | The percentage of revenue from ASINs with coupons out of total revenue from all ASINs. Applicable to PERFORMANCE timePeriodType. | [optional] 
**ShareOfCouponSubscriptions** | **double** | The percentage of new subscriptions acquired through coupons. Applicable to PERFORMANCE timePeriodType. | [optional] 
**Next30DayTotalSubscriptionsRevenue** | **double** | The forecasted total subscription revenue for the next 30 days. Applicable to FORECAST timePeriodType. | [optional] 
**Next60DayTotalSubscriptionsRevenue** | **double** | The forecasted total subscription revenue for the next 60 days. Applicable to FORECAST timePeriodType. | [optional] 
**Next90DayTotalSubscriptionsRevenue** | **double** | The forecasted total subscription revenue for the next 90 days. Applicable to FORECAST timePeriodType. | [optional] 
**Next30DayShippedSubscriptionUnits** | **decimal** | The forecasted shipped subscription units for the next 30 days. Applicable to FORECAST timePeriodType. | [optional] 
**Next60DayShippedSubscriptionUnits** | **decimal** | The forecasted shipped subscription units for the next 60 days. Applicable to FORECAST timePeriodType. | [optional] 
**Next90DayShippedSubscriptionUnits** | **decimal** | The forecasted shipped subscription units for the next 90 days. Applicable to FORECAST timePeriodType. | [optional] 
**TimeInterval** | [**TimeInterval**](TimeInterval.md) |  | [optional] 
**CurrencyCode** | **string** | The currency code in ISO 4217 format. | [optional] 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

