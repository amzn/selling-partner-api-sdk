# SellingPartnerApisForFulfillmentOutbound.FulfillmentPreviewItem

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**sellerSku** | **String** | The seller SKU of the item. | 
**quantity** | **Number** | The item quantity. | 
**sellerFulfillmentOrderItemId** | **String** | A fulfillment order item identifier that the seller created with a call to the &#x60;createFulfillmentOrder&#x60; operation. | 
**estimatedShippingWeight** | [**Weight**](Weight.md) |  | [optional] 
**shippingWeightCalculationMethod** | **String** | The method used to calculate the estimated shipping weight. | [optional] 



## Enum: ShippingWeightCalculationMethodEnum


* `Package` (value: `"Package"`)

* `Dimensional` (value: `"Dimensional"`)




