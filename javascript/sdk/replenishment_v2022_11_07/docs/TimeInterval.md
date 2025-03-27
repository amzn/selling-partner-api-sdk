# SellingPartnerApiForReplenishment.TimeInterval

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**startDate** | **Date** | When this object is used as a request parameter, the specified &#x60;startDate&#x60; is adjusted based on the aggregation frequency.  * For &#x60;WEEK&#x60; the metric is computed from the first day of the week (Sunday, based on ISO 8601) that contains the &#x60;startDate&#x60;. * For &#x60;MONTH&#x60; the metric is computed from the first day of the month that contains the &#x60;startDate&#x60;. * For &#x60;QUARTER&#x60; the metric is computed from the first day of the quarter that contains the &#x60;startDate&#x60;. * For &#x60;YEAR&#x60; the metric is computed from the first day of the year that contains the &#x60;startDate&#x60;. | 
**endDate** | **Date** | When this object is used as a request parameter, the specified &#x60;endDate&#x60; is adjusted based on the aggregation frequency.  * For &#x60;WEEK&#x60; the metric is computed up to the last day of the week (Sunday, based on ISO 8601) that contains the &#x60;endDate&#x60;. * For &#x60;MONTH&#x60;, the metric is computed up to the last day that contains the &#x60;endDate&#x60;. * For &#x60;QUARTER&#x60; the metric is computed up to the last day of the quarter that contains the &#x60;endDate&#x60;. * For &#x60;YEAR&#x60; the metric is computed up to the last day of the year that contains the &#x60;endDate&#x60;.  Note: The end date may be adjusted to a lower value based on the data available in our system. | 


