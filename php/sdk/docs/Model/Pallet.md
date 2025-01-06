# # Pallet

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**pallet_identifiers** | [**\OpenAPI\Client\Model\vendorShipments\ContainerIdentification[]**](ContainerIdentification.md) | A list of pallet identifiers. |
**tier** | **int** | Number of layers per pallet. Only applicable to container type Pallet. | [optional]
**block** | **int** | Number of cartons per layer on the pallet. Only applicable to container type Pallet. | [optional]
**dimensions** | [**\OpenAPI\Client\Model\vendorShipments\Dimensions**](Dimensions.md) |  | [optional]
**weight** | [**\OpenAPI\Client\Model\vendorShipments\Weight**](Weight.md) |  | [optional]
**carton_reference_details** | [**\OpenAPI\Client\Model\vendorShipments\CartonReferenceDetails**](CartonReferenceDetails.md) |  | [optional]
**items** | [**\OpenAPI\Client\Model\vendorShipments\ContainerItem[]**](ContainerItem.md) | A list of container item details. | [optional]

[[Back to Model list]](../../README.md#models) [[Back to API list]](../../README.md#endpoints) [[Back to README]](../../README.md)
