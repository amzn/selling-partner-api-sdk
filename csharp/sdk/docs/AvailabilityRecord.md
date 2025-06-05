# software.amzn.spapi.Model.services.v1.AvailabilityRecord
`AvailabilityRecord` to represent the capacity of a resource over a time range.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**StartTime** | **DateTime** | Denotes the time from when the resource is available in a day in ISO-8601 format. | 
**EndTime** | **DateTime** | Denotes the time till when the resource is available in a day in ISO-8601 format. | 
**Recurrence** | [**Recurrence**](Recurrence.md) |  | [optional] 
**Capacity** | **int** | Signifies the capacity of a resource which is available. | [optional] 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

