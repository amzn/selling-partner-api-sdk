# SellingPartnerApiForNotifications.EventFilter

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**aggregationSettings** | [**AggregationSettings**](AggregationSettings.md) |  | [optional] 
**marketplaceIds** | **[String]** | A list of marketplace identifiers to subscribe to (for example: ATVPDKIKX0DER). To receive notifications in every marketplace, do not provide this list. | [optional] 
**orderChangeTypes** | [**[OrderChangeTypeEnum]**](OrderChangeTypeEnum.md) | A list of order change types to subscribe to (for example: &#x60;BuyerRequestedChange&#x60;). To receive notifications of all change types, do not provide this list. | [optional] 
**eventFilterType** | **String** | An &#x60;eventFilterType&#x60; value that is supported by the specific &#x60;notificationType&#x60;. This is used by the subscription service to determine the type of event filter. Refer to [Notification Type Values](https://developer-docs.amazon.com/sp-api/docs/notification-type-values) to determine if an &#x60;eventFilterType&#x60; is supported. | 



## Enum: EventFilterTypeEnum


* `ANY_OFFER_CHANGED` (value: `"ANY_OFFER_CHANGED"`)

* `ORDER_CHANGE` (value: `"ORDER_CHANGE"`)




