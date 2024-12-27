# # CreateScheduledPackagesResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**scheduled_packages** | [**\OpenAPI\Client\Model\easyship\Package[]**](Package.md) | A list of packages. Refer to the &#x60;Package&#x60; object. | [optional]
**rejected_orders** | [**\OpenAPI\Client\Model\easyship\RejectedOrder[]**](RejectedOrder.md) | A list of orders we couldn&#39;t scheduled on your behalf. Each element contains the reason and details on the error. | [optional]
**printable_documents_url** | **string** | A pre-signed URL for the zip document containing the shipping labels and the documents enabled for your marketplace. | [optional]

[[Back to Model list]](../../README.md#models) [[Back to API list]](../../README.md#endpoints) [[Back to README]](../../README.md)
