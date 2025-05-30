# software.amzn.spapi.Model.fulfillment.outbound.v2020_07_01.FulfillmentOrderItem
Item information for a fulfillment order.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**SellerSku** | **string** | The seller SKU of the item. | 
**SellerFulfillmentOrderItemId** | **string** | A fulfillment order item identifier submitted with a call to the &#x60;createFulfillmentOrder&#x60; operation. | 
**Quantity** | **int** | The item quantity. | 
**GiftMessage** | **string** | A message to the gift recipient, if applicable. | [optional] 
**DisplayableComment** | **string** | Item-specific text that displays in recipient-facing materials such as the outbound shipment packing slip. | [optional] 
**FulfillmentNetworkSku** | **string** | Amazon&#39;s fulfillment network SKU of the item. | [optional] 
**OrderItemDisposition** | **string** | Indicates whether the item is sellable or unsellable. | [optional] 
**CancelledQuantity** | **int** | The item quantity. | 
**UnfulfillableQuantity** | **int** | The item quantity. | 
**EstimatedShipDate** | **DateTime** | Date timestamp | [optional] 
**EstimatedArrivalDate** | **DateTime** | Date timestamp | [optional] 
**PerUnitPrice** | [**Money**](Money.md) |  | [optional] 
**PerUnitTax** | [**Money**](Money.md) |  | [optional] 
**PerUnitDeclaredValue** | [**Money**](Money.md) |  | [optional] 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

