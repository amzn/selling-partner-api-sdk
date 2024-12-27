# # GetSellingPartnerMetricsResponseMetric

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**not_delivered_due_to_oos** | **float** | The percentage of items that were not shipped out of the total shipped units over a period of time due to being out of stock. Applicable only for the &#x60;PERFORMANCE&#x60; &#x60;timePeriodType&#x60;. | [optional]
**total_subscriptions_revenue** | **float** | The revenue generated from subscriptions over a period of time. Applicable for both the &#x60;PERFORMANCE&#x60; and &#x60;FORECAST&#x60; &#x60;timePeriodType&#x60;. | [optional]
**shipped_subscription_units** | **float** | The number of units shipped to the subscribers over a period of time. Applicable for both the &#x60;PERFORMANCE&#x60; and &#x60;FORECAST&#x60; &#x60;timePeriodType&#x60;. | [optional]
**active_subscriptions** | **float** | The number of active subscriptions present at the end of the period. Applicable only for the &#x60;PERFORMANCE&#x60; &#x60;timePeriodType&#x60;. | [optional]
**subscriber_average_revenue** | **float** | The average revenue per subscriber of the program over a period of past 12 months for sellers and 6 months for vendors. Applicable only for the &#x60;PERFORMANCE&#x60; &#x60;timePeriodType&#x60;. | [optional]
**non_subscriber_average_revenue** | **float** | The average revenue per non-subscriber of the program over a period of past 12 months for sellers and 6 months for vendors. Applicable only for the &#x60;PERFORMANCE&#x60; &#x60;timePeriodType&#x60;. | [optional]
**lost_revenue_due_to_oos** | **float** | The revenue that would have been generated had there not been out of stock. Applicable only for the PERFORMANCE timePeriodType. | [optional]
**subscriber_average_reorders** | **float** | The average reorders per subscriber of the program over a period of 12 months. Applicable only for the PERFORMANCE timePeriodType. | [optional]
**non_subscriber_average_reorders** | **float** | The average reorders per non-subscriber of the program over a period of past 12 months. Applicable only for the PERFORMANCE timePeriodType. | [optional]
**coupons_revenue_penetration** | **float** | The percentage of revenue from ASINs with coupons out of total revenue from all ASINs. Applicable only for the PERFORMANCE timePeriodType. | [optional]
**time_interval** | [**\OpenAPI\Client\Model\replenishment\TimeInterval**](TimeInterval.md) |  | [optional]
**currency_code** | **string** | The currency code in ISO 4217 format. | [optional]

[[Back to Model list]](../../README.md#models) [[Back to API list]](../../README.md#endpoints) [[Back to README]](../../README.md)
