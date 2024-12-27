# # EventFilter

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**aggregation_settings** | [**\OpenAPI\Client\Model\notifications\AggregationSettings**](AggregationSettings.md) |  | [optional]
**marketplace_ids** | **string[]** | A list of marketplace identifiers to subscribe to (for example: ATVPDKIKX0DER). To receive notifications in every marketplace, do not provide this list. | [optional]
**order_change_types** | [**\OpenAPI\Client\Model\notifications\OrderChangeTypeEnum[]**](OrderChangeTypeEnum.md) | A list of order change types to subscribe to (for example: &#x60;BuyerRequestedChange&#x60;). To receive notifications of all change types, do not provide this list. | [optional]
**event_filter_type** | **string** | An &#x60;eventFilterType&#x60; value that is supported by the specific &#x60;notificationType&#x60;. This is used by the subscription service to determine the type of event filter. Refer to [Notification Type Values](https://developer-docs.amazon.com/sp-api/docs/notification-type-values) to determine if an &#x60;eventFilterType&#x60; is supported. |

[[Back to Model list]](../../README.md#models) [[Back to API list]](../../README.md#endpoints) [[Back to README]](../../README.md)
