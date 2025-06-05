# software.amzn.spapi.Model.finances.v0.SolutionProviderCreditEvent
A credit given to a solution provider.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ProviderTransactionType** | **string** | The transaction type. | [optional] 
**SellerOrderId** | **string** | A seller-defined identifier for an order. | [optional] 
**MarketplaceId** | **string** | The identifier of the marketplace where the order was placed. | [optional] 
**MarketplaceCountryCode** | **string** | The two-letter country code of the country associated with the marketplace where the order was placed. | [optional] 
**SellerId** | **string** | The Amazon-defined identifier of the seller. | [optional] 
**SellerStoreName** | **string** | The store name where the payment event occurred. | [optional] 
**ProviderId** | **string** | The Amazon-defined identifier of the solution provider. | [optional] 
**ProviderStoreName** | **string** | The store name where the payment event occurred. | [optional] 
**TransactionAmount** | [**Currency**](Currency.md) |  | [optional] 
**TransactionCreationDate** | **DateTime** | Fields with a schema type of date are in ISO 8601 date time format (for example GroupBeginDate). | [optional] 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

