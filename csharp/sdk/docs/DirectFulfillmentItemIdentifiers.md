# software.amzn.spapi.Model.shipping.v2.DirectFulfillmentItemIdentifiers
Item identifiers for an item in a direct fulfillment shipment.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**LineItemID** | **string** | A unique identifier for an item provided by the client for a direct fulfillment shipment. This is only populated for direct fulfillment multi-piece shipments. It is required if a vendor wants to change the configuration of the packages in which the purchase order is shipped. | 
**PieceNumber** | **string** | A unique identifier for an item provided by the client for a direct fulfillment shipment. This is only populated if a single line item has multiple pieces. Defaults to 1. | [optional] 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

