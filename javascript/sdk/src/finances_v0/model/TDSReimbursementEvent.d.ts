/**
 * The TDSReimbursementEvent model module.
 * @module finances_v0/model/TDSReimbursementEvent
 * @version v0
 */
export class TDSReimbursementEvent {
    /**
     * Constructs a <code>TDSReimbursementEvent</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {TDSReimbursementEvent} obj Optional instance to populate.
     * @return {TDSReimbursementEvent} The populated <code>TDSReimbursementEvent</code> instance.
     */
    static constructFromObject(data: any, obj: TDSReimbursementEvent): TDSReimbursementEvent;
    /**
     * Fields with a schema type of date are in ISO 8601 date time format (for example GroupBeginDate).
     * @member {Date} postedDate
     * @type {Date}
     */
    postedDate: Date;
    /**
     * The Tax-Deducted-at-Source (TDS) identifier.
     * @member {String} tDSOrderId
     * @type {String}
     */
    tDSOrderId: string;
    /**
     * @member {Currency} reimbursedAmount
     * @type {Currency}
     */
    reimbursedAmount: Currency;
}
import { Currency } from './Currency.js';
//# sourceMappingURL=TDSReimbursementEvent.d.ts.map