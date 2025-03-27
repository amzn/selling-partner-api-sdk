# SellingPartnerApiForMerchantFulfillment.ShippingService

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**shippingServiceName** | **String** | A plain text representation of a carrier&#39;s shipping service. For example, \&quot;UPS Ground\&quot; or \&quot;FedEx Standard Overnight\&quot;.  | 
**carrierName** | **String** | The name of the carrier. | 
**shippingServiceId** | **String** | An Amazon-defined shipping service identifier. | 
**shippingServiceOfferId** | **String** | An Amazon-defined shipping service offer identifier. | 
**shipDate** | **Date** | Date-time formatted timestamp. | 
**earliestEstimatedDeliveryDate** | **Date** | Date-time formatted timestamp. | [optional] 
**latestEstimatedDeliveryDate** | **Date** | Date-time formatted timestamp. | [optional] 
**rate** | [**CurrencyAmount**](CurrencyAmount.md) |  | 
**shippingServiceOptions** | [**ShippingServiceOptions**](ShippingServiceOptions.md) |  | 
**availableShippingServiceOptions** | [**AvailableShippingServiceOptions**](AvailableShippingServiceOptions.md) |  | [optional] 
**availableLabelFormats** | [**[LabelFormat]**](LabelFormat.md) | List of label formats. | [optional] 
**availableFormatOptionsForLabel** | [**[LabelFormatOption]**](LabelFormatOption.md) | The available label formats. | [optional] 
**requiresAdditionalSellerInputs** | **Boolean** | When true, additional seller inputs are required. | 
**benefits** | [**Benefits**](Benefits.md) |  | [optional] 


