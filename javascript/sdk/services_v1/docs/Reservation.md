# SellingPartnerApiForServices.Reservation

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**reservationId** | **String** | Unique identifier for a reservation. If present, it is treated as an update reservation request and will update the corresponding reservation. Otherwise, it is treated as a new create reservation request. | [optional] 
**type** | **String** | Type of reservation. | 
**availability** | [**AvailabilityRecord**](AvailabilityRecord.md) |  | 



## Enum: TypeEnum


* `APPOINTMENT` (value: `"APPOINTMENT"`)

* `TRAVEL` (value: `"TRAVEL"`)

* `VACATION` (value: `"VACATION"`)

* `BREAK` (value: `"BREAK"`)

* `TRAINING` (value: `"TRAINING"`)




