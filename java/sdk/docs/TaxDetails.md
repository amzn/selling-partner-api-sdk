# TaxDetails

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**taxType** | [**TaxTypeEnum**](#TaxTypeEnum) | Type of the tax applied. | 
**taxRate** | **String** |  |  [optional]
**taxAmount** | [**Money**](Money.md) |  | 
**taxableAmount** | [**Money**](Money.md) |  |  [optional]

<a name="TaxTypeEnum"></a>
## Enum: TaxTypeEnum
Name | Value
---- | -----
CGST | &quot;CGST&quot;
SGST | &quot;SGST&quot;
CESS | &quot;CESS&quot;
UTGST | &quot;UTGST&quot;
IGST | &quot;IGST&quot;
MWST_ | &quot;MwSt.&quot;
PST | &quot;PST&quot;
TVA | &quot;TVA&quot;
VAT | &quot;VAT&quot;
GST | &quot;GST&quot;
ST | &quot;ST&quot;
CONSUMPTION | &quot;Consumption&quot;
MUTUALLYDEFINED | &quot;MutuallyDefined&quot;
DOMESTICVAT | &quot;DomesticVAT&quot;
