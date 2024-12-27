# # PurchaseShipmentRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**request_token** | **string** | A unique token generated to identify a getRates operation. |
**rate_id** | **string** | An identifier for the rate (shipment offering) provided by a shipping service provider. |
**requested_document_specification** | [**\OpenAPI\Client\Model\shipping\RequestedDocumentSpecification**](RequestedDocumentSpecification.md) |  |
**requested_value_added_services** | [**\OpenAPI\Client\Model\shipping\RequestedValueAddedService[]**](RequestedValueAddedService.md) | The value-added services to be added to a shipping service purchase. | [optional]
**additional_inputs** | **array<string,object>** | The additional inputs required to purchase a shipping offering, in JSON format. The JSON provided here must adhere to the JSON schema that is returned in the response to the getAdditionalInputs operation.  Additional inputs are only required when indicated by the requiresAdditionalInputs property in the response to the getRates operation. | [optional]

[[Back to Model list]](../../README.md#models) [[Back to API list]](../../README.md#endpoints) [[Back to README]](../../README.md)
