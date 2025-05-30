# software.amzn.spapi.Model.finances.v0.RetrochargeEvent
A retrocharge or retrocharge reversal.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**RetrochargeEventType** | **string** | The type of event.  Possible values:  * Retrocharge  * RetrochargeReversal | [optional] 
**AmazonOrderId** | **string** | An Amazon-defined identifier for an order. | [optional] 
**PostedDate** | **DateTime** | Fields with a schema type of date are in ISO 8601 date time format (for example GroupBeginDate). | [optional] 
**BaseTax** | [**Currency**](Currency.md) |  | [optional] 
**ShippingTax** | [**Currency**](Currency.md) |  | [optional] 
**MarketplaceName** | **string** | The name of the marketplace where the retrocharge event occurred. | [optional] 
**RetrochargeTaxWithheldList** | [**List&lt;TaxWithheldComponent&gt;**](TaxWithheldComponent.md) | A list of information about taxes withheld. | [optional] 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

