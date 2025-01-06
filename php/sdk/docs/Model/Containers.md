# # Containers

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**container_type** | **string** | The type of container. |
**container_sequence_number** | **string** | An integer that must be submitted for multi-box shipments only, where one item may come in separate packages. | [optional]
**container_identifiers** | [**\OpenAPI\Client\Model\vendorShipments\ContainerIdentification[]**](ContainerIdentification.md) | A list of carton identifiers. |
**tracking_number** | **string** | The tracking number used for identifying the shipment. | [optional]
**dimensions** | [**\OpenAPI\Client\Model\vendorShipments\Dimensions**](Dimensions.md) |  | [optional]
**weight** | [**\OpenAPI\Client\Model\vendorShipments\Weight**](Weight.md) |  | [optional]
**tier** | **int** | Number of layers per pallet. | [optional]
**block** | **int** | Number of cartons per layer on the pallet. | [optional]
**inner_containers_details** | [**\OpenAPI\Client\Model\vendorShipments\InnerContainersDetails**](InnerContainersDetails.md) |  | [optional]
**packed_items** | [**\OpenAPI\Client\Model\vendorShipments\PackedItems[]**](PackedItems.md) | A list of packed items. | [optional]

[[Back to Model list]](../../README.md#models) [[Back to API list]](../../README.md#endpoints) [[Back to README]](../../README.md)
