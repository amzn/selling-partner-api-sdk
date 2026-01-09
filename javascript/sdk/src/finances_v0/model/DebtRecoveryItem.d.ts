/**
 * The DebtRecoveryItem model module.
 * @module finances_v0/model/DebtRecoveryItem
 * @version v0
 */
export class DebtRecoveryItem {
    /**
     * Constructs a <code>DebtRecoveryItem</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {DebtRecoveryItem} obj Optional instance to populate.
     * @return {DebtRecoveryItem} The populated <code>DebtRecoveryItem</code> instance.
     */
    static constructFromObject(data: any, obj: DebtRecoveryItem): DebtRecoveryItem;
    /**
     * @member {Currency} recoveryAmount
     * @type {Currency}
     */
    recoveryAmount: Currency;
    /**
     * @member {Currency} originalAmount
     * @type {Currency}
     */
    originalAmount: Currency;
    /**
     * A date in [ISO 8601](https://developer-docs.amazon.com/sp-api/docs/iso-8601) date-time format.
     * @member {Date} groupBeginDate
     * @type {Date}
     */
    groupBeginDate: Date;
    /**
     * A date in [ISO 8601](https://developer-docs.amazon.com/sp-api/docs/iso-8601) date-time format.
     * @member {Date} groupEndDate
     * @type {Date}
     */
    groupEndDate: Date;
}
import { Currency } from './Currency.js';
//# sourceMappingURL=DebtRecoveryItem.d.ts.map