/**
* ShipmentRetrieval service.
* @module externalfulfillmentshipments_v2024_09_11/api/ShipmentRetrievalApi
* @version 2024-09-11
*/
export class ShipmentRetrievalApi {
    /**
      * Constructs a new ShipmentRetrievalApi.
      * @alias module:externalfulfillmentshipments_v2024_09_11/api/ShipmentRetrievalApi
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
       * Get a single shipment with the ID you specify.
       * @param {String} shipmentId The ID of the shipment you want to retrieve.
       * @return {Promise<Shipment>}
       */
    getShipmentWithHttpInfo(shipmentId: string): Promise<Shipment>;
    /**
       * Get a single shipment with the ID you specify.
       * @param {String} shipmentId The ID of the shipment you want to retrieve.
       * @return {Promise<Shipment>}
       */
    getShipment(shipmentId: string): Promise<Shipment>;
    /**
       * Get a list of shipments created for the seller in the status you specify. Shipments can be further filtered based on the fulfillment node or the time of the shipments&#39; last update.
       * @param {String} status The status of shipment you want to include in the response. To retrieve all new shipments, set this value to &#x60;ACCEPTED&#x60;.
       * @param {Object} [opts] Optional parameters
       * @param {String} [opts.locationId] The Amazon channel location identifier for the shipments you want to retrieve.
       * @param {String} [opts.marketplaceId] The marketplace ID associated with the location. To find the ID for your marketplace, refer to [Marketplace IDs](https://developer-docs.amazon.com/sp-api/docs/marketplace-ids).
       * @param {String} [opts.channelName] The channel name associated with the location.
       * @param {String} [opts.lastUpdatedAfter] The response includes shipments whose latest update is after the specified time. In [ISO 8601](https://developer-docs.amazon.com/sp-api/docs/iso-8601) date-time format.
       * @param {String} [opts.lastUpdatedBefore] The response includes shipments whose latest update is before the specified time. In [ISO 8601](https://developer-docs.amazon.com/sp-api/docs/iso-8601) date-time format.
       * @param {Number} [opts.maxResults] The maximum number of shipments to include in the response.
       * @param {String} [opts.paginationToken] A token that you use to retrieve the next page of results. The response includes &#x60;nextToken&#x60; when there are multiple pages of results. To get the next page of results, call the operation with this token and include the same arguments as the call that produced the token. To get a complete list, call this operation until &#x60;nextToken&#x60; is null. Note that this operation can return empty pages.
       * @return {Promise<ShipmentsResponse>}
       */
    getShipmentsWithHttpInfo(status: string, opts?: {
        locationId?: string;
        marketplaceId?: string;
        channelName?: string;
        lastUpdatedAfter?: string;
        lastUpdatedBefore?: string;
        maxResults?: number;
        paginationToken?: string;
    }): Promise<ShipmentsResponse>;
    /**
       * Get a list of shipments created for the seller in the status you specify. Shipments can be further filtered based on the fulfillment node or the time of the shipments&#39; last update.
       * @param {String} status The status of shipment you want to include in the response. To retrieve all new shipments, set this value to &#x60;ACCEPTED&#x60;.
       * @param {Object} [opts] Optional parameters
       * @param {String} [opts.locationId] The Amazon channel location identifier for the shipments you want to retrieve.
       * @param {String} [opts.marketplaceId] The marketplace ID associated with the location. To find the ID for your marketplace, refer to [Marketplace IDs](https://developer-docs.amazon.com/sp-api/docs/marketplace-ids).
       * @param {String} [opts.channelName] The channel name associated with the location.
       * @param {String} [opts.lastUpdatedAfter] The response includes shipments whose latest update is after the specified time. In [ISO 8601](https://developer-docs.amazon.com/sp-api/docs/iso-8601) date-time format.
       * @param {String} [opts.lastUpdatedBefore] The response includes shipments whose latest update is before the specified time. In [ISO 8601](https://developer-docs.amazon.com/sp-api/docs/iso-8601) date-time format.
       * @param {Number} [opts.maxResults] The maximum number of shipments to include in the response.
       * @param {String} [opts.paginationToken] A token that you use to retrieve the next page of results. The response includes &#x60;nextToken&#x60; when there are multiple pages of results. To get the next page of results, call the operation with this token and include the same arguments as the call that produced the token. To get a complete list, call this operation until &#x60;nextToken&#x60; is null. Note that this operation can return empty pages.
       * @return {Promise<ShipmentsResponse>}
       */
    getShipments(status: string, opts?: {
        locationId?: string;
        marketplaceId?: string;
        channelName?: string;
        lastUpdatedAfter?: string;
        lastUpdatedBefore?: string;
        maxResults?: number;
        paginationToken?: string;
    }): Promise<ShipmentsResponse>;
    #private;
}
import { Shipment } from '../model/Shipment.js';
import { ShipmentsResponse } from '../model/ShipmentsResponse.js';
import { ApiClient } from '../ApiClient.js';
//# sourceMappingURL=ShipmentRetrievalApi.d.ts.map