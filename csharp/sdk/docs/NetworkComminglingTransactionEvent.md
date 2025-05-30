# software.amzn.spapi.Model.finances.v0.NetworkComminglingTransactionEvent
A network commingling transaction event.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**TransactionType** | **string** | The type of network item swap.  Possible values:  * NetCo - A Fulfillment by Amazon inventory pooling transaction. Available only in the India marketplace.  * ComminglingVAT - A commingling VAT transaction. Available only in the UK, Spain, France, Germany, and Italy marketplaces. | [optional] 
**PostedDate** | **DateTime** | Fields with a schema type of date are in ISO 8601 date time format (for example GroupBeginDate). | [optional] 
**NetCoTransactionID** | **string** | The identifier for the network item swap. | [optional] 
**SwapReason** | **string** | The reason for the network item swap. | [optional] 
**ASIN** | **string** | The Amazon Standard Identification Number (ASIN) of the swapped item. | [optional] 
**MarketplaceId** | **string** | The marketplace in which the event took place. | [optional] 
**TaxExclusiveAmount** | [**Currency**](Currency.md) |  | [optional] 
**TaxAmount** | [**Currency**](Currency.md) |  | [optional] 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

