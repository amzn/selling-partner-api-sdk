# TheSellingPartnerApiForAmazonWarehousingAndDistribution.InboundShipment

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**carrierCode** | [**CarrierCode**](CarrierCode.md) |  | [optional] 
**createdAt** | **Date** | Timestamp when the shipment was created. The date is returned in &lt;a href&#x3D;&#39;https://developer-docs.amazon.com/sp-api/docs/iso-8601&#39;&gt;ISO 8601&lt;/a&gt; format. | [optional] 
**destinationAddress** | [**Address**](Address.md) |  | 
**externalReferenceId** | **String** | Client-provided reference ID that can correlate this shipment to client resources. For example, to map this shipment to an internal bookkeeping order record. | [optional] 
**orderId** | **String** | The AWD inbound order ID that this inbound shipment belongs to. | 
**originAddress** | [**Address**](Address.md) |  | 
**receivedQuantity** | [**[InventoryQuantity]**](InventoryQuantity.md) | Quantity received (at the receiving end) as part of this shipment. | [optional] 
**shipBy** | **Date** | Timestamp when the shipment will be shipped. | [optional] 
**shipmentContainerQuantities** | [**[DistributionPackageQuantity]**](DistributionPackageQuantity.md) | Packages that are part of this shipment. | 
**shipmentId** | **String** | Unique shipment ID. | 
**shipmentSkuQuantities** | [**[SkuQuantity]**](SkuQuantity.md) | Quantity details at SKU level for the shipment. This attribute will only appear if the skuQuantities parameter in the request is set to SHOW. | [optional] 
**destinationRegion** | **String** | Assigned region where the order will be shipped. This can differ from what was passed as preference. AWD currently supports following region IDs: [us-west, us-east, us-southcentral, us-southeast] | [optional] 
**shipmentStatus** | [**InboundShipmentStatus**](InboundShipmentStatus.md) |  | 
**trackingId** | **String** | Carrier-unique tracking ID for this shipment. | [optional] 
**updatedAt** | **Date** | Timestamp when the shipment was updated. The date is returned in &lt;a href&#x3D;&#39;https://developer-docs.amazon.com/sp-api/docs/iso-8601&#39;&gt;ISO 8601&lt;/a&gt; format. | [optional] 
**warehouseReferenceId** | **String** | An AWD-provided reference ID that you can use to interact with the warehouse. For example, a carrier appointment booking. | [optional] 


