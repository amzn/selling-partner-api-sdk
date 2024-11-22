# Context

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**contextType** | **String** |  | 
**storeName** | **String** | The name of the store that is related to the transaction. |  [optional]
**orderType** | **String** | The transaction&#x27;s order type. |  [optional]
**channel** | **String** | Channel details of related transaction. |  [optional]
**asin** | **String** | The Amazon Standard Identification Number (ASIN) of the item. |  [optional]
**sku** | **String** | The Stock Keeping Unit (SKU) of the item. |  [optional]
**quantityShipped** | **Integer** | The quantity of the item shipped. |  [optional]
**fulfillmentNetwork** | **String** | The fulfillment network of the item. |  [optional]
**paymentType** | **String** | The type of payment. |  [optional]
**paymentMethod** | **String** | The method of payment. |  [optional]
**paymentReference** | **String** | The reference number of the payment. |  [optional]
**paymentDate** | [**OffsetDateTime**](OffsetDateTime.md) |  |  [optional]
**deferralReason** | **String** | Deferral policy applied on the transaction.  **Examples:** &#x60;B2B&#x60;,&#x60;DD7&#x60; |  [optional]
**maturityDate** | [**OffsetDateTime**](OffsetDateTime.md) |  |  [optional]
**deferralStatus** | **String** | The status of the transaction. For example, &#x60;HOLD&#x60;,&#x60;RELEASE&#x60;. |  [optional]
**startTime** | [**OffsetDateTime**](OffsetDateTime.md) |  |  [optional]
**endTime** | [**OffsetDateTime**](OffsetDateTime.md) |  |  [optional]
