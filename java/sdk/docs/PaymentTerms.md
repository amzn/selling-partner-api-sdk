# PaymentTerms

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | [**TypeEnum**](#TypeEnum) | The payment term type for the invoice. |  [optional]
**discountPercent** | **String** |  |  [optional]
**discountDueDays** | [**BigDecimal**](BigDecimal.md) | The number of calendar days from the Base date (Invoice date) until the discount is no longer valid. |  [optional]
**netDueDays** | [**BigDecimal**](BigDecimal.md) | The number of calendar days from the base date (invoice date) until the total amount on the invoice is due. |  [optional]

<a name="TypeEnum"></a>
## Enum: TypeEnum
Name | Value
---- | -----
BASIC | &quot;Basic&quot;
ENDOFMONTH | &quot;EndOfMonth&quot;
FIXEDDATE | &quot;FixedDate&quot;
PROXIMO | &quot;Proximo&quot;
PAYMENTDUEUPONRECEIPTOFINVOICE | &quot;PaymentDueUponReceiptOfInvoice&quot;
LETTEROFCREDIT | &quot;LetterofCredit&quot;
