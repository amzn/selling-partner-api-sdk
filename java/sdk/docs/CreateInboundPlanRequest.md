# CreateInboundPlanRequest

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**destinationMarketplaces** | **List&lt;String&gt;** | Marketplaces where the items need to be shipped to. Currently only one marketplace can be selected in this request. | 
**items** | [**List&lt;ItemInput&gt;**](ItemInput.md) | Items included in this plan. | 
**name** | **String** | Name for the Inbound Plan. If one isn&#x27;t provided, a default name will be provided. |  [optional]
**sourceAddress** | [**AddressInput**](AddressInput.md) |  | 
