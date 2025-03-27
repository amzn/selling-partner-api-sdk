# SellingPartnerApiForOrders.ValidVerificationDetail

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**verificationDetailType** | **String** | A supported type of verification detail. The type indicates which verification detail could be shared while updating the regulated order. Valid value: &#x60;prescriptionDetail&#x60;. | 
**validVerificationStatuses** | [**[VerificationStatus]**](VerificationStatus.md) | A list of valid verification statuses where the associated verification detail type may be provided. For example, if the value of this field is [\&quot;Approved\&quot;], calls to provide the associated verification detail will fail for orders with a &#x60;VerificationStatus&#x60; of &#x60;Pending&#x60;, &#x60;Rejected&#x60;, &#x60;Expired&#x60;, or &#x60;Cancelled&#x60;. | 


