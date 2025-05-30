# software.amzn.spapi.Model.shipping.v2.PurchaseShipmentRequest
The request schema for the purchaseShipment operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**RequestToken** | **string** | A unique token generated to identify a getRates operation. | 
**RateId** | **string** | An identifier for the rate (shipment offering) provided by a shipping service provider. | 
**RequestedDocumentSpecification** | [**RequestedDocumentSpecification**](RequestedDocumentSpecification.md) |  | 
**RequestedValueAddedServices** | [**List&lt;RequestedValueAddedService&gt;**](RequestedValueAddedService.md) | The value-added services to be added to a shipping service purchase. | [optional] 
**AdditionalInputs** | **Dictionary&lt;string, Object&gt;** | The additional inputs required to purchase a shipping offering, in JSON format. The JSON provided here must adhere to the JSON schema that is returned in the response to the getAdditionalInputs operation.  Additional inputs are only required when indicated by the requiresAdditionalInputs property in the response to the getRates operation. | [optional] 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

