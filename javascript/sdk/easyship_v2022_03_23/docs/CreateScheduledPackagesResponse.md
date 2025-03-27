# SellingPartnerApiForEasyShip.CreateScheduledPackagesResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**scheduledPackages** | [**[Package]**](Package.md) | A list of packages. Refer to the &#x60;Package&#x60; object. | [optional] 
**rejectedOrders** | [**[RejectedOrder]**](RejectedOrder.md) | A list of orders we couldn&#39;t scheduled on your behalf. Each element contains the reason and details on the error. | [optional] 
**printableDocumentsUrl** | **String** | A pre-signed URL for the zip document containing the shipping labels and the documents enabled for your marketplace. | [optional] 


