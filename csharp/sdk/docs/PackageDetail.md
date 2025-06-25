# software.amzn.spapi.Model.orders.v0.PackageDetail
Properties of packages

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**PackageReferenceId** | **string** | A seller-supplied identifier that uniquely identifies a package within the scope of an order. Only positive numeric values are supported. | 
**CarrierCode** | **string** | Identifies the carrier that will deliver the package. This field is required for all marketplaces. For more information, refer to the [&#x60;CarrierCode&#x60; announcement](https://developer-docs.amazon.com/sp-api/changelog/carriercode-value-required-in-shipment-confirmations-for-br-mx-ca-sg-au-in-jp-marketplaces). | 
**CarrierName** | **string** | Carrier name that will deliver the package. Required when &#x60;carrierCode&#x60; is \&quot;Other\&quot;  | [optional] 
**ShippingMethod** | **string** | Ship method to be used for shipping the order. | [optional] 
**TrackingNumber** | **string** | The tracking number used to obtain tracking and delivery information. | 
**ShipDate** | **DateTime** | The shipping date for the package. Must be in &lt;a href&#x3D;&#39;https://developer-docs.amazon.com/sp-api/docs/iso-8601&#39;&gt;ISO 8601&lt;/a&gt; date/time format. | 
**ShipFromSupplySourceId** | **string** | The unique identifier for the supply source. | [optional] 
**OrderItems** | [**List&lt;ConfirmShipmentOrderItem&gt;**](ConfirmShipmentOrderItem.md) | A list of order items. | 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

