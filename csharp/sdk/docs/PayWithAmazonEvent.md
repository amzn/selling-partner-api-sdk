# software.amzn.spapi.Model.finances.v0.PayWithAmazonEvent
An event related to the seller's Pay with Amazon account.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**SellerOrderId** | **string** | An order identifier that is specified by the seller. | [optional] 
**TransactionPostedDate** | **DateTime** | Fields with a schema type of date are in ISO 8601 date time format (for example GroupBeginDate). | [optional] 
**BusinessObjectType** | **string** | The type of business object. | [optional] 
**SalesChannel** | **string** | The sales channel for the transaction. | [optional] 
**Charge** | [**ChargeComponent**](ChargeComponent.md) |  | [optional] 
**FeeList** | [**List&lt;FeeComponent&gt;**](FeeComponent.md) | A list of fee component information. | [optional] 
**PaymentAmountType** | **string** | The type of payment.  Possible values:  * Sales | [optional] 
**AmountDescription** | **string** | A short description of this payment event. | [optional] 
**FulfillmentChannel** | **string** | The fulfillment channel.  Possible values:  * AFN - Amazon Fulfillment Network (Fulfillment by Amazon)  * MFN - Merchant Fulfillment Network (self-fulfilled) | [optional] 
**StoreName** | **string** | The store name where the event occurred. | [optional] 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

