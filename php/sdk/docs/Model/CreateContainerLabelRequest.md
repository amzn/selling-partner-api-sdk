# # CreateContainerLabelRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**selling_party** | [**\OpenAPI\Client\Model\vendor.df.shipping\PartyIdentification**](PartyIdentification.md) |  |
**ship_from_party** | [**\OpenAPI\Client\Model\vendor.df.shipping\PartyIdentification**](PartyIdentification.md) |  |
**carrier_id** | [**\OpenAPI\Client\Model\vendor.df.shipping\CarrierId**](CarrierId.md) |  |
**vendor_container_id** | **string** | unique identifier for the container provided by the vendor. |
**packages** | [**\OpenAPI\Client\Model\vendor.df.shipping\Package[]**](Package.md) | Array of package object in order to associate shipments packages with given container. |

[[Back to Model list]](../../README.md#models) [[Back to API list]](../../README.md#endpoints) [[Back to README]](../../README.md)
