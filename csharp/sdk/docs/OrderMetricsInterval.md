# software.amzn.spapi.Model.sales.v1.OrderMetricsInterval
Contains order metrics.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Interval** | **string** | The interval of time based on requested granularity (ex. Hour, Day, etc.) If this is the first or the last interval from the list, it might contain incomplete data if the requested interval doesn&#39;t align with the requested granularity (ex. request interval 2018-09-01T02:00:00Z- -2018-09-04T19:00:00Z and granularity day will result in Sept 1st UTC day and Sept 4th UTC days having partial data). | 
**UnitCount** | **int** | The number of units in orders based on the specified filters. | 
**OrderItemCount** | **int** | The number of order items based on the specified filters. | 
**OrderCount** | **int** | The number of orders based on the specified filters. | 
**AverageUnitPrice** | [**Money**](Money.md) |  | 
**TotalSales** | [**Money**](Money.md) |  | 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

