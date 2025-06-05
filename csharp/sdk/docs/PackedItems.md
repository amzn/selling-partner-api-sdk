# software.amzn.spapi.Model.vendor.shipments.v1.PackedItems
Details of the item being shipped.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ItemSequenceNumber** | **string** | Item sequence number for the item. The first item will be 001, the second 002, and so on. This number is used as a reference to refer to this item from the carton or pallet level. | [optional] 
**BuyerProductIdentifier** | **string** | Buyer Standard Identification Number (ASIN) of an item. | [optional] 
**VendorProductIdentifier** | **string** | The vendor selected product identification of the item. Should be the same as was sent in the purchase order. | [optional] 
**PackedQuantity** | [**ItemQuantity**](ItemQuantity.md) |  | [optional] 
**ItemDetails** | [**PackageItemDetails**](PackageItemDetails.md) |  | [optional] 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

