# SellingPartnerApiForPricing.ProductPricingApi

All URIs are relative to *https://sellingpartnerapi-na.amazon.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getCompetitivePricing**](ProductPricingApi.md#getCompetitivePricing) | **GET** /products/pricing/v0/competitivePrice | 
[**getItemOffers**](ProductPricingApi.md#getItemOffers) | **GET** /products/pricing/v0/items/{Asin}/offers | 
[**getItemOffersBatch**](ProductPricingApi.md#getItemOffersBatch) | **POST** /batches/products/pricing/v0/itemOffers | 
[**getListingOffers**](ProductPricingApi.md#getListingOffers) | **GET** /products/pricing/v0/listings/{SellerSKU}/offers | 
[**getListingOffersBatch**](ProductPricingApi.md#getListingOffersBatch) | **POST** /batches/products/pricing/v0/listingOffers | 
[**getPricing**](ProductPricingApi.md#getPricing) | **GET** /products/pricing/v0/price | 



## getCompetitivePricing

> GetPricingResponse getCompetitivePricing(marketplaceId, itemType, opts)



Returns competitive pricing information for a seller&#39;s offer listings based on seller SKU or ASIN.  **Note:** The parameters associated with this operation may contain special characters that require URL encoding to call the API. To avoid errors with SKUs when encoding URLs, refer to [URL Encoding](https://developer-docs.amazon.com/sp-api/docs/url-encoding).  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 0.5 | 1 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](doc:usage-plans-and-rate-limits-in-the-sp-api).

### Example

```javascript
import SellingPartnerApiForPricing from 'selling_partner_api_for_pricing';

let apiInstance = new SellingPartnerApiForPricing.ProductPricingApi();
let marketplaceId = "marketplaceId_example"; // String | A marketplace identifier. Specifies the marketplace for which prices are returned.
let itemType = "itemType_example"; // String | Indicates whether ASIN values or seller SKU values are used to identify items. If you specify Asin, the information in the response will be dependent on the list of Asins you provide in the Asins parameter. If you specify Sku, the information in the response will be dependent on the list of Skus you provide in the Skus parameter. Possible values: Asin, Sku.
let opts = {
  'asins': ["null"], // [String] | A list of up to twenty Amazon Standard Identification Number (ASIN) values used to identify items in the given marketplace.
  'skus': ["null"], // [String] | A list of up to twenty seller SKU values used to identify items in the given marketplace.
  'customerType': "customerType_example" // String | Indicates whether to request pricing information from the point of view of Consumer or Business buyers. Default is Consumer.
};
apiInstance.getCompetitivePricing(marketplaceId, itemType, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **marketplaceId** | **String**| A marketplace identifier. Specifies the marketplace for which prices are returned. | 
 **itemType** | **String**| Indicates whether ASIN values or seller SKU values are used to identify items. If you specify Asin, the information in the response will be dependent on the list of Asins you provide in the Asins parameter. If you specify Sku, the information in the response will be dependent on the list of Skus you provide in the Skus parameter. Possible values: Asin, Sku. | 
 **asins** | [**[String]**](String.md)| A list of up to twenty Amazon Standard Identification Number (ASIN) values used to identify items in the given marketplace. | [optional] 
 **skus** | [**[String]**](String.md)| A list of up to twenty seller SKU values used to identify items in the given marketplace. | [optional] 
 **customerType** | **String**| Indicates whether to request pricing information from the point of view of Consumer or Business buyers. Default is Consumer. | [optional] 

### Return type

[**GetPricingResponse**](GetPricingResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getItemOffers

> GetOffersResponse getItemOffers(marketplaceId, itemCondition, asin, opts)



Returns the lowest priced offers for a single item based on ASIN.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 0.5 | 1 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](doc:usage-plans-and-rate-limits-in-the-sp-api).

### Example

```javascript
import SellingPartnerApiForPricing from 'selling_partner_api_for_pricing';

let apiInstance = new SellingPartnerApiForPricing.ProductPricingApi();
let marketplaceId = "marketplaceId_example"; // String | A marketplace identifier. Specifies the marketplace for which prices are returned.
let itemCondition = "itemCondition_example"; // String | Filters the offer listings to be considered based on item condition. Possible values: New, Used, Collectible, Refurbished, Club.
let asin = "asin_example"; // String | The Amazon Standard Identification Number (ASIN) of the item.
let opts = {
  'customerType': "customerType_example" // String | Indicates whether to request Consumer or Business offers. Default is Consumer.
};
apiInstance.getItemOffers(marketplaceId, itemCondition, asin, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **marketplaceId** | **String**| A marketplace identifier. Specifies the marketplace for which prices are returned. | 
 **itemCondition** | **String**| Filters the offer listings to be considered based on item condition. Possible values: New, Used, Collectible, Refurbished, Club. | 
 **asin** | **String**| The Amazon Standard Identification Number (ASIN) of the item. | 
 **customerType** | **String**| Indicates whether to request Consumer or Business offers. Default is Consumer. | [optional] 

### Return type

[**GetOffersResponse**](GetOffersResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getItemOffersBatch

> GetItemOffersBatchResponse getItemOffersBatch(getItemOffersBatchRequestBody)



Returns the lowest priced offers for a batch of items based on ASIN.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 0.1 | 1 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).

### Example

```javascript
import SellingPartnerApiForPricing from 'selling_partner_api_for_pricing';

let apiInstance = new SellingPartnerApiForPricing.ProductPricingApi();
let getItemOffersBatchRequestBody = new SellingPartnerApiForPricing.GetItemOffersBatchRequest(); // GetItemOffersBatchRequest | The request associated with the `getItemOffersBatch` API call.
apiInstance.getItemOffersBatch(getItemOffersBatchRequestBody).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **getItemOffersBatchRequestBody** | [**GetItemOffersBatchRequest**](GetItemOffersBatchRequest.md)| The request associated with the &#x60;getItemOffersBatch&#x60; API call. | 

### Return type

[**GetItemOffersBatchResponse**](GetItemOffersBatchResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## getListingOffers

> GetOffersResponse getListingOffers(marketplaceId, itemCondition, sellerSKU, opts)



Returns the lowest priced offers for a single SKU listing.  **Note:** The parameters associated with this operation may contain special characters that require URL encoding to call the API. To avoid errors with SKUs when encoding URLs, refer to [URL Encoding](https://developer-docs.amazon.com/sp-api/docs/url-encoding).  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 1 | 2 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](doc:usage-plans-and-rate-limits-in-the-sp-api).

### Example

```javascript
import SellingPartnerApiForPricing from 'selling_partner_api_for_pricing';

let apiInstance = new SellingPartnerApiForPricing.ProductPricingApi();
let marketplaceId = "marketplaceId_example"; // String | A marketplace identifier. Specifies the marketplace for which prices are returned.
let itemCondition = "itemCondition_example"; // String | Filters the offer listings based on item condition. Possible values: New, Used, Collectible, Refurbished, Club.
let sellerSKU = "sellerSKU_example"; // String | Identifies an item in the given marketplace. SellerSKU is qualified by the seller's SellerId, which is included with every operation that you submit.
let opts = {
  'customerType': "customerType_example" // String | Indicates whether to request Consumer or Business offers. Default is Consumer.
};
apiInstance.getListingOffers(marketplaceId, itemCondition, sellerSKU, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **marketplaceId** | **String**| A marketplace identifier. Specifies the marketplace for which prices are returned. | 
 **itemCondition** | **String**| Filters the offer listings based on item condition. Possible values: New, Used, Collectible, Refurbished, Club. | 
 **sellerSKU** | **String**| Identifies an item in the given marketplace. SellerSKU is qualified by the seller&#39;s SellerId, which is included with every operation that you submit. | 
 **customerType** | **String**| Indicates whether to request Consumer or Business offers. Default is Consumer. | [optional] 

### Return type

[**GetOffersResponse**](GetOffersResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getListingOffersBatch

> GetListingOffersBatchResponse getListingOffersBatch(getListingOffersBatchRequestBody)



Returns the lowest priced offers for a batch of listings by SKU.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 0.5 | 1 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](doc:usage-plans-and-rate-limits-in-the-sp-api).

### Example

```javascript
import SellingPartnerApiForPricing from 'selling_partner_api_for_pricing';

let apiInstance = new SellingPartnerApiForPricing.ProductPricingApi();
let getListingOffersBatchRequestBody = new SellingPartnerApiForPricing.GetListingOffersBatchRequest(); // GetListingOffersBatchRequest | The request associated with the `getListingOffersBatch` API call.
apiInstance.getListingOffersBatch(getListingOffersBatchRequestBody).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **getListingOffersBatchRequestBody** | [**GetListingOffersBatchRequest**](GetListingOffersBatchRequest.md)| The request associated with the &#x60;getListingOffersBatch&#x60; API call. | 

### Return type

[**GetListingOffersBatchResponse**](GetListingOffersBatchResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## getPricing

> GetPricingResponse getPricing(marketplaceId, itemType, opts)



Returns pricing information for a seller&#39;s offer listings based on seller SKU or ASIN.  **Note:** The parameters associated with this operation may contain special characters that require URL encoding to call the API. To avoid errors with SKUs when encoding URLs, refer to [URL Encoding](https://developer-docs.amazon.com/sp-api/docs/url-encoding).  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 0.5 | 1 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](doc:usage-plans-and-rate-limits-in-the-sp-api).

### Example

```javascript
import SellingPartnerApiForPricing from 'selling_partner_api_for_pricing';

let apiInstance = new SellingPartnerApiForPricing.ProductPricingApi();
let marketplaceId = "marketplaceId_example"; // String | A marketplace identifier. Specifies the marketplace for which prices are returned.
let itemType = "itemType_example"; // String | Indicates whether ASIN values or seller SKU values are used to identify items. If you specify Asin, the information in the response will be dependent on the list of Asins you provide in the Asins parameter. If you specify Sku, the information in the response will be dependent on the list of Skus you provide in the Skus parameter.
let opts = {
  'asins': ["null"], // [String] | A list of up to twenty Amazon Standard Identification Number (ASIN) values used to identify items in the given marketplace.
  'skus': ["null"], // [String] | A list of up to twenty seller SKU values used to identify items in the given marketplace.
  'itemCondition': "itemCondition_example", // String | Filters the offer listings based on item condition. Possible values: New, Used, Collectible, Refurbished, Club.
  'offerType': "offerType_example" // String | Indicates whether to request pricing information for the seller's B2C or B2B offers. Default is B2C.
};
apiInstance.getPricing(marketplaceId, itemType, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **marketplaceId** | **String**| A marketplace identifier. Specifies the marketplace for which prices are returned. | 
 **itemType** | **String**| Indicates whether ASIN values or seller SKU values are used to identify items. If you specify Asin, the information in the response will be dependent on the list of Asins you provide in the Asins parameter. If you specify Sku, the information in the response will be dependent on the list of Skus you provide in the Skus parameter. | 
 **asins** | [**[String]**](String.md)| A list of up to twenty Amazon Standard Identification Number (ASIN) values used to identify items in the given marketplace. | [optional] 
 **skus** | [**[String]**](String.md)| A list of up to twenty seller SKU values used to identify items in the given marketplace. | [optional] 
 **itemCondition** | **String**| Filters the offer listings based on item condition. Possible values: New, Used, Collectible, Refurbished, Club. | [optional] 
 **offerType** | **String**| Indicates whether to request pricing information for the seller&#39;s B2C or B2B offers. Default is B2C. | [optional] 

### Return type

[**GetPricingResponse**](GetPricingResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

