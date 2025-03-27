# SellingPartnerApiForDirectFulfillmentPayments.VendorInvoiceApi

All URIs are relative to *https://sellingpartnerapi-na.amazon.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**submitInvoice**](VendorInvoiceApi.md#submitInvoice) | **POST** /vendor/directFulfillment/payments/v1/invoices | 



## submitInvoice

> SubmitInvoiceResponse submitInvoice(body)



Submits one or more invoices for a vendor&#39;s direct fulfillment orders.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 10 | 10 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).

### Example

```javascript
import SellingPartnerApiForDirectFulfillmentPayments from 'selling_partner_api_for_direct_fulfillment_payments';

let apiInstance = new SellingPartnerApiForDirectFulfillmentPayments.VendorInvoiceApi();
let body = new SellingPartnerApiForDirectFulfillmentPayments.SubmitInvoiceRequest(); // SubmitInvoiceRequest | The request body containing one or more invoices for vendor orders.
apiInstance.submitInvoice(body).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**SubmitInvoiceRequest**](SubmitInvoiceRequest.md)| The request body containing one or more invoices for vendor orders. | 

### Return type

[**SubmitInvoiceResponse**](SubmitInvoiceResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

