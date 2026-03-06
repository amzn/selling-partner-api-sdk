/**
* TransferPreview service.
* @module sellerWallet_2024_03_01/api/TransferPreviewApi
* @version 2024-03-01
*/
export class TransferPreviewApi {
    /**
      * Constructs a new TransferPreviewApi.
      * @alias module:sellerWallet_2024_03_01/api/TransferPreviewApi
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
       * Fetch potential fees that could be applied on a transaction on the basis of the source and destination country currency code
       * Retrieve a list of potential fees on a transaction.
       * @param {String} sourceCountryCode Country code of the source transaction account in ISO 3166 format.
       * @param {String} sourceCurrencyCode Currency code of the source transaction country in ISO 4217 format.
       * @param {String} destinationCountryCode Country code of the destination transaction account in ISO 3166 format.
       * @param {String} destinationCurrencyCode Currency code of the destination transaction country in ISO 4217 format.
       * @param {Number} baseAmount The base transaction amount without any markup fees.
       * @param {String} marketplaceId The marketplace for which items are returned. The marketplace ID is the globally unique identifier of a marketplace. To find the ID for your marketplace, refer to [Marketplace IDs](https://developer-docs.amazon.com/sp-api/docs/marketplace-ids).
       * @return {Promise<TransferRatePreview>}
       */
    getTransferPreviewWithHttpInfo(sourceCountryCode: string, sourceCurrencyCode: string, destinationCountryCode: string, destinationCurrencyCode: string, baseAmount: number, marketplaceId: string): Promise<TransferRatePreview>;
    /**
       * Fetch potential fees that could be applied on a transaction on the basis of the source and destination country currency code
       * Retrieve a list of potential fees on a transaction.
       * @param {String} sourceCountryCode Country code of the source transaction account in ISO 3166 format.
       * @param {String} sourceCurrencyCode Currency code of the source transaction country in ISO 4217 format.
       * @param {String} destinationCountryCode Country code of the destination transaction account in ISO 3166 format.
       * @param {String} destinationCurrencyCode Currency code of the destination transaction country in ISO 4217 format.
       * @param {Number} baseAmount The base transaction amount without any markup fees.
       * @param {String} marketplaceId The marketplace for which items are returned. The marketplace ID is the globally unique identifier of a marketplace. To find the ID for your marketplace, refer to [Marketplace IDs](https://developer-docs.amazon.com/sp-api/docs/marketplace-ids).
       * @return {Promise<TransferRatePreview>}
       */
    getTransferPreview(sourceCountryCode: string, sourceCurrencyCode: string, destinationCountryCode: string, destinationCurrencyCode: string, baseAmount: number, marketplaceId: string): Promise<TransferRatePreview>;
    #private;
}
import { TransferRatePreview } from '../model/TransferRatePreview.js';
import { ApiClient } from '../ApiClient.js';
//# sourceMappingURL=TransferPreviewApi.d.ts.map