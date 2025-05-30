# software.amzn.spapi.Model.services.v1.AppointmentSlotReport
Availability information as per the service context queried.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**SchedulingType** | **string** | Defines the type of slots. | [optional] 
**StartTime** | **DateTime** | Start Time from which the appointment slots are generated in ISO 8601 format. | [optional] 
**EndTime** | **DateTime** | End Time up to which the appointment slots are generated in ISO 8601 format. | [optional] 
**AppointmentSlots** | [**List&lt;AppointmentSlot&gt;**](AppointmentSlot.md) | A list of time windows along with associated capacity in which the service can be performed. | [optional] 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

