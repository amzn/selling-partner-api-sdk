# software.amzn.spapi.Model.shipping.v2.LinkCarrierAccountRequest
The request schema for verify and add the merchant's account with a certain carrier.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ClientReferenceDetails** | [**List&lt;ClientReferenceDetail&gt;**](ClientReferenceDetail.md) | Object to pass additional information about the MCI Integrator shipperType: List of ClientReferenceDetail | [optional] 
**CarrierAccountType** | **string** | CarrierAccountType  associated with account. | 
**CarrierAccountAttributes** | [**List&lt;CarrierAccountAttribute&gt;**](CarrierAccountAttribute.md) | A list of all attributes required by the carrier in order to successfully link the merchant&#39;s account | 
**EncryptedCarrierAccountAttributes** | [**List&lt;CarrierAccountAttribute&gt;**](CarrierAccountAttribute.md) | A list of all attributes required by the carrier in order to successfully link the merchant&#39;s account | [optional] 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

