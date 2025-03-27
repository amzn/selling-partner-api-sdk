# SellingPartnerApiForRetailProcurementPayments.InvoiceItem

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**itemSequenceNumber** | **Number** | Unique number related to this line item. | 
**amazonProductIdentifier** | **String** | Amazon Standard Identification Number (ASIN) of an item. | [optional] 
**vendorProductIdentifier** | **String** | The vendor selected product identifier of the item. Should be the same as was provided in the purchase order. | [optional] 
**invoicedQuantity** | [**ItemQuantity**](ItemQuantity.md) |  | 
**netCost** | [**Money**](Money.md) |  | 
**netCostUnitOfMeasure** | [**NetCostUnitOfMeasure**](NetCostUnitOfMeasure.md) |  | [optional] 
**purchaseOrderNumber** | **String** | The Amazon purchase order number for this invoiced line item. Formatting Notes: 8-character alpha-numeric code. This value is mandatory only when invoiceType is Invoice, and is not required when invoiceType is CreditNote. | [optional] 
**hsnCode** | **String** | HSN Tax code. The HSN number cannot contain alphabets. | [optional] 
**creditNoteDetails** | [**CreditNoteDetails**](CreditNoteDetails.md) |  | [optional] 
**taxDetails** | [**[TaxDetails]**](TaxDetails.md) | Individual tax details per line item. | [optional] 
**chargeDetails** | [**[ChargeDetails]**](ChargeDetails.md) | Individual charge details per line item. | [optional] 
**allowanceDetails** | [**[AllowanceDetails]**](AllowanceDetails.md) | Individual allowance details per line item. | [optional] 


