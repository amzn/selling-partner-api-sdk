# software.amzn.spapi.Model.finances.v0.SellerDealPaymentEvent
An event linked to the payment of a fee related to the specified deal.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**PostedDate** | **DateTime** | Fields with a schema type of date are in ISO 8601 date time format (for example GroupBeginDate). | [optional] 
**DealId** | **string** | The unique identifier of the deal. | [optional] 
**DealDescription** | **string** | The internal description of the deal. | [optional] 
**EventType** | **string** | The type of event: SellerDealComplete. | [optional] 
**FeeType** | **string** | The type of fee: RunLightningDealFee. | [optional] 
**FeeAmount** | [**Currency**](Currency.md) |  | [optional] 
**TaxAmount** | [**Currency**](Currency.md) |  | [optional] 
**TotalAmount** | [**Currency**](Currency.md) |  | [optional] 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

