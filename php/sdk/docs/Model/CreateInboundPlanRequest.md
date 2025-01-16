# # CreateInboundPlanRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**destination_marketplaces** | **string[]** | Marketplaces where the items need to be shipped to. Currently only one marketplace can be selected in this request. |
**items** | [**\OpenAPI\Client\Model\fulfillment\inbound\v2024_03_20\ItemInput[]**](ItemInput.md) | Items included in this plan. |
**name** | **string** | Name for the Inbound Plan. If one isn&#39;t provided, a default name will be provided. | [optional]
**source_address** | [**\OpenAPI\Client\Model\fulfillment\inbound\v2024_03_20\AddressInput**](AddressInput.md) |  |

[[Back to Model list]](../../README.md#models) [[Back to API list]](../../README.md#endpoints) [[Back to README]](../../README.md)
