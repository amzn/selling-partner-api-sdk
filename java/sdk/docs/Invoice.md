# Invoice

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**invoiceType** | [**InvoiceTypeEnum**](#InvoiceTypeEnum) | Identifies the type of invoice. | 
**id** | **String** | Unique number relating to the charges defined in this document. This will be invoice number if the document type is Invoice or CreditNote number if the document type is Credit Note. Failure to provide this reference will result in a rejection. | 
**referenceNumber** | **String** | An additional unique reference number used for regulatory or other purposes. |  [optional]
**date** | [**OffsetDateTime**](OffsetDateTime.md) |  | 
**remitToParty** | [**PartyIdentification**](PartyIdentification.md) |  | 
**shipToParty** | [**PartyIdentification**](PartyIdentification.md) |  |  [optional]
**shipFromParty** | [**PartyIdentification**](PartyIdentification.md) |  |  [optional]
**billToParty** | [**PartyIdentification**](PartyIdentification.md) |  |  [optional]
**paymentTerms** | [**PaymentTerms**](PaymentTerms.md) |  |  [optional]
**invoiceTotal** | [**Money**](Money.md) |  | 
**taxDetails** | [**List&lt;TaxDetails&gt;**](TaxDetails.md) | Total tax amount details for all line items. |  [optional]
**additionalDetails** | [**List&lt;AdditionalDetails&gt;**](AdditionalDetails.md) | Additional details provided by the selling party, for tax related or other purposes. |  [optional]
**chargeDetails** | [**List&lt;ChargeDetails&gt;**](ChargeDetails.md) | Total charge amount details for all line items. |  [optional]
**allowanceDetails** | [**List&lt;AllowanceDetails&gt;**](AllowanceDetails.md) | Total allowance amount details for all line items. |  [optional]
**items** | [**List&lt;InvoiceItem&gt;**](InvoiceItem.md) | The list of invoice items. |  [optional]

<a name="InvoiceTypeEnum"></a>
## Enum: InvoiceTypeEnum
Name | Value
---- | -----
INVOICE | &quot;Invoice&quot;
CREDITNOTE | &quot;CreditNote&quot;
