# software.amzn.spapi.Model.vendor.df.payments.v1.InvoiceDetail
Represents the details of an invoice, including invoice number, date, parties involved, payment terms, totals, taxes, charges, and line items.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**InvoiceNumber** | **string** | The unique invoice number. | 
**InvoiceDate** | **DateTime** | Invoice date. | 
**ReferenceNumber** | **string** | An additional unique reference number used for regulatory or other purposes. | [optional] 
**RemitToParty** | [**PartyIdentification**](PartyIdentification.md) |  | 
**ShipFromParty** | [**PartyIdentification**](PartyIdentification.md) |  | 
**BillToParty** | [**PartyIdentification**](PartyIdentification.md) |  | [optional] 
**ShipToCountryCode** | **string** | Ship-to country code. | [optional] 
**PaymentTermsCode** | **string** | The payment terms for the invoice. | [optional] 
**InvoiceTotal** | [**Money**](Money.md) |  | 
**TaxTotals** | [**List&lt;TaxDetail&gt;**](TaxDetail.md) | Individual tax details per line item. | [optional] 
**AdditionalDetails** | [**List&lt;AdditionalDetails&gt;**](AdditionalDetails.md) | Additional details provided by the selling party, for tax-related or other purposes. | [optional] 
**ChargeDetails** | [**List&lt;ChargeDetails&gt;**](ChargeDetails.md) | Total charge amount details for all line items. | [optional] 
**Items** | [**List&lt;InvoiceItem&gt;**](InvoiceItem.md) | Provides the details of the items in this invoice. | 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

