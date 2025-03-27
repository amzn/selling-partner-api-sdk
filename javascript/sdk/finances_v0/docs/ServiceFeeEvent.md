# SellingPartnerApiForFinances.ServiceFeeEvent

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**amazonOrderId** | **String** | An Amazon-defined identifier for an order. | [optional] 
**feeReason** | **String** | A short description of the service fee reason. | [optional] 
**feeList** | [**[FeeComponent]**](FeeComponent.md) | A list of fee component information. | [optional] 
**sellerSKU** | **String** | The seller SKU of the item. The seller SKU is qualified by the seller&#39;s seller ID, which is included with every call to the Selling Partner API. | [optional] 
**fnSKU** | **String** | A unique identifier assigned by Amazon to products stored in and fulfilled from an Amazon fulfillment center. | [optional] 
**feeDescription** | **String** | A short description of the service fee event. | [optional] 
**ASIN** | **String** | The Amazon Standard Identification Number (ASIN) of the item. | [optional] 
**storeName** | **String** | The name of the store where the event occurred. | [optional] 


