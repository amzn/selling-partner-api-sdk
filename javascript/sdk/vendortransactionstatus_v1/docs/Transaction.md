# SellingPartnerApiForRetailProcurementTransactionStatus.Transaction

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**transactionId** | **String** | The unique identifier returned in the &#39;transactionId&#39; field in response to the post request of a specific transaction. | 
**status** | **String** | Current processing status of the transaction. | 
**errors** | [**[Error]**](Error.md) | A list of error responses returned when a request is unsuccessful. | [optional] 



## Enum: StatusEnum


* `Failure` (value: `"Failure"`)

* `Processing` (value: `"Processing"`)

* `Success` (value: `"Success"`)




