# software.amzn.spapi.Model.fulfillment.outbound.v2020_07_01.ReturnItem
An item that Amazon accepted for return.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**SellerReturnItemId** | **string** | An identifier assigned by the seller to the return item. | 
**SellerFulfillmentOrderItemId** | **string** | The identifier assigned to the item by the seller when the fulfillment order was created. | 
**AmazonShipmentId** | **string** | The identifier for the shipment that is associated with the return item. | 
**SellerReturnReasonCode** | **string** | The return reason code assigned to the return item by the seller. | 
**ReturnComment** | **string** | An optional comment about the return item. | [optional] 
**AmazonReturnReasonCode** | **string** | The return reason code that the Amazon fulfillment center assigned to the return item. | [optional] 
**Status** | **FulfillmentReturnItemStatus** |  | 
**StatusChangedDate** | **DateTime** | Date timestamp | 
**ReturnAuthorizationId** | **string** | Identifies the return authorization used to return this item. Refer to &#x60;ReturnAuthorization&#x60;. | [optional] 
**ReturnReceivedCondition** | **ReturnItemDisposition** |  | [optional] 
**FulfillmentCenterId** | **string** | The identifier for the Amazon fulfillment center that processed the return item. | [optional] 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

