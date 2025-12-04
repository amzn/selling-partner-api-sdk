/**
* Transactions service.
* @module sellerWallet_2024_03_01/api/TransactionsApi
* @version 2024-03-01
*/
export class TransactionsApi {
    /**
      * Constructs a new TransactionsApi.
      * @alias module:sellerWallet_2024_03_01/api/TransactionsApi
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
       * Create a transaction request from Amazon SW account to another customer provided account
       * Create a transaction request from a Seller Wallet account to another customer-provided account.
       * @param {String} destAccountDigitalSignature Digital signature for the destination bank account details. For more information, refer to [Third-Party Provider Signature Guidance](https://developer-docs.amazon.com/sp-api/docs/tpp-registration-signature-guidance).
       * @param {String} amountDigitalSignature Digital signature for the source currency transaction amount. Sign in the order of the request definitions. You can omit empty or optional fields. For more information, refer to [Third-Party Provider Signature Guidance](https://developer-docs.amazon.com/sp-api/docs/tpp-registration-signature-guidance).
       * @param {String} marketplaceId The marketplace for which items are returned. The marketplace ID is the globally unique identifier of a marketplace. To find the ID for your marketplace, refer to [Marketplace IDs](https://developer-docs.amazon.com/sp-api/docs/marketplace-ids).
       * @param {TransactionInitiationRequest} body Defines the actual payload of the request
       * @return {Promise<CreateTransactionResponse>}
       */
    createTransactionWithHttpInfo(destAccountDigitalSignature: string, amountDigitalSignature: string, marketplaceId: string, body: TransactionInitiationRequest): Promise<CreateTransactionResponse>;
    /**
       * Create a transaction request from Amazon SW account to another customer provided account
       * Create a transaction request from a Seller Wallet account to another customer-provided account.
       * @param {String} destAccountDigitalSignature Digital signature for the destination bank account details. For more information, refer to [Third-Party Provider Signature Guidance](https://developer-docs.amazon.com/sp-api/docs/tpp-registration-signature-guidance).
       * @param {String} amountDigitalSignature Digital signature for the source currency transaction amount. Sign in the order of the request definitions. You can omit empty or optional fields. For more information, refer to [Third-Party Provider Signature Guidance](https://developer-docs.amazon.com/sp-api/docs/tpp-registration-signature-guidance).
       * @param {String} marketplaceId The marketplace for which items are returned. The marketplace ID is the globally unique identifier of a marketplace. To find the ID for your marketplace, refer to [Marketplace IDs](https://developer-docs.amazon.com/sp-api/docs/marketplace-ids).
       * @param {TransactionInitiationRequest} body Defines the actual payload of the request
       * @return {Promise<CreateTransactionResponse>}
       */
    createTransaction(destAccountDigitalSignature: string, amountDigitalSignature: string, marketplaceId: string, body: TransactionInitiationRequest): Promise<CreateTransactionResponse>;
    /**
       * Find particular Amazon SW account transaction by Amazon transaction identifier
       * Returns a transaction
       * @param {String} transactionId ID of the Amazon SW transaction
       * @param {String} marketplaceId The marketplace for which items are returned. The marketplace ID is the globally unique identifier of a marketplace. To find the ID for your marketplace, refer to [Marketplace IDs](https://developer-docs.amazon.com/sp-api/docs/marketplace-ids).
       * @return {Promise<Transaction>}
       */
    getTransactionWithHttpInfo(transactionId: string, marketplaceId: string): Promise<Transaction>;
    /**
       * Find particular Amazon SW account transaction by Amazon transaction identifier
       * Returns a transaction
       * @param {String} transactionId ID of the Amazon SW transaction
       * @param {String} marketplaceId The marketplace for which items are returned. The marketplace ID is the globally unique identifier of a marketplace. To find the ID for your marketplace, refer to [Marketplace IDs](https://developer-docs.amazon.com/sp-api/docs/marketplace-ids).
       * @return {Promise<Transaction>}
       */
    getTransaction(transactionId: string, marketplaceId: string): Promise<Transaction>;
    /**
       * The API will return all the transactions for a given Amazon SW account sorted by the transaction request date
       * Retrieve a list of transactions for a given Seller Wallet bank account.
       * @param {String} accountId ID of the Amazon SW account
       * @param {String} marketplaceId The marketplace for which items are returned. The marketplace ID is the globally unique identifier of a marketplace. To find the ID for your marketplace, refer to [Marketplace IDs](https://developer-docs.amazon.com/sp-api/docs/marketplace-ids).
       * @param {Object} [opts] Optional parameters
       * @param {String} [opts.nextPageToken] Pagination token to retrieve a specific page of results.
       * @return {Promise<TransactionListing>}
       */
    listAccountTransactionsWithHttpInfo(accountId: string, marketplaceId: string, opts?: {
        nextPageToken?: string;
    }): Promise<TransactionListing>;
    /**
       * The API will return all the transactions for a given Amazon SW account sorted by the transaction request date
       * Retrieve a list of transactions for a given Seller Wallet bank account.
       * @param {String} accountId ID of the Amazon SW account
       * @param {String} marketplaceId The marketplace for which items are returned. The marketplace ID is the globally unique identifier of a marketplace. To find the ID for your marketplace, refer to [Marketplace IDs](https://developer-docs.amazon.com/sp-api/docs/marketplace-ids).
       * @param {Object} [opts] Optional parameters
       * @param {String} [opts.nextPageToken] Pagination token to retrieve a specific page of results.
       * @return {Promise<TransactionListing>}
       */
    listAccountTransactions(accountId: string, marketplaceId: string, opts?: {
        nextPageToken?: string;
    }): Promise<TransactionListing>;
    #private;
}
import { TransactionInitiationRequest } from '../model/TransactionInitiationRequest.js';
import { CreateTransactionResponse } from '../model/CreateTransactionResponse.js';
import { Transaction } from '../model/Transaction.js';
import { TransactionListing } from '../model/TransactionListing.js';
import { ApiClient } from '../ApiClient.js';
//# sourceMappingURL=TransactionsApi.d.ts.map