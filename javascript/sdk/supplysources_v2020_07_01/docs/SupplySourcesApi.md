# SellingPartnerApiForSupplySources.SupplySourcesApi

All URIs are relative to *https://sellingpartnerapi-na.amazon.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**archiveSupplySource**](SupplySourcesApi.md#archiveSupplySource) | **DELETE** /supplySources/2020-07-01/supplySources/{supplySourceId} | 
[**createSupplySource**](SupplySourcesApi.md#createSupplySource) | **POST** /supplySources/2020-07-01/supplySources | 
[**getSupplySource**](SupplySourcesApi.md#getSupplySource) | **GET** /supplySources/2020-07-01/supplySources/{supplySourceId} | 
[**getSupplySources**](SupplySourcesApi.md#getSupplySources) | **GET** /supplySources/2020-07-01/supplySources | 
[**updateSupplySource**](SupplySourcesApi.md#updateSupplySource) | **PUT** /supplySources/2020-07-01/supplySources/{supplySourceId} | 
[**updateSupplySourceStatus**](SupplySourcesApi.md#updateSupplySourceStatus) | **PUT** /supplySources/2020-07-01/supplySources/{supplySourceId}/status | 



## archiveSupplySource

> ErrorList archiveSupplySource(supplySourceId)



Archive a supply source, making it inactive. Cannot be undone.

### Example

```javascript
import SellingPartnerApiForSupplySources from 'selling_partner_api_for_supply_sources';

let apiInstance = new SellingPartnerApiForSupplySources.SupplySourcesApi();
let supplySourceId = "supplySourceId_example"; // String | The unique identifier of a supply source.
apiInstance.archiveSupplySource(supplySourceId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **supplySourceId** | **String**| The unique identifier of a supply source. | 

### Return type

[**ErrorList**](ErrorList.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## createSupplySource

> CreateSupplySourceResponse createSupplySource(payload)



Create a new supply source.

### Example

```javascript
import SellingPartnerApiForSupplySources from 'selling_partner_api_for_supply_sources';

let apiInstance = new SellingPartnerApiForSupplySources.SupplySourcesApi();
let payload = new SellingPartnerApiForSupplySources.CreateSupplySourceRequest(); // CreateSupplySourceRequest | A request to create a supply source.
apiInstance.createSupplySource(payload).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **payload** | [**CreateSupplySourceRequest**](CreateSupplySourceRequest.md)| A request to create a supply source. | 

### Return type

[**CreateSupplySourceResponse**](CreateSupplySourceResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## getSupplySource

> SupplySource getSupplySource(supplySourceId)



Retrieve a supply source.

### Example

```javascript
import SellingPartnerApiForSupplySources from 'selling_partner_api_for_supply_sources';

let apiInstance = new SellingPartnerApiForSupplySources.SupplySourcesApi();
let supplySourceId = "supplySourceId_example"; // String | The unique identifier of a supply source.
apiInstance.getSupplySource(supplySourceId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **supplySourceId** | **String**| The unique identifier of a supply source. | 

### Return type

[**SupplySource**](SupplySource.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getSupplySources

> GetSupplySourcesResponse getSupplySources(opts)



The path to retrieve paginated supply sources.

### Example

```javascript
import SellingPartnerApiForSupplySources from 'selling_partner_api_for_supply_sources';

let apiInstance = new SellingPartnerApiForSupplySources.SupplySourcesApi();
let opts = {
  'nextPageToken': "nextPageToken_example", // String | The pagination token to retrieve a specific page of results.
  'pageSize': 10.0 // Number | The number of supply sources to return per paginated request.
};
apiInstance.getSupplySources(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **nextPageToken** | **String**| The pagination token to retrieve a specific page of results. | [optional] 
 **pageSize** | **Number**| The number of supply sources to return per paginated request. | [optional] [default to 10.0]

### Return type

[**GetSupplySourcesResponse**](GetSupplySourcesResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updateSupplySource

> ErrorList updateSupplySource(supplySourceId, opts)



Update the configuration and capabilities of a supply source.

### Example

```javascript
import SellingPartnerApiForSupplySources from 'selling_partner_api_for_supply_sources';

let apiInstance = new SellingPartnerApiForSupplySources.SupplySourcesApi();
let supplySourceId = "supplySourceId_example"; // String | The unique identitier of a supply source.
let opts = {
  'payload': new SellingPartnerApiForSupplySources.UpdateSupplySourceRequest() // UpdateSupplySourceRequest | 
};
apiInstance.updateSupplySource(supplySourceId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **supplySourceId** | **String**| The unique identitier of a supply source. | 
 **payload** | [**UpdateSupplySourceRequest**](UpdateSupplySourceRequest.md)|  | [optional] 

### Return type

[**ErrorList**](ErrorList.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updateSupplySourceStatus

> ErrorList updateSupplySourceStatus(supplySourceId, opts)



Update the status of a supply source.

### Example

```javascript
import SellingPartnerApiForSupplySources from 'selling_partner_api_for_supply_sources';

let apiInstance = new SellingPartnerApiForSupplySources.SupplySourcesApi();
let supplySourceId = "supplySourceId_example"; // String | The unique identifier of a supply source.
let opts = {
  'payload': new SellingPartnerApiForSupplySources.UpdateSupplySourceStatusRequest() // UpdateSupplySourceStatusRequest | 
};
apiInstance.updateSupplySourceStatus(supplySourceId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **supplySourceId** | **String**| The unique identifier of a supply source. | 
 **payload** | [**UpdateSupplySourceStatusRequest**](UpdateSupplySourceStatusRequest.md)|  | [optional] 

### Return type

[**ErrorList**](ErrorList.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

