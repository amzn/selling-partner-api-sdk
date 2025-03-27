# SellingPartnerApiForReplenishment.SellingpartnersApi

All URIs are relative to *https://sellingpartnerapi-na.amazon.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getSellingPartnerMetrics**](SellingpartnersApi.md#getSellingPartnerMetrics) | **POST** /replenishment/2022-11-07/sellingPartners/metrics/search | 



## getSellingPartnerMetrics

> GetSellingPartnerMetricsResponse getSellingPartnerMetrics(opts)



Returns aggregated replenishment program metrics for a selling partner.   **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 1 | 1 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).

### Example

```javascript
import SellingPartnerApiForReplenishment from 'selling_partner_api_for_replenishment';

let apiInstance = new SellingPartnerApiForReplenishment.SellingpartnersApi();
let opts = {
  'body': new SellingPartnerApiForReplenishment.GetSellingPartnerMetricsRequest() // GetSellingPartnerMetricsRequest | The request body for the `getSellingPartnerMetrics` operation.
};
apiInstance.getSellingPartnerMetrics(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

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

