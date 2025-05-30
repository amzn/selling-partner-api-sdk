# software.amzn.spapi.Model.fulfillment.outbound.v2020_07_01.FeatureSku
Information about an SKU, including the count available, identifiers, and a list of overlapping SKUs that share the same inventory pool.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**SellerSku** | **string** | Used to identify an item in the given marketplace. &#x60;SellerSKU&#x60; is qualified by the seller&#39;s SellerId, which is included with every operation that you submit. | [optional] 
**FnSku** | **string** | The unique SKU used by Amazon&#39;s fulfillment network. | [optional] 
**Asin** | **string** | The Amazon Standard Identification Number (ASIN) of the item. | [optional] 
**SkuCount** | **decimal** | The number of SKUs available for this service. | [optional] 
**OverlappingSkus** | **List&lt;string&gt;** | Other seller SKUs that are shared across the same inventory. | [optional] 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

