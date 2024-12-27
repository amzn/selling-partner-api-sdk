# # GetEligibleShipmentServicesResult

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**shipping_service_list** | [**\OpenAPI\Client\Model\merchantfulfillment\ShippingService[]**](ShippingService.md) | A list of shipping services offers. |
**rejected_shipping_service_list** | [**\OpenAPI\Client\Model\merchantfulfillment\RejectedShippingService[]**](RejectedShippingService.md) | List of services that are for some reason unavailable for this request | [optional]
**temporarily_unavailable_carrier_list** | [**\OpenAPI\Client\Model\merchantfulfillment\TemporarilyUnavailableCarrier[]**](TemporarilyUnavailableCarrier.md) | A list of temporarily unavailable carriers. | [optional]
**terms_and_conditions_not_accepted_carrier_list** | [**\OpenAPI\Client\Model\merchantfulfillment\TermsAndConditionsNotAcceptedCarrier[]**](TermsAndConditionsNotAcceptedCarrier.md) | List of carriers whose terms and conditions were not accepted by the seller. | [optional]

[[Back to Model list]](../../README.md#models) [[Back to API list]](../../README.md#endpoints) [[Back to README]](../../README.md)
