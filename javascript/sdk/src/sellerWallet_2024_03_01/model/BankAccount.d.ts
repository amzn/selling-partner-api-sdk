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
     * Details of an Amazon Seller Wallet bank account. This account is used to hold the money that a Seller Wallet customer earns by selling items.
     * @alias module:sellerWallet_2024_03_01/model/BankAccount
     * @class
     * @param bankAccountOwnershipType {BankAccountOwnershipType}
     * @param accountCountryCode {String} The two digit country code, in ISO 3166 format.
     * @param accountCurrency {String} BankAccount currency code in ISO 4217 format
     * @param bankAccountNumberTail {String} Last 3 digit of the bank account number, for all Amazon Seller Wallet account the value will be three consecutive 0's
     */
    constructor(bankAccountOwnershipType: BankAccountOwnershipType, accountCountryCode: string, accountCurrency: string, bankAccountNumberTail: string);
    bankAccountOwnershipType: BankAccountOwnershipType;
    accountCountryCode: string;
    accountCurrency: string;
    bankAccountNumberTail: string;
    /**
     * The unique bank account identifier provided by Amazon. To initiate a `SELF` transaction with Seller Wallet, you must choose `BANK_ACCOUNT` as the payment method type in the [getPaymentMethod](https://developer-docs.amazon.com/sp-api/reference/getpaymentmethods) request. Your Amazon Seller Wallet bank account identifier should match the `paymentMethodId` in the response. This field is required.
     * @member {String} accountId
     * @type {String}
     */
    accountId: string;
    /**
     * The bank account holder's name (expected to be an Amazon customer). There is a 50 character limit.
     * @member {String} accountHolderName
     * @type {String}
     */
    accountHolderName: string;
    /**
     * @member {BankAccountNumberFormat} bankAccountNumberFormat
     * @type {BankAccountNumberFormat}
     */
    bankAccountNumberFormat: BankAccountNumberFormat;
    /**
     * The name of the bank. This value is Amazon Seller Wallet for Amazon Seller Wallet accounts.
     * @member {String} bankName
     * @type {String}
     */
    bankName: string;
    /**
     * Routing number for automated clearing house transfers for `THIRD_PARTY` transaction requests. This value is nine consecutive zeros for Amazon Seller Wallet accounts.
     * @member {String} routingNumber
     * @type {String}
     */
    routingNumber: string;
    /**
     * @member {BankNumberFormat} bankNumberFormat
     * @type {BankNumberFormat}
     */
    bankNumberFormat: BankNumberFormat;
    /**
     * @member {BankAccountHolderStatus} bankAccountHolderStatus
     * @type {BankAccountHolderStatus}
     */
    bankAccountHolderStatus: BankAccountHolderStatus;
}
import { BankAccountOwnershipType } from './BankAccountOwnershipType.js';
import { BankAccountNumberFormat } from './BankAccountNumberFormat.js';
import { BankNumberFormat } from './BankNumberFormat.js';
import { BankAccountHolderStatus } from './BankAccountHolderStatus.js';
//# sourceMappingURL=BankAccount.d.ts.map