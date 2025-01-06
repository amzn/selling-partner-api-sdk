# # ShipmentRequestDetails

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**amazon_order_id** | **string** | An Amazon-defined order identifier, in 3-7-7 format. |
**seller_order_id** | **string** | A seller-defined order identifier. | [optional]
**item_list** | [**\OpenAPI\Client\Model\merchantFulfillment\Item[]**](Item.md) | The list of items you want to include in a shipment. |
**ship_from_address** | [**\OpenAPI\Client\Model\merchantFulfillment\Address**](Address.md) |  |
**package_dimensions** | [**\OpenAPI\Client\Model\merchantFulfillment\PackageDimensions**](PackageDimensions.md) |  |
**weight** | [**\OpenAPI\Client\Model\merchantFulfillment\Weight**](Weight.md) |  |
**must_arrive_by_date** | **\DateTime** | Date-time formatted timestamp. | [optional]
**ship_date** | **\DateTime** | Date-time formatted timestamp. | [optional]
**shipping_service_options** | [**\OpenAPI\Client\Model\merchantFulfillment\ShippingServiceOptions**](ShippingServiceOptions.md) |  |
**label_customization** | [**\OpenAPI\Client\Model\merchantFulfillment\LabelCustomization**](LabelCustomization.md) |  | [optional]

[[Back to Model list]](../../README.md#models) [[Back to API list]](../../README.md#endpoints) [[Back to README]](../../README.md)
