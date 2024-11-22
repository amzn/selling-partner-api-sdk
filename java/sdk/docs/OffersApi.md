# OffersApi

All URIs are relative to *https://sellingpartnerapi-na.amazon.com/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**listOfferMetrics**](OffersApi.md#listOfferMetrics) | **POST** /replenishment/2022-11-07/offers/metrics/search | 
[**listOffers**](OffersApi.md#listOffers) | **POST** /replenishment/2022-11-07/offers/search | 

<a name="listOfferMetrics"></a>
# **listOfferMetrics**
> ListOfferMetricsResponse listOfferMetrics(body)



Returns aggregated replenishment program metrics for a selling partner&#x27;s offers.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 1 | 1 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).

### Example
```java
// Import classes:
//import com.amazon.SellingPartnerAPI.ApiException;
//import com.amazon.SellingPartnerAPI.api.OffersApi;


OffersApi apiInstance = new OffersApi();
ListOfferMetricsRequest body = new ListOfferMetricsRequest(); // ListOfferMetricsRequest | The request body for the `listOfferMetrics` operation.
try {
    ListOfferMetricsResponse result = apiInstance.listOfferMetrics(body);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling OffersApi#listOfferMetrics");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**ListOfferMetricsRequest**](ListOfferMetricsRequest.md)| The request body for the &#x60;listOfferMetrics&#x60; operation. | [optional]

### Return type

[**ListOfferMetricsResponse**](ListOfferMetricsResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="listOffers"></a>
# **listOffers**
> ListOffersResponse listOffers(body)



Returns the details of a selling partner&#x27;s replenishment program offers.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 1 | 1 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).

### Example
```java
// Import classes:
//import com.amazon.SellingPartnerAPI.ApiException;
//import com.amazon.SellingPartnerAPI.api.OffersApi;


OffersApi apiInstance = new OffersApi();
ListOffersRequest body = new ListOffersRequest(); // ListOffersRequest | The request body for the `listOffers` operation.
try {
    ListOffersResponse result = apiInstance.listOffers(body);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling OffersApi#listOffers");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**ListOffersRequest**](ListOffersRequest.md)| The request body for the &#x60;listOffers&#x60; operation. | [optional]

### Return type

[**ListOffersResponse**](ListOffersResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

