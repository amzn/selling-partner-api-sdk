# QueriesApi

All URIs are relative to *https://sellingpartnerapi-na.amazon.com/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**cancelQuery**](QueriesApi.md#cancelQuery) | **DELETE** /dataKiosk/2023-11-15/queries/{queryId} | 
[**createQuery**](QueriesApi.md#createQuery) | **POST** /dataKiosk/2023-11-15/queries | 
[**getDocument**](QueriesApi.md#getDocument) | **GET** /dataKiosk/2023-11-15/documents/{documentId} | 
[**getQueries**](QueriesApi.md#getQueries) | **GET** /dataKiosk/2023-11-15/queries | 
[**getQuery**](QueriesApi.md#getQuery) | **GET** /dataKiosk/2023-11-15/queries/{queryId} | 

<a name="cancelQuery"></a>
# **cancelQuery**
> cancelQuery(queryId)



Cancels the query specified by the &#x60;queryId&#x60; parameter. Only queries with a non-terminal &#x60;processingStatus&#x60; (&#x60;IN_QUEUE&#x60;, &#x60;IN_PROGRESS&#x60;) can be cancelled. Cancelling a query that already has a &#x60;processingStatus&#x60; of &#x60;CANCELLED&#x60; will no-op. Cancelled queries are returned in subsequent calls to the &#x60;getQuery&#x60; and &#x60;getQueries&#x60; operations.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 0.0222 | 10 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).

### Example
```java
// Import classes:
//import com.amazon.SellingPartnerAPI.ApiException;
//import com.amazon.SellingPartnerAPI.api.QueriesApi;


QueriesApi apiInstance = new QueriesApi();
String queryId = "queryId_example"; // String | The identifier for the query. This identifier is unique only in combination with a selling partner account ID.
try {
    apiInstance.cancelQuery(queryId);
} catch (ApiException e) {
    System.err.println("Exception when calling QueriesApi#cancelQuery");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **queryId** | **String**| The identifier for the query. This identifier is unique only in combination with a selling partner account ID. |

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="createQuery"></a>
# **createQuery**
> CreateQueryResponse createQuery(body)



Creates a Data Kiosk query request.  **Note:** The retention of a query varies based on the fields requested. Each field within a schema is annotated with a &#x60;@resultRetention&#x60; directive that defines how long a query containing that field will be retained. When a query contains multiple fields with different retentions, the shortest (minimum) retention is applied. The retention of a query&#x27;s resulting documents always matches the retention of the query.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 0.0167 | 15 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).

### Example
```java
// Import classes:
//import com.amazon.SellingPartnerAPI.ApiException;
//import com.amazon.SellingPartnerAPI.api.QueriesApi;


QueriesApi apiInstance = new QueriesApi();
CreateQuerySpecification body = new CreateQuerySpecification(); // CreateQuerySpecification | The body of the request.
try {
    CreateQueryResponse result = apiInstance.createQuery(body);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling QueriesApi#createQuery");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**CreateQuerySpecification**](CreateQuerySpecification.md)| The body of the request. |

### Return type

[**CreateQueryResponse**](CreateQueryResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getDocument"></a>
# **getDocument**
> GetDocumentResponse getDocument(documentId)



Returns the information required for retrieving a Data Kiosk document&#x27;s contents. See the &#x60;createQuery&#x60; operation for details about document retention.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 0.0167 | 15 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).

### Example
```java
// Import classes:
//import com.amazon.SellingPartnerAPI.ApiException;
//import com.amazon.SellingPartnerAPI.api.QueriesApi;


QueriesApi apiInstance = new QueriesApi();
String documentId = "documentId_example"; // String | The identifier for the Data Kiosk document.
try {
    GetDocumentResponse result = apiInstance.getDocument(documentId);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling QueriesApi#getDocument");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **documentId** | **String**| The identifier for the Data Kiosk document. |

### Return type

[**GetDocumentResponse**](GetDocumentResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getQueries"></a>
# **getQueries**
> GetQueriesResponse getQueries(processingStatuses, pageSize, createdSince, createdUntil, paginationToken)



Returns details for the Data Kiosk queries that match the specified filters. See the &#x60;createQuery&#x60; operation for details about query retention.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 0.0222 | 10 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).

### Example
```java
// Import classes:
//import com.amazon.SellingPartnerAPI.ApiException;
//import com.amazon.SellingPartnerAPI.api.QueriesApi;


QueriesApi apiInstance = new QueriesApi();
List<String> processingStatuses = Arrays.asList("processingStatuses_example"); // List<String> | A list of processing statuses used to filter queries.
Integer pageSize = 10; // Integer | The maximum number of queries to return in a single call.
OffsetDateTime createdSince = new OffsetDateTime(); // OffsetDateTime | The earliest query creation date and time for queries to include in the response, in ISO 8601 date time format. The default is 90 days ago.
OffsetDateTime createdUntil = new OffsetDateTime(); // OffsetDateTime | The latest query creation date and time for queries to include in the response, in ISO 8601 date time format. The default is the time of the `getQueries` request.
String paginationToken = "paginationToken_example"; // String | A token to fetch a certain page of results when there are multiple pages of results available. The value of this token is fetched from the `pagination.nextToken` field returned in the `GetQueriesResponse` object. All other parameters must be provided with the same values that were provided with the request that generated this token, with the exception of `pageSize` which can be modified between calls to `getQueries`. In the absence of this token value, `getQueries` returns the first page of results.
try {
    GetQueriesResponse result = apiInstance.getQueries(processingStatuses, pageSize, createdSince, createdUntil, paginationToken);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling QueriesApi#getQueries");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **processingStatuses** | [**List&lt;String&gt;**](String.md)| A list of processing statuses used to filter queries. | [optional] [enum: CANCELLED, DONE, FATAL, IN_PROGRESS, IN_QUEUE]
 **pageSize** | **Integer**| The maximum number of queries to return in a single call. | [optional] [default to 10] [enum: ]
 **createdSince** | **OffsetDateTime**| The earliest query creation date and time for queries to include in the response, in ISO 8601 date time format. The default is 90 days ago. | [optional]
 **createdUntil** | **OffsetDateTime**| The latest query creation date and time for queries to include in the response, in ISO 8601 date time format. The default is the time of the &#x60;getQueries&#x60; request. | [optional]
 **paginationToken** | **String**| A token to fetch a certain page of results when there are multiple pages of results available. The value of this token is fetched from the &#x60;pagination.nextToken&#x60; field returned in the &#x60;GetQueriesResponse&#x60; object. All other parameters must be provided with the same values that were provided with the request that generated this token, with the exception of &#x60;pageSize&#x60; which can be modified between calls to &#x60;getQueries&#x60;. In the absence of this token value, &#x60;getQueries&#x60; returns the first page of results. | [optional]

### Return type

[**GetQueriesResponse**](GetQueriesResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getQuery"></a>
# **getQuery**
> Query getQuery(queryId)



Returns query details for the query specified by the &#x60;queryId&#x60; parameter. See the &#x60;createQuery&#x60; operation for details about query retention.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 2.0 | 15 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).

### Example
```java
// Import classes:
//import com.amazon.SellingPartnerAPI.ApiException;
//import com.amazon.SellingPartnerAPI.api.QueriesApi;


QueriesApi apiInstance = new QueriesApi();
String queryId = "queryId_example"; // String | The query identifier.
try {
    Query result = apiInstance.getQuery(queryId);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling QueriesApi#getQuery");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **queryId** | **String**| The query identifier. |

### Return type

[**Query**](Query.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

