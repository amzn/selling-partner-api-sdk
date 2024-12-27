# # InboundShipment

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**carrier_code** | [**\OpenAPI\Client\Model\awd\CarrierCode**](CarrierCode.md) |  | [optional]
**created_at** | **\DateTime** | Timestamp when the shipment was created. The date is returned in &lt;a href&#x3D;&#39;https://developer-docs.amazon.com/sp-api/docs/iso-8601&#39;&gt;ISO 8601&lt;/a&gt; format. | [optional]
**destination_address** | [**\OpenAPI\Client\Model\awd\Address**](Address.md) |  |
**external_reference_id** | **string** | Client-provided reference ID that can correlate this shipment to client resources. For example, to map this shipment to an internal bookkeeping order record. | [optional]
**order_id** | **string** | The AWD inbound order ID that this inbound shipment belongs to. |
**origin_address** | [**\OpenAPI\Client\Model\awd\Address**](Address.md) |  |
**received_quantity** | [**\OpenAPI\Client\Model\awd\InventoryQuantity[]**](InventoryQuantity.md) | Quantity received (at the receiving end) as part of this shipment. | [optional]
**ship_by** | **\DateTime** | Timestamp when the shipment will be shipped. | [optional]
**shipment_container_quantities** | [**\OpenAPI\Client\Model\awd\DistributionPackageQuantity[]**](DistributionPackageQuantity.md) | Packages that are part of this shipment. |
**shipment_id** | **string** | Unique shipment ID. |
**shipment_sku_quantities** | [**\OpenAPI\Client\Model\awd\SkuQuantity[]**](SkuQuantity.md) | Quantity details at SKU level for the shipment. This attribute will only appear if the skuQuantities parameter in the request is set to SHOW. | [optional]
**shipment_status** | [**\OpenAPI\Client\Model\awd\InboundShipmentStatus**](InboundShipmentStatus.md) |  |
**tracking_id** | **string** | Carrier-unique tracking ID for this shipment. | [optional]
**updated_at** | **\DateTime** | Timestamp when the shipment was updated. The date is returned in &lt;a href&#x3D;&#39;https://developer-docs.amazon.com/sp-api/docs/iso-8601&#39;&gt;ISO 8601&lt;/a&gt; format. | [optional]
**warehouse_reference_id** | **string** | An AWD-provided reference ID that you can use to interact with the warehouse. For example, a carrier appointment booking. | [optional]

[[Back to Model list]](../../README.md#models) [[Back to API list]](../../README.md#endpoints) [[Back to README]](../../README.md)
