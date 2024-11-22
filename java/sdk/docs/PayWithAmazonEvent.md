# PayWithAmazonEvent

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**sellerOrderId** | **String** | An order identifier that is specified by the seller. |  [optional]
**transactionPostedDate** | [**OffsetDateTime**](OffsetDateTime.md) |  |  [optional]
**businessObjectType** | **String** | The type of business object. |  [optional]
**salesChannel** | **String** | The sales channel for the transaction. |  [optional]
**charge** | [**ChargeComponent**](ChargeComponent.md) |  |  [optional]
**feeList** | [**FeeComponentList**](FeeComponentList.md) |  |  [optional]
**paymentAmountType** | **String** | The type of payment.  Possible values:  * Sales |  [optional]
**amountDescription** | **String** | A short description of this payment event. |  [optional]
**fulfillmentChannel** | **String** | The fulfillment channel.  Possible values:  * AFN - Amazon Fulfillment Network (Fulfillment by Amazon)  * MFN - Merchant Fulfillment Network (self-fulfilled) |  [optional]
**storeName** | **String** | The store name where the event occurred. |  [optional]
