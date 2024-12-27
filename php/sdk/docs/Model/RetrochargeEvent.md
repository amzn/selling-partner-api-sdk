# # RetrochargeEvent

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**retrocharge_event_type** | **string** | The type of event.  Possible values:  * Retrocharge  * RetrochargeReversal | [optional]
**amazon_order_id** | **string** | An Amazon-defined identifier for an order. | [optional]
**posted_date** | **\DateTime** | Fields with a schema type of date are in ISO 8601 date time format (for example GroupBeginDate). | [optional]
**base_tax** | [**\OpenAPI\Client\Model\financesv0\Currency**](Currency.md) |  | [optional]
**shipping_tax** | [**\OpenAPI\Client\Model\financesv0\Currency**](Currency.md) |  | [optional]
**marketplace_name** | **string** | The name of the marketplace where the retrocharge event occurred. | [optional]
**retrocharge_tax_withheld_list** | [**\OpenAPI\Client\Model\financesv0\TaxWithheldComponent[]**](TaxWithheldComponent.md) | A list of information about taxes withheld. | [optional]

[[Back to Model list]](../../README.md#models) [[Back to API list]](../../README.md#endpoints) [[Back to README]](../../README.md)
