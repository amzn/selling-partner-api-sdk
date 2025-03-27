# SellingPartnerApiForFinances.AdjustmentItem

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**quantity** | **String** | Represents the number of units in the seller&#39;s inventory when the AdustmentType is FBAInventoryReimbursement. | [optional] 
**perUnitAmount** | [**Currency**](Currency.md) |  | [optional] 
**totalAmount** | [**Currency**](Currency.md) |  | [optional] 
**sellerSKU** | **String** | The seller SKU of the item. The seller SKU is qualified by the seller&#39;s seller ID, which is included with every call to the Selling Partner API. | [optional] 
**fnSKU** | **String** | A unique identifier assigned to products stored in and fulfilled from a fulfillment center. | [optional] 
**productDescription** | **String** | A short description of the item. | [optional] 
**ASIN** | **String** | The Amazon Standard Identification Number (ASIN) of the item. | [optional] 
**transactionNumber** | **String** | The transaction number that is related to the adjustment. | [optional] 


