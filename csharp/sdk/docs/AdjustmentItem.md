# software.amzn.spapi.Model.finances.v0.AdjustmentItem
An item in an adjustment to the seller's account.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Quantity** | **string** | Represents the number of units in the seller&#39;s inventory when the AdustmentType is FBAInventoryReimbursement. | [optional] 
**PerUnitAmount** | [**Currency**](Currency.md) |  | [optional] 
**TotalAmount** | [**Currency**](Currency.md) |  | [optional] 
**SellerSKU** | **string** | The seller SKU of the item. The seller SKU is qualified by the seller&#39;s seller ID, which is included with every call to the Selling Partner API. | [optional] 
**FnSKU** | **string** | A unique identifier assigned to products stored in and fulfilled from a fulfillment center. | [optional] 
**ProductDescription** | **string** | A short description of the item. | [optional] 
**ASIN** | **string** | The Amazon Standard Identification Number (ASIN) of the item. | [optional] 
**TransactionNumber** | **string** | The transaction number that is related to the adjustment. | [optional] 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

