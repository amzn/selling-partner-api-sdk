# SellingPartnerApiForEasyShip.EasyShipApi

All URIs are relative to *https://sellingpartnerapi-na.amazon.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createScheduledPackage**](EasyShipApi.md#createScheduledPackage) | **POST** /easyShip/2022-03-23/package | 
[**createScheduledPackageBulk**](EasyShipApi.md#createScheduledPackageBulk) | **POST** /easyShip/2022-03-23/packages/bulk | 
[**getScheduledPackage**](EasyShipApi.md#getScheduledPackage) | **GET** /easyShip/2022-03-23/package | 
[**listHandoverSlots**](EasyShipApi.md#listHandoverSlots) | **POST** /easyShip/2022-03-23/timeSlot | 
[**updateScheduledPackages**](EasyShipApi.md#updateScheduledPackages) | **PATCH** /easyShip/2022-03-23/package | 



## createScheduledPackage

> Package createScheduledPackage(createScheduledPackageRequest)



Schedules an Easy Ship order and returns the scheduled package information.  This operation does the following:  *  Specifies the time slot and handover method for the order to be scheduled for delivery.  * Updates the Easy Ship order status.  * Generates a shipping label and an invoice. Calling &#x60;createScheduledPackage&#x60; also generates a warranty document if you specify a &#x60;SerialNumber&#x60; value. To get these documents, see [How to get invoice, shipping label, and warranty documents](doc:easyship-api-v2022-03-23-use-case-guide).  * Shows the status of Easy Ship orders when you call the &#x60;getOrders&#x60; operation of the Selling Partner API for Orders and examine the &#x60;EasyShipShipmentStatus&#x60; property in the response body.  See the **Shipping Label**, **Invoice**, and **Warranty** columns in the [Marketplace Support Table](doc:easyship-api-v2022-03-23-use-case-guide#marketplace-support-table) to see which documents are supported in each marketplace.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 1 | 5 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](doc:usage-plans-and-rate-limits-in-the-sp-api).

### Example

```javascript
import SellingPartnerApiForEasyShip from 'selling_partner_api_for_easy_ship';

let apiInstance = new SellingPartnerApiForEasyShip.EasyShipApi();
let createScheduledPackageRequest = new SellingPartnerApiForEasyShip.CreateScheduledPackageRequest(); // CreateScheduledPackageRequest | The request schema for the `createScheduledPackage` operation.
apiInstance.createScheduledPackage(createScheduledPackageRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createScheduledPackageRequest** | [**CreateScheduledPackageRequest**](CreateScheduledPackageRequest.md)| The request schema for the &#x60;createScheduledPackage&#x60; operation. | 

### Return type

[**Package**](Package.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## createScheduledPackageBulk

> CreateScheduledPackagesResponse createScheduledPackageBulk(createScheduledPackagesRequest)



This operation automatically schedules a time slot for all the &#x60;amazonOrderId&#x60;s given as input, generating the associated shipping labels, along with other compliance documents according to the marketplace (refer to the [marketplace document support table](doc:easyship-api-v2022-03-23-use-case-guide#marketplace-support-table)).  Developers calling this operation may optionally assign a &#x60;packageDetails&#x60; object, allowing them to input a preferred time slot for each order in their request. In this case, Amazon will try to schedule the respective packages using their optional settings. On the other hand, *i.e.*, if the time slot is not provided, Amazon will then pick the earliest time slot possible.   Regarding the shipping label&#39;s file format, external developers are able to choose between PDF or ZPL, and Amazon will create the label accordingly.  This operation returns an array composed of the scheduled packages, and a short-lived URL pointing to a zip file containing the generated shipping labels and the other documents enabled for your marketplace. If at least an order couldn&#39;t be scheduled, then Amazon adds the &#x60;rejectedOrders&#x60; list into the response, which contains an entry for each order we couldn&#39;t process. Each entry is composed of an error message describing the reason of the failure, so that sellers can take action.  The table below displays the supported request and burst maximum rates:  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 1 | 5 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](doc:usage-plans-and-rate-limits-in-the-sp-api).

### Example

```javascript
import SellingPartnerApiForEasyShip from 'selling_partner_api_for_easy_ship';

let apiInstance = new SellingPartnerApiForEasyShip.EasyShipApi();
let createScheduledPackagesRequest = new SellingPartnerApiForEasyShip.CreateScheduledPackagesRequest(); // CreateScheduledPackagesRequest | The request schema for the `createScheduledPackageBulk` operation.
apiInstance.createScheduledPackageBulk(createScheduledPackagesRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createScheduledPackagesRequest** | [**CreateScheduledPackagesRequest**](CreateScheduledPackagesRequest.md)| The request schema for the &#x60;createScheduledPackageBulk&#x60; operation. | 

### Return type

[**CreateScheduledPackagesResponse**](CreateScheduledPackagesResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## getScheduledPackage

> Package getScheduledPackage(amazonOrderId, marketplaceId)



Returns information about a package, including dimensions, weight, time slot information for handover, invoice and item information, and status.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 1 | 5 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](doc:usage-plans-and-rate-limits-in-the-sp-api).

### Example

```javascript
import SellingPartnerApiForEasyShip from 'selling_partner_api_for_easy_ship';

let apiInstance = new SellingPartnerApiForEasyShip.EasyShipApi();
let amazonOrderId = "amazonOrderId_example"; // String | An Amazon-defined order identifier. Identifies the order that the seller wants to deliver using Amazon Easy Ship.
let marketplaceId = "marketplaceId_example"; // String | An identifier for the marketplace in which the seller is selling.
apiInstance.getScheduledPackage(amazonOrderId, marketplaceId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **amazonOrderId** | **String**| An Amazon-defined order identifier. Identifies the order that the seller wants to deliver using Amazon Easy Ship. | 
 **marketplaceId** | **String**| An identifier for the marketplace in which the seller is selling. | 

### Return type

[**Package**](Package.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listHandoverSlots

> ListHandoverSlotsResponse listHandoverSlots(opts)



Returns time slots available for Easy Ship orders to be scheduled based on the package weight and dimensions that the seller specifies.  This operation is available for scheduled and unscheduled orders based on marketplace support. See **Get Time Slots** in the [Marketplace Support Table](doc:easyship-api-v2022-03-23-use-case-guide#marketplace-support-table).  This operation can return time slots that have either pickup or drop-off handover methods - see **Supported Handover Methods** in the [Marketplace Support Table](doc:easyship-api-v2022-03-23-use-case-guide#marketplace-support-table).  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 1 | 5 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](doc:usage-plans-and-rate-limits-in-the-sp-api).

### Example

```javascript
import SellingPartnerApiForEasyShip from 'selling_partner_api_for_easy_ship';

let apiInstance = new SellingPartnerApiForEasyShip.EasyShipApi();
let opts = {
  'listHandoverSlotsRequest': new SellingPartnerApiForEasyShip.ListHandoverSlotsRequest() // ListHandoverSlotsRequest | The request schema for the `listHandoverSlots` operation.
};
apiInstance.listHandoverSlots(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **listHandoverSlotsRequest** | [**ListHandoverSlotsRequest**](ListHandoverSlotsRequest.md)| The request schema for the &#x60;listHandoverSlots&#x60; operation. | [optional] 

### Return type

[**ListHandoverSlotsResponse**](ListHandoverSlotsResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updateScheduledPackages

> Packages updateScheduledPackages(opts)



Updates the time slot for handing over the package indicated by the specified &#x60;scheduledPackageId&#x60;. You can get the new &#x60;slotId&#x60; value for the time slot by calling the &#x60;listHandoverSlots&#x60; operation before making another &#x60;patch&#x60; call.  See the **Update Package** column in the [Marketplace Support Table](doc:easyship-api-v2022-03-23-use-case-guide#marketplace-support-table) to see which marketplaces this operation is supported in.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 1 | 5 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](doc:usage-plans-and-rate-limits-in-the-sp-api).

### Example

```javascript
import SellingPartnerApiForEasyShip from 'selling_partner_api_for_easy_ship';

let apiInstance = new SellingPartnerApiForEasyShip.EasyShipApi();
let opts = {
  'updateScheduledPackagesRequest': new SellingPartnerApiForEasyShip.UpdateScheduledPackagesRequest() // UpdateScheduledPackagesRequest | The request schema for the `updateScheduledPackages` operation.
};
apiInstance.updateScheduledPackages(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **updateScheduledPackagesRequest** | [**UpdateScheduledPackagesRequest**](UpdateScheduledPackagesRequest.md)| The request schema for the &#x60;updateScheduledPackages&#x60; operation. | [optional] 

### Return type

[**Packages**](Packages.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

