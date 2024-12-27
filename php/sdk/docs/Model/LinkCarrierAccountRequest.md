# # LinkCarrierAccountRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**client_reference_details** | [**\OpenAPI\Client\Model\shipping\ClientReferenceDetail[]**](ClientReferenceDetail.md) | Object to pass additional information about the MCI Integrator shipperType: List of ClientReferenceDetail | [optional]
**carrier_account_type** | **string** | CarrierAccountType  associated with account. |
**carrier_account_attributes** | [**\OpenAPI\Client\Model\shipping\CarrierAccountAttribute[]**](CarrierAccountAttribute.md) | A list of all attributes required by the carrier in order to successfully link the merchant&#39;s account |
**encrypted_carrier_account_attributes** | [**\OpenAPI\Client\Model\shipping\CarrierAccountAttribute[]**](CarrierAccountAttribute.md) | A list of all attributes required by the carrier in order to successfully link the merchant&#39;s account | [optional]

[[Back to Model list]](../../README.md#models) [[Back to API list]](../../README.md#endpoints) [[Back to README]](../../README.md)
