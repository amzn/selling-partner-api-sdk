# FulfillmentPreviewItem

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**sellerSku** | **String** | The seller SKU of the item. | 
**quantity** | **Integer** |  | 
**sellerFulfillmentOrderItemId** | **String** | A fulfillment order item identifier that the seller created with a call to the &#x60;createFulfillmentOrder&#x60; operation. | 
**estimatedShippingWeight** | [**Weight**](Weight.md) |  |  [optional]
**shippingWeightCalculationMethod** | [**ShippingWeightCalculationMethodEnum**](#ShippingWeightCalculationMethodEnum) | The method used to calculate the estimated shipping weight. |  [optional]

<a name="ShippingWeightCalculationMethodEnum"></a>
## Enum: ShippingWeightCalculationMethodEnum
Name | Value
---- | -----
PACKAGE | &quot;Package&quot;
DIMENSIONAL | &quot;Dimensional&quot;
