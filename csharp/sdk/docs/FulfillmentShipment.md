# software.amzn.spapi.Model.fulfillment.outbound.v2020_07_01.FulfillmentShipment
Delivery and item information for a shipment in a fulfillment order.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AmazonShipmentId** | **string** | A shipment identifier assigned by Amazon. | 
**FulfillmentCenterId** | **string** | An identifier for the fulfillment center that the shipment will be sent from. | 
**FulfillmentShipmentStatus** | **string** | The current status of the shipment. | 
**ShippingDate** | **DateTime** | Date timestamp | [optional] 
**EstimatedArrivalDate** | **DateTime** | Date timestamp | [optional] 
**ShippingNotes** | **List&lt;string&gt;** | Provides additional insight into shipment timeline. Primairly used to communicate that actual delivery dates aren&#39;t available. | [optional] 
**FulfillmentShipmentItem** | [**List&lt;FulfillmentShipmentItem&gt;**](FulfillmentShipmentItem.md) | An array of fulfillment shipment item information. | 
**FulfillmentShipmentPackage** | [**List&lt;FulfillmentShipmentPackage&gt;**](FulfillmentShipmentPackage.md) | An array of fulfillment shipment package information. | [optional] 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

