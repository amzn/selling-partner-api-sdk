# software.amzn.spapi.Model.fulfillment.outbound.v2020_07_01.FulfillmentPreviewShipment
Delivery and item information for a shipment in a fulfillment order preview.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**EarliestShipDate** | **DateTime** | Date timestamp | [optional] 
**LatestShipDate** | **DateTime** | Date timestamp | [optional] 
**EarliestArrivalDate** | **DateTime** | Date timestamp | [optional] 
**LatestArrivalDate** | **DateTime** | Date timestamp | [optional] 
**ShippingNotes** | **List&lt;string&gt;** | Provides additional insight into the shipment timeline when exact delivery dates are not able to be precomputed. | [optional] 
**FulfillmentPreviewItems** | [**List&lt;FulfillmentPreviewItem&gt;**](FulfillmentPreviewItem.md) | An array of fulfillment preview item information. | 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

