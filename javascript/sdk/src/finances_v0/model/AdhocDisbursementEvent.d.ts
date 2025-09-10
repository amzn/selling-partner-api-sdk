/**
 * The AdhocDisbursementEvent model module.
 * @module finances_v0/model/AdhocDisbursementEvent
 * @version v0
 */
export class AdhocDisbursementEvent {
    /**
     * Constructs a <code>AdhocDisbursementEvent</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {AdhocDisbursementEvent} obj Optional instance to populate.
     * @return {AdhocDisbursementEvent} The populated <code>AdhocDisbursementEvent</code> instance.
     */
    static constructFromObject(data: any, obj: AdhocDisbursementEvent): AdhocDisbursementEvent;
    /**
     * Indicates the type of transaction.  Example: \"Disbursed to Amazon Gift Card balance\"
     * @member {String} transactionType
     * @type {String}
     */
    transactionType: string;
    /**
     * Fields with a schema type of date are in ISO 8601 date time format (for example GroupBeginDate).
     * @member {Date} postedDate
     * @type {Date}
     */
    postedDate: Date;
    /**
     * The identifier for the transaction.
     * @member {String} transactionId
     * @type {String}
     */
    transactionId: string;
    /**
     * @member {Currency} transactionAmount
     * @type {Currency}
     */
    transactionAmount: Currency;
}
import { Currency } from './Currency.js';
//# sourceMappingURL=AdhocDisbursementEvent.d.ts.map