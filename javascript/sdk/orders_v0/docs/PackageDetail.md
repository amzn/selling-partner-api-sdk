# SellingPartnerApiForOrders.PackageDetail

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**packageReferenceId** | **String** | A seller-supplied identifier that uniquely identifies a package within the scope of an order. Only positive numeric values are supported. | 
**carrierCode** | **String** | Identifies the carrier that will deliver the package. This field is required for all marketplaces. For more information, refer to the [&#x60;CarrierCode&#x60; announcement](https://developer-docs.amazon.com/sp-api/changelog/carriercode-value-required-in-shipment-confirmations-for-br-mx-ca-sg-au-in-jp-marketplaces). | 
**carrierName** | **String** | Carrier Name that will deliver the package. Required when &#x60;carrierCode&#x60; is \&quot;Others\&quot;  | [optional] 
**shippingMethod** | **String** | Ship method to be used for shipping the order. | [optional] 
**trackingNumber** | **String** | The tracking number used to obtain tracking and delivery information. | 
**shipDate** | **Date** | The shipping date for the package. Must be in &lt;a href&#x3D;&#39;https://developer-docs.amazon.com/sp-api/docs/iso-8601&#39;&gt;ISO 8601&lt;/a&gt; date/time format. | 
**shipFromSupplySourceId** | **String** | The unique identifier for the supply source. | [optional] 
**orderItems** | [**[ConfirmShipmentOrderItem]**](ConfirmShipmentOrderItem.md) | A list of order items. | 


