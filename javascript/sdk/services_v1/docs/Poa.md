# SellingPartnerApiForServices.Poa

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**appointmentTime** | [**AppointmentTime**](AppointmentTime.md) |  | [optional] 
**technicians** | [**[Technician]**](Technician.md) | A list of technicians. | [optional] 
**uploadingTechnician** | **String** | The identifier of the technician who uploaded the POA. | [optional] 
**uploadTime** | **Date** | The date and time when the POA was uploaded in ISO 8601 format. | [optional] 
**poaType** | **String** | The type of POA uploaded. | [optional] 



## Enum: PoaTypeEnum


* `NO_SIGNATURE_DUMMY_POS` (value: `"NO_SIGNATURE_DUMMY_POS"`)

* `CUSTOMER_SIGNATURE` (value: `"CUSTOMER_SIGNATURE"`)

* `DUMMY_RECEIPT` (value: `"DUMMY_RECEIPT"`)

* `POA_RECEIPT` (value: `"POA_RECEIPT"`)




