# SellingPartnerApiForServices.Appointment

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**appointmentId** | **String** | The appointment identifier. | [optional] 
**appointmentStatus** | **String** | The status of the appointment. | [optional] 
**appointmentTime** | [**AppointmentTime**](AppointmentTime.md) |  | [optional] 
**assignedTechnicians** | [**[Technician]**](Technician.md) | A list of technicians assigned to the service job. | [optional] 
**rescheduledAppointmentId** | **String** | The appointment identifier. | [optional] 
**poa** | [**Poa**](Poa.md) |  | [optional] 



## Enum: AppointmentStatusEnum


* `ACTIVE` (value: `"ACTIVE"`)

* `CANCELLED` (value: `"CANCELLED"`)

* `COMPLETED` (value: `"COMPLETED"`)




