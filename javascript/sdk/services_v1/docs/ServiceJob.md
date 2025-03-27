# SellingPartnerApiForServices.ServiceJob

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**createTime** | **Date** | The date and time of the creation of the job in ISO 8601 format. | [optional] 
**serviceJobId** | **String** | Amazon identifier for the service job. | [optional] 
**serviceJobStatus** | **String** | The status of the service job. | [optional] 
**scopeOfWork** | [**ScopeOfWork**](ScopeOfWork.md) |  | [optional] 
**seller** | [**Seller**](Seller.md) |  | [optional] 
**serviceJobProvider** | [**ServiceJobProvider**](ServiceJobProvider.md) |  | [optional] 
**preferredAppointmentTimes** | [**[AppointmentTime]**](AppointmentTime.md) | A list of appointment windows preferred by the buyer. Included only if the buyer selected appointment windows when creating the order. | [optional] 
**appointments** | [**[Appointment]**](Appointment.md) | A list of appointments. | [optional] 
**serviceOrderId** | **String** | The Amazon-defined identifier for an order placed by the buyer, in 3-7-7 format. | [optional] 
**marketplaceId** | **String** | The marketplace identifier. | [optional] 
**storeId** | **String** | The Amazon-defined identifier for the region scope. | [optional] 
**buyer** | [**Buyer**](Buyer.md) |  | [optional] 
**associatedItems** | [**[AssociatedItem]**](AssociatedItem.md) | A list of items associated with the service job. | [optional] 
**serviceLocation** | [**ServiceLocation**](ServiceLocation.md) |  | [optional] 



## Enum: ServiceJobStatusEnum


* `NOT_SERVICED` (value: `"NOT_SERVICED"`)

* `CANCELLED` (value: `"CANCELLED"`)

* `COMPLETED` (value: `"COMPLETED"`)

* `PENDING_SCHEDULE` (value: `"PENDING_SCHEDULE"`)

* `NOT_FULFILLABLE` (value: `"NOT_FULFILLABLE"`)

* `HOLD` (value: `"HOLD"`)

* `PAYMENT_DECLINED` (value: `"PAYMENT_DECLINED"`)




