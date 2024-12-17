# # BuyerInfo

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**buyer_email** | **string** | The anonymized email address of the buyer. | [optional]
**buyer_name** | **string** | The buyer name or the recipient name. | [optional]
**buyer_county** | **string** | The county of the buyer.  **Note**: This attribute is only available in the Brazil marketplace. | [optional]
**buyer_tax_info** | [**\OpenAPI\Client\Model\orders\BuyerTaxInfo**](BuyerTaxInfo.md) |  | [optional]
**purchase_order_number** | **string** | The purchase order (PO) number entered by the buyer at checkout. Only returned for orders where the buyer entered a PO number at checkout. | [optional]

[[Back to Model list]](../../README.md#models) [[Back to API list]](../../README.md#endpoints) [[Back to README]](../../README.md)
