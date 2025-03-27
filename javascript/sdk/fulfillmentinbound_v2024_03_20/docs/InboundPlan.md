# TheSellingPartnerApiForFbaInboundOperations.InboundPlan

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**createdAt** | **Date** | The time at which the inbound plan was created. In [ISO 8601](https://developer-docs.amazon.com/sp-api/docs/iso-8601) datetime with pattern &#x60;yyyy-MM-ddTHH:mm:ssZ&#x60;. | 
**inboundPlanId** | **String** | Identifier of an inbound plan. | 
**lastUpdatedAt** | **Date** | The time at which the inbound plan was last updated. In [ISO 8601](https://developer-docs.amazon.com/sp-api/docs/iso-8601) datetime format with pattern &#x60;yyyy-MM-ddTHH:mm:ssZ&#x60;. | 
**marketplaceIds** | **[String]** | A list of marketplace IDs. | 
**name** | **String** | Human-readable name of the inbound plan. | 
**packingOptions** | [**[PackingOptionSummary]**](PackingOptionSummary.md) | Packing options for the inbound plan. This property will be populated when it has been generated via the corresponding operation. If there is a chosen placement option, only packing options for that placement option will be returned. If there are confirmed shipments, only packing options for those shipments will be returned. Query the packing option for more details. | [optional] 
**placementOptions** | [**[PlacementOptionSummary]**](PlacementOptionSummary.md) | Placement options for the inbound plan. This property will be populated when it has been generated via the corresponding operation. If there is a chosen placement option, that will be the only returned option. Query the placement option for more details. | [optional] 
**shipments** | [**[ShipmentSummary]**](ShipmentSummary.md) | A list of shipment IDs for the inbound plan. This property is populated when it has been generated with the &#x60;confirmPlacementOptions&#x60; operation. Only shipments from the chosen placement option are returned. Query the shipment for more details. | [optional] 
**sourceAddress** | [**Address**](Address.md) |  | 
**status** | **String** | Current status of the inbound plan. Possible values: &#x60;ACTIVE&#x60;, &#x60;VOIDED&#x60;, &#x60;SHIPPED&#x60;, &#x60;ERRORED&#x60;. | 


