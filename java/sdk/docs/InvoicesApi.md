# InvoicesApi

All URIs are relative to *https://sellingpartnerapi-na.amazon.com/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createInvoicesExport**](InvoicesApi.md#createInvoicesExport) | **POST** /tax/invoices/2024-06-19/exports | 
[**getInvoice**](InvoicesApi.md#getInvoice) | **GET** /tax/invoices/2024-06-19/invoices/{invoiceId} | 
[**getInvoices**](InvoicesApi.md#getInvoices) | **GET** /tax/invoices/2024-06-19/invoices | 
[**getInvoicesAttributes**](InvoicesApi.md#getInvoicesAttributes) | **GET** /tax/invoices/2024-06-19/attributes | 
[**getInvoicesDocument**](InvoicesApi.md#getInvoicesDocument) | **GET** /tax/invoices/2024-06-19/documents/{invoicesDocumentId} | 
[**getInvoicesExport**](InvoicesApi.md#getInvoicesExport) | **GET** /tax/invoices/2024-06-19/exports/{exportId} | 
[**getInvoicesExports**](InvoicesApi.md#getInvoicesExports) | **GET** /tax/invoices/2024-06-19/exports | 

<a name="createInvoicesExport"></a>
# **createInvoicesExport**
> ExportInvoicesResponse createInvoicesExport(body)



Creates an invoice export request.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 0.167 | 1 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The preceding table indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may have higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).

### Example
```java
// Import classes:
//import com.amazon.SellingPartnerAPI.ApiException;
//import com.amazon.SellingPartnerAPI.api.InvoicesApi;


InvoicesApi apiInstance = new InvoicesApi();
ExportInvoicesRequest body = new ExportInvoicesRequest(); // ExportInvoicesRequest | Information required to create the export request.
try {
    ExportInvoicesResponse result = apiInstance.createInvoicesExport(body);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling InvoicesApi#createInvoicesExport");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**ExportInvoicesRequest**](ExportInvoicesRequest.md)| Information required to create the export request. |

### Return type

[**ExportInvoicesResponse**](ExportInvoicesResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getInvoice"></a>
# **getInvoice**
> GetInvoiceResponse getInvoice(marketplaceId, invoiceId)



Returns invoice data for the specified invoice. This operation returns only a subset of the invoices data; refer to the response definition to get all the possible attributes. To get the full invoice, use the &#x60;createInvoicesExport&#x60; operation to start an export request.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 2 | 15 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The preceding table indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may have higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).

### Example
```java
// Import classes:
//import com.amazon.SellingPartnerAPI.ApiException;
//import com.amazon.SellingPartnerAPI.api.InvoicesApi;


InvoicesApi apiInstance = new InvoicesApi();
String marketplaceId = "marketplaceId_example"; // String | The marketplace from which you want the invoice.
String invoiceId = "invoiceId_example"; // String | The invoice identifier.
try {
    GetInvoiceResponse result = apiInstance.getInvoice(marketplaceId, invoiceId);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling InvoicesApi#getInvoice");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **marketplaceId** | **String**| The marketplace from which you want the invoice. |
 **invoiceId** | **String**| The invoice identifier. |

### Return type

[**GetInvoiceResponse**](GetInvoiceResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getInvoices"></a>
# **getInvoices**
> GetInvoicesResponse getInvoices(marketplaceId, transactionIdentifierName, pageSize, dateEnd, transactionType, transactionIdentifierId, dateStart, series, nextToken, sortOrder, invoiceType, statuses, externalInvoiceId, sortBy)



Returns invoice details for the invoices that match the filters that you specify.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 0.1 | 20 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The preceding table indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may have higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).

### Example
```java
// Import classes:
//import com.amazon.SellingPartnerAPI.ApiException;
//import com.amazon.SellingPartnerAPI.api.InvoicesApi;


InvoicesApi apiInstance = new InvoicesApi();
String marketplaceId = "marketplaceId_example"; // String | The response includes only the invoices that match the specified marketplace.
String transactionIdentifierName = "transactionIdentifierName_example"; // String | The name of the transaction identifier filter. If you provide a value for this field, you must also provide a value for the `transactionIdentifierId` field.Use the `getInvoicesAttributes` operation to check `transactionIdentifierName` options.
Integer pageSize = 56; // Integer | The maximum number of invoices you want to return in a single call.  Minimum: 1  Maximum: 200
OffsetDateTime dateEnd = new OffsetDateTime(); // OffsetDateTime | The latest invoice creation date for invoices that you want to include in the response. Dates are in [ISO 8601](https://developer-docs.amazon.com/sp-api/docs/iso-8601) date-time format. The default is the current date-time.
String transactionType = "transactionType_example"; // String | The marketplace-specific classification of the transaction type for which the invoice was created. Use the `getInvoicesAttributes` operation to check `transactionType` options.
String transactionIdentifierId = "transactionIdentifierId_example"; // String | The ID of the transaction identifier filter. If you provide a value for this field, you must also provide a value for the `transactionIdentifierName` field.
OffsetDateTime dateStart = new OffsetDateTime(); // OffsetDateTime | The earliest invoice creation date for invoices that you want to include in the response. Dates are in [ISO 8601](https://developer-docs.amazon.com/sp-api/docs/iso-8601) date-time format. The default is 24 hours prior to the time of the request.
String series = "series_example"; // String | Return invoices with the specified series number.
String nextToken = "nextToken_example"; // String | The response includes `nextToken` when the number of results exceeds the specified `pageSize` value. To get the next page of results, call the operation with this token and include the same arguments as the call that produced the token. To get a complete list, call this operation until `nextToken` is null. Note that this operation can return empty pages.
String sortOrder = "sortOrder_example"; // String | Sort the invoices in the response in ascending or descending order.
String invoiceType = "invoiceType_example"; // String | The marketplace-specific classification of the invoice type. Use the `getInvoicesAttributes` operation to check `invoiceType` options.
List<String> statuses = Arrays.asList("statuses_example"); // List<String> | A list of statuses that you can use to filter invoices. Use the `getInvoicesAttributes` operation to check invoice status options.  Min count: 1
String externalInvoiceId = "externalInvoiceId_example"; // String | Return invoices that match this external ID. This is typically the Government Invoice ID.
String sortBy = "sortBy_example"; // String | The attribute by which you want to sort the invoices in the response.
try {
    GetInvoicesResponse result = apiInstance.getInvoices(marketplaceId, transactionIdentifierName, pageSize, dateEnd, transactionType, transactionIdentifierId, dateStart, series, nextToken, sortOrder, invoiceType, statuses, externalInvoiceId, sortBy);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling InvoicesApi#getInvoices");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **marketplaceId** | **String**| The response includes only the invoices that match the specified marketplace. |
 **transactionIdentifierName** | **String**| The name of the transaction identifier filter. If you provide a value for this field, you must also provide a value for the &#x60;transactionIdentifierId&#x60; field.Use the &#x60;getInvoicesAttributes&#x60; operation to check &#x60;transactionIdentifierName&#x60; options. | [optional]
 **pageSize** | **Integer**| The maximum number of invoices you want to return in a single call.  Minimum: 1  Maximum: 200 | [optional]
 **dateEnd** | **OffsetDateTime**| The latest invoice creation date for invoices that you want to include in the response. Dates are in [ISO 8601](https://developer-docs.amazon.com/sp-api/docs/iso-8601) date-time format. The default is the current date-time. | [optional]
 **transactionType** | **String**| The marketplace-specific classification of the transaction type for which the invoice was created. Use the &#x60;getInvoicesAttributes&#x60; operation to check &#x60;transactionType&#x60; options. | [optional]
 **transactionIdentifierId** | **String**| The ID of the transaction identifier filter. If you provide a value for this field, you must also provide a value for the &#x60;transactionIdentifierName&#x60; field. | [optional]
 **dateStart** | **OffsetDateTime**| The earliest invoice creation date for invoices that you want to include in the response. Dates are in [ISO 8601](https://developer-docs.amazon.com/sp-api/docs/iso-8601) date-time format. The default is 24 hours prior to the time of the request. | [optional]
 **series** | **String**| Return invoices with the specified series number. | [optional]
 **nextToken** | **String**| The response includes &#x60;nextToken&#x60; when the number of results exceeds the specified &#x60;pageSize&#x60; value. To get the next page of results, call the operation with this token and include the same arguments as the call that produced the token. To get a complete list, call this operation until &#x60;nextToken&#x60; is null. Note that this operation can return empty pages. | [optional]
 **sortOrder** | **String**| Sort the invoices in the response in ascending or descending order. | [optional] [enum: DESC, ASC]
 **invoiceType** | **String**| The marketplace-specific classification of the invoice type. Use the &#x60;getInvoicesAttributes&#x60; operation to check &#x60;invoiceType&#x60; options. | [optional]
 **statuses** | [**List&lt;String&gt;**](String.md)| A list of statuses that you can use to filter invoices. Use the &#x60;getInvoicesAttributes&#x60; operation to check invoice status options.  Min count: 1 | [optional]
 **externalInvoiceId** | **String**| Return invoices that match this external ID. This is typically the Government Invoice ID. | [optional]
 **sortBy** | **String**| The attribute by which you want to sort the invoices in the response. | [optional] [enum: START_DATE_TIME]

### Return type

[**GetInvoicesResponse**](GetInvoicesResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getInvoicesAttributes"></a>
# **getInvoicesAttributes**
> GetInvoicesAttributesResponse getInvoicesAttributes(marketplaceId)



Returns marketplace-dependent schemas and their respective set of possible values.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 1 | 1 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The preceding table indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may have higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).

### Example
```java
// Import classes:
//import com.amazon.SellingPartnerAPI.ApiException;
//import com.amazon.SellingPartnerAPI.api.InvoicesApi;


InvoicesApi apiInstance = new InvoicesApi();
String marketplaceId = "marketplaceId_example"; // String | The marketplace identifier.
try {
    GetInvoicesAttributesResponse result = apiInstance.getInvoicesAttributes(marketplaceId);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling InvoicesApi#getInvoicesAttributes");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **marketplaceId** | **String**| The marketplace identifier. |

### Return type

[**GetInvoicesAttributesResponse**](GetInvoicesAttributesResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getInvoicesDocument"></a>
# **getInvoicesDocument**
> GetInvoicesDocumentResponse getInvoicesDocument(invoicesDocumentId)



Returns the invoice document&#x27;s ID and URL. Use the URL to download the ZIP file, which contains the invoices from the corresponding &#x60;createInvoicesExport&#x60; request.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 0.0167 | 1 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The preceding table indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may have higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).

### Example
```java
// Import classes:
//import com.amazon.SellingPartnerAPI.ApiException;
//import com.amazon.SellingPartnerAPI.api.InvoicesApi;


InvoicesApi apiInstance = new InvoicesApi();
String invoicesDocumentId = "invoicesDocumentId_example"; // String | The export document identifier.
try {
    GetInvoicesDocumentResponse result = apiInstance.getInvoicesDocument(invoicesDocumentId);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling InvoicesApi#getInvoicesDocument");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **invoicesDocumentId** | **String**| The export document identifier. |

### Return type

[**GetInvoicesDocumentResponse**](GetInvoicesDocumentResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getInvoicesExport"></a>
# **getInvoicesExport**
> GetInvoicesExportResponse getInvoicesExport(exportId)



Returns invoice export details (including the &#x60;exportDocumentId&#x60;, if available) for the export that you specify.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 2 | 15 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The preceding table indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may have higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).

### Example
```java
// Import classes:
//import com.amazon.SellingPartnerAPI.ApiException;
//import com.amazon.SellingPartnerAPI.api.InvoicesApi;


InvoicesApi apiInstance = new InvoicesApi();
String exportId = "exportId_example"; // String | The unique identifier for the export.
try {
    GetInvoicesExportResponse result = apiInstance.getInvoicesExport(exportId);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling InvoicesApi#getInvoicesExport");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **exportId** | **String**| The unique identifier for the export. |

### Return type

[**GetInvoicesExportResponse**](GetInvoicesExportResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getInvoicesExports"></a>
# **getInvoicesExports**
> GetInvoicesExportsResponse getInvoicesExports(marketplaceId, dateStart, nextToken, pageSize, dateEnd, status)



Returns invoice exports details for exports that match the filters that you specify.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 0.1 | 20 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The preceding table indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may have higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).

### Example
```java
// Import classes:
//import com.amazon.SellingPartnerAPI.ApiException;
//import com.amazon.SellingPartnerAPI.api.InvoicesApi;


InvoicesApi apiInstance = new InvoicesApi();
String marketplaceId = "marketplaceId_example"; // String | The returned exports match the specified marketplace.
OffsetDateTime dateStart = new OffsetDateTime(); // OffsetDateTime | The earliest export creation date and time for exports that you want to include in the response. Values are in [ISO 8601](https://developer-docs.amazon.com/sp-api/docs/iso-8601) date-time format. The default is 30 days ago.
String nextToken = "nextToken_example"; // String | The response includes `nextToken` when the number of results exceeds the specified `pageSize` value. To get the next page of results, call the operation with this token and include the same arguments as the call that produced the token. To get a complete list, call this operation until `nextToken` is null. Note that this operation can return empty pages.
Integer pageSize = 56; // Integer | The maximum number of invoices to return in a single call.  Minimum: 1  Maximum: 100
OffsetDateTime dateEnd = new OffsetDateTime(); // OffsetDateTime | The latest export creation date and time for exports that you want to include in the response. Values are in [ISO 8601](https://developer-docs.amazon.com/sp-api/docs/iso-8601) date-time format. The default value is the time of the request.
String status = "status_example"; // String | Return exports matching the status specified. 
try {
    GetInvoicesExportsResponse result = apiInstance.getInvoicesExports(marketplaceId, dateStart, nextToken, pageSize, dateEnd, status);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling InvoicesApi#getInvoicesExports");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **marketplaceId** | **String**| The returned exports match the specified marketplace. |
 **dateStart** | **OffsetDateTime**| The earliest export creation date and time for exports that you want to include in the response. Values are in [ISO 8601](https://developer-docs.amazon.com/sp-api/docs/iso-8601) date-time format. The default is 30 days ago. | [optional]
 **nextToken** | **String**| The response includes &#x60;nextToken&#x60; when the number of results exceeds the specified &#x60;pageSize&#x60; value. To get the next page of results, call the operation with this token and include the same arguments as the call that produced the token. To get a complete list, call this operation until &#x60;nextToken&#x60; is null. Note that this operation can return empty pages. | [optional]
 **pageSize** | **Integer**| The maximum number of invoices to return in a single call.  Minimum: 1  Maximum: 100 | [optional]
 **dateEnd** | **OffsetDateTime**| The latest export creation date and time for exports that you want to include in the response. Values are in [ISO 8601](https://developer-docs.amazon.com/sp-api/docs/iso-8601) date-time format. The default value is the time of the request. | [optional]
 **status** | **String**| Return exports matching the status specified.  | [optional] [enum: REQUESTED, PROCESSING, DONE, ERROR]

### Return type

[**GetInvoicesExportsResponse**](GetInvoicesExportsResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

