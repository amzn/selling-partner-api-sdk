# software.amzn.spapi.Model.finances.v0.FBALiquidationEvent
A payment event for Fulfillment by Amazon (FBA) inventory liquidation. This event is used only in the US marketplace.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**PostedDate** | **DateTime** | Fields with a schema type of date are in ISO 8601 date time format (for example GroupBeginDate). | [optional] 
**OriginalRemovalOrderId** | **string** | The identifier for the original removal order. | [optional] 
**LiquidationProceedsAmount** | [**Currency**](Currency.md) |  | [optional] 
**LiquidationFeeAmount** | [**Currency**](Currency.md) |  | [optional] 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

