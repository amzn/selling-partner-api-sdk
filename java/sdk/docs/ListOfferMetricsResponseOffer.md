# ListOfferMetricsResponseOffer

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**asin** | **String** | The Amazon Standard Identification Number (ASIN). |  [optional]
**notDeliveredDueToOOS** | **Double** | The percentage of items that were not shipped out of the total shipped units over a period of time due to being out of stock. Applicable only for the &#x60;PERFORMANCE&#x60; &#x60;timePeriodType&#x60;. |  [optional]
**totalSubscriptionsRevenue** | **Double** | The revenue generated from subscriptions over a period of time. Applicable only for the &#x60;PERFORMANCE&#x60; &#x60;timePeriodType&#x60;. |  [optional]
**shippedSubscriptionUnits** | [**BigDecimal**](BigDecimal.md) | The number of units shipped to the subscribers over a period of time. Applicable only for the &#x60;PERFORMANCE&#x60; &#x60;timePeriodType&#x60;. |  [optional]
**activeSubscriptions** | [**BigDecimal**](BigDecimal.md) | The number of active subscriptions present at the end of the period. Applicable only for the &#x60;PERFORMANCE&#x60; &#x60;timePeriodType&#x60;. |  [optional]
**revenuePenetration** | **Double** | The percentage of total program revenue out of total product revenue. Applicable only for the &#x60;PERFORMANCE&#x60; &#x60;timePeriodType&#x60;. |  [optional]
**lostRevenueDueToOOS** | **Double** | The revenue that would have been generated had there not been out of stock. Applicable only for the PERFORMANCE timePeriodType. |  [optional]
**couponsRevenuePenetration** | **Double** | The percentage of revenue from ASINs with coupons out of total revenue from all ASINs. Applicable only for the PERFORMANCE timePeriodType. |  [optional]
**next30DayTotalSubscriptionsRevenue** | **Double** | The forecasted total subscription revenue for the next 30 days. Applicable only for the &#x60;FORECAST&#x60; &#x60;timePeriodType&#x60;. |  [optional]
**next60DayTotalSubscriptionsRevenue** | **Double** | The forecasted total subscription revenue for the next 60 days. Applicable only for the &#x60;FORECAST&#x60; &#x60;timePeriodType&#x60;. |  [optional]
**next90DayTotalSubscriptionsRevenue** | **Double** | The forecasted total subscription revenue for the next 90 days. Applicable only for the &#x60;FORECAST&#x60; &#x60;timePeriodType&#x60;. |  [optional]
**next30DayShippedSubscriptionUnits** | [**BigDecimal**](BigDecimal.md) | The forecasted shipped subscription units for the next 30 days. Applicable only for the &#x60;FORECAST&#x60; &#x60;timePeriodType&#x60;. |  [optional]
**next60DayShippedSubscriptionUnits** | [**BigDecimal**](BigDecimal.md) | The forecasted shipped subscription units for the next 60 days. Applicable only for the &#x60;FORECAST&#x60; &#x60;timePeriodType&#x60;. |  [optional]
**next90DayShippedSubscriptionUnits** | [**BigDecimal**](BigDecimal.md) | The forecasted shipped subscription units for the next 90 days. Applicable only for the &#x60;FORECAST&#x60; &#x60;timePeriodType&#x60;. |  [optional]
**timeInterval** | [**TimeInterval**](TimeInterval.md) |  |  [optional]
**currencyCode** | **String** | The currency code in ISO 4217 format. |  [optional]
