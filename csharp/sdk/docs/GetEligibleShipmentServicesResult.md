# software.amzn.spapi.Model.merchantFulfillment.v0.GetEligibleShipmentServicesResult
The payload for the `getEligibleShipmentServices` operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ShippingServiceList** | [**List&lt;ShippingService&gt;**](ShippingService.md) | A list of shipping services offers. | 
**RejectedShippingServiceList** | [**List&lt;RejectedShippingService&gt;**](RejectedShippingService.md) | List of services that are for some reason unavailable for this request | [optional] 
**TemporarilyUnavailableCarrierList** | [**List&lt;TemporarilyUnavailableCarrier&gt;**](TemporarilyUnavailableCarrier.md) | A list of temporarily unavailable carriers. | [optional] 
**TermsAndConditionsNotAcceptedCarrierList** | [**List&lt;TermsAndConditionsNotAcceptedCarrier&gt;**](TermsAndConditionsNotAcceptedCarrier.md) | List of carriers whose terms and conditions were not accepted by the seller. | [optional] 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

