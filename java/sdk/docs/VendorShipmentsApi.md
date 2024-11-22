# VendorShipmentsApi

All URIs are relative to *https://sellingpartnerapi-na.amazon.com/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getShipmentDetails**](VendorShipmentsApi.md#getShipmentDetails) | **GET** /vendor/shipping/v1/shipments | GetShipmentDetails
[**getShipmentLabels**](VendorShipmentsApi.md#getShipmentLabels) | **GET** /vendor/shipping/v1/transportLabels | GetShipmentLabels
[**submitShipmentConfirmations**](VendorShipmentsApi.md#submitShipmentConfirmations) | **POST** /vendor/shipping/v1/shipmentConfirmations | SubmitShipmentConfirmations
[**submitShipments**](VendorShipmentsApi.md#submitShipments) | **POST** /vendor/shipping/v1/shipments | SubmitShipments

<a name="getShipmentDetails"></a>
# **getShipmentDetails**
> GetShipmentDetailsResponse getShipmentDetails(limit, sortOrder, nextToken, createdAfter, createdBefore, shipmentConfirmedBefore, shipmentConfirmedAfter, packageLabelCreatedBefore, packageLabelCreatedAfter, shippedBefore, shippedAfter, estimatedDeliveryBefore, estimatedDeliveryAfter, shipmentDeliveryBefore, shipmentDeliveryAfter, requestedPickUpBefore, requestedPickUpAfter, scheduledPickUpBefore, scheduledPickUpAfter, currentShipmentStatus, vendorShipmentIdentifier, buyerReferenceNumber, buyerWarehouseCode, sellerWarehouseCode)

GetShipmentDetails

Returns the Details about Shipment, Carrier Details,  status of the shipment, container details and other details related to shipment based on the filter parameters value that you specify.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 10 | 10 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).

### Example
```java
// Import classes:
//import com.amazon.SellingPartnerAPI.ApiException;
//import com.amazon.SellingPartnerAPI.api.VendorShipmentsApi;


VendorShipmentsApi apiInstance = new VendorShipmentsApi();
Long limit = 789L; // Long | The limit to the number of records returned. Default value is 50 records.
String sortOrder = "sortOrder_example"; // String | Sort in ascending or descending order by purchase order creation date.
String nextToken = "nextToken_example"; // String | Used for pagination when there are more shipments than the specified result size limit.
OffsetDateTime createdAfter = new OffsetDateTime(); // OffsetDateTime | Get Shipment Details that became available after this timestamp will be included in the result. Must be in <a href='https://developer-docs.amazon.com/sp-api/docs/iso-8601'>ISO 8601</a> format.
OffsetDateTime createdBefore = new OffsetDateTime(); // OffsetDateTime | Get Shipment Details that became available before this timestamp will be included in the result. Must be in <a href='https://developer-docs.amazon.com/sp-api/docs/iso-8601'>ISO 8601</a> format.
OffsetDateTime shipmentConfirmedBefore = new OffsetDateTime(); // OffsetDateTime | Get Shipment Details by passing Shipment confirmed create Date Before. Must be in <a href='https://developer-docs.amazon.com/sp-api/docs/iso-8601'>ISO 8601</a> format.
OffsetDateTime shipmentConfirmedAfter = new OffsetDateTime(); // OffsetDateTime | Get Shipment Details by passing Shipment confirmed create Date After. Must be in <a href='https://developer-docs.amazon.com/sp-api/docs/iso-8601'>ISO 8601</a> format.
OffsetDateTime packageLabelCreatedBefore = new OffsetDateTime(); // OffsetDateTime | Get Shipment Details by passing Package label create Date by buyer. Must be in <a href='https://developer-docs.amazon.com/sp-api/docs/iso-8601'>ISO 8601</a> format.
OffsetDateTime packageLabelCreatedAfter = new OffsetDateTime(); // OffsetDateTime | Get Shipment Details by passing Package label create Date After by buyer. Must be in <a href='https://developer-docs.amazon.com/sp-api/docs/iso-8601'>ISO 8601</a> format.
OffsetDateTime shippedBefore = new OffsetDateTime(); // OffsetDateTime | Get Shipment Details by passing Shipped Date Before. Must be in <a href='https://developer-docs.amazon.com/sp-api/docs/iso-8601'>ISO 8601</a> format.
OffsetDateTime shippedAfter = new OffsetDateTime(); // OffsetDateTime | Get Shipment Details by passing Shipped Date After. Must be in <a href='https://developer-docs.amazon.com/sp-api/docs/iso-8601'>ISO 8601</a> format.
OffsetDateTime estimatedDeliveryBefore = new OffsetDateTime(); // OffsetDateTime | Get Shipment Details by passing Estimated Delivery Date Before. Must be in <a href='https://developer-docs.amazon.com/sp-api/docs/iso-8601'>ISO 8601</a> format.
OffsetDateTime estimatedDeliveryAfter = new OffsetDateTime(); // OffsetDateTime | Get Shipment Details by passing Estimated Delivery Date Before. Must be in <a href='https://developer-docs.amazon.com/sp-api/docs/iso-8601'>ISO 8601</a> format.
OffsetDateTime shipmentDeliveryBefore = new OffsetDateTime(); // OffsetDateTime | Get Shipment Details by passing Shipment Delivery Date Before. Must be in <a href='https://developer-docs.amazon.com/sp-api/docs/iso-8601'>ISO 8601</a> format.
OffsetDateTime shipmentDeliveryAfter = new OffsetDateTime(); // OffsetDateTime | Get Shipment Details by passing Shipment Delivery Date After. Must be in <a href='https://developer-docs.amazon.com/sp-api/docs/iso-8601'>ISO 8601</a> format.
OffsetDateTime requestedPickUpBefore = new OffsetDateTime(); // OffsetDateTime | Get Shipment Details by passing Before Requested pickup date. Must be in <a href='https://developer-docs.amazon.com/sp-api/docs/iso-8601'>ISO 8601</a> format.
OffsetDateTime requestedPickUpAfter = new OffsetDateTime(); // OffsetDateTime | Get Shipment Details by passing After Requested pickup date. Must be in <a href='https://developer-docs.amazon.com/sp-api/docs/iso-8601'>ISO 8601</a> format.
OffsetDateTime scheduledPickUpBefore = new OffsetDateTime(); // OffsetDateTime | Get Shipment Details by passing Before scheduled pickup date. Must be in <a href='https://developer-docs.amazon.com/sp-api/docs/iso-8601'>ISO 8601</a> format.
OffsetDateTime scheduledPickUpAfter = new OffsetDateTime(); // OffsetDateTime | Get Shipment Details by passing After Scheduled pickup date. Must be in <a href='https://developer-docs.amazon.com/sp-api/docs/iso-8601'>ISO 8601</a> format.
String currentShipmentStatus = "currentShipmentStatus_example"; // String | Get Shipment Details by passing Current shipment status.
String vendorShipmentIdentifier = "vendorShipmentIdentifier_example"; // String | Get Shipment Details by passing Vendor Shipment ID
String buyerReferenceNumber = "buyerReferenceNumber_example"; // String | Get Shipment Details by passing buyer Reference ID
String buyerWarehouseCode = "buyerWarehouseCode_example"; // String | Get Shipping Details based on buyer warehouse code. This value should be same as 'shipToParty.partyId' in the Shipment.
String sellerWarehouseCode = "sellerWarehouseCode_example"; // String | Get Shipping Details based on vendor warehouse code. This value should be same as 'sellingParty.partyId' in the Shipment.
try {
    GetShipmentDetailsResponse result = apiInstance.getShipmentDetails(limit, sortOrder, nextToken, createdAfter, createdBefore, shipmentConfirmedBefore, shipmentConfirmedAfter, packageLabelCreatedBefore, packageLabelCreatedAfter, shippedBefore, shippedAfter, estimatedDeliveryBefore, estimatedDeliveryAfter, shipmentDeliveryBefore, shipmentDeliveryAfter, requestedPickUpBefore, requestedPickUpAfter, scheduledPickUpBefore, scheduledPickUpAfter, currentShipmentStatus, vendorShipmentIdentifier, buyerReferenceNumber, buyerWarehouseCode, sellerWarehouseCode);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling VendorShipmentsApi#getShipmentDetails");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **limit** | **Long**| The limit to the number of records returned. Default value is 50 records. | [optional] [enum: ]
 **sortOrder** | **String**| Sort in ascending or descending order by purchase order creation date. | [optional] [enum: ASC, DESC]
 **nextToken** | **String**| Used for pagination when there are more shipments than the specified result size limit. | [optional]
 **createdAfter** | **OffsetDateTime**| Get Shipment Details that became available after this timestamp will be included in the result. Must be in &lt;a href&#x3D;&#x27;https://developer-docs.amazon.com/sp-api/docs/iso-8601&#x27;&gt;ISO 8601&lt;/a&gt; format. | [optional]
 **createdBefore** | **OffsetDateTime**| Get Shipment Details that became available before this timestamp will be included in the result. Must be in &lt;a href&#x3D;&#x27;https://developer-docs.amazon.com/sp-api/docs/iso-8601&#x27;&gt;ISO 8601&lt;/a&gt; format. | [optional]
 **shipmentConfirmedBefore** | **OffsetDateTime**| Get Shipment Details by passing Shipment confirmed create Date Before. Must be in &lt;a href&#x3D;&#x27;https://developer-docs.amazon.com/sp-api/docs/iso-8601&#x27;&gt;ISO 8601&lt;/a&gt; format. | [optional]
 **shipmentConfirmedAfter** | **OffsetDateTime**| Get Shipment Details by passing Shipment confirmed create Date After. Must be in &lt;a href&#x3D;&#x27;https://developer-docs.amazon.com/sp-api/docs/iso-8601&#x27;&gt;ISO 8601&lt;/a&gt; format. | [optional]
 **packageLabelCreatedBefore** | **OffsetDateTime**| Get Shipment Details by passing Package label create Date by buyer. Must be in &lt;a href&#x3D;&#x27;https://developer-docs.amazon.com/sp-api/docs/iso-8601&#x27;&gt;ISO 8601&lt;/a&gt; format. | [optional]
 **packageLabelCreatedAfter** | **OffsetDateTime**| Get Shipment Details by passing Package label create Date After by buyer. Must be in &lt;a href&#x3D;&#x27;https://developer-docs.amazon.com/sp-api/docs/iso-8601&#x27;&gt;ISO 8601&lt;/a&gt; format. | [optional]
 **shippedBefore** | **OffsetDateTime**| Get Shipment Details by passing Shipped Date Before. Must be in &lt;a href&#x3D;&#x27;https://developer-docs.amazon.com/sp-api/docs/iso-8601&#x27;&gt;ISO 8601&lt;/a&gt; format. | [optional]
 **shippedAfter** | **OffsetDateTime**| Get Shipment Details by passing Shipped Date After. Must be in &lt;a href&#x3D;&#x27;https://developer-docs.amazon.com/sp-api/docs/iso-8601&#x27;&gt;ISO 8601&lt;/a&gt; format. | [optional]
 **estimatedDeliveryBefore** | **OffsetDateTime**| Get Shipment Details by passing Estimated Delivery Date Before. Must be in &lt;a href&#x3D;&#x27;https://developer-docs.amazon.com/sp-api/docs/iso-8601&#x27;&gt;ISO 8601&lt;/a&gt; format. | [optional]
 **estimatedDeliveryAfter** | **OffsetDateTime**| Get Shipment Details by passing Estimated Delivery Date Before. Must be in &lt;a href&#x3D;&#x27;https://developer-docs.amazon.com/sp-api/docs/iso-8601&#x27;&gt;ISO 8601&lt;/a&gt; format. | [optional]
 **shipmentDeliveryBefore** | **OffsetDateTime**| Get Shipment Details by passing Shipment Delivery Date Before. Must be in &lt;a href&#x3D;&#x27;https://developer-docs.amazon.com/sp-api/docs/iso-8601&#x27;&gt;ISO 8601&lt;/a&gt; format. | [optional]
 **shipmentDeliveryAfter** | **OffsetDateTime**| Get Shipment Details by passing Shipment Delivery Date After. Must be in &lt;a href&#x3D;&#x27;https://developer-docs.amazon.com/sp-api/docs/iso-8601&#x27;&gt;ISO 8601&lt;/a&gt; format. | [optional]
 **requestedPickUpBefore** | **OffsetDateTime**| Get Shipment Details by passing Before Requested pickup date. Must be in &lt;a href&#x3D;&#x27;https://developer-docs.amazon.com/sp-api/docs/iso-8601&#x27;&gt;ISO 8601&lt;/a&gt; format. | [optional]
 **requestedPickUpAfter** | **OffsetDateTime**| Get Shipment Details by passing After Requested pickup date. Must be in &lt;a href&#x3D;&#x27;https://developer-docs.amazon.com/sp-api/docs/iso-8601&#x27;&gt;ISO 8601&lt;/a&gt; format. | [optional]
 **scheduledPickUpBefore** | **OffsetDateTime**| Get Shipment Details by passing Before scheduled pickup date. Must be in &lt;a href&#x3D;&#x27;https://developer-docs.amazon.com/sp-api/docs/iso-8601&#x27;&gt;ISO 8601&lt;/a&gt; format. | [optional]
 **scheduledPickUpAfter** | **OffsetDateTime**| Get Shipment Details by passing After Scheduled pickup date. Must be in &lt;a href&#x3D;&#x27;https://developer-docs.amazon.com/sp-api/docs/iso-8601&#x27;&gt;ISO 8601&lt;/a&gt; format. | [optional]
 **currentShipmentStatus** | **String**| Get Shipment Details by passing Current shipment status. | [optional]
 **vendorShipmentIdentifier** | **String**| Get Shipment Details by passing Vendor Shipment ID | [optional]
 **buyerReferenceNumber** | **String**| Get Shipment Details by passing buyer Reference ID | [optional]
 **buyerWarehouseCode** | **String**| Get Shipping Details based on buyer warehouse code. This value should be same as &#x27;shipToParty.partyId&#x27; in the Shipment. | [optional]
 **sellerWarehouseCode** | **String**| Get Shipping Details based on vendor warehouse code. This value should be same as &#x27;sellingParty.partyId&#x27; in the Shipment. | [optional]

### Return type

[**GetShipmentDetailsResponse**](GetShipmentDetailsResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getShipmentLabels"></a>
# **getShipmentLabels**
> GetShipmentLabels getShipmentLabels(limit, sortOrder, nextToken, labelCreatedAfter, labelcreatedBefore, buyerReferenceNumber, vendorShipmentIdentifier, sellerWarehouseCode)

GetShipmentLabels

Returns transport Labels based on the filters that you specify.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 10 | 10 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).

### Example
```java
// Import classes:
//import com.amazon.SellingPartnerAPI.ApiException;
//import com.amazon.SellingPartnerAPI.api.VendorShipmentsApi;


VendorShipmentsApi apiInstance = new VendorShipmentsApi();
Long limit = 789L; // Long | The limit to the number of records returned. Default value is 50 records.
String sortOrder = "sortOrder_example"; // String | Sort in ascending or descending order by transport label creation date.
String nextToken = "nextToken_example"; // String | Used for pagination when there are more transport label than the specified result size limit.
OffsetDateTime labelCreatedAfter = new OffsetDateTime(); // OffsetDateTime | transport Labels that became available after this timestamp will be included in the result. Must be in ISO-8601 date/time format.
OffsetDateTime labelcreatedBefore = new OffsetDateTime(); // OffsetDateTime | transport Labels that became available before this timestamp will be included in the result. Must be in ISO-8601 date/time format.
String buyerReferenceNumber = "buyerReferenceNumber_example"; // String | Get transport labels by passing Buyer Reference Number to retreive the corresponding transport label.
String vendorShipmentIdentifier = "vendorShipmentIdentifier_example"; // String | Get transport labels by passing Vendor Shipment ID to retreive the corresponding transport label.
String sellerWarehouseCode = "sellerWarehouseCode_example"; // String | Get Shipping labels based Vendor Warehouse code. This value should be same as 'shipFromParty.partyId' in the Shipment.
try {
    GetShipmentLabels result = apiInstance.getShipmentLabels(limit, sortOrder, nextToken, labelCreatedAfter, labelcreatedBefore, buyerReferenceNumber, vendorShipmentIdentifier, sellerWarehouseCode);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling VendorShipmentsApi#getShipmentLabels");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **limit** | **Long**| The limit to the number of records returned. Default value is 50 records. | [optional] [enum: ]
 **sortOrder** | **String**| Sort in ascending or descending order by transport label creation date. | [optional] [enum: ASC, DESC]
 **nextToken** | **String**| Used for pagination when there are more transport label than the specified result size limit. | [optional]
 **labelCreatedAfter** | **OffsetDateTime**| transport Labels that became available after this timestamp will be included in the result. Must be in ISO-8601 date/time format. | [optional]
 **labelcreatedBefore** | **OffsetDateTime**| transport Labels that became available before this timestamp will be included in the result. Must be in ISO-8601 date/time format. | [optional]
 **buyerReferenceNumber** | **String**| Get transport labels by passing Buyer Reference Number to retreive the corresponding transport label. | [optional]
 **vendorShipmentIdentifier** | **String**| Get transport labels by passing Vendor Shipment ID to retreive the corresponding transport label. | [optional]
 **sellerWarehouseCode** | **String**| Get Shipping labels based Vendor Warehouse code. This value should be same as &#x27;shipFromParty.partyId&#x27; in the Shipment. | [optional]

### Return type

[**GetShipmentLabels**](GetShipmentLabels.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="submitShipmentConfirmations"></a>
# **submitShipmentConfirmations**
> SubmitShipmentConfirmationsResponse submitShipmentConfirmations(body)

SubmitShipmentConfirmations

Submits one or more shipment confirmations for vendor orders.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 10 | 10 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).

### Example
```java
// Import classes:
//import com.amazon.SellingPartnerAPI.ApiException;
//import com.amazon.SellingPartnerAPI.api.VendorShipmentsApi;


VendorShipmentsApi apiInstance = new VendorShipmentsApi();
SubmitShipmentConfirmationsRequest body = new SubmitShipmentConfirmationsRequest(); // SubmitShipmentConfirmationsRequest | A request to submit shipment confirmation.
try {
    SubmitShipmentConfirmationsResponse result = apiInstance.submitShipmentConfirmations(body);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling VendorShipmentsApi#submitShipmentConfirmations");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**SubmitShipmentConfirmationsRequest**](SubmitShipmentConfirmationsRequest.md)| A request to submit shipment confirmation. |

### Return type

[**SubmitShipmentConfirmationsResponse**](SubmitShipmentConfirmationsResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="submitShipments"></a>
# **submitShipments**
> SubmitShipmentConfirmationsResponse submitShipments(body)

SubmitShipments

Submits one or more shipment request for vendor Orders.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 10 | 10 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).

### Example
```java
// Import classes:
//import com.amazon.SellingPartnerAPI.ApiException;
//import com.amazon.SellingPartnerAPI.api.VendorShipmentsApi;


VendorShipmentsApi apiInstance = new VendorShipmentsApi();
SubmitShipments body = new SubmitShipments(); // SubmitShipments | A request to submit shipment request.
try {
    SubmitShipmentConfirmationsResponse result = apiInstance.submitShipments(body);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling VendorShipmentsApi#submitShipments");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**SubmitShipments**](SubmitShipments.md)| A request to submit shipment request. |

### Return type

[**SubmitShipmentConfirmationsResponse**](SubmitShipmentConfirmationsResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

