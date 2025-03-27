# TheSellingPartnerApiForFinances.DefaultApi

All URIs are relative to *https://sellingpartnerapi-na.amazon.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**listTransactions**](DefaultApi.md#listTransactions) | **GET** /finances/2024-06-19/transactions | 



## listTransactions

> ListTransactionsResponse listTransactions(postedAfter, opts)



Returns transactions for the given parameters. It may take up to 48 hours for transactions to appear in your transaction events.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 0.5 | 10 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).

### Example

```javascript
import TheSellingPartnerApiForFinances from 'the_selling_partner_api_for_finances';

let apiInstance = new TheSellingPartnerApiForFinances.DefaultApi();
let postedAfter = new Date("2023-01-12"); // Date | A date used for selecting transactions posted after (or at) a specified time. The date-time must be no later than two minutes before the request was submitted, in ISO 8601 date time format.
let opts = {
  'postedBefore': new Date("2023-02-12"), // Date | A date used for selecting transactions posted before (but not at) a specified time. The date-time must be later than PostedAfter and no later than two minutes before the request was submitted, in ISO 8601 date time format. If PostedAfter and PostedBefore are more than 180 days apart, no transactions are returned. You must specify the PostedAfter parameter if you specify the PostedBefore parameter. Default: Now minus two minutes.
  'marketplaceId': "ATIV93840DER", // String | A string token used to select Marketplace ID.
  'nextToken': "jehgri34yo7jr9e8f984tr9i4o" // String | A string token returned in the response of your previous request.
};
apiInstance.listTransactions(postedAfter, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **postedAfter** | **Date**| A date used for selecting transactions posted after (or at) a specified time. The date-time must be no later than two minutes before the request was submitted, in ISO 8601 date time format. | 
 **postedBefore** | **Date**| A date used for selecting transactions posted before (but not at) a specified time. The date-time must be later than PostedAfter and no later than two minutes before the request was submitted, in ISO 8601 date time format. If PostedAfter and PostedBefore are more than 180 days apart, no transactions are returned. You must specify the PostedAfter parameter if you specify the PostedBefore parameter. Default: Now minus two minutes. | [optional] 
 **marketplaceId** | **String**| A string token used to select Marketplace ID. | [optional] 
 **nextToken** | **String**| A string token returned in the response of your previous request. | [optional] 

### Return type

[**ListTransactionsResponse**](ListTransactionsResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

