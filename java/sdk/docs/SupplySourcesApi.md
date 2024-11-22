# SupplySourcesApi

All URIs are relative to *https://sellingpartnerapi-na.amazon.com/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**archiveSupplySource**](SupplySourcesApi.md#archiveSupplySource) | **DELETE** /supplySources/2020-07-01/supplySources/{supplySourceId} | 
[**createSupplySource**](SupplySourcesApi.md#createSupplySource) | **POST** /supplySources/2020-07-01/supplySources | 
[**getSupplySource**](SupplySourcesApi.md#getSupplySource) | **GET** /supplySources/2020-07-01/supplySources/{supplySourceId} | 
[**getSupplySources**](SupplySourcesApi.md#getSupplySources) | **GET** /supplySources/2020-07-01/supplySources | 
[**updateSupplySource**](SupplySourcesApi.md#updateSupplySource) | **PUT** /supplySources/2020-07-01/supplySources/{supplySourceId} | 
[**updateSupplySourceStatus**](SupplySourcesApi.md#updateSupplySourceStatus) | **PUT** /supplySources/2020-07-01/supplySources/{supplySourceId}/status | 

<a name="archiveSupplySource"></a>
# **archiveSupplySource**
> ErrorList archiveSupplySource(supplySourceId)



Archive a supply source, making it inactive. Cannot be undone.

### Example
```java
// Import classes:
//import com.amazon.SellingPartnerAPI.ApiException;
//import com.amazon.SellingPartnerAPI.api.SupplySourcesApi;


SupplySourcesApi apiInstance = new SupplySourcesApi();
String supplySourceId = "supplySourceId_example"; // String | The unique identifier of a supply source.
try {
    ErrorList result = apiInstance.archiveSupplySource(supplySourceId);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling SupplySourcesApi#archiveSupplySource");
    e.printStackTrace();
}
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

<a name="createSupplySource"></a>
# **createSupplySource**
> CreateSupplySourceResponse createSupplySource(body)



Create a new supply source.

### Example
```java
// Import classes:
//import com.amazon.SellingPartnerAPI.ApiException;
//import com.amazon.SellingPartnerAPI.api.SupplySourcesApi;


SupplySourcesApi apiInstance = new SupplySourcesApi();
CreateSupplySourceRequest body = new CreateSupplySourceRequest(); // CreateSupplySourceRequest | A request to create a supply source.
try {
    CreateSupplySourceResponse result = apiInstance.createSupplySource(body);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling SupplySourcesApi#createSupplySource");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**CreateSupplySourceRequest**](CreateSupplySourceRequest.md)| A request to create a supply source. |

### Return type

[**CreateSupplySourceResponse**](CreateSupplySourceResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getSupplySource"></a>
# **getSupplySource**
> SupplySource getSupplySource(supplySourceId)



Retrieve a supply source.

### Example
```java
// Import classes:
//import com.amazon.SellingPartnerAPI.ApiException;
//import com.amazon.SellingPartnerAPI.api.SupplySourcesApi;


SupplySourcesApi apiInstance = new SupplySourcesApi();
String supplySourceId = "supplySourceId_example"; // String | The unique identifier of a supply source.
try {
    SupplySource result = apiInstance.getSupplySource(supplySourceId);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling SupplySourcesApi#getSupplySource");
    e.printStackTrace();
}
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

<a name="getSupplySources"></a>
# **getSupplySources**
> GetSupplySourcesResponse getSupplySources(nextPageToken, pageSize)



The path to retrieve paginated supply sources.

### Example
```java
// Import classes:
//import com.amazon.SellingPartnerAPI.ApiException;
//import com.amazon.SellingPartnerAPI.api.SupplySourcesApi;


SupplySourcesApi apiInstance = new SupplySourcesApi();
String nextPageToken = "nextPageToken_example"; // String | The pagination token to retrieve a specific page of results.
BigDecimal pageSize = new BigDecimal(); // BigDecimal | The number of supply sources to return per paginated request.
try {
    GetSupplySourcesResponse result = apiInstance.getSupplySources(nextPageToken, pageSize);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling SupplySourcesApi#getSupplySources");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **nextPageToken** | **String**| The pagination token to retrieve a specific page of results. | [optional]
 **pageSize** | **BigDecimal**| The number of supply sources to return per paginated request. | [optional] [default to 10.0]

### Return type

[**GetSupplySourcesResponse**](GetSupplySourcesResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="updateSupplySource"></a>
# **updateSupplySource**
> ErrorList updateSupplySource(supplySourceId, body)



Update the configuration and capabilities of a supply source.

### Example
```java
// Import classes:
//import com.amazon.SellingPartnerAPI.ApiException;
//import com.amazon.SellingPartnerAPI.api.SupplySourcesApi;


SupplySourcesApi apiInstance = new SupplySourcesApi();
String supplySourceId = "supplySourceId_example"; // String | The unique identitier of a supply source.
UpdateSupplySourceRequest body = new UpdateSupplySourceRequest(); // UpdateSupplySourceRequest | 
try {
    ErrorList result = apiInstance.updateSupplySource(supplySourceId, body);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling SupplySourcesApi#updateSupplySource");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **supplySourceId** | **String**| The unique identitier of a supply source. |
 **body** | [**UpdateSupplySourceRequest**](UpdateSupplySourceRequest.md)|  | [optional]

### Return type

[**ErrorList**](ErrorList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateSupplySourceStatus"></a>
# **updateSupplySourceStatus**
> ErrorList updateSupplySourceStatus(supplySourceId, body)



Update the status of a supply source.

### Example
```java
// Import classes:
//import com.amazon.SellingPartnerAPI.ApiException;
//import com.amazon.SellingPartnerAPI.api.SupplySourcesApi;


SupplySourcesApi apiInstance = new SupplySourcesApi();
String supplySourceId = "supplySourceId_example"; // String | The unique identifier of a supply source.
UpdateSupplySourceStatusRequest body = new UpdateSupplySourceStatusRequest(); // UpdateSupplySourceStatusRequest | 
try {
    ErrorList result = apiInstance.updateSupplySourceStatus(supplySourceId, body);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling SupplySourcesApi#updateSupplySourceStatus");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **supplySourceId** | **String**| The unique identifier of a supply source. |
 **body** | [**UpdateSupplySourceStatusRequest**](UpdateSupplySourceStatusRequest.md)|  | [optional]

### Return type

[**ErrorList**](ErrorList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

