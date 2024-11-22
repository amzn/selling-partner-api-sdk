# GetSellingPartnerMetricsResponseMetric

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**notDeliveredDueToOOS** | **Double** | The percentage of items that were not shipped out of the total shipped units over a period of time due to being out of stock. Applicable only for the &#x60;PERFORMANCE&#x60; &#x60;timePeriodType&#x60;. |  [optional]
**totalSubscriptionsRevenue** | **Double** | The revenue generated from subscriptions over a period of time. Applicable for both the &#x60;PERFORMANCE&#x60; and &#x60;FORECAST&#x60; &#x60;timePeriodType&#x60;. |  [optional]
**shippedSubscriptionUnits** | [**BigDecimal**](BigDecimal.md) | The number of units shipped to the subscribers over a period of time. Applicable for both the &#x60;PERFORMANCE&#x60; and &#x60;FORECAST&#x60; &#x60;timePeriodType&#x60;. |  [optional]
**activeSubscriptions** | [**BigDecimal**](BigDecimal.md) | The number of active subscriptions present at the end of the period. Applicable only for the &#x60;PERFORMANCE&#x60; &#x60;timePeriodType&#x60;. |  [optional]
**subscriberAverageRevenue** | **Double** | The average revenue per subscriber of the program over a period of past 12 months for sellers and 6 months for vendors. Applicable only for the &#x60;PERFORMANCE&#x60; &#x60;timePeriodType&#x60;. |  [optional]
**nonSubscriberAverageRevenue** | **Double** | The average revenue per non-subscriber of the program over a period of past 12 months for sellers and 6 months for vendors. Applicable only for the &#x60;PERFORMANCE&#x60; &#x60;timePeriodType&#x60;. |  [optional]
**lostRevenueDueToOOS** | **Double** | The revenue that would have been generated had there not been out of stock. Applicable only for the PERFORMANCE timePeriodType. |  [optional]
**subscriberAverageReorders** | **Double** | The average reorders per subscriber of the program over a period of 12 months. Applicable only for the PERFORMANCE timePeriodType. |  [optional]
**nonSubscriberAverageReorders** | **Double** | The average reorders per non-subscriber of the program over a period of past 12 months. Applicable only for the PERFORMANCE timePeriodType. |  [optional]
**couponsRevenuePenetration** | **Double** | The percentage of revenue from ASINs with coupons out of total revenue from all ASINs. Applicable only for the PERFORMANCE timePeriodType. |  [optional]
**timeInterval** | [**TimeInterval**](TimeInterval.md) |  |  [optional]
**currencyCode** | **String** | The currency code in ISO 4217 format. |  [optional]
