/**
 * The BankAccountListing model module.
 * @module sellerWallet_2024_03_01/model/BankAccountListing
 * @version 2024-03-01
 */
export class BankAccountListing {
    /**
     * Constructs a <code>BankAccountListing</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {BankAccountListing} obj Optional instance to populate.
     * @return {BankAccountListing} The populated <code>BankAccountListing</code> instance.
     */
    static constructFromObject(data: any, obj: BankAccountListing): BankAccountListing;
    /**
     * Constructs a new <code>BankAccountListing</code>.
     * Struct that holds collection of accounts.
     * @alias module:sellerWallet_2024_03_01/model/BankAccountListing
     * @class
     * @param accounts {[BankAccount]} Collection that holds BankAccount
     */
    constructor(accounts: [BankAccount]);
    accounts: [BankAccount];
}
import { BankAccount } from './BankAccount.js';
//# sourceMappingURL=BankAccountListing.d.ts.map