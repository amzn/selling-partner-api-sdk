# software.amzn.spapi.Model.replenishment.v2022_11_07.TimeInterval
A date-time interval in ISO 8601 format which is used to compute metrics. Only the date is required, but you must pass the complete date and time value. For example, November 11, 2022 should be passed as \"2022-11-07T00:00:00Z\". Note that only data for the trailing 2 years is supported.   **Note**: The `listOfferMetrics` operation only supports a time interval which covers a single unit of the aggregation frequency. For example, for a MONTH aggregation frequency, the duration of the interval between the startDate and endDate can not be more than 1 month.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**StartDate** | **DateTime** | When this object is used as a request parameter, the specified &#x60;startDate&#x60; is adjusted based on the aggregation frequency.  * For &#x60;WEEK&#x60; the metric is computed from the first day of the week (Sunday, based on ISO 8601) that contains the &#x60;startDate&#x60;. * For &#x60;MONTH&#x60; the metric is computed from the first day of the month that contains the &#x60;startDate&#x60;. * For &#x60;QUARTER&#x60; the metric is computed from the first day of the quarter that contains the &#x60;startDate&#x60;. * For &#x60;YEAR&#x60; the metric is computed from the first day of the year that contains the &#x60;startDate&#x60;. | 
**EndDate** | **DateTime** | When this object is used as a request parameter, the specified &#x60;endDate&#x60; is adjusted based on the aggregation frequency.  * For &#x60;WEEK&#x60; the metric is computed up to the last day of the week (Sunday, based on ISO 8601) that contains the &#x60;endDate&#x60;. * For &#x60;MONTH&#x60;, the metric is computed up to the last day that contains the &#x60;endDate&#x60;. * For &#x60;QUARTER&#x60; the metric is computed up to the last day of the quarter that contains the &#x60;endDate&#x60;. * For &#x60;YEAR&#x60; the metric is computed up to the last day of the year that contains the &#x60;endDate&#x60;.  Note: The end date may be adjusted to a lower value based on the data available in our system. | 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

