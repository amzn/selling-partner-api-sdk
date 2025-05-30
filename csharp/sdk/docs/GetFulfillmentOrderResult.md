# software.amzn.spapi.Model.fulfillment.outbound.v2020_07_01.GetFulfillmentOrderResult
The request for the getFulfillmentOrder operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**FulfillmentOrder** | [**FulfillmentOrder**](FulfillmentOrder.md) |  | 
**FulfillmentOrderItems** | [**List&lt;FulfillmentOrderItem&gt;**](FulfillmentOrderItem.md) | An array of fulfillment order item information. | 
**FulfillmentShipments** | [**List&lt;FulfillmentShipment&gt;**](FulfillmentShipment.md) | An array of fulfillment shipment information. | [optional] 
**ReturnItems** | [**List&lt;ReturnItem&gt;**](ReturnItem.md) | An array of items that Amazon accepted for return. Returns empty if no items were accepted for return. | 
**ReturnAuthorizations** | [**List&lt;ReturnAuthorization&gt;**](ReturnAuthorization.md) | An array of return authorization information. | 
**PaymentInformation** | [**List&lt;PaymentInformation&gt;**](PaymentInformation.md) | An array of various payment attributes related to this fulfillment order. | [optional] 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

