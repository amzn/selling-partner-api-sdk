# software.amzn.spapi.Model.fba.inventory.v1.InventorySummary
Inventory summary for a specific item.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Asin** | **string** | The Amazon Standard Identification Number (ASIN) of an item. | [optional] 
**FnSku** | **string** | Amazon&#39;s fulfillment network SKU identifier. | [optional] 
**SellerSku** | **string** | The seller SKU of the item. | [optional] 
**Condition** | **string** | The condition of the item as described by the seller (for example, New Item). | [optional] 
**InventoryDetails** | [**InventoryDetails**](InventoryDetails.md) |  | [optional] 
**LastUpdatedTime** | **DateTime** | The date and time that any quantity was last updated. | [optional] 
**ProductName** | **string** | The localized language product title of the item within the specific marketplace. | [optional] 
**TotalQuantity** | **int** | The total number of units in an inbound shipment or in Amazon fulfillment centers. | [optional] 
**Stores** | **List&lt;string&gt;** | A list of seller-enrolled stores that apply to this seller SKU. | [optional] 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

