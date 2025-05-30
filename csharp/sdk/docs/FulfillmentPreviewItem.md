# software.amzn.spapi.Model.fulfillment.outbound.v2020_07_01.FulfillmentPreviewItem
Item information for a shipment in a fulfillment order preview.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**SellerSku** | **string** | The seller SKU of the item. | 
**Quantity** | **int** | The item quantity. | 
**SellerFulfillmentOrderItemId** | **string** | A fulfillment order item identifier that the seller created with a call to the &#x60;createFulfillmentOrder&#x60; operation. | 
**EstimatedShippingWeight** | [**Weight**](Weight.md) |  | [optional] 
**ShippingWeightCalculationMethod** | **string** | The method used to calculate the estimated shipping weight. | [optional] 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

