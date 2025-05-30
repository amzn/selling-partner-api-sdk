# software.amzn.spapi.Model.shipping.v2.GetTrackingResult
The payload for the getTracking operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**TrackingId** | **string** | The carrier generated identifier for a package in a purchased shipment. | 
**AlternateLegTrackingId** | **string** | The carrier generated reverse identifier for a returned package in a purchased shipment. | 
**EventHistory** | [**List&lt;Event&gt;**](Event.md) | A list of tracking events. | 
**PromisedDeliveryDate** | **DateTime** | The date and time by which the shipment is promised to be delivered. | 
**Summary** | [**TrackingSummary**](TrackingSummary.md) |  | 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

