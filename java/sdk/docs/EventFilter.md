# EventFilter

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**marketplaceIds** | [**MarketplaceIds**](MarketplaceIds.md) |  |  [optional]
**orderChangeTypes** | [**OrderChangeTypes**](OrderChangeTypes.md) |  |  [optional]
**eventFilterType** | [**EventFilterTypeEnum**](#EventFilterTypeEnum) | An &#x60;eventFilterType&#x60; value that is supported by the specific &#x60;notificationType&#x60;. This is used by the subscription service to determine the type of event filter. Refer to [Notification Type Values](https://developer-docs.amazon.com/sp-api/docs/notification-type-values) to determine if an &#x60;eventFilterType&#x60; is supported. | 

<a name="EventFilterTypeEnum"></a>
## Enum: EventFilterTypeEnum
Name | Value
---- | -----
ANY_OFFER_CHANGED | &quot;ANY_OFFER_CHANGED&quot;
ORDER_CHANGE | &quot;ORDER_CHANGE&quot;
