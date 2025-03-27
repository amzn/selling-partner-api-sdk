# SellingPartnerApiForSolicitations.SolicitationsApi

All URIs are relative to *https://sellingpartnerapi-na.amazon.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createProductReviewAndSellerFeedbackSolicitation**](SolicitationsApi.md#createProductReviewAndSellerFeedbackSolicitation) | **POST** /solicitations/v1/orders/{amazonOrderId}/solicitations/productReviewAndSellerFeedback | 
[**getSolicitationActionsForOrder**](SolicitationsApi.md#getSolicitationActionsForOrder) | **GET** /solicitations/v1/orders/{amazonOrderId} | 



## createProductReviewAndSellerFeedbackSolicitation

> CreateProductReviewAndSellerFeedbackSolicitationResponse createProductReviewAndSellerFeedbackSolicitation(amazonOrderId, marketplaceIds)



Sends a solicitation to a buyer asking for seller feedback and a product review for the specified order. Send only one productReviewAndSellerFeedback or free form proactive message per order.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 1 | 5 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).

### Example

```javascript
import SellingPartnerApiForSolicitations from 'selling_partner_api_for_solicitations';

let apiInstance = new SellingPartnerApiForSolicitations.SolicitationsApi();
let amazonOrderId = "amazonOrderId_example"; // String | An Amazon order identifier. This specifies the order for which a solicitation is sent.
let marketplaceIds = ["null"]; // [String] | A marketplace identifier. This specifies the marketplace in which the order was placed. Only one marketplace can be specified.
apiInstance.createProductReviewAndSellerFeedbackSolicitation(amazonOrderId, marketplaceIds).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **amazonOrderId** | **String**| An Amazon order identifier. This specifies the order for which a solicitation is sent. | 
 **marketplaceIds** | [**[String]**](String.md)| A marketplace identifier. This specifies the marketplace in which the order was placed. Only one marketplace can be specified. | 

### Return type

[**CreateProductReviewAndSellerFeedbackSolicitationResponse**](CreateProductReviewAndSellerFeedbackSolicitationResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/hal+json


## getSolicitationActionsForOrder

> GetSolicitationActionsForOrderResponse getSolicitationActionsForOrder(amazonOrderId, marketplaceIds)



Returns a list of solicitation types that are available for an order that you specify. A solicitation type is represented by an actions object, which contains a path and query parameter(s). You can use the path and parameter(s) to call an operation that sends a solicitation. Currently only the productReviewAndSellerFeedbackSolicitation solicitation type is available.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 1 | 5 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).

### Example

```javascript
import SellingPartnerApiForSolicitations from 'selling_partner_api_for_solicitations';

let apiInstance = new SellingPartnerApiForSolicitations.SolicitationsApi();
let amazonOrderId = "amazonOrderId_example"; // String | An Amazon order identifier. This specifies the order for which you want a list of available solicitation types.
let marketplaceIds = ["null"]; // [String] | A marketplace identifier. This specifies the marketplace in which the order was placed. Only one marketplace can be specified.
apiInstance.getSolicitationActionsForOrder(amazonOrderId, marketplaceIds).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **amazonOrderId** | **String**| An Amazon order identifier. This specifies the order for which you want a list of available solicitation types. | 
 **marketplaceIds** | [**[String]**](String.md)| A marketplace identifier. This specifies the marketplace in which the order was placed. Only one marketplace can be specified. | 

### Return type

[**GetSolicitationActionsForOrderResponse**](GetSolicitationActionsForOrderResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/hal+json

