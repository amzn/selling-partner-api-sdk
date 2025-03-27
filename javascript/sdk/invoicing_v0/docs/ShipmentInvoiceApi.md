# SellingPartnerApiForShipmentInvoicing.ShipmentInvoiceApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getInvoiceStatus**](ShipmentInvoiceApi.md#getInvoiceStatus) | **GET** /fba/outbound/brazil/v0/shipments/{shipmentId}/invoice/status | 
[**getShipmentDetails**](ShipmentInvoiceApi.md#getShipmentDetails) | **GET** /fba/outbound/brazil/v0/shipments/{shipmentId} | 
[**submitInvoice**](ShipmentInvoiceApi.md#submitInvoice) | **POST** /fba/outbound/brazil/v0/shipments/{shipmentId}/invoice | 



## getInvoiceStatus

> GetInvoiceStatusResponse getInvoiceStatus(shipmentId)



Returns the invoice status for the shipment you specify.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 1.133 | 25 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](doc:usage-plans-and-rate-limits-in-the-sp-api).

### Example

```javascript
import SellingPartnerApiForShipmentInvoicing from 'selling_partner_api_for_shipment_invoicing';

let apiInstance = new SellingPartnerApiForShipmentInvoicing.ShipmentInvoiceApi();
let shipmentId = "shipmentId_example"; // String | The shipment identifier for the shipment.
apiInstance.getInvoiceStatus(shipmentId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **shipmentId** | **String**| The shipment identifier for the shipment. | 

### Return type

[**GetInvoiceStatusResponse**](GetInvoiceStatusResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getShipmentDetails

> GetShipmentDetailsResponse getShipmentDetails(shipmentId)



Returns the shipment details required to issue an invoice for the specified shipment.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 1.133 | 25 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](doc:usage-plans-and-rate-limits-in-the-sp-api).

### Example

```javascript
import SellingPartnerApiForShipmentInvoicing from 'selling_partner_api_for_shipment_invoicing';

let apiInstance = new SellingPartnerApiForShipmentInvoicing.ShipmentInvoiceApi();
let shipmentId = "shipmentId_example"; // String | The identifier for the shipment. Get this value from the FBAOutboundShipmentStatus notification. For information about subscribing to notifications, see the [Notifications API Use Case Guide](doc:notifications-api-v1-use-case-guide).
apiInstance.getShipmentDetails(shipmentId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **shipmentId** | **String**| The identifier for the shipment. Get this value from the FBAOutboundShipmentStatus notification. For information about subscribing to notifications, see the [Notifications API Use Case Guide](doc:notifications-api-v1-use-case-guide). | 

### Return type

[**GetShipmentDetailsResponse**](GetShipmentDetailsResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## submitInvoice

> SubmitInvoiceResponse submitInvoice(shipmentId, body)



Submits a shipment invoice document for a given shipment.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 1.133 | 25 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](doc:usage-plans-and-rate-limits-in-the-sp-api).

### Example

```javascript
import SellingPartnerApiForShipmentInvoicing from 'selling_partner_api_for_shipment_invoicing';

let apiInstance = new SellingPartnerApiForShipmentInvoicing.ShipmentInvoiceApi();
let shipmentId = "shipmentId_example"; // String | The identifier for the shipment.
let body = new SellingPartnerApiForShipmentInvoicing.SubmitInvoiceRequest(); // SubmitInvoiceRequest | 
apiInstance.submitInvoice(shipmentId, body).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **shipmentId** | **String**| The identifier for the shipment. | 
 **body** | [**SubmitInvoiceRequest**](SubmitInvoiceRequest.md)|  | 

### Return type

[**SubmitInvoiceResponse**](SubmitInvoiceResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

