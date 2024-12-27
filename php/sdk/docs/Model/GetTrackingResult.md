# # GetTrackingResult

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**tracking_id** | **string** | The carrier generated identifier for a package in a purchased shipment. |
**alternate_leg_tracking_id** | **string** | The carrier generated reverse identifier for a returned package in a purchased shipment. |
**event_history** | [**\OpenAPI\Client\Model\shipping\Event[]**](Event.md) | A list of tracking events. |
**promised_delivery_date** | **\DateTime** | The date and time by which the shipment is promised to be delivered. |
**summary** | [**\OpenAPI\Client\Model\shipping\TrackingSummary**](TrackingSummary.md) |  |

[[Back to Model list]](../../README.md#models) [[Back to API list]](../../README.md#endpoints) [[Back to README]](../../README.md)
