# software.amzn.spapi.Model.awd.v2024_05_09.InboundShipmentSummary
Summary for an AWD inbound shipment containing the shipment ID, which can be used to retrieve the actual shipment.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CreatedAt** | **DateTime** | Timestamp when the shipment was created. | [optional] 
**ExternalReferenceId** | **string** | Optional client-provided reference ID that can be used to correlate this shipment with client resources. For example, to map this shipment to an internal bookkeeping order record. | [optional] 
**OrderId** | **string** | The AWD inbound order ID that this inbound shipment belongs to. | 
**ShipmentId** | **string** | A unique shipment ID. | 
**ShipmentStatus** | **InboundShipmentStatus** |  | 
**UpdatedAt** | **DateTime** | Timestamp when the shipment was updated. | [optional] 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

