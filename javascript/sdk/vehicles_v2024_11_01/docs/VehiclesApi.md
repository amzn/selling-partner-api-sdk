# TheSellingPartnerApiForAutomotive.VehiclesApi

All URIs are relative to *https://sellingpartnerapi-na.amazon.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getVehicles**](VehiclesApi.md#getVehicles) | **GET** /catalog/2024-11-01/automotive/vehicles | 



## getVehicles

> VehiclesResponse getVehicles(marketplaceId, vehicleType, opts)



Get the latest collection of vehicles

### Example

```javascript
import TheSellingPartnerApiForAutomotive from 'the_selling_partner_api_for_automotive_';

let apiInstance = new TheSellingPartnerApiForAutomotive.VehiclesApi();
let marketplaceId = "A1PA6795UKMFR9"; // String | An identifier for the marketplace in which the resource operates.
let vehicleType = "CAR"; // String | An identifier for vehicle type.
let opts = {
  'pageToken': "sdlkj234lkj234lksjdflkjwdflkjsfdlkj234234234234", // String | A token to fetch a certain page when there are multiple pages worth of results.
  'updatedAfter': "2024-01-05T18:00:03+00:00" // String | Date in ISO 8601 format, if provided only vehicles which are modified/added to Amazon's catalog after this date will be returned.
};
apiInstance.getVehicles(marketplaceId, vehicleType, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **marketplaceId** | **String**| An identifier for the marketplace in which the resource operates. | 
 **vehicleType** | **String**| An identifier for vehicle type. | 
 **pageToken** | **String**| A token to fetch a certain page when there are multiple pages worth of results. | [optional] 
 **updatedAfter** | **String**| Date in ISO 8601 format, if provided only vehicles which are modified/added to Amazon&#39;s catalog after this date will be returned. | [optional] 

### Return type

[**VehiclesResponse**](VehiclesResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

