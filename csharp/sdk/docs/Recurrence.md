# software.amzn.spapi.Model.services.v1.Recurrence
Repeated occurrence of an event in a time range.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**EndTime** | **DateTime** | End time of the recurrence. | 
**DaysOfWeek** | [**List&lt;DayOfWeek&gt;**](DayOfWeek.md) | Days of the week when recurrence is valid. If the schedule is valid every Monday, input will only contain &#x60;MONDAY&#x60; in the list. | [optional] 
**DaysOfMonth** | **List&lt;int&gt;** | Days of the month when recurrence is valid. | [optional] 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

