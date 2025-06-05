# software.amzn.spapi.Model.vendor.df.shipping.v2021_12_28.PackedItem
An item that has been packed into a container for shipping.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ItemSequenceNumber** | **int** | The sequence number of the item. The number must be the same as the order number of the item. | 
**BuyerProductIdentifier** | **string** | The buyer&#39;s Amazon Standard Identification Number (ASIN) of an item. Either &#x60;buyerProductIdentifier&#x60; or &#x60;vendorProductIdentifier&#x60; is required. | [optional] 
**PieceNumber** | **int** | The piece number of the item in this container. This is required when the item is split across different containers. | [optional] 
**VendorProductIdentifier** | **string** | An item&#39;s product identifier, which the vendor selects. This identifier should be the same as the identifier, such as a SKU, in the purchase order. | [optional] 
**PackedQuantity** | [**ItemQuantity**](ItemQuantity.md) |  | 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

