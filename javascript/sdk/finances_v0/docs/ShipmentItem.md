# SellingPartnerApiForFinances.ShipmentItem

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**sellerSKU** | **String** | The seller SKU of the item. The seller SKU is qualified by the seller&#39;s seller ID, which is included with every call to the Selling Partner API. | [optional] 
**orderItemId** | **String** | An Amazon-defined order item identifier. | [optional] 
**orderAdjustmentItemId** | **String** | An Amazon-defined order adjustment identifier defined for refunds, guarantee claims, and chargeback events. | [optional] 
**quantityShipped** | **Number** | The number of items shipped. | [optional] 
**itemChargeList** | [**[ChargeComponent]**](ChargeComponent.md) | A list of charge information on the seller&#39;s account. | [optional] 
**itemChargeAdjustmentList** | [**[ChargeComponent]**](ChargeComponent.md) | A list of charge information on the seller&#39;s account. | [optional] 
**itemFeeList** | [**[FeeComponent]**](FeeComponent.md) | A list of fee component information. | [optional] 
**itemFeeAdjustmentList** | [**[FeeComponent]**](FeeComponent.md) | A list of fee component information. | [optional] 
**itemTaxWithheldList** | [**[TaxWithheldComponent]**](TaxWithheldComponent.md) | A list of information about taxes withheld. | [optional] 
**promotionList** | [**[Promotion]**](Promotion.md) | A list of promotions. | [optional] 
**promotionAdjustmentList** | [**[Promotion]**](Promotion.md) | A list of promotions. | [optional] 
**costOfPointsGranted** | [**Currency**](Currency.md) |  | [optional] 
**costOfPointsReturned** | [**Currency**](Currency.md) |  | [optional] 


