# SellingPartnerApiForRetailProcurementPayments.TaxDetails

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**taxType** | **String** | Type of the tax applied. | 
**taxRate** | **String** | A decimal number with no loss of precision. Useful when precision loss is unacceptable, as with currencies. Follows RFC7159 for number representation. &lt;br&gt;**Pattern** : &#x60;^-?(0|([1-9]\\d*))(\\.\\d+)?([eE][+-]?\\d+)?$&#x60;. | [optional] 
**taxAmount** | [**Money**](Money.md) |  | 
**taxableAmount** | [**Money**](Money.md) |  | [optional] 



## Enum: TaxTypeEnum


* `CGST` (value: `"CGST"`)

* `SGST` (value: `"SGST"`)

* `CESS` (value: `"CESS"`)

* `UTGST` (value: `"UTGST"`)

* `IGST` (value: `"IGST"`)

* `MwSt.` (value: `"MwSt."`)

* `PST` (value: `"PST"`)

* `TVA` (value: `"TVA"`)

* `VAT` (value: `"VAT"`)

* `GST` (value: `"GST"`)

* `ST` (value: `"ST"`)

* `Consumption` (value: `"Consumption"`)

* `MutuallyDefined` (value: `"MutuallyDefined"`)

* `DomesticVAT` (value: `"DomesticVAT"`)




