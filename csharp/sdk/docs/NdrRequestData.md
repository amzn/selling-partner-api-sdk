# software.amzn.spapi.Model.shipping.v2.NdrRequestData
Additional information required for the NDR action that has been filed. If the NDR Action is RESCHEDULE, rescheduleDate is a required field. Otherwise, if the NDR Action is REATTEMPT, additionalAddressNotes is a required field. 

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**RescheduleDate** | **DateTime** | The date on which the Seller wants to reschedule shipment delivery, in ISO-8601 date/time format | [optional] 
**AdditionalAddressNotes** | **string** | Address notes to re-attempt delivery with. | [optional] 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

