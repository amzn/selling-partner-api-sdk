# # Address

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **string** | The name. |
**company_name** | **string** | The company name of the recipient.  **Note**: This attribute is only available for shipping address. | [optional]
**address_line1** | **string** | The street address. | [optional]
**address_line2** | **string** | Additional street address information, if required. | [optional]
**address_line3** | **string** | Additional street address information, if required. | [optional]
**city** | **string** | The city. | [optional]
**county** | **string** | The county. | [optional]
**district** | **string** | The district. | [optional]
**state_or_region** | **string** | The state or region. | [optional]
**municipality** | **string** | The municipality. | [optional]
**postal_code** | **string** | The postal code. | [optional]
**country_code** | **string** | The country code. A two-character country code, in ISO 3166-1 alpha-2 format. | [optional]
**phone** | **string** | The phone number of the buyer.  **Note**:  1. This attribute is only available for shipping address. 2. In some cases, the buyer phone number is suppressed:  a. Phone is suppressed for all &#x60;AFN&#x60; (fulfilled by Amazon) orders. b. Phone is suppressed for the shipped &#x60;MFN&#x60; (fulfilled by seller) order when the current date is past the Latest Delivery Date. | [optional]
**extended_fields** | [**\OpenAPI\Client\models\orders\AddressExtendedFields**](AddressExtendedFields.md) |  | [optional]
**address_type** | **string** | The address type of the shipping address. | [optional]

[[Back to Model list]](../../README.md#models) [[Back to API list]](../../README.md#endpoints) [[Back to README]](../../README.md)
