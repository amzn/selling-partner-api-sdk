# software.amzn.spapi.Model.easyship.v2022_03_23.CreateScheduledPackagesResponse
The response schema for the bulk scheduling API. It returns by the bulk scheduling API containing an array of the scheduled packtages, an optional list of orders we couldn't schedule with the reason, and a pre-signed URL for a ZIP file containing the associated shipping labels plus the documents enabled for your marketplace.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ScheduledPackages** | [**List&lt;Package&gt;**](Package.md) | A list of packages. Refer to the &#x60;Package&#x60; object. | [optional] 
**RejectedOrders** | [**List&lt;RejectedOrder&gt;**](RejectedOrder.md) | A list of orders we couldn&#39;t scheduled on your behalf. Each element contains the reason and details on the error. | [optional] 
**PrintableDocumentsUrl** | **string** | A pre-signed URL for the zip document containing the shipping labels and the documents enabled for your marketplace. | [optional] 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

