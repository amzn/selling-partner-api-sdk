# SellingPartnerApiForDirectFulfillmentShipping.CreateContainerLabelApi

All URIs are relative to *https://sellingpartnerapi-na.amazon.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createContainerLabel**](CreateContainerLabelApi.md#createContainerLabel) | **POST** /vendor/directFulfillment/shipping/2021-12-28/containerLabel | createContainerLabel



## createContainerLabel

> CreateContainerLabelResponse createContainerLabel(body)

createContainerLabel

Creates a container (pallet) label for the associated shipment package.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 10 | 10 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The preceding table contains the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may have higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).

### Example

```javascript
import SellingPartnerApiForDirectFulfillmentShipping from 'selling_partner_api_for_direct_fulfillment_shipping';

let apiInstance = new SellingPartnerApiForDirectFulfillmentShipping.CreateContainerLabelApi();
let body = new SellingPartnerApiForDirectFulfillmentShipping.CreateContainerLabelRequest(); // CreateContainerLabelRequest | Request body containing the container label data.
apiInstance.createContainerLabel(body).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**CreateContainerLabelRequest**](CreateContainerLabelRequest.md)| Request body containing the container label data. | 

### Return type

[**CreateContainerLabelResponse**](CreateContainerLabelResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json, containerLabel

