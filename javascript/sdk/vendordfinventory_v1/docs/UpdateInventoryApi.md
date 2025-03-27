# SellingPartnerApiForDirectFulfillmentInventoryUpdates.UpdateInventoryApi

All URIs are relative to *https://sellingpartnerapi-na.amazon.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**submitInventoryUpdate**](UpdateInventoryApi.md#submitInventoryUpdate) | **POST** /vendor/directFulfillment/inventory/v1/warehouses/{warehouseId}/items | 



## submitInventoryUpdate

> SubmitInventoryUpdateResponse submitInventoryUpdate(warehouseId, body)



Submits inventory updates for the specified warehouse for either a partial or full feed of inventory items.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 10 | 10 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).

### Example

```javascript
import SellingPartnerApiForDirectFulfillmentInventoryUpdates from 'selling_partner_api_for_direct_fulfillment_inventory_updates';

let apiInstance = new SellingPartnerApiForDirectFulfillmentInventoryUpdates.UpdateInventoryApi();
let warehouseId = "warehouseId_example"; // String | Identifier for the warehouse for which to update inventory.
let body = new SellingPartnerApiForDirectFulfillmentInventoryUpdates.SubmitInventoryUpdateRequest(); // SubmitInventoryUpdateRequest | The request body containing the inventory update data to submit.
apiInstance.submitInventoryUpdate(warehouseId, body).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **warehouseId** | **String**| Identifier for the warehouse for which to update inventory. | 
 **body** | [**SubmitInventoryUpdateRequest**](SubmitInventoryUpdateRequest.md)| The request body containing the inventory update data to submit. | 

### Return type

[**SubmitInventoryUpdateResponse**](SubmitInventoryUpdateResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

