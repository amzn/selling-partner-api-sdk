# # InvoiceDetail

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**invoice_number** | **string** | The unique invoice number. |
**invoice_date** | **\DateTime** | Invoice date. |
**reference_number** | **string** | An additional unique reference number used for regulatory or other purposes. | [optional]
**remit_to_party** | [**\OpenAPI\Client\Model\vendor.df.payments\PartyIdentification**](PartyIdentification.md) |  |
**ship_from_party** | [**\OpenAPI\Client\Model\vendor.df.payments\PartyIdentification**](PartyIdentification.md) |  |
**bill_to_party** | [**\OpenAPI\Client\Model\vendor.df.payments\PartyIdentification**](PartyIdentification.md) |  | [optional]
**ship_to_country_code** | **string** | Ship-to country code. | [optional]
**payment_terms_code** | **string** | The payment terms for the invoice. | [optional]
**invoice_total** | [**\OpenAPI\Client\Model\vendor.df.payments\Money**](Money.md) |  |
**tax_totals** | [**\OpenAPI\Client\Model\vendor.df.payments\TaxDetail[]**](TaxDetail.md) | Individual tax details per line item. | [optional]
**additional_details** | [**\OpenAPI\Client\Model\vendor.df.payments\AdditionalDetails[]**](AdditionalDetails.md) | Additional details provided by the selling party, for tax-related or other purposes. | [optional]
**charge_details** | [**\OpenAPI\Client\Model\vendor.df.payments\ChargeDetails[]**](ChargeDetails.md) | Total charge amount details for all line items. | [optional]
**items** | [**\OpenAPI\Client\Model\vendor.df.payments\InvoiceItem[]**](InvoiceItem.md) | Provides the details of the items in this invoice. |

[[Back to Model list]](../../README.md#models) [[Back to API list]](../../README.md#endpoints) [[Back to README]](../../README.md)
