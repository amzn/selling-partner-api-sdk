# software.amzn.spapi.Model.productFees.v0.FeesEstimateIdentifier
An item identifier, marketplace, time of request, and other details that identify an estimate.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**MarketplaceId** | **string** | A marketplace identifier. | [optional] 
**SellerId** | **string** | The seller identifier. | [optional] 
**IdType** | **IdType** |  | [optional] 
**IdValue** | **string** | The item identifier. | [optional] 
**IsAmazonFulfilled** | **bool** | When true, the offer is fulfilled by Amazon. | [optional] 
**PriceToEstimateFees** | [**PriceToEstimateFees**](PriceToEstimateFees.md) |  | [optional] 
**SellerInputIdentifier** | **string** | A unique identifier provided by the caller to track this request. | [optional] 
**OptionalFulfillmentProgram** | **OptionalFulfillmentProgram** |  | [optional] 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

