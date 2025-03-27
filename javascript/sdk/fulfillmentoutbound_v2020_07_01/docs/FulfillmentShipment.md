# SellingPartnerApisForFulfillmentOutbound.FulfillmentShipment

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**amazonShipmentId** | **String** | A shipment identifier assigned by Amazon. | 
**fulfillmentCenterId** | **String** | An identifier for the fulfillment center that the shipment will be sent from. | 
**fulfillmentShipmentStatus** | **String** | The current status of the shipment. | 
**shippingDate** | **Date** | Date timestamp | [optional] 
**estimatedArrivalDate** | **Date** | Date timestamp | [optional] 
**shippingNotes** | **[String]** | Provides additional insight into shipment timeline. Primairly used to communicate that actual delivery dates aren&#39;t available. | [optional] 
**fulfillmentShipmentItem** | [**[FulfillmentShipmentItem]**](FulfillmentShipmentItem.md) | An array of fulfillment shipment item information. | 
**fulfillmentShipmentPackage** | [**[FulfillmentShipmentPackage]**](FulfillmentShipmentPackage.md) | An array of fulfillment shipment package information. | [optional] 



## Enum: FulfillmentShipmentStatusEnum


* `PENDING` (value: `"PENDING"`)

* `SHIPPED` (value: `"SHIPPED"`)

* `CANCELLED_BY_FULFILLER` (value: `"CANCELLED_BY_FULFILLER"`)

* `CANCELLED_BY_SELLER` (value: `"CANCELLED_BY_SELLER"`)




