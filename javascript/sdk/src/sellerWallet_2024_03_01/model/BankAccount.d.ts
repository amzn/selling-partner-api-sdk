/**
 * The BankAccount model module.
 * @module sellerWallet_2024_03_01/model/BankAccount
 * @version 2024-03-01
 */
export class BankAccount {
    /**
     * Constructs a <code>BankAccount</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {BankAccount} obj Optional instance to populate.
     * @return {BankAccount} The populated <code>BankAccount</code> instance.
     */
    static constructFromObject(data: any, obj: BankAccount): BankAccount;
    /**
     * Constructs a new <code>BankAccount</code>.
     * Details of an Amazon SW bank account, used to hold money earned by a SW customer by selling items. NOTE: Not including account_links, short cut links to the account balance and transactions -&gt; since not mandatory
     * @alias module:sellerWallet_2024_03_01/model/BankAccount
     * @class
     * @param bankAccountNumberFormat {BankAccountNumberFormat}
     * @param bankAccountOwnershipType {BankAccountOwnershipType}
     * @param routingNumber {String} Routing number for automated clearing house transfers, for all Amazon Seller Wallet account the value will be denoted by nine cosecutive 0's,
     * @param bankNumberFormat {BankNumberFormat}
     * @param accountCountryCode {String} The two digit country code, in ISO 3166 format.
     * @param accountCurrency {String} BankAccount currency code in ISO 4217 format
     * @param bankAccountNumberTail {String} Last 3 digit of the bank account number, for all Amazon Seller Wallet account the value will be three consecutive 0's
     */
    constructor(bankAccountNumberFormat: BankAccountNumberFormat, bankAccountOwnershipType: BankAccountOwnershipType, routingNumber: string, bankNumberFormat: BankNumberFormat, accountCountryCode: string, accountCurrency: string, bankAccountNumberTail: string);
    bankAccountNumberFormat: BankAccountNumberFormat;
    bankAccountOwnershipType: BankAccountOwnershipType;
    routingNumber: string;
    bankNumberFormat: BankNumberFormat;
    accountCountryCode: string;
    accountCurrency: string;
    bankAccountNumberTail: string;
    /**
     * The unique identifier provided by Amazon to identify the account
     * @member {String} accountId
     * @type {String}
     */
    accountId: string;
    /**
     * BankAccount holder's name (expected to be Amazon customer)
     * @member {String} accountHolderName
     * @type {String}
     */
    accountHolderName: string;
    /**
     * The name of the bank, for all Amazon Seller Wallet account the value will be Amazon Seller Wallet
     * @member {String} bankName
     * @type {String}
     */
    bankName: string;
    /**
     * @member {BankAccountHolderStatus} bankAccountHolderStatus
     * @type {BankAccountHolderStatus}
     */
    bankAccountHolderStatus: BankAccountHolderStatus;
}
import { BankAccountNumberFormat } from './BankAccountNumberFormat.js';
import { BankAccountOwnershipType } from './BankAccountOwnershipType.js';
import { BankNumberFormat } from './BankNumberFormat.js';
import { BankAccountHolderStatus } from './BankAccountHolderStatus.js';
//# sourceMappingURL=BankAccount.d.ts.map