# # CreateShipmentRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**shipment_request_details** | [**\OpenAPI\Client\Model\merchantfulfillment\ShipmentRequestDetails**](ShipmentRequestDetails.md) |  |
**shipping_service_id** | **string** | An Amazon-defined shipping service identifier. |
**shipping_service_offer_id** | **string** | Identifies a shipping service order made by a carrier. | [optional]
**hazmat_type** | [**\OpenAPI\Client\Model\merchantfulfillment\HazmatType**](HazmatType.md) |  | [optional]
**label_format_option** | [**\OpenAPI\Client\Model\merchantfulfillment\LabelFormatOptionRequest**](LabelFormatOptionRequest.md) |  | [optional]
**shipment_level_seller_inputs_list** | [**\OpenAPI\Client\Model\merchantfulfillment\AdditionalSellerInputs[]**](AdditionalSellerInputs.md) | A list of additional seller input pairs required to purchase shipping. | [optional]

[[Back to Model list]](../../README.md#models) [[Back to API list]](../../README.md#endpoints) [[Back to README]](../../README.md)
