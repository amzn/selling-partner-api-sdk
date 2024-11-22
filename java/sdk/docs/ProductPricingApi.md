# ProductPricingApi

All URIs are relative to *https://sellingpartnerapi-na.amazon.com/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getCompetitiveSummary**](ProductPricingApi.md#getCompetitiveSummary) | **POST** /batches/products/pricing/2022-05-01/items/competitiveSummary | 
[**getFeaturedOfferExpectedPriceBatch**](ProductPricingApi.md#getFeaturedOfferExpectedPriceBatch) | **POST** /batches/products/pricing/2022-05-01/offer/featuredOfferExpectedPrice | 

<a name="getCompetitiveSummary"></a>
# **getCompetitiveSummary**
> CompetitiveSummaryBatchResponse getCompetitiveSummary(body)



Returns the competitive summary response, including featured buying options for the ASIN and &#x60;marketplaceId&#x60; combination.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 0.033 | 1 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that are applied to the requested operation, when available. The preceding table contains the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may receive higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api) in the Selling Partner API.

### Example
```java
// Import classes:
//import com.amazon.SellingPartnerAPI.ApiException;
//import com.amazon.SellingPartnerAPI.api.ProductPricingApi;


ProductPricingApi apiInstance = new ProductPricingApi();
CompetitiveSummaryBatchRequest body = new CompetitiveSummaryBatchRequest(); // CompetitiveSummaryBatchRequest | The batch of `getCompetitiveSummary` requests.
try {
    CompetitiveSummaryBatchResponse result = apiInstance.getCompetitiveSummary(body);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling ProductPricingApi#getCompetitiveSummary");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**CompetitiveSummaryBatchRequest**](CompetitiveSummaryBatchRequest.md)| The batch of &#x60;getCompetitiveSummary&#x60; requests. |

### Return type

[**CompetitiveSummaryBatchResponse**](CompetitiveSummaryBatchResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getFeaturedOfferExpectedPriceBatch"></a>
# **getFeaturedOfferExpectedPriceBatch**
> GetFeaturedOfferExpectedPriceBatchResponse getFeaturedOfferExpectedPriceBatch(body)



Returns the set of responses that correspond to the batched list of up to 40 requests defined in the request body. The response for each successful (HTTP status code 200) request in the set includes the computed listing price at or below which a seller can expect to become the featured offer (before applicable promotions). This is called the featured offer expected price (FOEP). Featured offer is not guaranteed because competing offers might change. Other offers might be featured based on factors such as fulfillment capabilities to a specific customer. The response to an unsuccessful request includes the available error text.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 0.033 | 1 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that are applied to the requested operation, when available. The preceding table contains the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may receive higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api) in the Selling Partner API.

### Example
```java
// Import classes:
//import com.amazon.SellingPartnerAPI.ApiException;
//import com.amazon.SellingPartnerAPI.api.ProductPricingApi;


ProductPricingApi apiInstance = new ProductPricingApi();
GetFeaturedOfferExpectedPriceBatchRequest body = new GetFeaturedOfferExpectedPriceBatchRequest(); // GetFeaturedOfferExpectedPriceBatchRequest | The batch of `getFeaturedOfferExpectedPrice` requests.
try {
    GetFeaturedOfferExpectedPriceBatchResponse result = apiInstance.getFeaturedOfferExpectedPriceBatch(body);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling ProductPricingApi#getFeaturedOfferExpectedPriceBatch");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**GetFeaturedOfferExpectedPriceBatchRequest**](GetFeaturedOfferExpectedPriceBatchRequest.md)| The batch of &#x60;getFeaturedOfferExpectedPrice&#x60; requests. |

### Return type

[**GetFeaturedOfferExpectedPriceBatchResponse**](GetFeaturedOfferExpectedPriceBatchResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

