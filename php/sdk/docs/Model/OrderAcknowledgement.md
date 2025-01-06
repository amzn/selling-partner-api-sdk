# # OrderAcknowledgement

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**purchase_order_number** | **string** | The purchase order number. Formatting Notes: 8-character alpha-numeric code. |
**selling_party** | [**\OpenAPI\Client\Model\vendorOrders\PartyIdentification**](PartyIdentification.md) |  |
**acknowledgement_date** | **\DateTime** | The date and time when the purchase order is acknowledged, in ISO-8601 date/time format. |
**items** | [**\OpenAPI\Client\Model\vendorOrders\OrderAcknowledgementItem[]**](OrderAcknowledgementItem.md) | A list of the items being acknowledged with associated details. |

[[Back to Model list]](../../README.md#models) [[Back to API list]](../../README.md#endpoints) [[Back to README]](../../README.md)
