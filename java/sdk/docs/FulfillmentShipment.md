# FulfillmentShipment

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**amazonShipmentId** | **String** | A shipment identifier assigned by Amazon. | 
**fulfillmentCenterId** | **String** | An identifier for the fulfillment center that the shipment will be sent from. | 
**fulfillmentShipmentStatus** | [**FulfillmentShipmentStatusEnum**](#FulfillmentShipmentStatusEnum) | The current status of the shipment. | 
**shippingDate** | [**OffsetDateTime**](OffsetDateTime.md) |  |  [optional]
**estimatedArrivalDate** | [**OffsetDateTime**](OffsetDateTime.md) |  |  [optional]
**shippingNotes** | **List&lt;String&gt;** | Provides additional insight into shipment timeline. Primairly used to communicate that actual delivery dates aren&#x27;t available. |  [optional]
**fulfillmentShipmentItem** | [**FulfillmentShipmentItemList**](FulfillmentShipmentItemList.md) |  | 
**fulfillmentShipmentPackage** | [**FulfillmentShipmentPackageList**](FulfillmentShipmentPackageList.md) |  |  [optional]

<a name="FulfillmentShipmentStatusEnum"></a>
## Enum: FulfillmentShipmentStatusEnum
Name | Value
---- | -----
PENDING | &quot;PENDING&quot;
SHIPPED | &quot;SHIPPED&quot;
CANCELLED_BY_FULFILLER | &quot;CANCELLED_BY_FULFILLER&quot;
CANCELLED_BY_SELLER | &quot;CANCELLED_BY_SELLER&quot;
