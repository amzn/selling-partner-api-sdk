# ShipmentStatusDetails

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**shipmentStatus** | [**ShipmentStatusEnum**](#ShipmentStatusEnum) | Current status of the shipment on whether it is picked up or scheduled. |  [optional]
**shipmentStatusDate** | [**OffsetDateTime**](OffsetDateTime.md) | Date and time on last status update received for the shipment |  [optional]

<a name="ShipmentStatusEnum"></a>
## Enum: ShipmentStatusEnum
Name | Value
---- | -----
CREATED | &quot;Created&quot;
TRANSPORTATIONREQUESTED | &quot;TransportationRequested&quot;
CARRIERASSIGNED | &quot;CarrierAssigned&quot;
SHIPPED | &quot;Shipped&quot;
