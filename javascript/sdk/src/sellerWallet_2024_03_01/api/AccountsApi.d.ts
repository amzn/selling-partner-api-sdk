/**
* Accounts service.
* @module sellerWallet_2024_03_01/api/AccountsApi
* @version 2024-03-01
*/
export class AccountsApi {
    /**
      * Constructs a new AccountsApi.
      * @alias module:sellerWallet_2024_03_01/api/AccountsApi
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
       * Find particular Amazon SW account by Amazon account identifier
       * Retrieve a Seller Wallet bank account by Amazon account identifier.
       * @param {String} accountId ID of the Amazon SW account
       * @param {String} marketplaceId The marketplace for which items are returned. The marketplace ID is the globally unique identifier of a marketplace. To find the ID for your marketplace, refer to [Marketplace IDs](https://developer-docs.amazon.com/sp-api/docs/marketplace-ids).
       * @return {Promise<BankAccount>}
       */
    getAccountWithHttpInfo(accountId: string, marketplaceId: string): Promise<BankAccount>;
    /**
       * Find particular Amazon SW account by Amazon account identifier
       * Retrieve a Seller Wallet bank account by Amazon account identifier.
       * @param {String} accountId ID of the Amazon SW account
       * @param {String} marketplaceId The marketplace for which items are returned. The marketplace ID is the globally unique identifier of a marketplace. To find the ID for your marketplace, refer to [Marketplace IDs](https://developer-docs.amazon.com/sp-api/docs/marketplace-ids).
       * @return {Promise<BankAccount>}
       */
    getAccount(accountId: string, marketplaceId: string): Promise<BankAccount>;
    /**
       * Find balance in particular Amazon SW account by Amazon account identifier
       * Retrieve the balance in a given Seller Wallet bank account.
       * @param {String} accountId ID of the Amazon SW account
       * @param {String} marketplaceId The marketplace for which items are returned. The marketplace ID is the globally unique identifier of a marketplace. To find the ID for your marketplace, refer to [Marketplace IDs](https://developer-docs.amazon.com/sp-api/docs/marketplace-ids).
       * @return {Promise<BalanceListing>}
       */
    listAccountBalancesWithHttpInfo(accountId: string, marketplaceId: string): Promise<BalanceListing>;
    /**
       * Find balance in particular Amazon SW account by Amazon account identifier
       * Retrieve the balance in a given Seller Wallet bank account.
       * @param {String} accountId ID of the Amazon SW account
       * @param {String} marketplaceId The marketplace for which items are returned. The marketplace ID is the globally unique identifier of a marketplace. To find the ID for your marketplace, refer to [Marketplace IDs](https://developer-docs.amazon.com/sp-api/docs/marketplace-ids).
       * @return {Promise<BalanceListing>}
       */
    listAccountBalances(accountId: string, marketplaceId: string): Promise<BalanceListing>;
    /**
       * Get all Amazon SW accounts for the seller
       * Get Seller Wallet accounts for a seller.
       * @param {String} marketplaceId A marketplace identifier. Specifies the marketplace for which items are returned.
       * @return {Promise<BankAccountListing>}
       */
    listAccountsWithHttpInfo(marketplaceId: string): Promise<BankAccountListing>;
    /**
       * Get all Amazon SW accounts for the seller
       * Get Seller Wallet accounts for a seller.
       * @param {String} marketplaceId A marketplace identifier. Specifies the marketplace for which items are returned.
       * @return {Promise<BankAccountListing>}
       */
    listAccounts(marketplaceId: string): Promise<BankAccountListing>;
    #private;
}
import { BankAccount } from '../model/BankAccount.js';
import { BalanceListing } from '../model/BalanceListing.js';
import { BankAccountListing } from '../model/BankAccountListing.js';
import { ApiClient } from '../ApiClient.js';
//# sourceMappingURL=AccountsApi.d.ts.map