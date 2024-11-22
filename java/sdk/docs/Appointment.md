# Appointment

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**appointmentId** | **String** |  |  [optional]
**appointmentStatus** | [**AppointmentStatusEnum**](#AppointmentStatusEnum) | The status of the appointment. |  [optional]
**appointmentTime** | [**AppointmentTime**](AppointmentTime.md) |  |  [optional]
**assignedTechnicians** | [**List&lt;Technician&gt;**](Technician.md) | A list of technicians assigned to the service job. |  [optional]
**rescheduledAppointmentId** | **String** |  |  [optional]
**poa** | [**Poa**](Poa.md) |  |  [optional]

<a name="AppointmentStatusEnum"></a>
## Enum: AppointmentStatusEnum
Name | Value
---- | -----
ACTIVE | &quot;ACTIVE&quot;
CANCELLED | &quot;CANCELLED&quot;
COMPLETED | &quot;COMPLETED&quot;
