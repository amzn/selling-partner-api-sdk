/**
 * The AffordabilityExpenseEvent model module.
 * @module finances_v0/model/AffordabilityExpenseEvent
 * @version v0
 */
export class AffordabilityExpenseEvent {
    /**
     * Constructs a <code>AffordabilityExpenseEvent</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {AffordabilityExpenseEvent} obj Optional instance to populate.
     * @return {AffordabilityExpenseEvent} The populated <code>AffordabilityExpenseEvent</code> instance.
     */
    static constructFromObject(data: any, obj: AffordabilityExpenseEvent): AffordabilityExpenseEvent;
    /**
     * Constructs a new <code>AffordabilityExpenseEvent</code>.
     * An expense related to an affordability promotion.
     * @alias module:finances_v0/model/AffordabilityExpenseEvent
     * @class
     * @param taxTypeCGST {Currency}
     * @param taxTypeSGST {Currency}
     * @param taxTypeIGST {Currency}
     */
    constructor(taxTypeCGST: Currency, taxTypeSGST: Currency, taxTypeIGST: Currency);
    taxTypeCGST: Currency;
    taxTypeSGST: Currency;
    taxTypeIGST: Currency;
    /**
     * An Amazon-defined identifier for an order.
     * @member {String} amazonOrderId
     * @type {String}
     */
    amazonOrderId: string;
    /**
     * Fields with a schema type of date are in ISO 8601 date time format (for example GroupBeginDate).
     * @member {Date} postedDate
     * @type {Date}
     */
    postedDate: Date;
    /**
     * An encrypted, Amazon-defined marketplace identifier.
     * @member {String} marketplaceId
     * @type {String}
     */
    marketplaceId: string;
    /**
     * Indicates the type of transaction.   Possible values:  * Charge - For an affordability promotion expense.  * Refund - For an affordability promotion expense reversal.
     * @member {String} transactionType
     * @type {String}
     */
    transactionType: string;
    /**
     * @member {Currency} baseExpense
     * @type {Currency}
     */
    baseExpense: Currency;
    /**
     * @member {Currency} totalExpense
     * @type {Currency}
     */
    totalExpense: Currency;
}
import { Currency } from './Currency.js';
//# sourceMappingURL=AffordabilityExpenseEvent.d.ts.map