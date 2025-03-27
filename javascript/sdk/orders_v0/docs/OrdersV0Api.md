# SellingPartnerApiForOrders.OrdersV0Api

All URIs are relative to *https://sellingpartnerapi-na.amazon.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**confirmShipment**](OrdersV0Api.md#confirmShipment) | **POST** /orders/v0/orders/{orderId}/shipmentConfirmation | 
[**getOrder**](OrdersV0Api.md#getOrder) | **GET** /orders/v0/orders/{orderId} | 
[**getOrderAddress**](OrdersV0Api.md#getOrderAddress) | **GET** /orders/v0/orders/{orderId}/address | 
[**getOrderBuyerInfo**](OrdersV0Api.md#getOrderBuyerInfo) | **GET** /orders/v0/orders/{orderId}/buyerInfo | 
[**getOrderItems**](OrdersV0Api.md#getOrderItems) | **GET** /orders/v0/orders/{orderId}/orderItems | 
[**getOrderItemsBuyerInfo**](OrdersV0Api.md#getOrderItemsBuyerInfo) | **GET** /orders/v0/orders/{orderId}/orderItems/buyerInfo | 
[**getOrderRegulatedInfo**](OrdersV0Api.md#getOrderRegulatedInfo) | **GET** /orders/v0/orders/{orderId}/regulatedInfo | 
[**getOrders**](OrdersV0Api.md#getOrders) | **GET** /orders/v0/orders | 
[**updateVerificationStatus**](OrdersV0Api.md#updateVerificationStatus) | **PATCH** /orders/v0/orders/{orderId}/regulatedInfo | 



## confirmShipment

> confirmShipment(orderId, payload)



Updates the shipment confirmation status for a specified order.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 2 | 10 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The preceding table contains the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may receive higher rate and burst values then those shown here. For more information, refer to [Usage Plans and Rate Limits](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).

### Example

```javascript
import SellingPartnerApiForOrders from 'selling_partner_api_for_orders';

let apiInstance = new SellingPartnerApiForOrders.OrdersV0Api();
let orderId = "orderId_example"; // String | An Amazon-defined order identifier, in 3-7-7 format.
let payload = new SellingPartnerApiForOrders.ConfirmShipmentRequest(); // ConfirmShipmentRequest | Request body of `confirmShipment`.
apiInstance.confirmShipment(orderId, payload).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orderId** | **String**| An Amazon-defined order identifier, in 3-7-7 format. | 
 **payload** | [**ConfirmShipmentRequest**](ConfirmShipmentRequest.md)| Request body of &#x60;confirmShipment&#x60;. | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## getOrder

> GetOrderResponse getOrder(orderId)



Returns the order that you specify.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 0.5 | 30 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The preceding table contains the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may receive higher rate and burst values then those shown here. For more information, refer to [Usage Plans and Rate Limits](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).

### Example

```javascript
import SellingPartnerApiForOrders from 'selling_partner_api_for_orders';

let apiInstance = new SellingPartnerApiForOrders.OrdersV0Api();
let orderId = "orderId_example"; // String | An Amazon-defined order identifier, in 3-7-7 format.
apiInstance.getOrder(orderId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orderId** | **String**| An Amazon-defined order identifier, in 3-7-7 format. | 

### Return type

[**GetOrderResponse**](GetOrderResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getOrderAddress

> GetOrderAddressResponse getOrderAddress(orderId)



Returns the shipping address for the order that you specify.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 0.5 | 30 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The preceding table contains the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may receive higher rate and burst values then those shown here. For more information, refer to [Usage Plans and Rate Limits](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).

### Example

```javascript
import SellingPartnerApiForOrders from 'selling_partner_api_for_orders';

let apiInstance = new SellingPartnerApiForOrders.OrdersV0Api();
let orderId = "orderId_example"; // String | An `orderId` is an Amazon-defined order identifier, in 3-7-7 format.
apiInstance.getOrderAddress(orderId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orderId** | **String**| An &#x60;orderId&#x60; is an Amazon-defined order identifier, in 3-7-7 format. | 

### Return type

[**GetOrderAddressResponse**](GetOrderAddressResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getOrderBuyerInfo

> GetOrderBuyerInfoResponse getOrderBuyerInfo(orderId)



Returns buyer information for the order that you specify.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 0.5 | 30 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The preceding table contains the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may receive higher rate and burst values then those shown here. For more information, refer to [Usage Plans and Rate Limits](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).

### Example

```javascript
import SellingPartnerApiForOrders from 'selling_partner_api_for_orders';

let apiInstance = new SellingPartnerApiForOrders.OrdersV0Api();
let orderId = "orderId_example"; // String | An `orderId` is an Amazon-defined order identifier, in 3-7-7 format.
apiInstance.getOrderBuyerInfo(orderId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orderId** | **String**| An &#x60;orderId&#x60; is an Amazon-defined order identifier, in 3-7-7 format. | 

### Return type

[**GetOrderBuyerInfoResponse**](GetOrderBuyerInfoResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getOrderItems

> GetOrderItemsResponse getOrderItems(orderId, opts)



Returns detailed order item information for the order that you specify. If &#x60;NextToken&#x60; is provided, it&#39;s used to retrieve the next page of order items.  __Note__: When an order is in the Pending state (the order has been placed but payment has not been authorized), the getOrderItems operation does not return information about pricing, taxes, shipping charges, gift status or promotions for the order items in the order. After an order leaves the Pending state (this occurs when payment has been authorized) and enters the Unshipped, Partially Shipped, or Shipped state, the getOrderItems operation returns information about pricing, taxes, shipping charges, gift status and promotions for the order items in the order.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 0.5 | 30 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The preceding table contains the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may receive higher rate and burst values then those shown here. For more information, refer to [Usage Plans and Rate Limits](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).

### Example

```javascript
import SellingPartnerApiForOrders from 'selling_partner_api_for_orders';

let apiInstance = new SellingPartnerApiForOrders.OrdersV0Api();
let orderId = "orderId_example"; // String | An Amazon-defined order identifier, in 3-7-7 format.
let opts = {
  'nextToken': "nextToken_example" // String | A string token returned in the response of your previous request.
};
apiInstance.getOrderItems(orderId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orderId** | **String**| An Amazon-defined order identifier, in 3-7-7 format. | 
 **nextToken** | **String**| A string token returned in the response of your previous request. | [optional] 

### Return type

[**GetOrderItemsResponse**](GetOrderItemsResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getOrderItemsBuyerInfo

> GetOrderItemsBuyerInfoResponse getOrderItemsBuyerInfo(orderId, opts)



Returns buyer information for the order items in the order that you specify.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 0.5 | 30 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The preceding table contains the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may receive higher rate and burst values then those shown here. For more information, refer to [Usage Plans and Rate Limits](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).

### Example

```javascript
import SellingPartnerApiForOrders from 'selling_partner_api_for_orders';

let apiInstance = new SellingPartnerApiForOrders.OrdersV0Api();
let orderId = "orderId_example"; // String | An Amazon-defined order identifier, in 3-7-7 format.
let opts = {
  'nextToken': "nextToken_example" // String | A string token returned in the response of your previous request.
};
apiInstance.getOrderItemsBuyerInfo(orderId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orderId** | **String**| An Amazon-defined order identifier, in 3-7-7 format. | 
 **nextToken** | **String**| A string token returned in the response of your previous request. | [optional] 

### Return type

[**GetOrderItemsBuyerInfoResponse**](GetOrderItemsBuyerInfoResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getOrderRegulatedInfo

> GetOrderRegulatedInfoResponse getOrderRegulatedInfo(orderId)



Returns regulated information for the order that you specify.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 0.5 | 30 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The preceding table contains the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may receive higher rate and burst values then those shown here. For more information, refer to [Usage Plans and Rate Limits](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).

### Example

```javascript
import SellingPartnerApiForOrders from 'selling_partner_api_for_orders';

let apiInstance = new SellingPartnerApiForOrders.OrdersV0Api();
let orderId = "orderId_example"; // String | An Amazon-defined order identifier, in 3-7-7 format.
apiInstance.getOrderRegulatedInfo(orderId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orderId** | **String**| An Amazon-defined order identifier, in 3-7-7 format. | 

### Return type

[**GetOrderRegulatedInfoResponse**](GetOrderRegulatedInfoResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, PendingOrder, ApprovedOrder, RejectedOrder


## getOrders

> GetOrdersResponse getOrders(marketplaceIds, opts)



Returns orders that are created or updated during the specified time period. If you want to return specific types of orders, you can apply filters to your request. &#x60;NextToken&#x60; doesn&#39;t affect any filters that you include in your request; it only impacts the pagination for the filtered orders response.   **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 0.0167 | 20 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that are applied to the requested operation, when available. The preceding table contains the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may receive higher rate and burst values then those shown here. For more information, refer to [Usage Plans and Rate Limits](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api) in the Selling Partner API documentation.

### Example

```javascript
import SellingPartnerApiForOrders from 'selling_partner_api_for_orders';

let apiInstance = new SellingPartnerApiForOrders.OrdersV0Api();
let marketplaceIds = ["null"]; // [String] | A list of `MarketplaceId` values. Used to select orders that were placed in the specified marketplaces.  Refer to [Marketplace IDs](https://developer-docs.amazon.com/sp-api/docs/marketplace-ids) for a complete list of `marketplaceId` values.
let opts = {
  'createdAfter': "createdAfter_example", // String | Use this date to select orders created after (or at) a specified time. Only orders placed after the specified time are returned. The date must be in [ISO 8601](https://developer-docs.amazon.com/sp-api/docs/iso-8601) format.  **Note**: Either the `CreatedAfter` parameter or the `LastUpdatedAfter` parameter is required. Both cannot be empty. `LastUpdatedAfter` and `LastUpdatedBefore` cannot be set when `CreatedAfter` is set.
  'createdBefore': "createdBefore_example", // String | Use this date to select orders created before (or at) a specified time. Only orders placed before the specified time are returned. The date must be in [ISO 8601](https://developer-docs.amazon.com/sp-api/docs/iso-8601) format.  **Note**: `CreatedBefore` is optional when `CreatedAfter` is set. If specified, `CreatedBefore` must be equal to or after the `CreatedAfter` date and at least two minutes before current time.
  'lastUpdatedAfter': "lastUpdatedAfter_example", // String | Use this date to select orders that were last updated after (or at) a specified time. An update is defined as any change in order status, including the creation of a new order. Includes updates made by Amazon and by the seller. The date must be in [ISO 8601](https://developer-docs.amazon.com/sp-api/docs/iso-8601) format.  **Note**: Either the `CreatedAfter` parameter or the `LastUpdatedAfter` parameter is required. Both cannot be empty. `CreatedAfter` or `CreatedBefore` cannot be set when `LastUpdatedAfter` is set.
  'lastUpdatedBefore': "lastUpdatedBefore_example", // String | Use this date to select orders that were last updated before (or at) a specified time. An update is defined as any change in order status, including the creation of a new order. Includes updates made by Amazon and by the seller. The date must be in [ISO 8601](https://developer-docs.amazon.com/sp-api/docs/iso-8601) format.  **Note**: `LastUpdatedBefore` is optional when `LastUpdatedAfter` is set. But if specified, `LastUpdatedBefore` must be equal to or after the `LastUpdatedAfter` date and at least two minutes before current time.
  'orderStatuses': ["null"], // [String] | A list of `OrderStatus` values used to filter the results.  **Possible values:** - `PendingAvailability` (This status is available for pre-orders only. The order has been placed, payment has not been authorized, and the release date of the item is in the future.) - `Pending` (The order has been placed but payment has not been authorized.) - `Unshipped` (Payment has been authorized and the order is ready for shipment, but no items in the order have been shipped.) - `PartiallyShipped` (One or more, but not all, items in the order have been shipped.) - `Shipped` (All items in the order have been shipped.) - `InvoiceUnconfirmed` (All items in the order have been shipped. The seller has not yet given confirmation to Amazon that the invoice has been shipped to the buyer.) - `Canceled` (The order has been canceled.) - `Unfulfillable` (The order cannot be fulfilled. This state applies only to Multi-Channel Fulfillment orders.)
  'fulfillmentChannels': ["null"], // [String] | A list that indicates how an order was fulfilled. Filters the results by fulfillment channel.   **Possible values**: `AFN` (fulfilled by Amazon), `MFN` (fulfilled by seller).
  'paymentMethods': ["null"], // [String] | A list of payment method values. Use this field to select orders that were paid with the specified payment methods.  **Possible values**: `COD` (cash on delivery), `CVS` (convenience store), `Other` (Any payment method other than COD or CVS).
  'buyerEmail': "buyerEmail_example", // String | The email address of a buyer. Used to select orders that contain the specified email address.
  'sellerOrderId': "sellerOrderId_example", // String | An order identifier that is specified by the seller. Used to select only the orders that match the order identifier. If `SellerOrderId` is specified, then `FulfillmentChannels`, `OrderStatuses`, `PaymentMethod`, `LastUpdatedAfter`, LastUpdatedBefore, and `BuyerEmail` cannot be specified.
  'maxResultsPerPage': 56, // Number | A number that indicates the maximum number of orders that can be returned per page. Value must be 1 - 100. Default 100.
  'easyShipShipmentStatuses': ["null"], // [String] | A list of `EasyShipShipmentStatus` values. Used to select Easy Ship orders with statuses that match the specified values. If `EasyShipShipmentStatus` is specified, only Amazon Easy Ship orders are returned.  **Possible values:** - `PendingSchedule` (The package is awaiting the schedule for pick-up.) - `PendingPickUp` (Amazon has not yet picked up the package from the seller.) - `PendingDropOff` (The seller will deliver the package to the carrier.) - `LabelCanceled` (The seller canceled the pickup.) - `PickedUp` (Amazon has picked up the package from the seller.) - `DroppedOff` (The package is delivered to the carrier by the seller.) - `AtOriginFC` (The packaged is at the origin fulfillment center.) - `AtDestinationFC` (The package is at the destination fulfillment center.) - `Delivered` (The package has been delivered.) - `RejectedByBuyer` (The package has been rejected by the buyer.) - `Undeliverable` (The package cannot be delivered.) - `ReturningToSeller` (The package was not delivered and is being returned to the seller.) - `ReturnedToSeller` (The package was not delivered and was returned to the seller.) - `Lost` (The package is lost.) - `OutForDelivery` (The package is out for delivery.) - `Damaged` (The package was damaged by the carrier.)
  'electronicInvoiceStatuses': ["null"], // [String] | A list of `ElectronicInvoiceStatus` values. Used to select orders with electronic invoice statuses that match the specified values.  **Possible values:** - `NotRequired` (Electronic invoice submission is not required for this order.) - `NotFound` (The electronic invoice was not submitted for this order.) - `Processing` (The electronic invoice is being processed for this order.) - `Errored` (The last submitted electronic invoice was rejected for this order.) - `Accepted` (The last submitted electronic invoice was submitted and accepted.)
  'nextToken': "nextToken_example", // String | A string token returned in the response of your previous request.
  'amazonOrderIds': ["null"], // [String] | A list of `AmazonOrderId` values. An `AmazonOrderId` is an Amazon-defined order identifier, in 3-7-7 format.
  'actualFulfillmentSupplySourceId': "actualFulfillmentSupplySourceId_example", // String | The `sourceId` of the location from where you want the order fulfilled.
  'isISPU': true, // Boolean | When true, this order is marked to be picked up from a store rather than delivered.
  'storeChainStoreId': "storeChainStoreId_example", // String | The store chain store identifier. Linked to a specific store in a store chain.
  'earliestDeliveryDateBefore': "earliestDeliveryDateBefore_example", // String | Use this date to select orders with a earliest delivery date before (or at) a specified time. The date must be in [ISO 8601](https://developer-docs.amazon.com/sp-api/docs/iso-8601) format.
  'earliestDeliveryDateAfter': "earliestDeliveryDateAfter_example", // String | Use this date to select orders with a earliest delivery date after (or at) a specified time. The date must be in [ISO 8601](https://developer-docs.amazon.com/sp-api/docs/iso-8601) format.
  'latestDeliveryDateBefore': "latestDeliveryDateBefore_example", // String | Use this date to select orders with a latest delivery date before (or at) a specified time. The date must be in [ISO 8601](https://developer-docs.amazon.com/sp-api/docs/iso-8601) format.
  'latestDeliveryDateAfter': "latestDeliveryDateAfter_example" // String | Use this date to select orders with a latest delivery date after (or at) a specified time. The date must be in [ISO 8601](https://developer-docs.amazon.com/sp-api/docs/iso-8601) format.
};
apiInstance.getOrders(marketplaceIds, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **marketplaceIds** | [**[String]**](String.md)| A list of &#x60;MarketplaceId&#x60; values. Used to select orders that were placed in the specified marketplaces.  Refer to [Marketplace IDs](https://developer-docs.amazon.com/sp-api/docs/marketplace-ids) for a complete list of &#x60;marketplaceId&#x60; values. | 
 **createdAfter** | **String**| Use this date to select orders created after (or at) a specified time. Only orders placed after the specified time are returned. The date must be in [ISO 8601](https://developer-docs.amazon.com/sp-api/docs/iso-8601) format.  **Note**: Either the &#x60;CreatedAfter&#x60; parameter or the &#x60;LastUpdatedAfter&#x60; parameter is required. Both cannot be empty. &#x60;LastUpdatedAfter&#x60; and &#x60;LastUpdatedBefore&#x60; cannot be set when &#x60;CreatedAfter&#x60; is set. | [optional] 
 **createdBefore** | **String**| Use this date to select orders created before (or at) a specified time. Only orders placed before the specified time are returned. The date must be in [ISO 8601](https://developer-docs.amazon.com/sp-api/docs/iso-8601) format.  **Note**: &#x60;CreatedBefore&#x60; is optional when &#x60;CreatedAfter&#x60; is set. If specified, &#x60;CreatedBefore&#x60; must be equal to or after the &#x60;CreatedAfter&#x60; date and at least two minutes before current time. | [optional] 
 **lastUpdatedAfter** | **String**| Use this date to select orders that were last updated after (or at) a specified time. An update is defined as any change in order status, including the creation of a new order. Includes updates made by Amazon and by the seller. The date must be in [ISO 8601](https://developer-docs.amazon.com/sp-api/docs/iso-8601) format.  **Note**: Either the &#x60;CreatedAfter&#x60; parameter or the &#x60;LastUpdatedAfter&#x60; parameter is required. Both cannot be empty. &#x60;CreatedAfter&#x60; or &#x60;CreatedBefore&#x60; cannot be set when &#x60;LastUpdatedAfter&#x60; is set. | [optional] 
 **lastUpdatedBefore** | **String**| Use this date to select orders that were last updated before (or at) a specified time. An update is defined as any change in order status, including the creation of a new order. Includes updates made by Amazon and by the seller. The date must be in [ISO 8601](https://developer-docs.amazon.com/sp-api/docs/iso-8601) format.  **Note**: &#x60;LastUpdatedBefore&#x60; is optional when &#x60;LastUpdatedAfter&#x60; is set. But if specified, &#x60;LastUpdatedBefore&#x60; must be equal to or after the &#x60;LastUpdatedAfter&#x60; date and at least two minutes before current time. | [optional] 
 **orderStatuses** | [**[String]**](String.md)| A list of &#x60;OrderStatus&#x60; values used to filter the results.  **Possible values:** - &#x60;PendingAvailability&#x60; (This status is available for pre-orders only. The order has been placed, payment has not been authorized, and the release date of the item is in the future.) - &#x60;Pending&#x60; (The order has been placed but payment has not been authorized.) - &#x60;Unshipped&#x60; (Payment has been authorized and the order is ready for shipment, but no items in the order have been shipped.) - &#x60;PartiallyShipped&#x60; (One or more, but not all, items in the order have been shipped.) - &#x60;Shipped&#x60; (All items in the order have been shipped.) - &#x60;InvoiceUnconfirmed&#x60; (All items in the order have been shipped. The seller has not yet given confirmation to Amazon that the invoice has been shipped to the buyer.) - &#x60;Canceled&#x60; (The order has been canceled.) - &#x60;Unfulfillable&#x60; (The order cannot be fulfilled. This state applies only to Multi-Channel Fulfillment orders.) | [optional] 
 **fulfillmentChannels** | [**[String]**](String.md)| A list that indicates how an order was fulfilled. Filters the results by fulfillment channel.   **Possible values**: &#x60;AFN&#x60; (fulfilled by Amazon), &#x60;MFN&#x60; (fulfilled by seller). | [optional] 
 **paymentMethods** | [**[String]**](String.md)| A list of payment method values. Use this field to select orders that were paid with the specified payment methods.  **Possible values**: &#x60;COD&#x60; (cash on delivery), &#x60;CVS&#x60; (convenience store), &#x60;Other&#x60; (Any payment method other than COD or CVS). | [optional] 
 **buyerEmail** | **String**| The email address of a buyer. Used to select orders that contain the specified email address. | [optional] 
 **sellerOrderId** | **String**| An order identifier that is specified by the seller. Used to select only the orders that match the order identifier. If &#x60;SellerOrderId&#x60; is specified, then &#x60;FulfillmentChannels&#x60;, &#x60;OrderStatuses&#x60;, &#x60;PaymentMethod&#x60;, &#x60;LastUpdatedAfter&#x60;, LastUpdatedBefore, and &#x60;BuyerEmail&#x60; cannot be specified. | [optional] 
 **maxResultsPerPage** | **Number**| A number that indicates the maximum number of orders that can be returned per page. Value must be 1 - 100. Default 100. | [optional] 
 **easyShipShipmentStatuses** | [**[String]**](String.md)| A list of &#x60;EasyShipShipmentStatus&#x60; values. Used to select Easy Ship orders with statuses that match the specified values. If &#x60;EasyShipShipmentStatus&#x60; is specified, only Amazon Easy Ship orders are returned.  **Possible values:** - &#x60;PendingSchedule&#x60; (The package is awaiting the schedule for pick-up.) - &#x60;PendingPickUp&#x60; (Amazon has not yet picked up the package from the seller.) - &#x60;PendingDropOff&#x60; (The seller will deliver the package to the carrier.) - &#x60;LabelCanceled&#x60; (The seller canceled the pickup.) - &#x60;PickedUp&#x60; (Amazon has picked up the package from the seller.) - &#x60;DroppedOff&#x60; (The package is delivered to the carrier by the seller.) - &#x60;AtOriginFC&#x60; (The packaged is at the origin fulfillment center.) - &#x60;AtDestinationFC&#x60; (The package is at the destination fulfillment center.) - &#x60;Delivered&#x60; (The package has been delivered.) - &#x60;RejectedByBuyer&#x60; (The package has been rejected by the buyer.) - &#x60;Undeliverable&#x60; (The package cannot be delivered.) - &#x60;ReturningToSeller&#x60; (The package was not delivered and is being returned to the seller.) - &#x60;ReturnedToSeller&#x60; (The package was not delivered and was returned to the seller.) - &#x60;Lost&#x60; (The package is lost.) - &#x60;OutForDelivery&#x60; (The package is out for delivery.) - &#x60;Damaged&#x60; (The package was damaged by the carrier.) | [optional] 
 **electronicInvoiceStatuses** | [**[String]**](String.md)| A list of &#x60;ElectronicInvoiceStatus&#x60; values. Used to select orders with electronic invoice statuses that match the specified values.  **Possible values:** - &#x60;NotRequired&#x60; (Electronic invoice submission is not required for this order.) - &#x60;NotFound&#x60; (The electronic invoice was not submitted for this order.) - &#x60;Processing&#x60; (The electronic invoice is being processed for this order.) - &#x60;Errored&#x60; (The last submitted electronic invoice was rejected for this order.) - &#x60;Accepted&#x60; (The last submitted electronic invoice was submitted and accepted.) | [optional] 
 **nextToken** | **String**| A string token returned in the response of your previous request. | [optional] 
 **amazonOrderIds** | [**[String]**](String.md)| A list of &#x60;AmazonOrderId&#x60; values. An &#x60;AmazonOrderId&#x60; is an Amazon-defined order identifier, in 3-7-7 format. | [optional] 
 **actualFulfillmentSupplySourceId** | **String**| The &#x60;sourceId&#x60; of the location from where you want the order fulfilled. | [optional] 
 **isISPU** | **Boolean**| When true, this order is marked to be picked up from a store rather than delivered. | [optional] 
 **storeChainStoreId** | **String**| The store chain store identifier. Linked to a specific store in a store chain. | [optional] 
 **earliestDeliveryDateBefore** | **String**| Use this date to select orders with a earliest delivery date before (or at) a specified time. The date must be in [ISO 8601](https://developer-docs.amazon.com/sp-api/docs/iso-8601) format. | [optional] 
 **earliestDeliveryDateAfter** | **String**| Use this date to select orders with a earliest delivery date after (or at) a specified time. The date must be in [ISO 8601](https://developer-docs.amazon.com/sp-api/docs/iso-8601) format. | [optional] 
 **latestDeliveryDateBefore** | **String**| Use this date to select orders with a latest delivery date before (or at) a specified time. The date must be in [ISO 8601](https://developer-docs.amazon.com/sp-api/docs/iso-8601) format. | [optional] 
 **latestDeliveryDateAfter** | **String**| Use this date to select orders with a latest delivery date after (or at) a specified time. The date must be in [ISO 8601](https://developer-docs.amazon.com/sp-api/docs/iso-8601) format. | [optional] 

### Return type

[**GetOrdersResponse**](GetOrdersResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updateVerificationStatus

> updateVerificationStatus(orderId, payload)



Updates (approves or rejects) the verification status of an order containing regulated products.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 0.5 | 30 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The preceding table contains the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may receive higher rate and burst values then those shown here. For more information, refer to [Usage Plans and Rate Limits](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).

### Example

```javascript
import SellingPartnerApiForOrders from 'selling_partner_api_for_orders';

let apiInstance = new SellingPartnerApiForOrders.OrdersV0Api();
let orderId = "orderId_example"; // String | An Amazon-defined order identifier, in 3-7-7 format.
let payload = new SellingPartnerApiForOrders.UpdateVerificationStatusRequest(); // UpdateVerificationStatusRequest | The request body for the `updateVerificationStatus` operation.
apiInstance.updateVerificationStatus(orderId, payload).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orderId** | **String**| An Amazon-defined order identifier, in 3-7-7 format. | 
 **payload** | [**UpdateVerificationStatusRequest**](UpdateVerificationStatusRequest.md)| The request body for the &#x60;updateVerificationStatus&#x60; operation. | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

