# software.amzn.spapi.Model.services.v1.FixedSlotCapacity
Response schema for the `getFixedSlotCapacity` operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ResourceId** | **string** | Resource Identifier. | [optional] 
**SlotDuration** | **decimal** | The duration of each slot which is returned. This value will be a multiple of 5 and fall in the following range: 5 &lt;&#x3D; &#x60;slotDuration&#x60; &lt;&#x3D; 360. | [optional] 
**Capacities** | [**List&lt;FixedSlot&gt;**](FixedSlot.md) | Array of capacity slots in fixed slot format. | [optional] 
**NextPageToken** | **string** | Next page token, if there are more pages. | [optional] 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

