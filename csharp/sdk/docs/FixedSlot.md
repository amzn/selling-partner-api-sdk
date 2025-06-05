# software.amzn.spapi.Model.services.v1.FixedSlot
In this slot format each slot only has the requested capacity types. This slot size is as specified by slot duration.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**StartDateTime** | **DateTime** | Start date time of slot in ISO 8601 format with precision of seconds. | [optional] 
**ScheduledCapacity** | **int** | Scheduled capacity corresponding to the slot. This capacity represents the originally allocated capacity as per resource schedule. | [optional] 
**AvailableCapacity** | **int** | Available capacity corresponding to the slot. This capacity represents the capacity available for allocation to reservations. | [optional] 
**EncumberedCapacity** | **int** | Encumbered capacity corresponding to the slot. This capacity represents the capacity allocated for Amazon Jobs/Appointments/Orders. | [optional] 
**ReservedCapacity** | **int** | Reserved capacity corresponding to the slot. This capacity represents the capacity made unavailable due to events like Breaks/Leaves/Lunch. | [optional] 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

