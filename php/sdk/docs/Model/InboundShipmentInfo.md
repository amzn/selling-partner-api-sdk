# # InboundShipmentInfo

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**shipment_id** | **string** | The shipment identifier submitted in the request. | [optional]
**shipment_name** | **string** | The name for the inbound shipment. | [optional]
**ship_from_address** | [**\OpenAPI\Client\Model\fulfillmentInboundV0\Address**](Address.md) |  |
**destination_fulfillment_center_id** | **string** | An Amazon fulfillment center identifier created by Amazon. | [optional]
**shipment_status** | [**\OpenAPI\Client\Model\fulfillmentInboundV0\ShipmentStatus**](ShipmentStatus.md) |  | [optional]
**label_prep_type** | [**\OpenAPI\Client\Model\fulfillmentInboundV0\LabelPrepType**](LabelPrepType.md) |  | [optional]
**are_cases_required** | **bool** | Indicates whether or not an inbound shipment contains case-packed boxes. When AreCasesRequired &#x3D; true for an inbound shipment, all items in the inbound shipment must be case packed. |
**confirmed_need_by_date** | **\DateTime** | Type containing date in string format | [optional]
**box_contents_source** | [**\OpenAPI\Client\Model\fulfillmentInboundV0\BoxContentsSource**](BoxContentsSource.md) |  | [optional]
**estimated_box_contents_fee** | [**\OpenAPI\Client\Model\fulfillmentInboundV0\BoxContentsFeeDetails**](BoxContentsFeeDetails.md) |  | [optional]

[[Back to Model list]](../../README.md#models) [[Back to API list]](../../README.md#endpoints) [[Back to README]](../../README.md)
