# software.amzn.spapi.Model.vendor.invoices.v1.Invoice
Represents an invoice or credit note document with details about the transaction, parties involved, and line items.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**InvoiceType** | **string** | Identifies the type of invoice. | 
**Id** | **string** | Unique number relating to the charges defined in this document. This will be invoice number if the document type is Invoice or CreditNote number if the document type is Credit Note. Failure to provide this reference will result in a rejection. | 
**ReferenceNumber** | **string** | An additional unique reference number used for regulatory or other purposes. | [optional] 
**Date** | **DateTime** | Defines a date and time according to ISO8601. | 
**RemitToParty** | [**PartyIdentification**](PartyIdentification.md) |  | 
**ShipToParty** | [**PartyIdentification**](PartyIdentification.md) |  | [optional] 
**ShipFromParty** | [**PartyIdentification**](PartyIdentification.md) |  | [optional] 
**BillToParty** | [**PartyIdentification**](PartyIdentification.md) |  | [optional] 
**PaymentTerms** | [**PaymentTerms**](PaymentTerms.md) |  | [optional] 
**InvoiceTotal** | [**Money**](Money.md) |  | 
**TaxDetails** | [**List&lt;TaxDetails&gt;**](TaxDetails.md) | Total tax amount details for all line items. | [optional] 
**AdditionalDetails** | [**List&lt;AdditionalDetails&gt;**](AdditionalDetails.md) | Additional details provided by the selling party, for tax related or other purposes. | [optional] 
**ChargeDetails** | [**List&lt;ChargeDetails&gt;**](ChargeDetails.md) | Total charge amount details for all line items. | [optional] 
**AllowanceDetails** | [**List&lt;AllowanceDetails&gt;**](AllowanceDetails.md) | Total allowance amount details for all line items. | [optional] 
**Items** | [**List&lt;InvoiceItem&gt;**](InvoiceItem.md) | The list of invoice items. | [optional] 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

