# # ServiceJob

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**create_time** | **\DateTime** | The date and time of the creation of the job in ISO 8601 format. | [optional]
**service_job_id** | **string** | Amazon identifier for the service job. | [optional]
**service_job_status** | **string** | The status of the service job. | [optional]
**scope_of_work** | [**\OpenAPI\Client\Model\services\ScopeOfWork**](ScopeOfWork.md) |  | [optional]
**seller** | [**\OpenAPI\Client\Model\services\Seller**](Seller.md) |  | [optional]
**service_job_provider** | [**\OpenAPI\Client\Model\services\ServiceJobProvider**](ServiceJobProvider.md) |  | [optional]
**preferred_appointment_times** | [**\OpenAPI\Client\Model\services\AppointmentTime[]**](AppointmentTime.md) | A list of appointment windows preferred by the buyer. Included only if the buyer selected appointment windows when creating the order. | [optional]
**appointments** | [**\OpenAPI\Client\Model\services\Appointment[]**](Appointment.md) | A list of appointments. | [optional]
**service_order_id** | **string** | The Amazon-defined identifier for an order placed by the buyer, in 3-7-7 format. | [optional]
**marketplace_id** | **string** | The marketplace identifier. | [optional]
**store_id** | **string** | The Amazon-defined identifier for the region scope. | [optional]
**buyer** | [**\OpenAPI\Client\Model\services\Buyer**](Buyer.md) |  | [optional]
**associated_items** | [**\OpenAPI\Client\Model\services\AssociatedItem[]**](AssociatedItem.md) | A list of items associated with the service job. | [optional]
**service_location** | [**\OpenAPI\Client\Model\services\ServiceLocation**](ServiceLocation.md) |  | [optional]

[[Back to Model list]](../../README.md#models) [[Back to API list]](../../README.md#endpoints) [[Back to README]](../../README.md)
