# SellingPartnerApiForServices.AssociatedItem

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**asin** | **String** | The Amazon Standard Identification Number (ASIN) of the item. | [optional] 
**title** | **String** | The title of the item. | [optional] 
**quantity** | **Number** | The total number of items included in the order. | [optional] 
**orderId** | **String** | The Amazon-defined identifier for an order placed by the buyer, in 3-7-7 format. | [optional] 
**itemStatus** | **String** | The status of the item. | [optional] 
**brandName** | **String** | The brand name of the item. | [optional] 
**itemDelivery** | [**ItemDelivery**](ItemDelivery.md) |  | [optional] 



## Enum: ItemStatusEnum


* `ACTIVE` (value: `"ACTIVE"`)

* `CANCELLED` (value: `"CANCELLED"`)

* `SHIPPED` (value: `"SHIPPED"`)

* `DELIVERED` (value: `"DELIVERED"`)




