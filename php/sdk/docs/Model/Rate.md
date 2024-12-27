# # Rate

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**rate_id** | **string** | An identifier for the rate (shipment offering) provided by a shipping service provider. |
**carrier_id** | **string** | The carrier identifier for the offering, provided by the carrier. |
**carrier_name** | **string** | The carrier name for the offering. |
**service_id** | **string** | An identifier for the shipping service. |
**service_name** | **string** | The name of the shipping service. |
**billed_weight** | [**\OpenAPI\Client\Model\shipping\Weight**](Weight.md) |  | [optional]
**total_charge** | [**\OpenAPI\Client\Model\shipping\Currency**](Currency.md) |  |
**promise** | [**\OpenAPI\Client\Model\shipping\Promise**](Promise.md) |  |
**supported_document_specifications** | [**\OpenAPI\Client\Model\shipping\SupportedDocumentSpecification[]**](SupportedDocumentSpecification.md) | A list of the document specifications supported for a shipment service offering. |
**available_value_added_service_groups** | [**\OpenAPI\Client\Model\shipping\AvailableValueAddedServiceGroup[]**](AvailableValueAddedServiceGroup.md) | A list of value-added services available for a shipping service offering. | [optional]
**requires_additional_inputs** | **bool** | When true, indicates that additional inputs are required to purchase this shipment service. You must then call the getAdditionalInputs operation to return the JSON schema to use when providing the additional inputs to the purchaseShipment operation. |
**rate_item_list** | [**\OpenAPI\Client\Model\shipping\RateItem[]**](RateItem.md) | A list of RateItem | [optional]
**payment_type** | [**\OpenAPI\Client\Model\shipping\PaymentType**](PaymentType.md) |  | [optional]
**benefits** | [**\OpenAPI\Client\Model\shipping\Benefits**](Benefits.md) |  | [optional]

[[Back to Model list]](../../README.md#models) [[Back to API list]](../../README.md#endpoints) [[Back to README]](../../README.md)
