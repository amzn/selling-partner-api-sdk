# software.amzn.spapi.Model.finances.v0.RentalTransactionEvent
An event related to a rental transaction.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AmazonOrderId** | **string** | An Amazon-defined identifier for an order. | [optional] 
**RentalEventType** | **string** | The type of rental event.  Possible values:  * RentalCustomerPayment-Buyout - Transaction type that represents when the customer wants to buy out a rented item.  * RentalCustomerPayment-Extension - Transaction type that represents when the customer wants to extend the rental period.  * RentalCustomerRefund-Buyout - Transaction type that represents when the customer requests a refund for the buyout of the rented item.  * RentalCustomerRefund-Extension - Transaction type that represents when the customer requests a refund over the extension on the rented item.  * RentalHandlingFee - Transaction type that represents the fee that Amazon charges sellers who rent through Amazon.  * RentalChargeFailureReimbursement - Transaction type that represents when Amazon sends money to the seller to compensate for a failed charge.  * RentalLostItemReimbursement - Transaction type that represents when Amazon sends money to the seller to compensate for a lost item. | [optional] 
**ExtensionLength** | **int** | The number of days that the buyer extended an already rented item. This value is only returned for RentalCustomerPayment-Extension and RentalCustomerRefund-Extension events. | [optional] 
**PostedDate** | **DateTime** | Fields with a schema type of date are in ISO 8601 date time format (for example GroupBeginDate). | [optional] 
**RentalChargeList** | [**List&lt;ChargeComponent&gt;**](ChargeComponent.md) | A list of charge information on the seller&#39;s account. | [optional] 
**RentalFeeList** | [**List&lt;FeeComponent&gt;**](FeeComponent.md) | A list of fee component information. | [optional] 
**MarketplaceName** | **string** | The name of the marketplace. | [optional] 
**RentalInitialValue** | [**Currency**](Currency.md) |  | [optional] 
**RentalReimbursement** | [**Currency**](Currency.md) |  | [optional] 
**RentalTaxWithheldList** | [**List&lt;TaxWithheldComponent&gt;**](TaxWithheldComponent.md) | A list of information about taxes withheld. | [optional] 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

