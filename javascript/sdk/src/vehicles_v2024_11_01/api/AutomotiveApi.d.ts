/**
* Automotive service.
* @module vehicles_v2024_11_01/api/AutomotiveApi
* @version 2024-11-01
*/
export class AutomotiveApi {
    /**
      * Constructs a new AutomotiveApi.
      * @alias module:vehicles_v2024_11_01/api/AutomotiveApi
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
       * Get the latest collection of vehicles
       * @param {String} marketplaceId An identifier for the marketplace in which the resource operates.
       * @param {String} vehicleType An identifier for vehicle type.
       * @param {Object} [opts] Optional parameters
       * @param {String} [opts.pageToken] A token to fetch a certain page when there are multiple pages worth of results.
       * @param {String} [opts.updatedAfter] Date in ISO 8601 format, if provided only vehicles which are modified/added to Amazon&#39;s catalog after this date will be returned.
       * @return {Promise<VehiclesResponse>}
       */
    getVehiclesWithHttpInfo(marketplaceId: string, vehicleType: string, opts?: {
        pageToken?: string;
        updatedAfter?: string;
    }): Promise<VehiclesResponse>;
    /**
       * Get the latest collection of vehicles
       * @param {String} marketplaceId An identifier for the marketplace in which the resource operates.
       * @param {String} vehicleType An identifier for vehicle type.
       * @param {Object} [opts] Optional parameters
       * @param {String} [opts.pageToken] A token to fetch a certain page when there are multiple pages worth of results.
       * @param {String} [opts.updatedAfter] Date in ISO 8601 format, if provided only vehicles which are modified/added to Amazon&#39;s catalog after this date will be returned.
       * @return {Promise<VehiclesResponse>}
       */
    getVehicles(marketplaceId: string, vehicleType: string, opts?: {
        pageToken?: string;
        updatedAfter?: string;
    }): Promise<VehiclesResponse>;
    #private;
}
import { VehiclesResponse } from '../model/VehiclesResponse.js';
import { ApiClient } from '../ApiClient.js';
//# sourceMappingURL=AutomotiveApi.d.ts.map