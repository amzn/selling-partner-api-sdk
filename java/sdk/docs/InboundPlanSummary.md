# InboundPlanSummary

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**createdAt** | [**OffsetDateTime**](OffsetDateTime.md) | The time at which the inbound plan was created. In [ISO 8601](https://developer-docs.amazon.com/sp-api/docs/iso-8601) datetime format with pattern &#x60;yyyy-MM-ddTHH:mm:ssZ&#x60;. | 
**inboundPlanId** | **String** | Identifier of an inbound plan. | 
**lastUpdatedAt** | [**OffsetDateTime**](OffsetDateTime.md) | The time at which the inbound plan was last updated. In [ISO 8601](https://developer-docs.amazon.com/sp-api/docs/iso-8601) datetime format with pattern &#x60;yyyy-MM-ddTHH:mm:ssZ&#x60;. | 
**marketplaceIds** | **List&lt;String&gt;** | A list of marketplace IDs. | 
**name** | **String** | Human-readable name of the inbound plan. | 
**sourceAddress** | [**Address**](Address.md) |  | 
**status** | **String** | The current status of the inbound plan. Possible values: &#x60;ACTIVE&#x60;, &#x60;VOIDED&#x60;, &#x60;SHIPPED&#x60;, &#x60;ERRORED&#x60;. | 
