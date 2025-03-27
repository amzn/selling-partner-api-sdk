# SellingPartnerApiForDirectFulfillmentShipping.Item

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**itemSequenceNumber** | **Number** | The sequence number of the item. The number must be the same as the order number of the item. | 
**buyerProductIdentifier** | **String** | The buyer&#39;s Amazon Standard Identification Number (ASIN) of an item. Either &#x60;buyerProductIdentifier&#x60; or &#x60;vendorProductIdentifier&#x60; is required. | [optional] 
**vendorProductIdentifier** | **String** | An item&#39;s product identifier, which the vendor selects. This identifier should be the same as the identifier, such as a SKU, in the purchase order. | [optional] 
**shippedQuantity** | [**ItemQuantity**](ItemQuantity.md) |  | 


