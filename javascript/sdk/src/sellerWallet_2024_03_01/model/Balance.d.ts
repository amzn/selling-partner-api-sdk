/**
 * The Balance model module.
 * @module sellerWallet_2024_03_01/model/Balance
 * @version 2024-03-01
 */
export class Balance {
    /**
     * Constructs a <code>Balance</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {Balance} obj Optional instance to populate.
     * @return {Balance} The populated <code>Balance</code> instance.
     */
    static constructFromObject(data: any, obj: Balance): Balance;
    /**
     * Constructs a new <code>Balance</code>.
     * Specifies the balance amount in the Amazon SW bank account
     * @alias module:sellerWallet_2024_03_01/model/Balance
     * @class
     * @param accountId {String} The unique identifier provided by Amazon to identify the account
     * @param balanceAmount {Number} A decimal number such as amount or FX rate.
     * @param balanceCurrency {String} The Amazon SW bank account currency code in ISO 4217 format
     * @param lastUpdateDate {Date} The last update date on the account balance
     */
    constructor(accountId: string, balanceAmount: number, balanceCurrency: string, lastUpdateDate: Date);
    accountId: string;
    balanceAmount: number;
    balanceCurrency: string;
    lastUpdateDate: Date;
    /**
     * @member {BalanceType} balanceType
     * @type {BalanceType}
     */
    balanceType: BalanceType;
}
import { BalanceType } from './BalanceType.js';
//# sourceMappingURL=Balance.d.ts.map