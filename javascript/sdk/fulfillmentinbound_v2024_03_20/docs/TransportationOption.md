# TheSellingPartnerApiForFbaInboundOperations.TransportationOption

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**carrier** | [**Carrier**](Carrier.md) |  | 
**carrierAppointment** | [**CarrierAppointment**](CarrierAppointment.md) |  | [optional] 
**preconditions** | **[String]** | Identifies a list of preconditions for confirming the transportation option. | 
**quote** | [**Quote**](Quote.md) |  | [optional] 
**shipmentId** | **String** | Identifier of a shipment. A shipment contains the boxes and units being inbounded. | 
**shippingMode** | **String** | Mode of shipment transportation that this option will provide.  Possible values: &#x60;GROUND_SMALL_PARCEL&#x60;, &#x60;FREIGHT_LTL&#x60;, &#x60;FREIGHT_FTL_PALLET&#x60;, &#x60;FREIGHT_FTL_NONPALLET&#x60;, &#x60;OCEAN_LCL&#x60;, &#x60;OCEAN_FCL&#x60;, &#x60;AIR_SMALL_PARCEL&#x60;, &#x60;AIR_SMALL_PARCEL_EXPRESS&#x60;. | 
**shippingSolution** | **String** | Shipping program for the option. Possible values: &#x60;AMAZON_PARTNERED_CARRIER&#x60;, &#x60;USE_YOUR_OWN_CARRIER&#x60;. | 
**transportationOptionId** | **String** | Identifier of a transportation option. A transportation option represent one option for how to send a shipment. | 


