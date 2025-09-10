/**
* SupplySources service.
* @module supplysources_v2020_07_01/api/SupplySourcesApi
* @version 2020-07-01
*/
export class SupplySourcesApi {
    /**
      * Constructs a new SupplySourcesApi.
      * @alias module:supplysources_v2020_07_01/api/SupplySourcesApi
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
       * Archive a supply source, making it inactive. Cannot be undone.
       * @param {String} supplySourceId The unique identifier of a supply source.
       * @return {Promise<ErrorList>}
       */
    archiveSupplySourceWithHttpInfo(supplySourceId: string): Promise<ErrorList>;
    /**
       * Archive a supply source, making it inactive. Cannot be undone.
       * @param {String} supplySourceId The unique identifier of a supply source.
       * @return {Promise<ErrorList>}
       */
    archiveSupplySource(supplySourceId: string): Promise<ErrorList>;
    /**
       * Create a new supply source.
       * @param {CreateSupplySourceRequest} payload A request to create a supply source.
       * @return {Promise<CreateSupplySourceResponse>}
       */
    createSupplySourceWithHttpInfo(payload: CreateSupplySourceRequest): Promise<CreateSupplySourceResponse>;
    /**
       * Create a new supply source.
       * @param {CreateSupplySourceRequest} payload A request to create a supply source.
       * @return {Promise<CreateSupplySourceResponse>}
       */
    createSupplySource(payload: CreateSupplySourceRequest): Promise<CreateSupplySourceResponse>;
    /**
       * Retrieve a supply source.
       * @param {String} supplySourceId The unique identifier of a supply source.
       * @return {Promise<SupplySource>}
       */
    getSupplySourceWithHttpInfo(supplySourceId: string): Promise<SupplySource>;
    /**
       * Retrieve a supply source.
       * @param {String} supplySourceId The unique identifier of a supply source.
       * @return {Promise<SupplySource>}
       */
    getSupplySource(supplySourceId: string): Promise<SupplySource>;
    /**
       * The path to retrieve paginated supply sources.
       * @param {Object} [opts] Optional parameters
       * @param {String} [opts.nextPageToken] The pagination token to retrieve a specific page of results.
       * @param {Number} [opts.pageSize] The number of supply sources to return per paginated request. (default to 10.0)
       * @return {Promise<GetSupplySourcesResponse>}
       */
    getSupplySourcesWithHttpInfo(opts?: {
        nextPageToken?: string;
        pageSize?: number;
    }): Promise<GetSupplySourcesResponse>;
    /**
       * The path to retrieve paginated supply sources.
       * @param {Object} [opts] Optional parameters
       * @param {String} [opts.nextPageToken] The pagination token to retrieve a specific page of results.
       * @param {Number} [opts.pageSize] The number of supply sources to return per paginated request. (default to 10.0)
       * @return {Promise<GetSupplySourcesResponse>}
       */
    getSupplySources(opts?: {
        nextPageToken?: string;
        pageSize?: number;
    }): Promise<GetSupplySourcesResponse>;
    /**
       * Update the configuration and capabilities of a supply source.
       * @param {String} supplySourceId The unique identitier of a supply source.
       * @param {Object} [opts] Optional parameters
       * @param {UpdateSupplySourceRequest} [opts.payload]
       * @return {Promise<ErrorList>}
       */
    updateSupplySourceWithHttpInfo(supplySourceId: string, opts?: {
        payload?: UpdateSupplySourceRequest;
    }): Promise<ErrorList>;
    /**
       * Update the configuration and capabilities of a supply source.
       * @param {String} supplySourceId The unique identitier of a supply source.
       * @param {Object} [opts] Optional parameters
       * @param {UpdateSupplySourceRequest} [opts.payload]
       * @return {Promise<ErrorList>}
       */
    updateSupplySource(supplySourceId: string, opts?: {
        payload?: UpdateSupplySourceRequest;
    }): Promise<ErrorList>;
    /**
       * Update the status of a supply source.
       * @param {String} supplySourceId The unique identifier of a supply source.
       * @param {Object} [opts] Optional parameters
       * @param {UpdateSupplySourceStatusRequest} [opts.payload]
       * @return {Promise<ErrorList>}
       */
    updateSupplySourceStatusWithHttpInfo(supplySourceId: string, opts?: {
        payload?: UpdateSupplySourceStatusRequest;
    }): Promise<ErrorList>;
    /**
       * Update the status of a supply source.
       * @param {String} supplySourceId The unique identifier of a supply source.
       * @param {Object} [opts] Optional parameters
       * @param {UpdateSupplySourceStatusRequest} [opts.payload]
       * @return {Promise<ErrorList>}
       */
    updateSupplySourceStatus(supplySourceId: string, opts?: {
        payload?: UpdateSupplySourceStatusRequest;
    }): Promise<ErrorList>;
    #private;
}
import { ErrorList } from '../model/ErrorList.js';
import { CreateSupplySourceRequest } from '../model/CreateSupplySourceRequest.js';
import { CreateSupplySourceResponse } from '../model/CreateSupplySourceResponse.js';
import { SupplySource } from '../model/SupplySource.js';
import { GetSupplySourcesResponse } from '../model/GetSupplySourcesResponse.js';
import { UpdateSupplySourceRequest } from '../model/UpdateSupplySourceRequest.js';
import { UpdateSupplySourceStatusRequest } from '../model/UpdateSupplySourceStatusRequest.js';
import { ApiClient } from '../ApiClient.js';
//# sourceMappingURL=SupplySourcesApi.d.ts.map