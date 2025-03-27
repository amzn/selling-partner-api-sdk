# SellingPartnerApisForFulfillmentOutbound.ReturnItem

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**sellerReturnItemId** | **String** | An identifier assigned by the seller to the return item. | 
**sellerFulfillmentOrderItemId** | **String** | The identifier assigned to the item by the seller when the fulfillment order was created. | 
**amazonShipmentId** | **String** | The identifier for the shipment that is associated with the return item. | 
**sellerReturnReasonCode** | **String** | The return reason code assigned to the return item by the seller. | 
**returnComment** | **String** | An optional comment about the return item. | [optional] 
**amazonReturnReasonCode** | **String** | The return reason code that the Amazon fulfillment center assigned to the return item. | [optional] 
**status** | [**FulfillmentReturnItemStatus**](FulfillmentReturnItemStatus.md) |  | 
**statusChangedDate** | **Date** | Date timestamp | 
**returnAuthorizationId** | **String** | Identifies the return authorization used to return this item. Refer to &#x60;ReturnAuthorization&#x60;. | [optional] 
**returnReceivedCondition** | [**ReturnItemDisposition**](ReturnItemDisposition.md) |  | [optional] 
**fulfillmentCenterId** | **String** | The identifier for the Amazon fulfillment center that processed the return item. | [optional] 


