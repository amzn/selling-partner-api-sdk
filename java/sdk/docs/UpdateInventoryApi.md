# UpdateInventoryApi

All URIs are relative to *https://sellingpartnerapi-na.amazon.com/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**submitInventoryUpdate**](UpdateInventoryApi.md#submitInventoryUpdate) | **POST** /vendor/directFulfillment/inventory/v1/warehouses/{warehouseId}/items | 

<a name="submitInventoryUpdate"></a>
# **submitInventoryUpdate**
> SubmitInventoryUpdateResponse submitInventoryUpdate(body, warehouseId)



Submits inventory updates for the specified warehouse for either a partial or full feed of inventory items.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 10 | 10 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).

### Example
```java
// Import classes:
//import com.amazon.SellingPartnerAPI.ApiException;
//import com.amazon.SellingPartnerAPI.api.UpdateInventoryApi;


UpdateInventoryApi apiInstance = new UpdateInventoryApi();
SubmitInventoryUpdateRequest body = new SubmitInventoryUpdateRequest(); // SubmitInventoryUpdateRequest | The request body containing the inventory update data to submit.
String warehouseId = "warehouseId_example"; // String | Identifier for the warehouse for which to update inventory.
try {
    SubmitInventoryUpdateResponse result = apiInstance.submitInventoryUpdate(body, warehouseId);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling UpdateInventoryApi#submitInventoryUpdate");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**SubmitInventoryUpdateRequest**](SubmitInventoryUpdateRequest.md)| The request body containing the inventory update data to submit. |
 **warehouseId** | **String**| Identifier for the warehouse for which to update inventory. |

### Return type

[**SubmitInventoryUpdateResponse**](SubmitInventoryUpdateResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

