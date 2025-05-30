# software.amzn.spapi.Model.services.v1.Reservation
Reservation object reduces the capacity of a resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ReservationId** | **string** | Unique identifier for a reservation. If present, it is treated as an update reservation request and will update the corresponding reservation. Otherwise, it is treated as a new create reservation request. | [optional] 
**Type** | **string** | Type of reservation. | 
**Availability** | [**AvailabilityRecord**](AvailabilityRecord.md) |  | 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

