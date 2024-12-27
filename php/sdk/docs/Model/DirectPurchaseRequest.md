# # DirectPurchaseRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ship_to** | [**\OpenAPI\Client\Model\shipping\Address**](Address.md) |  | [optional]
**ship_from** | [**\OpenAPI\Client\Model\shipping\Address**](Address.md) |  | [optional]
**return_to** | [**\OpenAPI\Client\Model\shipping\Address**](Address.md) |  | [optional]
**packages** | [**\OpenAPI\Client\Model\shipping\Package[]**](Package.md) | A list of packages to be shipped through a shipping service offering. | [optional]
**channel_details** | [**\OpenAPI\Client\Model\shipping\ChannelDetails**](ChannelDetails.md) |  |
**label_specifications** | [**\OpenAPI\Client\Model\shipping\RequestedDocumentSpecification**](RequestedDocumentSpecification.md) |  | [optional]

[[Back to Model list]](../../README.md#models) [[Back to API list]](../../README.md#endpoints) [[Back to README]](../../README.md)
