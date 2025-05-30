# software.amzn.spapi.Model.fulfillment.inbound.v2024_03_20.CreateInboundPlanRequest
The `createInboundPlan` request.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**DestinationMarketplaces** | **List&lt;string&gt;** | Marketplaces where the items need to be shipped to. Currently only one marketplace can be selected in this request. | 
**Items** | [**List&lt;ItemInput&gt;**](ItemInput.md) | Items included in this plan. | 
**Name** | **string** | Name for the Inbound Plan. If one isn&#39;t provided, a default name will be provided. | [optional] 
**SourceAddress** | [**AddressInput**](AddressInput.md) |  | 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

