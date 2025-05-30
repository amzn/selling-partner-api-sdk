# software.amzn.spapi.Model.services.v1.RangeSlotCapacityQuery
Request schema for the `getRangeSlotCapacity` operation. This schema is used to define the time range and capacity types that are being queried.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CapacityTypes** | [**List&lt;CapacityType&gt;**](CapacityType.md) | An array of capacity types which are being requested. Default value is &#x60;[SCHEDULED_CAPACITY]&#x60;. | [optional] 
**StartDateTime** | **DateTime** | Start date time from which the capacity slots are being requested in ISO 8601 format. | 
**EndDateTime** | **DateTime** | End date time up to which the capacity slots are being requested in ISO 8601 format. | 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

