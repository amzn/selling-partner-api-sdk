# software.amzn.spapi.Model.notifications.v1.ProcessingDirective
Additional information passed to the subscription to control the processing of notifications. For example, you can use an `eventFilter` to customize your subscription to send notifications for only the specified `marketplaceId`s, or select the aggregation time period at which to send notifications (for example: limit to one notification every five minutes for high frequency notifications). The specific features available vary depending on the `notificationType`.  This feature is currently only supported by the `ANY_OFFER_CHANGED` and `ORDER_CHANGE` `notificationType`s.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**EventFilter** | [**EventFilter**](EventFilter.md) |  | [optional] 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

