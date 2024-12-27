# # AppointmentSlotReport

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**scheduling_type** | **string** | Defines the type of slots. | [optional]
**start_time** | **\DateTime** | Start Time from which the appointment slots are generated in ISO 8601 format. | [optional]
**end_time** | **\DateTime** | End Time up to which the appointment slots are generated in ISO 8601 format. | [optional]
**appointment_slots** | [**\OpenAPI\Client\Model\services\AppointmentSlot[]**](AppointmentSlot.md) | A list of time windows along with associated capacity in which the service can be performed. | [optional]

[[Back to Model list]](../../README.md#models) [[Back to API list]](../../README.md#endpoints) [[Back to README]](../../README.md)
