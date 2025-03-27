# TheSellingPartnerApiForTransfers.DefaultApi

All URIs are relative to *https://sellingpartnerapi-na.amazon.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getPaymentMethods**](DefaultApi.md#getPaymentMethods) | **GET** /finances/transfers/2024-06-01/paymentMethods | 
[**initiatePayout**](DefaultApi.md#initiatePayout) | **POST** /finances/transfers/2024-06-01/payouts | 



## getPaymentMethods

> GetPaymentMethodsResponse getPaymentMethods(marketplaceId, opts)



Returns the list of payment methods for the seller, which can be filtered by method type.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | .5 | 30 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header contains the usage plan rate limits for the operation, when available. The preceding table contains the default rate and burst values for this operation. Selling partners whose business demands require higher throughput might have higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).

### Example

```javascript
import TheSellingPartnerApiForTransfers from 'the_selling_partner_api_for_transfers_';

let apiInstance = new TheSellingPartnerApiForTransfers.DefaultApi();
let marketplaceId = "ATVPDKIKX0DER"; // String | The identifier of the marketplace from which you want to retrieve payment methods. For the list of possible marketplace identifiers, refer to [Marketplace IDs](https://developer-docs.amazon.com/sp-api/docs/marketplace-ids).
let opts = {
  'paymentMethodTypes': ["null"] // [String] | A comma-separated list of the payment method types you want to include in the response.
};
apiInstance.getPaymentMethods(marketplaceId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **marketplaceId** | **String**| The identifier of the marketplace from which you want to retrieve payment methods. For the list of possible marketplace identifiers, refer to [Marketplace IDs](https://developer-docs.amazon.com/sp-api/docs/marketplace-ids). | 
 **paymentMethodTypes** | [**[String]**](String.md)| A comma-separated list of the payment method types you want to include in the response. | [optional] 

### Return type

[**GetPaymentMethodsResponse**](GetPaymentMethodsResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## initiatePayout

> InitiatePayoutResponse initiatePayout(body)



Initiates an on-demand payout to the seller&#39;s default deposit method in Seller Central for the given &#x60;marketplaceId&#x60; and &#x60;accountType&#x60;, if eligible. You can only initiate one on-demand payout for each marketplace and account type within a 24-hour period.   **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 0.017 | 2 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header contains the usage plan rate limits for the operation, when available. The preceding table contains the default rate and burst values for this operation. Selling partners whose business demands require higher throughput might have higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).

### Example

```javascript
import TheSellingPartnerApiForTransfers from 'the_selling_partner_api_for_transfers_';

let apiInstance = new TheSellingPartnerApiForTransfers.DefaultApi();
let body = new TheSellingPartnerApiForTransfers.InitiatePayoutRequest(); // InitiatePayoutRequest | The request body for the `initiatePayout` operation.
apiInstance.initiatePayout(body).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**InitiatePayoutRequest**](InitiatePayoutRequest.md)| The request body for the &#x60;initiatePayout&#x60; operation. | 

### Return type

[**InitiatePayoutResponse**](InitiatePayoutResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

