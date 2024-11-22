# PackedItem

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**itemSequenceNumber** | **Integer** | Item Sequence Number for the item. This must be the same value as sent in the order for a given item. | 
**buyerProductIdentifier** | **String** | Buyer&#x27;s Standard Identification Number (ASIN) of an item. Either buyerProductIdentifier or vendorProductIdentifier is required. |  [optional]
**pieceNumber** | **Integer** | The piece number of the item in this container. This is required when the item is split across different containers. |  [optional]
**vendorProductIdentifier** | **String** | The vendor selected product identification of the item. Should be the same as was sent in the Purchase Order, like SKU Number. |  [optional]
**packedQuantity** | [**ItemQuantity**](ItemQuantity.md) |  | 
