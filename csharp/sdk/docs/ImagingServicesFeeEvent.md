# software.amzn.spapi.Model.finances.v0.ImagingServicesFeeEvent
A fee event related to Amazon Imaging services.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ImagingRequestBillingItemID** | **string** | The identifier for the imaging services request. | [optional] 
**ASIN** | **string** | The Amazon Standard Identification Number (ASIN) of the item for which the imaging service was requested. | [optional] 
**PostedDate** | **DateTime** | Fields with a schema type of date are in ISO 8601 date time format (for example GroupBeginDate). | [optional] 
**FeeList** | [**List&lt;FeeComponent&gt;**](FeeComponent.md) | A list of fee component information. | [optional] 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

