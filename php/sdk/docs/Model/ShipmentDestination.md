# # ShipmentDestination

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**address** | [**\OpenAPI\Client\Model\fulfillmentinbound\Address**](Address.md) |  | [optional]
**destination_type** | **string** | The type of destination for this shipment. Possible values: &#x60;AMAZON_OPTIMIZED&#x60;, &#x60;AMAZON_WAREHOUSE&#x60;. |
**warehouse_id** | **string** | The warehouse that the shipment should be sent to. Empty if the destination type is &#x60;AMAZON_OPTIMIZED&#x60;. | [optional]

[[Back to Model list]](../../README.md#models) [[Back to API list]](../../README.md#endpoints) [[Back to README]](../../README.md)
