# SellingPartnerApisForFulfillmentOutbound.GetFulfillmentOrderResult

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**fulfillmentOrder** | [**FulfillmentOrder**](FulfillmentOrder.md) |  | 
**fulfillmentOrderItems** | [**[FulfillmentOrderItem]**](FulfillmentOrderItem.md) | An array of fulfillment order item information. | 
**fulfillmentShipments** | [**[FulfillmentShipment]**](FulfillmentShipment.md) | An array of fulfillment shipment information. | [optional] 
**returnItems** | [**[ReturnItem]**](ReturnItem.md) | An array of items that Amazon accepted for return. Returns empty if no items were accepted for return. | 
**returnAuthorizations** | [**[ReturnAuthorization]**](ReturnAuthorization.md) | An array of return authorization information. | 
**paymentInformation** | [**[PaymentInformation]**](PaymentInformation.md) | An array of various payment attributes related to this fulfillment order. | [optional] 


