# software.amzn.spapi.Model.fulfillment.inbound.v2024_03_20.TransportationOption
Contains information pertaining to a transportation option and the related carrier.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Carrier** | [**Carrier**](Carrier.md) |  | 
**CarrierAppointment** | [**CarrierAppointment**](CarrierAppointment.md) |  | [optional] 
**Preconditions** | **List&lt;string&gt;** | Identifies a list of preconditions for confirming the transportation option. | 
**Quote** | [**Quote**](Quote.md) |  | [optional] 
**ShipmentId** | **string** | Identifier of a shipment. A shipment contains the boxes and units being inbounded. | 
**ShippingMode** | **string** | Mode of shipment transportation that this option will provide.  Possible values: &#x60;GROUND_SMALL_PARCEL&#x60;, &#x60;FREIGHT_LTL&#x60;, &#x60;FREIGHT_FTL_PALLET&#x60;, &#x60;FREIGHT_FTL_NONPALLET&#x60;, &#x60;OCEAN_LCL&#x60;, &#x60;OCEAN_FCL&#x60;, &#x60;AIR_SMALL_PARCEL&#x60;, &#x60;AIR_SMALL_PARCEL_EXPRESS&#x60;. | 
**ShippingSolution** | **string** | Shipping program for the option. Possible values: &#x60;AMAZON_PARTNERED_CARRIER&#x60;, &#x60;USE_YOUR_OWN_CARRIER&#x60;. | 
**TransportationOptionId** | **string** | Identifier of a transportation option. A transportation option represent one option for how to send a shipment. | 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

