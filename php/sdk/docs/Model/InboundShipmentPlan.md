# # InboundShipmentPlan

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**shipment_id** | **string** | A shipment identifier originally returned by the createInboundShipmentPlan operation. |
**destination_fulfillment_center_id** | **string** | An Amazon fulfillment center identifier created by Amazon. |
**ship_to_address** | [**\OpenAPI\Client\Model\fulfillmentinboundv0\Address**](Address.md) |  |
**label_prep_type** | [**\OpenAPI\Client\Model\fulfillmentinboundv0\LabelPrepType**](LabelPrepType.md) |  |
**items** | [**\OpenAPI\Client\Model\fulfillmentinboundv0\InboundShipmentPlanItem[]**](InboundShipmentPlanItem.md) | A list of inbound shipment plan item information. |
**estimated_box_contents_fee** | [**\OpenAPI\Client\Model\fulfillmentinboundv0\BoxContentsFeeDetails**](BoxContentsFeeDetails.md) |  | [optional]

[[Back to Model list]](../../README.md#models) [[Back to API list]](../../README.md#endpoints) [[Back to README]](../../README.md)
