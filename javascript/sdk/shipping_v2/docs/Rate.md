# AmazonShippingApi.Rate

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**rateId** | **String** | An identifier for the rate (shipment offering) provided by a shipping service provider. | 
**carrierId** | **String** | The carrier identifier for the offering, provided by the carrier. | 
**carrierName** | **String** | The carrier name for the offering. | 
**serviceId** | **String** | An identifier for the shipping service. | 
**serviceName** | **String** | The name of the shipping service. | 
**billedWeight** | [**Weight**](Weight.md) |  | [optional] 
**totalCharge** | [**Currency**](Currency.md) |  | 
**promise** | [**Promise**](Promise.md) |  | 
**supportedDocumentSpecifications** | [**[SupportedDocumentSpecification]**](SupportedDocumentSpecification.md) | A list of the document specifications supported for a shipment service offering. | 
**availableValueAddedServiceGroups** | [**[AvailableValueAddedServiceGroup]**](AvailableValueAddedServiceGroup.md) | A list of value-added services available for a shipping service offering. | [optional] 
**requiresAdditionalInputs** | **Boolean** | When true, indicates that additional inputs are required to purchase this shipment service. You must then call the getAdditionalInputs operation to return the JSON schema to use when providing the additional inputs to the purchaseShipment operation. | 
**rateItemList** | [**[RateItem]**](RateItem.md) | A list of RateItem | [optional] 
**paymentType** | [**PaymentType**](PaymentType.md) |  | [optional] 
**benefits** | [**Benefits**](Benefits.md) |  | [optional] 


