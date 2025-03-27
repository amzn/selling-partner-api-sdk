# SellingPartnerApiForOrders.ShipmentApi

All URIs are relative to *https://sellingpartnerapi-na.amazon.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**updateShipmentStatus**](ShipmentApi.md#updateShipmentStatus) | **POST** /orders/v0/orders/{orderId}/shipment | 



## updateShipmentStatus

> updateShipmentStatus(orderId, payload)



Update the shipment status for an order that you specify.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 5 | 15 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The preceding table contains the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may receive higher rate and burst values then those shown here. For more information, refer to [Usage Plans and Rate Limits](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).

### Example

```javascript
import SellingPartnerApiForOrders from 'selling_partner_api_for_orders';

let apiInstance = new SellingPartnerApiForOrders.ShipmentApi();
let orderId = "orderId_example"; // String | An Amazon-defined order identifier, in 3-7-7 format.
let payload = new SellingPartnerApiForOrders.UpdateShipmentStatusRequest(); // UpdateShipmentStatusRequest | The request body for the `updateShipmentStatus` operation.
apiInstance.updateShipmentStatus(orderId, payload).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orderId** | **String**| An Amazon-defined order identifier, in 3-7-7 format. | 
 **payload** | [**UpdateShipmentStatusRequest**](UpdateShipmentStatusRequest.md)| The request body for the &#x60;updateShipmentStatus&#x60; operation. | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

