# software.amzn.spapi.Model.finances.v0.ServiceFeeEvent
A service fee on the seller's account.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AmazonOrderId** | **string** | An Amazon-defined identifier for an order. | [optional] 
**FeeReason** | **string** | A short description of the service fee reason. | [optional] 
**FeeList** | [**List&lt;FeeComponent&gt;**](FeeComponent.md) | A list of fee component information. | [optional] 
**SellerSKU** | **string** | The seller SKU of the item. The seller SKU is qualified by the seller&#39;s seller ID, which is included with every call to the Selling Partner API. | [optional] 
**FnSKU** | **string** | A unique identifier assigned by Amazon to products stored in and fulfilled from an Amazon fulfillment center. | [optional] 
**FeeDescription** | **string** | A short description of the service fee event. | [optional] 
**ASIN** | **string** | The Amazon Standard Identification Number (ASIN) of the item. | [optional] 
**StoreName** | **string** | The name of the store where the event occurred. | [optional] 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

