# software.amzn.spapi.Model.awd.v2024_05_09.InboundShipment
Represents an AWD inbound shipment.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CarrierCode** | [**CarrierCode**](CarrierCode.md) |  | [optional] 
**CreatedAt** | **DateTime** | Timestamp when the shipment was created. The date is returned in &lt;a href&#x3D;&#39;https://developer-docs.amazon.com/sp-api/docs/iso-8601&#39;&gt;ISO 8601&lt;/a&gt; format. | [optional] 
**DestinationAddress** | [**Address**](Address.md) |  | 
**ExternalReferenceId** | **string** | Client-provided reference ID that can correlate this shipment to client resources. For example, to map this shipment to an internal bookkeeping order record. | [optional] 
**OrderId** | **string** | The AWD inbound order ID that this inbound shipment belongs to. | 
**OriginAddress** | [**Address**](Address.md) |  | 
**ReceivedQuantity** | [**List&lt;InventoryQuantity&gt;**](InventoryQuantity.md) | Quantity received (at the receiving end) as part of this shipment. | [optional] 
**ShipBy** | **DateTime** | Timestamp when the shipment will be shipped. | [optional] 
**ShipmentContainerQuantities** | [**List&lt;DistributionPackageQuantity&gt;**](DistributionPackageQuantity.md) | Packages that are part of this shipment. | 
**ShipmentId** | **string** | Unique shipment ID. | 
**ShipmentSkuQuantities** | [**List&lt;SkuQuantity&gt;**](SkuQuantity.md) | Quantity details at SKU level for the shipment. This attribute will only appear if the skuQuantities parameter in the request is set to SHOW. | [optional] 
**DestinationRegion** | **string** | Assigned region where the order will be shipped. This can differ from what was passed as preference. AWD currently supports following region IDs: [us-west, us-east, us-southcentral, us-southeast] | [optional] 
**ShipmentStatus** | **InboundShipmentStatus** |  | 
**TrackingId** | **string** | Carrier-unique tracking ID for this shipment. | [optional] 
**UpdatedAt** | **DateTime** | Timestamp when the shipment was updated. The date is returned in &lt;a href&#x3D;&#39;https://developer-docs.amazon.com/sp-api/docs/iso-8601&#39;&gt;ISO 8601&lt;/a&gt; format. | [optional] 
**WarehouseReferenceId** | **string** | An AWD-provided reference ID that you can use to interact with the warehouse. For example, a carrier appointment booking. | [optional] 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

