# software.amzn.spapi.Model.fulfillment.inbound.v2024_03_20.InboundPlanSummary
A light-weight inbound plan.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CreatedAt** | **DateTime** | The time at which the inbound plan was created. In [ISO 8601](https://developer-docs.amazon.com/sp-api/docs/iso-8601) datetime format with pattern &#x60;yyyy-MM-ddTHH:mm:ssZ&#x60;. | 
**InboundPlanId** | **string** | Identifier of an inbound plan. | 
**LastUpdatedAt** | **DateTime** | The time at which the inbound plan was last updated. In [ISO 8601](https://developer-docs.amazon.com/sp-api/docs/iso-8601) datetime format with pattern &#x60;yyyy-MM-ddTHH:mm:ssZ&#x60;. | 
**MarketplaceIds** | **List&lt;string&gt;** | A list of marketplace IDs. | 
**Name** | **string** | Human-readable name of the inbound plan. | 
**SourceAddress** | [**Address**](Address.md) |  | 
**Status** | **string** | The current status of the inbound plan. Possible values: &#x60;ACTIVE&#x60;, &#x60;VOIDED&#x60;, &#x60;SHIPPED&#x60;, &#x60;ERRORED&#x60;. | 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

