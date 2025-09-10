/**
 * The TransactionAccount model module.
 * @module sellerWallet_2024_03_01/model/TransactionAccount
 * @version 2024-03-01
 */
export class TransactionAccount {
    /**
     * Constructs a <code>TransactionAccount</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {TransactionAccount} obj Optional instance to populate.
     * @return {TransactionAccount} The populated <code>TransactionAccount</code> instance.
     */
    static constructFromObject(data: any, obj: TransactionAccount): TransactionAccount;
    /**
     * Constructs a new <code>TransactionAccount</code>.
     * Details of the bank account involved in the transaction.
     * @alias module:sellerWallet_2024_03_01/model/TransactionAccount
     * @class
     * @param bankName {String} The name of the bank
     * @param bankAccountNumberFormat {BankAccountNumberFormat}
     * @param bankAccountCurrency {String} The currency code in ISO 4217 format
     */
    constructor(bankName: string, bankAccountNumberFormat: BankAccountNumberFormat, bankAccountCurrency: string);
    bankName: string;
    bankAccountNumberFormat: BankAccountNumberFormat;
    bankAccountCurrency: string;
    /**
     * The unique identifier provided by Amazon to identify the account
     * @member {String} accountId
     * @type {String}
     */
    accountId: string;
    /**
     * BankAccount holder's name
     * @member {String} bankAccountHolderName
     * @type {String}
     */
    bankAccountHolderName: string;
    /**
     * Last 3 digit of the bank account number
     * @member {String} bankAccountNumberTail
     * @type {String}
     */
    bankAccountNumberTail: string;
    /**
     * The two digit country code, in ISO 3166 format. This field is OPTIONAL for transactionSourceAccount object but is MANDATORY field for transactionDestinationAccount
     * @member {String} bankAccountCountryCode
     * @type {String}
     */
    bankAccountCountryCode: string;
}
import { BankAccountNumberFormat } from './BankAccountNumberFormat.js';
//# sourceMappingURL=TransactionAccount.d.ts.map