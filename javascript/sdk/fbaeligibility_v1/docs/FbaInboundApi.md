# SellingPartnerApiForFbaInboundEligibilty.FbaInboundApi

All URIs are relative to *https://sellingpartnerapi-na.amazon.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getItemEligibilityPreview**](FbaInboundApi.md#getItemEligibilityPreview) | **GET** /fba/inbound/v1/eligibility/itemPreview | 



## getItemEligibilityPreview

> GetItemEligibilityPreviewResponse getItemEligibilityPreview(asin, program, opts)



This operation gets an eligibility preview for an item that you specify. You can specify the type of eligibility preview that you want (INBOUND or COMMINGLING). For INBOUND previews, you can specify the marketplace in which you want to determine the item&#39;s eligibility.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 1 | 1 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).

### Example

```javascript
import SellingPartnerApiForFbaInboundEligibilty from 'selling_partner_api_for_fba_inbound_eligibilty';

let apiInstance = new SellingPartnerApiForFbaInboundEligibilty.FbaInboundApi();
let asin = "asin_example"; // String | The ASIN of the item for which you want an eligibility preview.
let program = "program_example"; // String | The program that you want to check eligibility against.
let opts = {
  'marketplaceIds': ["null"] // [String] | The identifier for the marketplace in which you want to determine eligibility. Required only when program=INBOUND.
};
apiInstance.getItemEligibilityPreview(asin, program, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **asin** | **String**| The ASIN of the item for which you want an eligibility preview. | 
 **program** | **String**| The program that you want to check eligibility against. | 
 **marketplaceIds** | [**[String]**](String.md)| The identifier for the marketplace in which you want to determine eligibility. Required only when program&#x3D;INBOUND. | [optional] 

### Return type

[**GetItemEligibilityPreviewResponse**](GetItemEligibilityPreviewResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, ItemEligibilityPreview

