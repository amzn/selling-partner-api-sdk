# SellingPartnerApiForFulfillmentInbound.FbaInboundApi

All URIs are relative to *https://sellingpartnerapi-na.amazon.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getBillOfLading**](FbaInboundApi.md#getBillOfLading) | **GET** /fba/inbound/v0/shipments/{shipmentId}/billOfLading | 
[**getLabels**](FbaInboundApi.md#getLabels) | **GET** /fba/inbound/v0/shipments/{shipmentId}/labels | 
[**getPrepInstructions**](FbaInboundApi.md#getPrepInstructions) | **GET** /fba/inbound/v0/prepInstructions | 
[**getShipmentItems**](FbaInboundApi.md#getShipmentItems) | **GET** /fba/inbound/v0/shipmentItems | 
[**getShipmentItemsByShipmentId**](FbaInboundApi.md#getShipmentItemsByShipmentId) | **GET** /fba/inbound/v0/shipments/{shipmentId}/items | 
[**getShipments**](FbaInboundApi.md#getShipments) | **GET** /fba/inbound/v0/shipments | 



## getBillOfLading

> GetBillOfLadingResponse getBillOfLading(shipmentId)



Returns a bill of lading for a Less Than Truckload/Full Truckload (LTL/FTL) shipment. The getBillOfLading operation returns PDF document data for printing a bill of lading for an Amazon-partnered Less Than Truckload/Full Truckload (LTL/FTL) inbound shipment.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 2 | 30 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).

### Example

```javascript
import SellingPartnerApiForFulfillmentInbound from 'selling_partner_api_for_fulfillment_inbound';

let apiInstance = new SellingPartnerApiForFulfillmentInbound.FbaInboundApi();
let shipmentId = "shipmentId_example"; // String | A shipment identifier originally returned by the createInboundShipmentPlan operation.
apiInstance.getBillOfLading(shipmentId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **shipmentId** | **String**| A shipment identifier originally returned by the createInboundShipmentPlan operation. | 

### Return type

[**GetBillOfLadingResponse**](GetBillOfLadingResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getLabels

> GetLabelsResponse getLabels(shipmentId, pageType, labelType, opts)



Returns package/pallet labels for faster and more accurate shipment processing at the Amazon fulfillment center.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 2 | 30 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).

### Example

```javascript
import SellingPartnerApiForFulfillmentInbound from 'selling_partner_api_for_fulfillment_inbound';

let apiInstance = new SellingPartnerApiForFulfillmentInbound.FbaInboundApi();
let shipmentId = "shipmentId_example"; // String | A shipment identifier originally returned by the createInboundShipmentPlan operation.
let pageType = "pageType_example"; // String | The page type to use to print the labels. Submitting a PageType value that is not supported in your marketplace returns an error.
let labelType = "labelType_example"; // String | The type of labels requested. 
let opts = {
  'numberOfPackages': 56, // Number | The number of packages in the shipment.
  'packageLabelsToPrint': ["null"], // [String] | A list of identifiers that specify packages for which you want package labels printed.  If you provide box content information with the [FBA Inbound Shipment Carton Information Feed](https://developer-docs.amazon.com/sp-api/docs/fulfillment-by-amazon-feed-type-values#fba-inbound-shipment-carton-information-feed), then `PackageLabelsToPrint` must match the `CartonId` values you provide through that feed. If you provide box content information with the Fulfillment Inbound API v2024-03-20, then `PackageLabelsToPrint` must match the `boxID` values from the [`listShipmentBoxes`](https://developer-docs.amazon.com/sp-api/docs/fulfillment-inbound-api-v2024-03-20-reference#listshipmentboxes) response. If these values do not match as required, the operation returns the `IncorrectPackageIdentifier` error code.
  'numberOfPallets': 56, // Number | The number of pallets in the shipment. This returns four identical labels for each pallet.
  'pageSize': 56, // Number | The page size for paginating through the total packages' labels. This is a required parameter for Non-Partnered LTL Shipments. Max value:1000.
  'pageStartIndex': 56 // Number | The page start index for paginating through the total packages' labels. This is a required parameter for Non-Partnered LTL Shipments.
};
apiInstance.getLabels(shipmentId, pageType, labelType, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **shipmentId** | **String**| A shipment identifier originally returned by the createInboundShipmentPlan operation. | 
 **pageType** | **String**| The page type to use to print the labels. Submitting a PageType value that is not supported in your marketplace returns an error. | 
 **labelType** | **String**| The type of labels requested.  | 
 **numberOfPackages** | **Number**| The number of packages in the shipment. | [optional] 
 **packageLabelsToPrint** | [**[String]**](String.md)| A list of identifiers that specify packages for which you want package labels printed.  If you provide box content information with the [FBA Inbound Shipment Carton Information Feed](https://developer-docs.amazon.com/sp-api/docs/fulfillment-by-amazon-feed-type-values#fba-inbound-shipment-carton-information-feed), then &#x60;PackageLabelsToPrint&#x60; must match the &#x60;CartonId&#x60; values you provide through that feed. If you provide box content information with the Fulfillment Inbound API v2024-03-20, then &#x60;PackageLabelsToPrint&#x60; must match the &#x60;boxID&#x60; values from the [&#x60;listShipmentBoxes&#x60;](https://developer-docs.amazon.com/sp-api/docs/fulfillment-inbound-api-v2024-03-20-reference#listshipmentboxes) response. If these values do not match as required, the operation returns the &#x60;IncorrectPackageIdentifier&#x60; error code. | [optional] 
 **numberOfPallets** | **Number**| The number of pallets in the shipment. This returns four identical labels for each pallet. | [optional] 
 **pageSize** | **Number**| The page size for paginating through the total packages&#39; labels. This is a required parameter for Non-Partnered LTL Shipments. Max value:1000. | [optional] 
 **pageStartIndex** | **Number**| The page start index for paginating through the total packages&#39; labels. This is a required parameter for Non-Partnered LTL Shipments. | [optional] 

### Return type

[**GetLabelsResponse**](GetLabelsResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getPrepInstructions

> GetPrepInstructionsResponse getPrepInstructions(shipToCountryCode, opts)



Returns labeling requirements and item preparation instructions to help prepare items for shipment to Amazon&#39;s fulfillment network.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 2 | 30 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).

### Example

```javascript
import SellingPartnerApiForFulfillmentInbound from 'selling_partner_api_for_fulfillment_inbound';

let apiInstance = new SellingPartnerApiForFulfillmentInbound.FbaInboundApi();
let shipToCountryCode = "shipToCountryCode_example"; // String | The country code of the country to which the items will be shipped. Note that labeling requirements and item preparation instructions can vary by country.
let opts = {
  'sellerSKUList': ["null"], // [String] | A list of SellerSKU values. Used to identify items for which you want labeling requirements and item preparation instructions for shipment to Amazon's fulfillment network. The SellerSKU is qualified by the Seller ID, which is included with every call to the Seller Partner API.  Note: Include seller SKUs that you have used to list items on Amazon's retail website. If you include a seller SKU that you have never used to list an item on Amazon's retail website, the seller SKU is returned in the InvalidSKUList property in the response.
  'aSINList': ["null"] // [String] | A list of ASIN values. Used to identify items for which you want item preparation instructions to help with item sourcing decisions.  Note: ASINs must be included in the product catalog for at least one of the marketplaces that the seller  participates in. Any ASIN that is not included in the product catalog for at least one of the marketplaces that the seller participates in is returned in the InvalidASINList property in the response. You can find out which marketplaces a seller participates in by calling the getMarketplaceParticipations operation in the Selling Partner API for Sellers.
};
apiInstance.getPrepInstructions(shipToCountryCode, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **shipToCountryCode** | **String**| The country code of the country to which the items will be shipped. Note that labeling requirements and item preparation instructions can vary by country. | 
 **sellerSKUList** | [**[String]**](String.md)| A list of SellerSKU values. Used to identify items for which you want labeling requirements and item preparation instructions for shipment to Amazon&#39;s fulfillment network. The SellerSKU is qualified by the Seller ID, which is included with every call to the Seller Partner API.  Note: Include seller SKUs that you have used to list items on Amazon&#39;s retail website. If you include a seller SKU that you have never used to list an item on Amazon&#39;s retail website, the seller SKU is returned in the InvalidSKUList property in the response. | [optional] 
 **aSINList** | [**[String]**](String.md)| A list of ASIN values. Used to identify items for which you want item preparation instructions to help with item sourcing decisions.  Note: ASINs must be included in the product catalog for at least one of the marketplaces that the seller  participates in. Any ASIN that is not included in the product catalog for at least one of the marketplaces that the seller participates in is returned in the InvalidASINList property in the response. You can find out which marketplaces a seller participates in by calling the getMarketplaceParticipations operation in the Selling Partner API for Sellers. | [optional] 

### Return type

[**GetPrepInstructionsResponse**](GetPrepInstructionsResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getShipmentItems

> GetShipmentItemsResponse getShipmentItems(queryType, marketplaceId, opts)



Returns a list of items in a specified inbound shipment, or a list of items that were updated within a specified time frame.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 2 | 30 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).

### Example

```javascript
import SellingPartnerApiForFulfillmentInbound from 'selling_partner_api_for_fulfillment_inbound';

let apiInstance = new SellingPartnerApiForFulfillmentInbound.FbaInboundApi();
let queryType = "queryType_example"; // String | Indicates whether items are returned using a date range (by providing the LastUpdatedAfter and LastUpdatedBefore parameters), or using NextToken, which continues returning items specified in a previous request.
let marketplaceId = "marketplaceId_example"; // String | A marketplace identifier. Specifies the marketplace where the product would be stored.
let opts = {
  'lastUpdatedAfter': new Date("2013-10-20T19:20:30+01:00"), // Date | A date used for selecting inbound shipment items that were last updated after (or at) a specified time. The selection includes updates made by Amazon and by the seller.
  'lastUpdatedBefore': new Date("2013-10-20T19:20:30+01:00"), // Date | A date used for selecting inbound shipment items that were last updated before (or at) a specified time. The selection includes updates made by Amazon and by the seller.
  'nextToken': "nextToken_example" // String | A string token returned in the response to your previous request.
};
apiInstance.getShipmentItems(queryType, marketplaceId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **queryType** | **String**| Indicates whether items are returned using a date range (by providing the LastUpdatedAfter and LastUpdatedBefore parameters), or using NextToken, which continues returning items specified in a previous request. | 
 **marketplaceId** | **String**| A marketplace identifier. Specifies the marketplace where the product would be stored. | 
 **lastUpdatedAfter** | **Date**| A date used for selecting inbound shipment items that were last updated after (or at) a specified time. The selection includes updates made by Amazon and by the seller. | [optional] 
 **lastUpdatedBefore** | **Date**| A date used for selecting inbound shipment items that were last updated before (or at) a specified time. The selection includes updates made by Amazon and by the seller. | [optional] 
 **nextToken** | **String**| A string token returned in the response to your previous request. | [optional] 

### Return type

[**GetShipmentItemsResponse**](GetShipmentItemsResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getShipmentItemsByShipmentId

> GetShipmentItemsResponse getShipmentItemsByShipmentId(shipmentId, opts)



Returns a list of items in a specified inbound shipment.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 2 | 30 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).

### Example

```javascript
import SellingPartnerApiForFulfillmentInbound from 'selling_partner_api_for_fulfillment_inbound';

let apiInstance = new SellingPartnerApiForFulfillmentInbound.FbaInboundApi();
let shipmentId = "shipmentId_example"; // String | A shipment identifier used for selecting items in a specific inbound shipment.
let opts = {
  'marketplaceId': "marketplaceId_example" // String | Deprecated. Do not use.
};
apiInstance.getShipmentItemsByShipmentId(shipmentId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **shipmentId** | **String**| A shipment identifier used for selecting items in a specific inbound shipment. | 
 **marketplaceId** | **String**| Deprecated. Do not use. | [optional] 

### Return type

[**GetShipmentItemsResponse**](GetShipmentItemsResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getShipments

> GetShipmentsResponse getShipments(queryType, marketplaceId, opts)



Returns a list of inbound shipments based on criteria that you specify.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 2 | 30 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).

### Example

```javascript
import SellingPartnerApiForFulfillmentInbound from 'selling_partner_api_for_fulfillment_inbound';

let apiInstance = new SellingPartnerApiForFulfillmentInbound.FbaInboundApi();
let queryType = "queryType_example"; // String | Indicates whether shipments are returned using shipment information (by providing the ShipmentStatusList or ShipmentIdList parameters), using a date range (by providing the LastUpdatedAfter and LastUpdatedBefore parameters), or by using NextToken to continue returning items specified in a previous request.
let marketplaceId = "marketplaceId_example"; // String | A marketplace identifier. Specifies the marketplace where the product would be stored.
let opts = {
  'shipmentStatusList': ["null"], // [String] | A list of ShipmentStatus values. Used to select shipments with a current status that matches the status values that you specify.
  'shipmentIdList': ["null"], // [String] | A list of shipment IDs used to select the shipments that you want. If both ShipmentStatusList and ShipmentIdList are specified, only shipments that match both parameters are returned.
  'lastUpdatedAfter': new Date("2013-10-20T19:20:30+01:00"), // Date | A date used for selecting inbound shipments that were last updated after (or at) a specified time. The selection includes updates made by Amazon and by the seller.
  'lastUpdatedBefore': new Date("2013-10-20T19:20:30+01:00"), // Date | A date used for selecting inbound shipments that were last updated before (or at) a specified time. The selection includes updates made by Amazon and by the seller.
  'nextToken': "nextToken_example" // String | A string token returned in the response to your previous request.
};
apiInstance.getShipments(queryType, marketplaceId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **queryType** | **String**| Indicates whether shipments are returned using shipment information (by providing the ShipmentStatusList or ShipmentIdList parameters), using a date range (by providing the LastUpdatedAfter and LastUpdatedBefore parameters), or by using NextToken to continue returning items specified in a previous request. | 
 **marketplaceId** | **String**| A marketplace identifier. Specifies the marketplace where the product would be stored. | 
 **shipmentStatusList** | [**[String]**](String.md)| A list of ShipmentStatus values. Used to select shipments with a current status that matches the status values that you specify. | [optional] 
 **shipmentIdList** | [**[String]**](String.md)| A list of shipment IDs used to select the shipments that you want. If both ShipmentStatusList and ShipmentIdList are specified, only shipments that match both parameters are returned. | [optional] 
 **lastUpdatedAfter** | **Date**| A date used for selecting inbound shipments that were last updated after (or at) a specified time. The selection includes updates made by Amazon and by the seller. | [optional] 
 **lastUpdatedBefore** | **Date**| A date used for selecting inbound shipments that were last updated before (or at) a specified time. The selection includes updates made by Amazon and by the seller. | [optional] 
 **nextToken** | **String**| A string token returned in the response to your previous request. | [optional] 

### Return type

[**GetShipmentsResponse**](GetShipmentsResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

