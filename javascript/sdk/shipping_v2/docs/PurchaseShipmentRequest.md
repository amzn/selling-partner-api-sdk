# AmazonShippingApi.PurchaseShipmentRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**requestToken** | **String** | A unique token generated to identify a getRates operation. | 
**rateId** | **String** | An identifier for the rate (shipment offering) provided by a shipping service provider. | 
**requestedDocumentSpecification** | [**RequestedDocumentSpecification**](RequestedDocumentSpecification.md) |  | 
**requestedValueAddedServices** | [**[RequestedValueAddedService]**](RequestedValueAddedService.md) | The value-added services to be added to a shipping service purchase. | [optional] 
**additionalInputs** | **{String: Object}** | The additional inputs required to purchase a shipping offering, in JSON format. The JSON provided here must adhere to the JSON schema that is returned in the response to the getAdditionalInputs operation.  Additional inputs are only required when indicated by the requiresAdditionalInputs property in the response to the getRates operation. | [optional] 


