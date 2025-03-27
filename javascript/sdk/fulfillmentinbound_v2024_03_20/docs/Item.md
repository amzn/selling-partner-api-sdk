# TheSellingPartnerApiForFbaInboundOperations.Item

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**asin** | **String** | The Amazon Standard Identification Number (ASIN) of the item. | 
**expiration** | **String** | The expiration date of the MSKU. In [ISO 8601](https://developer-docs.amazon.com/sp-api/docs/iso-8601) datetime format with pattern&#x60;YYYY-MM-DD&#x60;. The same MSKU with different expiration dates cannot go into the same box. | [optional] 
**fnsku** | **String** | A unique identifier assigned by Amazon to products stored in and fulfilled from an Amazon fulfillment center. | 
**labelOwner** | **String** | Specifies who will label the items. Options include &#x60;AMAZON&#x60;, &#x60;SELLER&#x60;, and &#x60;NONE&#x60;. | 
**manufacturingLotCode** | **String** | The manufacturing lot code. | [optional] 
**msku** | **String** | The merchant SKU, a merchant-supplied identifier of a specific SKU. | 
**prepInstructions** | [**[PrepInstruction]**](PrepInstruction.md) | Special preparations that are required for an item. | 
**quantity** | **Number** | The number of the specified MSKU. | 


