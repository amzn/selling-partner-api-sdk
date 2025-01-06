# # InboundPlan

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created_at** | **\DateTime** | The time at which the inbound plan was created. In [ISO 8601](https://developer-docs.amazon.com/sp-api/docs/iso-8601) datetime with pattern &#x60;yyyy-MM-ddTHH:mm:ssZ&#x60;. |
**inbound_plan_id** | **string** | Identifier of an inbound plan. |
**last_updated_at** | **\DateTime** | The time at which the inbound plan was last updated. In [ISO 8601](https://developer-docs.amazon.com/sp-api/docs/iso-8601) datetime format with pattern &#x60;yyyy-MM-ddTHH:mm:ssZ&#x60;. |
**marketplace_ids** | **string[]** | A list of marketplace IDs. |
**name** | **string** | Human-readable name of the inbound plan. |
**packing_options** | [**\OpenAPI\Client\Model\fulfillmentInbound\PackingOptionSummary[]**](PackingOptionSummary.md) | Packing options for the inbound plan. This property will be populated when it has been generated via the corresponding operation. If there is a chosen placement option, only packing options for that placement option will be returned. If there are confirmed shipments, only packing options for those shipments will be returned. Query the packing option for more details. | [optional]
**placement_options** | [**\OpenAPI\Client\Model\fulfillmentInbound\PlacementOptionSummary[]**](PlacementOptionSummary.md) | Placement options for the inbound plan. This property will be populated when it has been generated via the corresponding operation. If there is a chosen placement option, that will be the only returned option. Query the placement option for more details. | [optional]
**shipments** | [**\OpenAPI\Client\Model\fulfillmentInbound\ShipmentSummary[]**](ShipmentSummary.md) | A list of shipment IDs for the inbound plan. This property is populated when it has been generated with the &#x60;confirmPlacementOptions&#x60; operation. Only shipments from the chosen placement option are returned. Query the shipment for more details. | [optional]
**source_address** | [**\OpenAPI\Client\Model\fulfillmentInbound\Address**](Address.md) |  |
**status** | **string** | Current status of the inbound plan. Possible values: &#x60;ACTIVE&#x60;, &#x60;VOIDED&#x60;, &#x60;SHIPPED&#x60;, &#x60;ERRORED&#x60;. |

[[Back to Model list]](../../README.md#models) [[Back to API list]](../../README.md#endpoints) [[Back to README]](../../README.md)
