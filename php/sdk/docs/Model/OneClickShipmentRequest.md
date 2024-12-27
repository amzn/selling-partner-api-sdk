# # OneClickShipmentRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ship_to** | [**\OpenAPI\Client\Model\shipping\Address**](Address.md) |  | [optional]
**ship_from** | [**\OpenAPI\Client\Model\shipping\Address**](Address.md) |  |
**return_to** | [**\OpenAPI\Client\Model\shipping\Address**](Address.md) |  | [optional]
**ship_date** | **\DateTime** | The ship date and time (the requested pickup). This defaults to the current date and time. | [optional]
**packages** | [**\OpenAPI\Client\Model\shipping\Package[]**](Package.md) | A list of packages to be shipped through a shipping service offering. |
**value_added_services_details** | [**\OpenAPI\Client\Model\shipping\OneClickShipmentValueAddedService[]**](OneClickShipmentValueAddedService.md) | The value-added services to be added to a shipping service purchase. | [optional]
**tax_details** | [**\OpenAPI\Client\Model\shipping\TaxDetail[]**](TaxDetail.md) | A list of tax detail information. | [optional]
**channel_details** | [**\OpenAPI\Client\Model\shipping\ChannelDetails**](ChannelDetails.md) |  |
**label_specifications** | [**\OpenAPI\Client\Model\shipping\RequestedDocumentSpecification**](RequestedDocumentSpecification.md) |  |
**service_selection** | [**\OpenAPI\Client\Model\shipping\ServiceSelection**](ServiceSelection.md) |  |
**shipper_instruction** | [**\OpenAPI\Client\Model\shipping\ShipperInstruction**](ShipperInstruction.md) |  | [optional]
**destination_access_point_details** | [**\OpenAPI\Client\Model\shipping\AccessPointDetails**](AccessPointDetails.md) |  | [optional]

[[Back to Model list]](../../README.md#models) [[Back to API list]](../../README.md#endpoints) [[Back to README]](../../README.md)
