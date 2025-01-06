# # InboundShipmentHeader

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**shipment_name** | **string** | The name for the shipment. Use a naming convention that helps distinguish between shipments over time, such as the date the shipment was created. |
**ship_from_address** | [**\OpenAPI\Client\Model\fulfillmentInboundV0\Address**](Address.md) |  |
**destination_fulfillment_center_id** | **string** | The identifier for the fulfillment center to which the shipment will be shipped. Get this value from the InboundShipmentPlan object in the response returned by the createInboundShipmentPlan operation. |
**are_cases_required** | **bool** | Indicates whether or not an inbound shipment contains case-packed boxes. Note: A shipment must contain either all case-packed boxes or all individually packed boxes.  Possible values:  true - All boxes in the shipment must be case packed.  false - All boxes in the shipment must be individually packed.  Note: If AreCasesRequired &#x3D; true for an inbound shipment, then the value of QuantityInCase must be greater than zero for every item in the shipment. Otherwise the service returns an error. | [optional]
**shipment_status** | [**\OpenAPI\Client\Model\fulfillmentInboundV0\ShipmentStatus**](ShipmentStatus.md) |  |
**label_prep_preference** | [**\OpenAPI\Client\Model\fulfillmentInboundV0\LabelPrepPreference**](LabelPrepPreference.md) |  |
**intended_box_contents_source** | [**\OpenAPI\Client\Model\fulfillmentInboundV0\IntendedBoxContentsSource**](IntendedBoxContentsSource.md) |  | [optional]

[[Back to Model list]](../../README.md#models) [[Back to API list]](../../README.md#endpoints) [[Back to README]](../../README.md)
