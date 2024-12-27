# # InboundShipmentSummary

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created_at** | **\DateTime** | Timestamp when the shipment was created. | [optional]
**external_reference_id** | **string** | Optional client-provided reference ID that can be used to correlate this shipment with client resources. For example, to map this shipment to an internal bookkeeping order record. | [optional]
**order_id** | **string** | The AWD inbound order ID that this inbound shipment belongs to. |
**shipment_id** | **string** | A unique shipment ID. |
**shipment_status** | [**\OpenAPI\Client\Model\awd\InboundShipmentStatus**](InboundShipmentStatus.md) |  |
**updated_at** | **\DateTime** | Timestamp when the shipment was updated. | [optional]

[[Back to Model list]](../../README.md#models) [[Back to API list]](../../README.md#endpoints) [[Back to README]](../../README.md)
