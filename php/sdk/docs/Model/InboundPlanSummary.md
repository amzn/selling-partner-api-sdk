# # InboundPlanSummary

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created_at** | **\DateTime** | The time at which the inbound plan was created. In [ISO 8601](https://developer-docs.amazon.com/sp-api/docs/iso-8601) datetime format with pattern &#x60;yyyy-MM-ddTHH:mm:ssZ&#x60;. |
**inbound_plan_id** | **string** | Identifier of an inbound plan. |
**last_updated_at** | **\DateTime** | The time at which the inbound plan was last updated. In [ISO 8601](https://developer-docs.amazon.com/sp-api/docs/iso-8601) datetime format with pattern &#x60;yyyy-MM-ddTHH:mm:ssZ&#x60;. |
**marketplace_ids** | **string[]** | A list of marketplace IDs. |
**name** | **string** | Human-readable name of the inbound plan. |
**source_address** | [**\OpenAPI\Client\Model\fulfillment\inbound\v2024_03_20\Address**](Address.md) |  |
**status** | **string** | The current status of the inbound plan. Possible values: &#x60;ACTIVE&#x60;, &#x60;VOIDED&#x60;, &#x60;SHIPPED&#x60;, &#x60;ERRORED&#x60;. |

[[Back to Model list]](../../README.md#models) [[Back to API list]](../../README.md#endpoints) [[Back to README]](../../README.md)
