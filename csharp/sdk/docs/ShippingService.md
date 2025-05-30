# software.amzn.spapi.Model.merchantFulfillment.v0.ShippingService
A shipping service offer made by a carrier.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ShippingServiceName** | **string** | A plain text representation of a carrier&#39;s shipping service. For example, \&quot;UPS Ground\&quot; or \&quot;FedEx Standard Overnight\&quot;.  | 
**CarrierName** | **string** | The name of the carrier. | 
**ShippingServiceId** | **string** | An Amazon-defined shipping service identifier. | 
**ShippingServiceOfferId** | **string** | An Amazon-defined shipping service offer identifier. | 
**ShipDate** | **DateTime** | Date-time formatted timestamp. | 
**EarliestEstimatedDeliveryDate** | **DateTime** | Date-time formatted timestamp. | [optional] 
**LatestEstimatedDeliveryDate** | **DateTime** | Date-time formatted timestamp. | [optional] 
**Rate** | [**CurrencyAmount**](CurrencyAmount.md) |  | 
**ShippingServiceOptions** | [**ShippingServiceOptions**](ShippingServiceOptions.md) |  | 
**AvailableShippingServiceOptions** | [**AvailableShippingServiceOptions**](AvailableShippingServiceOptions.md) |  | [optional] 
**AvailableLabelFormats** | [**List&lt;LabelFormat&gt;**](LabelFormat.md) | List of label formats. | [optional] 
**AvailableFormatOptionsForLabel** | [**List&lt;LabelFormatOption&gt;**](LabelFormatOption.md) | The available label formats. | [optional] 
**RequiresAdditionalSellerInputs** | **bool** | When true, additional seller inputs are required. | 
**Benefits** | [**Benefits**](Benefits.md) |  | [optional] 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

