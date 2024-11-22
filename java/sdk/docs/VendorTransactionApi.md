# VendorTransactionApi

All URIs are relative to *https://sellingpartnerapi-na.amazon.com/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getTransaction**](VendorTransactionApi.md#getTransaction) | **GET** /vendor/transactions/v1/transactions/{transactionId} | 

<a name="getTransaction"></a>
# **getTransaction**
> GetTransactionResponse getTransaction(transactionId)



Returns the status of the transaction that you specify.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 10 | 20 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).

### Example
```java
// Import classes:
//import com.amazon.SellingPartnerAPI.ApiException;
//import com.amazon.SellingPartnerAPI.api.VendorTransactionApi;


VendorTransactionApi apiInstance = new VendorTransactionApi();
String transactionId = "transactionId_example"; // String | The GUID provided by Amazon in the 'transactionId' field in response to the post request of a specific transaction.
try {
    GetTransactionResponse result = apiInstance.getTransaction(transactionId);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling VendorTransactionApi#getTransaction");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **transactionId** | **String**| The GUID provided by Amazon in the &#x27;transactionId&#x27; field in response to the post request of a specific transaction. |

### Return type

[**GetTransactionResponse**](GetTransactionResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

