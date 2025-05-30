# software.amzn.spapi.Model.notifications.v1.EventFilter
A `notificationType` specific filter. This object contains all of the currently available filters and properties that you can use to define a `notificationType` specific filter.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AggregationSettings** | [**AggregationSettings**](AggregationSettings.md) |  | [optional] 
**MarketplaceIds** | **List&lt;string&gt;** | A list of marketplace identifiers to subscribe to (for example: ATVPDKIKX0DER). To receive notifications in every marketplace, do not provide this list. | [optional] 
**OrderChangeTypes** | [**List&lt;OrderChangeTypeEnum&gt;**](OrderChangeTypeEnum.md) | A list of order change types to subscribe to (for example: &#x60;BuyerRequestedChange&#x60;). To receive notifications of all change types, do not provide this list. | [optional] 
**EventFilterType** | **string** | An &#x60;eventFilterType&#x60; value that is supported by the specific &#x60;notificationType&#x60;. This is used by the subscription service to determine the type of event filter. Refer to [Notification Type Values](https://developer-docs.amazon.com/sp-api/docs/notification-type-values) to determine if an &#x60;eventFilterType&#x60; is supported. | 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

