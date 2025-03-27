# SellingPartnerApiForDirectFulfillmentOrders.TaxDetails

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**taxRate** | **String** | A decimal number with no loss of precision. Useful when precision loss is unacceptable, as with currencies. Follows RFC7159 for number representation. | [optional] 
**taxAmount** | [**Money**](Money.md) |  | 
**taxableAmount** | [**Money**](Money.md) |  | [optional] 
**type** | **String** | Tax type. | [optional] 



## Enum: TypeEnum


* `CONSUMPTION` (value: `"CONSUMPTION"`)

* `GST` (value: `"GST"`)

* `MwSt.` (value: `"MwSt."`)

* `PST` (value: `"PST"`)

* `TOTAL` (value: `"TOTAL"`)

* `TVA` (value: `"TVA"`)

* `VAT` (value: `"VAT"`)




