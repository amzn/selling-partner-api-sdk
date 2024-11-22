# SellingpartnersApi

All URIs are relative to *https://sellingpartnerapi-na.amazon.com/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getSellingPartnerMetrics**](SellingpartnersApi.md#getSellingPartnerMetrics) | **POST** /replenishment/2022-11-07/sellingPartners/metrics/search | 

<a name="getSellingPartnerMetrics"></a>
# **getSellingPartnerMetrics**
> GetSellingPartnerMetricsResponse getSellingPartnerMetrics(body)



Returns aggregated replenishment program metrics for a selling partner.   **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 1 | 1 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).

### Example
```java
// Import classes:
//import com.amazon.SellingPartnerAPI.ApiException;
//import com.amazon.SellingPartnerAPI.api.SellingpartnersApi;


SellingpartnersApi apiInstance = new SellingpartnersApi();
GetSellingPartnerMetricsRequest body = new GetSellingPartnerMetricsRequest(); // GetSellingPartnerMetricsRequest | The request body for the `getSellingPartnerMetrics` operation.
try {
    GetSellingPartnerMetricsResponse result = apiInstance.getSellingPartnerMetrics(body);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling SellingpartnersApi#getSellingPartnerMetrics");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**GetSellingPartnerMetricsRequest**](GetSellingPartnerMetricsRequest.md)| The request body for the &#x60;getSellingPartnerMetrics&#x60; operation. | [optional]

### Return type

[**GetSellingPartnerMetricsResponse**](GetSellingPartnerMetricsResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

