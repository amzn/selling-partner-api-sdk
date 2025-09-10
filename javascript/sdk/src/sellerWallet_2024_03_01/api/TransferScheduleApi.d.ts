/**
* TransferSchedule service.
* @module sellerWallet_2024_03_01/api/TransferScheduleApi
* @version 2024-03-01
*/
export class TransferScheduleApi {
    /**
      * Constructs a new TransferScheduleApi.
      * @alias module:sellerWallet_2024_03_01/api/TransferScheduleApi
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
       * Create a transfer schedule request from Amazon SW account to another customer provided account
       * Create a transfer schedule request from a Seller Wallet account to another customer-provided account.
       * @param {String} destAccountDigitalSignature Digital signature for the destination bank account details.
       * @param {String} amountDigitalSignature Digital signature for the source currency transaction amount.
       * @param {String} marketplaceId The marketplace for which items are returned. The marketplace ID is the globally unique identifier of a marketplace. To find the ID for your marketplace, refer to [Marketplace IDs](https://developer-docs.amazon.com/sp-api/docs/marketplace-ids).
       * @param {TransferScheduleRequest} body Defines the actual payload of the request
       * @return {Promise<TransferSchedule>}
       */
    createTransferScheduleWithHttpInfo(destAccountDigitalSignature: string, amountDigitalSignature: string, marketplaceId: string, body: TransferScheduleRequest): Promise<TransferSchedule>;
    /**
       * Create a transfer schedule request from Amazon SW account to another customer provided account
       * Create a transfer schedule request from a Seller Wallet account to another customer-provided account.
       * @param {String} destAccountDigitalSignature Digital signature for the destination bank account details.
       * @param {String} amountDigitalSignature Digital signature for the source currency transaction amount.
       * @param {String} marketplaceId The marketplace for which items are returned. The marketplace ID is the globally unique identifier of a marketplace. To find the ID for your marketplace, refer to [Marketplace IDs](https://developer-docs.amazon.com/sp-api/docs/marketplace-ids).
       * @param {TransferScheduleRequest} body Defines the actual payload of the request
       * @return {Promise<TransferSchedule>}
       */
    createTransferSchedule(destAccountDigitalSignature: string, amountDigitalSignature: string, marketplaceId: string, body: TransferScheduleRequest): Promise<TransferSchedule>;
    /**
       * Delete a transaction request that is scheduled from Amazon Seller Wallet account to another customer-provided account
       * Delete a transaction request that is scheduled from Amazon Seller Wallet account to another customer-provided account.
       * @param {String} transferScheduleId A unique reference ID for a scheduled transfer.
       * @param {String} marketplaceId The marketplace for which items are returned. The marketplace ID is the globally unique identifier of a marketplace. To find the ID for your marketplace, refer to [Marketplace IDs](https://developer-docs.amazon.com/sp-api/docs/marketplace-ids).
       * @return {Promise<DeleteTransferSchedule>}
       */
    deleteScheduleTransactionWithHttpInfo(transferScheduleId: string, marketplaceId: string): Promise<DeleteTransferSchedule>;
    /**
       * Delete a transaction request that is scheduled from Amazon Seller Wallet account to another customer-provided account
       * Delete a transaction request that is scheduled from Amazon Seller Wallet account to another customer-provided account.
       * @param {String} transferScheduleId A unique reference ID for a scheduled transfer.
       * @param {String} marketplaceId The marketplace for which items are returned. The marketplace ID is the globally unique identifier of a marketplace. To find the ID for your marketplace, refer to [Marketplace IDs](https://developer-docs.amazon.com/sp-api/docs/marketplace-ids).
       * @return {Promise<DeleteTransferSchedule>}
       */
    deleteScheduleTransaction(transferScheduleId: string, marketplaceId: string): Promise<DeleteTransferSchedule>;
    /**
       * Find particular Amazon Seller Wallet account transfer schedule by Amazon transfer schedule identifier
       * Find a particular Amazon Seller Wallet account transfer schedule.
       * @param {String} transferScheduleId The schedule ID of the Amazon Seller Wallet transfer.
       * @param {String} marketplaceId The marketplace for which items are returned. The marketplace ID is the globally unique identifier of a marketplace. To find the ID for your marketplace, refer to [Marketplace IDs](https://developer-docs.amazon.com/sp-api/docs/marketplace-ids).
       * @return {Promise<TransferSchedule>}
       */
    getTransferScheduleWithHttpInfo(transferScheduleId: string, marketplaceId: string): Promise<TransferSchedule>;
    /**
       * Find particular Amazon Seller Wallet account transfer schedule by Amazon transfer schedule identifier
       * Find a particular Amazon Seller Wallet account transfer schedule.
       * @param {String} transferScheduleId The schedule ID of the Amazon Seller Wallet transfer.
       * @param {String} marketplaceId The marketplace for which items are returned. The marketplace ID is the globally unique identifier of a marketplace. To find the ID for your marketplace, refer to [Marketplace IDs](https://developer-docs.amazon.com/sp-api/docs/marketplace-ids).
       * @return {Promise<TransferSchedule>}
       */
    getTransferSchedule(transferScheduleId: string, marketplaceId: string): Promise<TransferSchedule>;
    /**
       * The API will return all the transfer schedules for a given Amazon SW account
       * Retrieve transfer schedules of a Seller Wallet bank account.
       * @param {String} accountId ID of the Amazon SW account
       * @param {String} marketplaceId The marketplace for which items are returned. The marketplace ID is the globally unique identifier of a marketplace. To find the ID for your marketplace, refer to [Marketplace IDs](https://developer-docs.amazon.com/sp-api/docs/marketplace-ids).
       * @param {Object} [opts] Optional parameters
       * @param {String} [opts.nextPageToken] Pagination token to retrieve a specific page of results.
       * @return {Promise<TransferScheduleListing>}
       */
    listTransferSchedulesWithHttpInfo(accountId: string, marketplaceId: string, opts?: {
        nextPageToken?: string;
    }): Promise<TransferScheduleListing>;
    /**
       * The API will return all the transfer schedules for a given Amazon SW account
       * Retrieve transfer schedules of a Seller Wallet bank account.
       * @param {String} accountId ID of the Amazon SW account
       * @param {String} marketplaceId The marketplace for which items are returned. The marketplace ID is the globally unique identifier of a marketplace. To find the ID for your marketplace, refer to [Marketplace IDs](https://developer-docs.amazon.com/sp-api/docs/marketplace-ids).
       * @param {Object} [opts] Optional parameters
       * @param {String} [opts.nextPageToken] Pagination token to retrieve a specific page of results.
       * @return {Promise<TransferScheduleListing>}
       */
    listTransferSchedules(accountId: string, marketplaceId: string, opts?: {
        nextPageToken?: string;
    }): Promise<TransferScheduleListing>;
    /**
       * Update a transfer schedule information. Only fields (i.e; transferScheduleInformation, paymentPreference, transferScheduleStatus) in the request body can be updated.
       * Returns a transfer belonging to the updated scheduled transfer request
       * @param {String} destAccountDigitalSignature Digital signature for the destination bank account details.
       * @param {String} amountDigitalSignature Digital signature for the source currency transaction amount.
       * @param {String} marketplaceId The marketplace for which items are returned. The marketplace ID is the globally unique identifier of a marketplace. To find the ID for your marketplace, refer to [Marketplace IDs](https://developer-docs.amazon.com/sp-api/docs/marketplace-ids).
       * @param {TransferSchedule} body Defines the actual payload of the scheduled transfer request that is to be updated.
       * @return {Promise<TransferSchedule>}
       */
    updateTransferScheduleWithHttpInfo(destAccountDigitalSignature: string, amountDigitalSignature: string, marketplaceId: string, body: TransferSchedule): Promise<TransferSchedule>;
    /**
       * Update a transfer schedule information. Only fields (i.e; transferScheduleInformation, paymentPreference, transferScheduleStatus) in the request body can be updated.
       * Returns a transfer belonging to the updated scheduled transfer request
       * @param {String} destAccountDigitalSignature Digital signature for the destination bank account details.
       * @param {String} amountDigitalSignature Digital signature for the source currency transaction amount.
       * @param {String} marketplaceId The marketplace for which items are returned. The marketplace ID is the globally unique identifier of a marketplace. To find the ID for your marketplace, refer to [Marketplace IDs](https://developer-docs.amazon.com/sp-api/docs/marketplace-ids).
       * @param {TransferSchedule} body Defines the actual payload of the scheduled transfer request that is to be updated.
       * @return {Promise<TransferSchedule>}
       */
    updateTransferSchedule(destAccountDigitalSignature: string, amountDigitalSignature: string, marketplaceId: string, body: TransferSchedule): Promise<TransferSchedule>;
    #private;
}
import { TransferScheduleRequest } from '../model/TransferScheduleRequest.js';
import { TransferSchedule } from '../model/TransferSchedule.js';
import { DeleteTransferSchedule } from '../model/DeleteTransferSchedule.js';
import { TransferScheduleListing } from '../model/TransferScheduleListing.js';
import { ApiClient } from '../ApiClient.js';
//# sourceMappingURL=TransferScheduleApi.d.ts.map