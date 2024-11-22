# CreateContainerLabelApi

All URIs are relative to *https://sellingpartnerapi-na.amazon.com/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createContainerLabel**](CreateContainerLabelApi.md#createContainerLabel) | **POST** /vendor/directFulfillment/shipping/2021-12-28/containerLabel | 

<a name="createContainerLabel"></a>
# **createContainerLabel**
> CreateContainerLabelResponse createContainerLabel(body)



Creates container (pallet) label for provided shipment package association

### Example
```java
// Import classes:
//import com.amazon.SellingPartnerAPI.ApiException;
//import com.amazon.SellingPartnerAPI.api.CreateContainerLabelApi;


CreateContainerLabelApi apiInstance = new CreateContainerLabelApi();
CreateContainerLabelRequest body = new CreateContainerLabelRequest(); // CreateContainerLabelRequest | Request body containing the container label data.
try {
    CreateContainerLabelResponse result = apiInstance.createContainerLabel(body);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling CreateContainerLabelApi#createContainerLabel");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**CreateContainerLabelRequest**](CreateContainerLabelRequest.md)| Request body containing the container label data. |

### Return type

[**CreateContainerLabelResponse**](CreateContainerLabelResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json, containerLabel

