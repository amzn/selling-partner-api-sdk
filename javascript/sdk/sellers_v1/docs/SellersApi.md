# TheSellingPartnerApiForSellers.SellersApi

All URIs are relative to *https://sellingpartnerapi-na.amazon.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getAccount**](SellersApi.md#getAccount) | **GET** /sellers/v1/account | 
[**getMarketplaceParticipations**](SellersApi.md#getMarketplaceParticipations) | **GET** /sellers/v1/marketplaceParticipations | 



## getAccount

> GetAccountResponse getAccount()



Returns information about a seller account and its marketplaces.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 0.016 | 15 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The preceding table indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may have higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).

### Example

```javascript
import TheSellingPartnerApiForSellers from 'the_selling_partner_api_for_sellers';

let apiInstance = new TheSellingPartnerApiForSellers.SellersApi();
apiInstance.getAccount().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

This endpoint does not need any parameter.

### Return type

[**GetAccountResponse**](GetAccountResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getMarketplaceParticipations

> GetMarketplaceParticipationsResponse getMarketplaceParticipations()



Returns a list of marketplaces where the seller can list items and information about the seller&#39;s participation in those marketplaces.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 0.016 | 15 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The preceding table indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may have higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).

### Example

```javascript
import TheSellingPartnerApiForSellers from 'the_selling_partner_api_for_sellers';

let apiInstance = new TheSellingPartnerApiForSellers.SellersApi();
apiInstance.getMarketplaceParticipations().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

This endpoint does not need any parameter.

### Return type

[**GetMarketplaceParticipationsResponse**](GetMarketplaceParticipationsResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, payload

