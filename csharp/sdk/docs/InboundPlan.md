# software.amzn.spapi.Model.fulfillment.inbound.v2024_03_20.InboundPlan
Inbound plan containing details of the inbound workflow.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CreatedAt** | **DateTime** | The time at which the inbound plan was created. In [ISO 8601](https://developer-docs.amazon.com/sp-api/docs/iso-8601) datetime with pattern &#x60;yyyy-MM-ddTHH:mm:ssZ&#x60;. | 
**InboundPlanId** | **string** | Identifier of an inbound plan. | 
**LastUpdatedAt** | **DateTime** | The time at which the inbound plan was last updated. In [ISO 8601](https://developer-docs.amazon.com/sp-api/docs/iso-8601) datetime format with pattern &#x60;yyyy-MM-ddTHH:mm:ssZ&#x60;. | 
**MarketplaceIds** | **List&lt;string&gt;** | A list of marketplace IDs. | 
**Name** | **string** | Human-readable name of the inbound plan. | 
**PackingOptions** | [**List&lt;PackingOptionSummary&gt;**](PackingOptionSummary.md) | Packing options for the inbound plan. This property will be populated when it has been generated via the corresponding operation. If there is a chosen placement option, only packing options for that placement option will be returned. If there are confirmed shipments, only packing options for those shipments will be returned. Query the packing option for more details. | [optional] 
**PlacementOptions** | [**List&lt;PlacementOptionSummary&gt;**](PlacementOptionSummary.md) | Placement options for the inbound plan. This property will be populated when it has been generated via the corresponding operation. If there is a chosen placement option, that will be the only returned option. Query the placement option for more details. | [optional] 
**Shipments** | [**List&lt;ShipmentSummary&gt;**](ShipmentSummary.md) | A list of shipment IDs for the inbound plan. This property is populated when it has been generated with the &#x60;confirmPlacementOptions&#x60; operation. Only shipments from the chosen placement option are returned. Query the shipment for more details. | [optional] 
**SourceAddress** | [**Address**](Address.md) |  | 
**Status** | **string** | Current status of the inbound plan. Possible values: &#x60;ACTIVE&#x60;, &#x60;VOIDED&#x60;, &#x60;SHIPPED&#x60;, &#x60;ERRORED&#x60;. | 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

