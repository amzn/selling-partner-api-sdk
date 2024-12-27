# # Context

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**store_name** | **string** | The name of the store that is related to the transaction. | [optional]
**order_type** | **string** | The transaction&#39;s order type. | [optional]
**channel** | **string** | Channel details of related transaction. | [optional]
**asin** | **string** | The Amazon Standard Identification Number (ASIN) of the item. | [optional]
**sku** | **string** | The Stock Keeping Unit (SKU) of the item. | [optional]
**quantity_shipped** | **int** | The quantity of the item shipped. | [optional]
**fulfillment_network** | **string** | The fulfillment network of the item. | [optional]
**payment_type** | **string** | The type of payment. | [optional]
**payment_method** | **string** | The method of payment. | [optional]
**payment_reference** | **string** | The reference number of the payment. | [optional]
**payment_date** | **\DateTime** | A date in [ISO 8601](https://developer-docs.amazon.com/sp-api/docs/iso-8601) date-time format. | [optional]
**deferral_reason** | **string** | Deferral policy applied on the transaction.  **Examples:** &#x60;B2B&#x60;,&#x60;DD7&#x60; | [optional]
**maturity_date** | **\DateTime** | A date in [ISO 8601](https://developer-docs.amazon.com/sp-api/docs/iso-8601) date-time format. | [optional]
**deferral_status** | **string** | The status of the transaction. For example, &#x60;HOLD&#x60;,&#x60;RELEASE&#x60;. | [optional]
**start_time** | **\DateTime** | A date in [ISO 8601](https://developer-docs.amazon.com/sp-api/docs/iso-8601) date-time format. | [optional]
**end_time** | **\DateTime** | A date in [ISO 8601](https://developer-docs.amazon.com/sp-api/docs/iso-8601) date-time format. | [optional]
**context_type** | **string** |  |

[[Back to Model list]](../../README.md#models) [[Back to API list]](../../README.md#endpoints) [[Back to README]](../../README.md)
