# # Box

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**box_id** | **string** | The ID provided by Amazon that identifies a given box. This ID is comprised of the external shipment ID (which is generated after transportation has been confirmed) and the index of the box. | [optional]
**content_information_source** | [**\OpenAPI\Client\Model\fulfillment\inbound\v2024_03_20\BoxContentInformationSource**](BoxContentInformationSource.md) |  | [optional]
**destination_region** | [**\OpenAPI\Client\Model\fulfillment\inbound\v2024_03_20\Region**](Region.md) |  | [optional]
**dimensions** | [**\OpenAPI\Client\Model\fulfillment\inbound\v2024_03_20\Dimensions**](Dimensions.md) |  | [optional]
**items** | [**\OpenAPI\Client\Model\fulfillment\inbound\v2024_03_20\Item[]**](Item.md) | Items contained within the box. | [optional]
**package_id** | **string** | Primary key to uniquely identify a Package (Box or Pallet). |
**quantity** | **int** | The number of containers where all other properties like weight or dimensions are identical. | [optional]
**template_name** | **string** | Template name of the box. | [optional]
**weight** | [**\OpenAPI\Client\Model\fulfillment\inbound\v2024_03_20\Weight**](Weight.md) |  | [optional]

[[Back to Model list]](../../README.md#models) [[Back to API list]](../../README.md#endpoints) [[Back to README]](../../README.md)
