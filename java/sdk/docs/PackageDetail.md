# PackageDetail

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**packageReferenceId** | **String** |  | 
**carrierCode** | **String** | Identifies the carrier that will deliver the package. This field is required for all marketplaces. For more information, refer to the [&#x60;CarrierCode&#x60; announcement](https://developer-docs.amazon.com/sp-api/changelog/carriercode-value-required-in-shipment-confirmations-for-br-mx-ca-sg-au-in-jp-marketplaces). | 
**carrierName** | **String** | Carrier Name that will deliver the package. Required when &#x60;carrierCode&#x60; is \&quot;Others\&quot;  |  [optional]
**shippingMethod** | **String** | Ship method to be used for shipping the order. |  [optional]
**trackingNumber** | **String** | The tracking number used to obtain tracking and delivery information. | 
**shipDate** | [**OffsetDateTime**](OffsetDateTime.md) | The shipping date for the package. Must be in &lt;a href&#x3D;&#x27;https://developer-docs.amazon.com/sp-api/docs/iso-8601&#x27;&gt;ISO 8601&lt;/a&gt; date/time format. | 
**shipFromSupplySourceId** | **String** | The unique identifier for the supply source. |  [optional]
**orderItems** | [**ConfirmShipmentOrderItemsList**](ConfirmShipmentOrderItemsList.md) |  | 
