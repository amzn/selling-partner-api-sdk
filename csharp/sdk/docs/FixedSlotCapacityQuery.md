# software.amzn.spapi.Model.services.v1.FixedSlotCapacityQuery
Request schema for the `getFixedSlotCapacity` operation. This schema is used to define the time range, capacity types and slot duration which are being queried.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CapacityTypes** | [**List&lt;CapacityType&gt;**](CapacityType.md) | An array of capacity types which are being requested. Default value is &#x60;[SCHEDULED_CAPACITY]&#x60;. | [optional] 
**SlotDuration** | **decimal** | Size in which slots are being requested. This value should be a multiple of 5 and fall in the range: 5 &lt;&#x3D; &#x60;slotDuration&#x60; &lt;&#x3D; 360. | [optional] 
**StartDateTime** | **DateTime** | Start date time from which the capacity slots are being requested in ISO 8601 format. | 
**EndDateTime** | **DateTime** | End date time up to which the capacity slots are being requested in ISO 8601 format. | 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

