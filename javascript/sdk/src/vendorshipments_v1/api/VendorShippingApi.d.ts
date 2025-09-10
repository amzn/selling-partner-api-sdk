/**
* VendorShipping service.
* @module vendorshipments_v1/api/VendorShippingApi
* @version v1
*/
export class VendorShippingApi {
    /**
      * Constructs a new VendorShippingApi.
      * @alias module:vendorshipments_v1/api/VendorShippingApi
      * @class
      * @param {ApiClient} [apiClient] Optional API client implementation to use,
      * default to {@link ApiClient#instance} if unspecified.
      */
    constructor(apiClient?: ApiClient);
    apiClient: any;
    /**
       * Initialize rate limiters for API operations
       */
    initializeDefaultRateLimiterMap(): void;
    /**
       * Get rate limiter for a specific operation
       * @param {String} operation name
       */
    getRateLimiter(operation: string): any;
    /**
       * GetShipmentDetails
       * Returns the Details about Shipment, Carrier Details,  status of the shipment, container details and other details related to shipment based on the filter parameters value that you specify.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 10 | 10 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
       * @param {Object} [opts] Optional parameters
       * @param {Number} [opts.limit] The limit to the number of records returned. Default value is 50 records.
       * @param {String} [opts.sortOrder] Sort in ascending or descending order by purchase order creation date.
       * @param {String} [opts.nextToken] Used for pagination when there are more shipments than the specified result size limit.
       * @param {Date} [opts.createdAfter] Get Shipment Details that became available after this timestamp will be included in the result. Must be in &lt;a href&#x3D;&#39;https://developer-docs.amazon.com/sp-api/docs/iso-8601&#39;&gt;ISO 8601&lt;/a&gt; format.
       * @param {Date} [opts.createdBefore] Get Shipment Details that became available before this timestamp will be included in the result. Must be in &lt;a href&#x3D;&#39;https://developer-docs.amazon.com/sp-api/docs/iso-8601&#39;&gt;ISO 8601&lt;/a&gt; format.
       * @param {Date} [opts.shipmentConfirmedBefore] Get Shipment Details by passing Shipment confirmed create Date Before. Must be in &lt;a href&#x3D;&#39;https://developer-docs.amazon.com/sp-api/docs/iso-8601&#39;&gt;ISO 8601&lt;/a&gt; format.
       * @param {Date} [opts.shipmentConfirmedAfter] Get Shipment Details by passing Shipment confirmed create Date After. Must be in &lt;a href&#x3D;&#39;https://developer-docs.amazon.com/sp-api/docs/iso-8601&#39;&gt;ISO 8601&lt;/a&gt; format.
       * @param {Date} [opts.packageLabelCreatedBefore] Get Shipment Details by passing Package label create Date by buyer. Must be in &lt;a href&#x3D;&#39;https://developer-docs.amazon.com/sp-api/docs/iso-8601&#39;&gt;ISO 8601&lt;/a&gt; format.
       * @param {Date} [opts.packageLabelCreatedAfter] Get Shipment Details by passing Package label create Date After by buyer. Must be in &lt;a href&#x3D;&#39;https://developer-docs.amazon.com/sp-api/docs/iso-8601&#39;&gt;ISO 8601&lt;/a&gt; format.
       * @param {Date} [opts.shippedBefore] Get Shipment Details by passing Shipped Date Before. Must be in &lt;a href&#x3D;&#39;https://developer-docs.amazon.com/sp-api/docs/iso-8601&#39;&gt;ISO 8601&lt;/a&gt; format.
       * @param {Date} [opts.shippedAfter] Get Shipment Details by passing Shipped Date After. Must be in &lt;a href&#x3D;&#39;https://developer-docs.amazon.com/sp-api/docs/iso-8601&#39;&gt;ISO 8601&lt;/a&gt; format.
       * @param {Date} [opts.estimatedDeliveryBefore] Get Shipment Details by passing Estimated Delivery Date Before. Must be in &lt;a href&#x3D;&#39;https://developer-docs.amazon.com/sp-api/docs/iso-8601&#39;&gt;ISO 8601&lt;/a&gt; format.
       * @param {Date} [opts.estimatedDeliveryAfter] Get Shipment Details by passing Estimated Delivery Date Before. Must be in &lt;a href&#x3D;&#39;https://developer-docs.amazon.com/sp-api/docs/iso-8601&#39;&gt;ISO 8601&lt;/a&gt; format.
       * @param {Date} [opts.shipmentDeliveryBefore] Get Shipment Details by passing Shipment Delivery Date Before. Must be in &lt;a href&#x3D;&#39;https://developer-docs.amazon.com/sp-api/docs/iso-8601&#39;&gt;ISO 8601&lt;/a&gt; format.
       * @param {Date} [opts.shipmentDeliveryAfter] Get Shipment Details by passing Shipment Delivery Date After. Must be in &lt;a href&#x3D;&#39;https://developer-docs.amazon.com/sp-api/docs/iso-8601&#39;&gt;ISO 8601&lt;/a&gt; format.
       * @param {Date} [opts.requestedPickUpBefore] Get Shipment Details by passing Before Requested pickup date. Must be in &lt;a href&#x3D;&#39;https://developer-docs.amazon.com/sp-api/docs/iso-8601&#39;&gt;ISO 8601&lt;/a&gt; format.
       * @param {Date} [opts.requestedPickUpAfter] Get Shipment Details by passing After Requested pickup date. Must be in &lt;a href&#x3D;&#39;https://developer-docs.amazon.com/sp-api/docs/iso-8601&#39;&gt;ISO 8601&lt;/a&gt; format.
       * @param {Date} [opts.scheduledPickUpBefore] Get Shipment Details by passing Before scheduled pickup date. Must be in &lt;a href&#x3D;&#39;https://developer-docs.amazon.com/sp-api/docs/iso-8601&#39;&gt;ISO 8601&lt;/a&gt; format.
       * @param {Date} [opts.scheduledPickUpAfter] Get Shipment Details by passing After Scheduled pickup date. Must be in &lt;a href&#x3D;&#39;https://developer-docs.amazon.com/sp-api/docs/iso-8601&#39;&gt;ISO 8601&lt;/a&gt; format.
       * @param {String} [opts.currentShipmentStatus] Get Shipment Details by passing Current shipment status.
       * @param {String} [opts.vendorShipmentIdentifier] Get Shipment Details by passing Vendor Shipment ID
       * @param {String} [opts.buyerReferenceNumber] Get Shipment Details by passing buyer Reference ID
       * @param {String} [opts.buyerWarehouseCode] Get Shipping Details based on buyer warehouse code. This value should be same as &#39;shipToParty.partyId&#39; in the Shipment.
       * @param {String} [opts.sellerWarehouseCode] Get Shipping Details based on vendor warehouse code. This value should be same as &#39;sellingParty.partyId&#39; in the Shipment.
       * @return {Promise<GetShipmentDetailsResponse>}
       */
    getShipmentDetailsWithHttpInfo(opts?: {
        limit?: number;
        sortOrder?: string;
        nextToken?: string;
        createdAfter?: Date;
        createdBefore?: Date;
        shipmentConfirmedBefore?: Date;
        shipmentConfirmedAfter?: Date;
        packageLabelCreatedBefore?: Date;
        packageLabelCreatedAfter?: Date;
        shippedBefore?: Date;
        shippedAfter?: Date;
        estimatedDeliveryBefore?: Date;
        estimatedDeliveryAfter?: Date;
        shipmentDeliveryBefore?: Date;
        shipmentDeliveryAfter?: Date;
        requestedPickUpBefore?: Date;
        requestedPickUpAfter?: Date;
        scheduledPickUpBefore?: Date;
        scheduledPickUpAfter?: Date;
        currentShipmentStatus?: string;
        vendorShipmentIdentifier?: string;
        buyerReferenceNumber?: string;
        buyerWarehouseCode?: string;
        sellerWarehouseCode?: string;
    }): Promise<GetShipmentDetailsResponse>;
    /**
       * GetShipmentDetails
       * Returns the Details about Shipment, Carrier Details,  status of the shipment, container details and other details related to shipment based on the filter parameters value that you specify.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 10 | 10 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
       * @param {Object} [opts] Optional parameters
       * @param {Number} [opts.limit] The limit to the number of records returned. Default value is 50 records.
       * @param {String} [opts.sortOrder] Sort in ascending or descending order by purchase order creation date.
       * @param {String} [opts.nextToken] Used for pagination when there are more shipments than the specified result size limit.
       * @param {Date} [opts.createdAfter] Get Shipment Details that became available after this timestamp will be included in the result. Must be in &lt;a href&#x3D;&#39;https://developer-docs.amazon.com/sp-api/docs/iso-8601&#39;&gt;ISO 8601&lt;/a&gt; format.
       * @param {Date} [opts.createdBefore] Get Shipment Details that became available before this timestamp will be included in the result. Must be in &lt;a href&#x3D;&#39;https://developer-docs.amazon.com/sp-api/docs/iso-8601&#39;&gt;ISO 8601&lt;/a&gt; format.
       * @param {Date} [opts.shipmentConfirmedBefore] Get Shipment Details by passing Shipment confirmed create Date Before. Must be in &lt;a href&#x3D;&#39;https://developer-docs.amazon.com/sp-api/docs/iso-8601&#39;&gt;ISO 8601&lt;/a&gt; format.
       * @param {Date} [opts.shipmentConfirmedAfter] Get Shipment Details by passing Shipment confirmed create Date After. Must be in &lt;a href&#x3D;&#39;https://developer-docs.amazon.com/sp-api/docs/iso-8601&#39;&gt;ISO 8601&lt;/a&gt; format.
       * @param {Date} [opts.packageLabelCreatedBefore] Get Shipment Details by passing Package label create Date by buyer. Must be in &lt;a href&#x3D;&#39;https://developer-docs.amazon.com/sp-api/docs/iso-8601&#39;&gt;ISO 8601&lt;/a&gt; format.
       * @param {Date} [opts.packageLabelCreatedAfter] Get Shipment Details by passing Package label create Date After by buyer. Must be in &lt;a href&#x3D;&#39;https://developer-docs.amazon.com/sp-api/docs/iso-8601&#39;&gt;ISO 8601&lt;/a&gt; format.
       * @param {Date} [opts.shippedBefore] Get Shipment Details by passing Shipped Date Before. Must be in &lt;a href&#x3D;&#39;https://developer-docs.amazon.com/sp-api/docs/iso-8601&#39;&gt;ISO 8601&lt;/a&gt; format.
       * @param {Date} [opts.shippedAfter] Get Shipment Details by passing Shipped Date After. Must be in &lt;a href&#x3D;&#39;https://developer-docs.amazon.com/sp-api/docs/iso-8601&#39;&gt;ISO 8601&lt;/a&gt; format.
       * @param {Date} [opts.estimatedDeliveryBefore] Get Shipment Details by passing Estimated Delivery Date Before. Must be in &lt;a href&#x3D;&#39;https://developer-docs.amazon.com/sp-api/docs/iso-8601&#39;&gt;ISO 8601&lt;/a&gt; format.
       * @param {Date} [opts.estimatedDeliveryAfter] Get Shipment Details by passing Estimated Delivery Date Before. Must be in &lt;a href&#x3D;&#39;https://developer-docs.amazon.com/sp-api/docs/iso-8601&#39;&gt;ISO 8601&lt;/a&gt; format.
       * @param {Date} [opts.shipmentDeliveryBefore] Get Shipment Details by passing Shipment Delivery Date Before. Must be in &lt;a href&#x3D;&#39;https://developer-docs.amazon.com/sp-api/docs/iso-8601&#39;&gt;ISO 8601&lt;/a&gt; format.
       * @param {Date} [opts.shipmentDeliveryAfter] Get Shipment Details by passing Shipment Delivery Date After. Must be in &lt;a href&#x3D;&#39;https://developer-docs.amazon.com/sp-api/docs/iso-8601&#39;&gt;ISO 8601&lt;/a&gt; format.
       * @param {Date} [opts.requestedPickUpBefore] Get Shipment Details by passing Before Requested pickup date. Must be in &lt;a href&#x3D;&#39;https://developer-docs.amazon.com/sp-api/docs/iso-8601&#39;&gt;ISO 8601&lt;/a&gt; format.
       * @param {Date} [opts.requestedPickUpAfter] Get Shipment Details by passing After Requested pickup date. Must be in &lt;a href&#x3D;&#39;https://developer-docs.amazon.com/sp-api/docs/iso-8601&#39;&gt;ISO 8601&lt;/a&gt; format.
       * @param {Date} [opts.scheduledPickUpBefore] Get Shipment Details by passing Before scheduled pickup date. Must be in &lt;a href&#x3D;&#39;https://developer-docs.amazon.com/sp-api/docs/iso-8601&#39;&gt;ISO 8601&lt;/a&gt; format.
       * @param {Date} [opts.scheduledPickUpAfter] Get Shipment Details by passing After Scheduled pickup date. Must be in &lt;a href&#x3D;&#39;https://developer-docs.amazon.com/sp-api/docs/iso-8601&#39;&gt;ISO 8601&lt;/a&gt; format.
       * @param {String} [opts.currentShipmentStatus] Get Shipment Details by passing Current shipment status.
       * @param {String} [opts.vendorShipmentIdentifier] Get Shipment Details by passing Vendor Shipment ID
       * @param {String} [opts.buyerReferenceNumber] Get Shipment Details by passing buyer Reference ID
       * @param {String} [opts.buyerWarehouseCode] Get Shipping Details based on buyer warehouse code. This value should be same as &#39;shipToParty.partyId&#39; in the Shipment.
       * @param {String} [opts.sellerWarehouseCode] Get Shipping Details based on vendor warehouse code. This value should be same as &#39;sellingParty.partyId&#39; in the Shipment.
       * @return {Promise<GetShipmentDetailsResponse>}
       */
    getShipmentDetails(opts?: {
        limit?: number;
        sortOrder?: string;
        nextToken?: string;
        createdAfter?: Date;
        createdBefore?: Date;
        shipmentConfirmedBefore?: Date;
        shipmentConfirmedAfter?: Date;
        packageLabelCreatedBefore?: Date;
        packageLabelCreatedAfter?: Date;
        shippedBefore?: Date;
        shippedAfter?: Date;
        estimatedDeliveryBefore?: Date;
        estimatedDeliveryAfter?: Date;
        shipmentDeliveryBefore?: Date;
        shipmentDeliveryAfter?: Date;
        requestedPickUpBefore?: Date;
        requestedPickUpAfter?: Date;
        scheduledPickUpBefore?: Date;
        scheduledPickUpAfter?: Date;
        currentShipmentStatus?: string;
        vendorShipmentIdentifier?: string;
        buyerReferenceNumber?: string;
        buyerWarehouseCode?: string;
        sellerWarehouseCode?: string;
    }): Promise<GetShipmentDetailsResponse>;
    /**
       * Returns small parcel shipment labels based on the filters that you specify.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 10 | 10 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header contains the usage plan rate limits for the operation, when available. The preceding table contains the default rate and burst values for this operation. Selling partners whose business demands require higher throughput might have higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
       * @param {Object} [opts] Optional parameters
       * @param {Number} [opts.limit] The limit to the number of records returned. Default value is 50 records.
       * @param {String} [opts.sortOrder] Sort the list by shipment label creation date in ascending or descending order.
       * @param {String} [opts.nextToken] A token that you use to retrieve the next page of results. The response includes &#x60;nextToken&#x60; when the number of results exceeds the specified &#x60;pageSize&#x60; value. To get the next page of results, call the operation with this token and include the same arguments as the call that produced the token. To get a complete list, call this operation until &#x60;nextToken&#x60; is null. Note that this operation can return empty pages.
       * @param {Date} [opts.labelCreatedAfter] Shipment labels created after this time will be included in the result. This field must be in [ISO 8601](https://developer-docs.amazon.com/sp-api/docs/iso-8601) datetime format.
       * @param {Date} [opts.labelCreatedBefore] Shipment labels created before this time will be included in the result. This field must be in [ISO 8601](https://developer-docs.amazon.com/sp-api/docs/iso-8601) datetime format.
       * @param {String} [opts.buyerReferenceNumber] Get Shipment labels by passing buyer reference number.
       * @param {String} [opts.vendorShipmentIdentifier] Get Shipment labels by passing vendor shipment identifier.
       * @param {String} [opts.sellerWarehouseCode] Get Shipping labels based on vendor warehouse code. This value must be same as the &#x60;sellingParty.partyId&#x60; in the shipment.
       * @return {Promise<GetShipmentLabels>}
       */
    getShipmentLabelsWithHttpInfo(opts?: {
        limit?: number;
        sortOrder?: string;
        nextToken?: string;
        labelCreatedAfter?: Date;
        labelCreatedBefore?: Date;
        buyerReferenceNumber?: string;
        vendorShipmentIdentifier?: string;
        sellerWarehouseCode?: string;
    }): Promise<GetShipmentLabels>;
    /**
       * Returns small parcel shipment labels based on the filters that you specify.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 10 | 10 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header contains the usage plan rate limits for the operation, when available. The preceding table contains the default rate and burst values for this operation. Selling partners whose business demands require higher throughput might have higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
       * @param {Object} [opts] Optional parameters
       * @param {Number} [opts.limit] The limit to the number of records returned. Default value is 50 records.
       * @param {String} [opts.sortOrder] Sort the list by shipment label creation date in ascending or descending order.
       * @param {String} [opts.nextToken] A token that you use to retrieve the next page of results. The response includes &#x60;nextToken&#x60; when the number of results exceeds the specified &#x60;pageSize&#x60; value. To get the next page of results, call the operation with this token and include the same arguments as the call that produced the token. To get a complete list, call this operation until &#x60;nextToken&#x60; is null. Note that this operation can return empty pages.
       * @param {Date} [opts.labelCreatedAfter] Shipment labels created after this time will be included in the result. This field must be in [ISO 8601](https://developer-docs.amazon.com/sp-api/docs/iso-8601) datetime format.
       * @param {Date} [opts.labelCreatedBefore] Shipment labels created before this time will be included in the result. This field must be in [ISO 8601](https://developer-docs.amazon.com/sp-api/docs/iso-8601) datetime format.
       * @param {String} [opts.buyerReferenceNumber] Get Shipment labels by passing buyer reference number.
       * @param {String} [opts.vendorShipmentIdentifier] Get Shipment labels by passing vendor shipment identifier.
       * @param {String} [opts.sellerWarehouseCode] Get Shipping labels based on vendor warehouse code. This value must be same as the &#x60;sellingParty.partyId&#x60; in the shipment.
       * @return {Promise<GetShipmentLabels>}
       */
    getShipmentLabels(opts?: {
        limit?: number;
        sortOrder?: string;
        nextToken?: string;
        labelCreatedAfter?: Date;
        labelCreatedBefore?: Date;
        buyerReferenceNumber?: string;
        vendorShipmentIdentifier?: string;
        sellerWarehouseCode?: string;
    }): Promise<GetShipmentLabels>;
    /**
       * SubmitShipmentConfirmations
       * Submits one or more shipment confirmations for vendor orders.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 10 | 10 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
       * @param {SubmitShipmentConfirmationsRequest} body A request to submit shipment confirmation.
       * @return {Promise<SubmitShipmentConfirmationsResponse>}
       */
    submitShipmentConfirmationsWithHttpInfo(body: SubmitShipmentConfirmationsRequest): Promise<SubmitShipmentConfirmationsResponse>;
    /**
       * SubmitShipmentConfirmations
       * Submits one or more shipment confirmations for vendor orders.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 10 | 10 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
       * @param {SubmitShipmentConfirmationsRequest} body A request to submit shipment confirmation.
       * @return {Promise<SubmitShipmentConfirmationsResponse>}
       */
    submitShipmentConfirmations(body: SubmitShipmentConfirmationsRequest): Promise<SubmitShipmentConfirmationsResponse>;
    /**
       * SubmitShipments
       * Submits one or more shipment request for vendor Orders.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 10 | 10 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
       * @param {SubmitShipments} body A request to submit shipment request.
       * @return {Promise<SubmitShipmentConfirmationsResponse>}
       */
    submitShipmentsWithHttpInfo(body: SubmitShipments): Promise<SubmitShipmentConfirmationsResponse>;
    /**
       * SubmitShipments
       * Submits one or more shipment request for vendor Orders.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 10 | 10 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
       * @param {SubmitShipments} body A request to submit shipment request.
       * @return {Promise<SubmitShipmentConfirmationsResponse>}
       */
    submitShipments(body: SubmitShipments): Promise<SubmitShipmentConfirmationsResponse>;
    #private;
}
import { GetShipmentDetailsResponse } from '../model/GetShipmentDetailsResponse.js';
import { GetShipmentLabels } from '../model/GetShipmentLabels.js';
import { SubmitShipmentConfirmationsRequest } from '../model/SubmitShipmentConfirmationsRequest.js';
import { SubmitShipmentConfirmationsResponse } from '../model/SubmitShipmentConfirmationsResponse.js';
import { SubmitShipments } from '../model/SubmitShipments.js';
import { ApiClient } from '../ApiClient.js';
//# sourceMappingURL=VendorShippingApi.d.ts.map