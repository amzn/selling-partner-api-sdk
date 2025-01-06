# # TransportationOption

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**carrier** | [**\OpenAPI\Client\Model\fulfillmentInbound\Carrier**](Carrier.md) |  |
**carrier_appointment** | [**\OpenAPI\Client\Model\fulfillmentInbound\CarrierAppointment**](CarrierAppointment.md) |  | [optional]
**preconditions** | **string[]** | Identifies a list of preconditions for confirming the transportation option. |
**quote** | [**\OpenAPI\Client\Model\fulfillmentInbound\Quote**](Quote.md) |  | [optional]
**shipment_id** | **string** | Identifier of a shipment. A shipment contains the boxes and units being inbounded. |
**shipping_mode** | **string** | Mode of shipment transportation that this option will provide.  Possible values: &#x60;GROUND_SMALL_PARCEL&#x60;, &#x60;FREIGHT_LTL&#x60;, &#x60;FREIGHT_FTL_PALLET&#x60;, &#x60;FREIGHT_FTL_NONPALLET&#x60;, &#x60;OCEAN_LCL&#x60;, &#x60;OCEAN_FCL&#x60;, &#x60;AIR_SMALL_PARCEL&#x60;, &#x60;AIR_SMALL_PARCEL_EXPRESS&#x60;. |
**shipping_solution** | **string** | Shipping program for the option. Possible values: &#x60;AMAZON_PARTNERED_CARRIER&#x60;, &#x60;USE_YOUR_OWN_CARRIER&#x60;. |
**transportation_option_id** | **string** | Identifier of a transportation option. A transportation option represent one option for how to send a shipment. |

[[Back to Model list]](../../README.md#models) [[Back to API list]](../../README.md#endpoints) [[Back to README]](../../README.md)
