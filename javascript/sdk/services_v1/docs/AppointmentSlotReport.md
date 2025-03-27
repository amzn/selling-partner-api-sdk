# SellingPartnerApiForServices.AppointmentSlotReport

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**schedulingType** | **String** | Defines the type of slots. | [optional] 
**startTime** | **Date** | Start Time from which the appointment slots are generated in ISO 8601 format. | [optional] 
**endTime** | **Date** | End Time up to which the appointment slots are generated in ISO 8601 format. | [optional] 
**appointmentSlots** | [**[AppointmentSlot]**](AppointmentSlot.md) | A list of time windows along with associated capacity in which the service can be performed. | [optional] 



## Enum: SchedulingTypeEnum


* `REAL_TIME_SCHEDULING` (value: `"REAL_TIME_SCHEDULING"`)

* `NON_REAL_TIME_SCHEDULING` (value: `"NON_REAL_TIME_SCHEDULING"`)




