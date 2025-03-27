# SellingPartnerApiForRetailProcurementTransactionStatus.VendorTransactionApi

All URIs are relative to *https://sellingpartnerapi-na.amazon.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getTransaction**](VendorTransactionApi.md#getTransaction) | **GET** /vendor/transactions/v1/transactions/{transactionId} | 



## getTransaction

> GetTransactionResponse getTransaction(transactionId)



Returns the status of the transaction that you specify.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 10 | 20 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).

### Example

```javascript
import SellingPartnerApiForRetailProcurementTransactionStatus from 'selling_partner_api_for_retail_procurement_transaction_status';

let apiInstance = new SellingPartnerApiForRetailProcurementTransactionStatus.VendorTransactionApi();
let transactionId = "transactionId_example"; // String | The GUID provided by Amazon in the 'transactionId' field in response to the post request of a specific transaction.
apiInstance.getTransaction(transactionId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **transactionId** | **String**| The GUID provided by Amazon in the &#39;transactionId&#39; field in response to the post request of a specific transaction. | 

### Return type

[**GetTransactionResponse**](GetTransactionResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

