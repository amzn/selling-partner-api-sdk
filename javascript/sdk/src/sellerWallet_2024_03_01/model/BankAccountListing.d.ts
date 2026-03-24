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
    static constructFromObject(data: Object, obj: BankAccountListing): BankAccountListing;
    /**
     * Constructs a new <code>BankAccountListing</code>.
     * A list of bank accounts.
     * @alias module:sellerWallet_2024_03_01/model/BankAccountListing
     * @class
     * @param accounts {BankAccount[]} A list of bank accounts.
     */
    constructor(accounts: BankAccount[]);
    accounts: BankAccount[];
}
import { BankAccount } from './BankAccount.js';
//# sourceMappingURL=BankAccountListing.d.ts.map