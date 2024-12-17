# # PackageDetail

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**package_reference_id** | **string** | A seller-supplied identifier that uniquely identifies a package within the scope of an order. Only positive numeric values are supported. |
**carrier_code** | **string** | Identifies the carrier that will deliver the package. This field is required for all marketplaces. For more information, refer to the [&#x60;CarrierCode&#x60; announcement](https://developer-docs.amazon.com/sp-api/changelog/carriercode-value-required-in-shipment-confirmations-for-br-mx-ca-sg-au-in-jp-marketplaces). |
**carrier_name** | **string** | Carrier Name that will deliver the package. Required when &#x60;carrierCode&#x60; is \&quot;Others\&quot; | [optional]
**shipping_method** | **string** | Ship method to be used for shipping the order. | [optional]
**tracking_number** | **string** | The tracking number used to obtain tracking and delivery information. |
**ship_date** | **\DateTime** | The shipping date for the package. Must be in &lt;a href&#x3D;&#39;https://developer-docs.amazon.com/sp-api/docs/iso-8601&#39;&gt;ISO 8601&lt;/a&gt; date/time format. |
**ship_from_supply_source_id** | **string** | The unique identifier for the supply source. | [optional]
**order_items** | [**\OpenAPI\Client\Model\orders\ConfirmShipmentOrderItem[]**](ConfirmShipmentOrderItem.md) | A list of order items. |

[[Back to Model list]](../../README.md#models) [[Back to API list]](../../README.md#endpoints) [[Back to README]](../../README.md)
