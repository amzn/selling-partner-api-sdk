# software.amzn.spapi.Model.fulfillment.inbound.v2024_03_20.ShipmentDestination
The Amazon fulfillment center address and warehouse ID.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Address** | [**Address**](Address.md) |  | [optional] 
**DestinationType** | **string** | The type of destination for this shipment. Possible values: &#x60;AMAZON_OPTIMIZED&#x60;, &#x60;AMAZON_WAREHOUSE&#x60;. | 
**WarehouseId** | **string** | The warehouse that the shipment should be sent to. Empty if the destination type is &#x60;AMAZON_OPTIMIZED&#x60;. | [optional] 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

