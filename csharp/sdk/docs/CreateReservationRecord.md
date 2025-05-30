# software.amzn.spapi.Model.services.v1.CreateReservationRecord
`CreateReservationRecord` entity contains the `Reservation` if there is an error/warning while performing the requested operation on it, otherwise it will contain the new `reservationId`.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Reservation** | [**Reservation**](Reservation.md) |  | [optional] 
**Warnings** | [**List&lt;Warning&gt;**](Warning.md) | A list of warnings returned in the sucessful execution response of an API request. | [optional] 
**Errors** | [**List&lt;Error&gt;**](Error.md) | A list of error responses returned when a request is unsuccessful. | [optional] 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

