# software.amzn.spapi.Model.shipping.v2.Rate
The details of a shipping service offering.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**RateId** | **string** | An identifier for the rate (shipment offering) provided by a shipping service provider. | 
**CarrierId** | **string** | The carrier identifier for the offering, provided by the carrier. | 
**CarrierName** | **string** | The carrier name for the offering. | 
**ServiceId** | **string** | An identifier for the shipping service. | 
**ServiceName** | **string** | The name of the shipping service. | 
**BilledWeight** | [**Weight**](Weight.md) |  | [optional] 
**TotalCharge** | [**Currency**](Currency.md) |  | 
**Promise** | [**Promise**](Promise.md) |  | 
**SupportedDocumentSpecifications** | [**List&lt;SupportedDocumentSpecification&gt;**](SupportedDocumentSpecification.md) | A list of the document specifications supported for a shipment service offering. | 
**AvailableValueAddedServiceGroups** | [**List&lt;AvailableValueAddedServiceGroup&gt;**](AvailableValueAddedServiceGroup.md) | A list of value-added services available for a shipping service offering. | [optional] 
**RequiresAdditionalInputs** | **bool** | When true, indicates that additional inputs are required to purchase this shipment service. You must then call the getAdditionalInputs operation to return the JSON schema to use when providing the additional inputs to the purchaseShipment operation. | 
**RateItemList** | [**List&lt;RateItem&gt;**](RateItem.md) | A list of RateItem | [optional] 
**PaymentType** | **PaymentType** |  | [optional] 
**Benefits** | [**Benefits**](Benefits.md) |  | [optional] 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

