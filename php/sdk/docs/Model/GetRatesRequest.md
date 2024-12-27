# # GetRatesRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ship_to** | [**\OpenAPI\Client\Model\shipping\Address**](Address.md) |  | [optional]
**ship_from** | [**\OpenAPI\Client\Model\shipping\Address**](Address.md) |  |
**return_to** | [**\OpenAPI\Client\Model\shipping\Address**](Address.md) |  | [optional]
**ship_date** | **\DateTime** | The ship date and time (the requested pickup). This defaults to the current date and time. | [optional]
**shipper_instruction** | [**\OpenAPI\Client\Model\shipping\ShipperInstruction**](ShipperInstruction.md) |  | [optional]
**packages** | [**\OpenAPI\Client\Model\shipping\Package[]**](Package.md) | A list of packages to be shipped through a shipping service offering. |
**value_added_services** | [**\OpenAPI\Client\Model\shipping\ValueAddedServiceDetails**](ValueAddedServiceDetails.md) |  | [optional]
**tax_details** | [**\OpenAPI\Client\Model\shipping\TaxDetail[]**](TaxDetail.md) | A list of tax detail information. | [optional]
**channel_details** | [**\OpenAPI\Client\Model\shipping\ChannelDetails**](ChannelDetails.md) |  |
**client_reference_details** | [**\OpenAPI\Client\Model\shipping\ClientReferenceDetail[]**](ClientReferenceDetail.md) | Object to pass additional information about the MCI Integrator shipperType: List of ClientReferenceDetail | [optional]
**shipment_type** | [**\OpenAPI\Client\Model\shipping\ShipmentType**](ShipmentType.md) |  | [optional]
**destination_access_point_details** | [**\OpenAPI\Client\Model\shipping\AccessPointDetails**](AccessPointDetails.md) |  | [optional]

[[Back to Model list]](../../README.md#models) [[Back to API list]](../../README.md#endpoints) [[Back to README]](../../README.md)
