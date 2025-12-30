/**
 * The EBTRefundReimbursementOnlyEvent model module.
 * @module finances_v0/model/EBTRefundReimbursementOnlyEvent
 * @version v0
 */
export class EBTRefundReimbursementOnlyEvent {
    /**
     * Constructs a <code>EBTRefundReimbursementOnlyEvent</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {EBTRefundReimbursementOnlyEvent} obj Optional instance to populate.
     * @return {EBTRefundReimbursementOnlyEvent} The populated <code>EBTRefundReimbursementOnlyEvent</code> instance.
     */
    static constructFromObject(data: any, obj: EBTRefundReimbursementOnlyEvent): EBTRefundReimbursementOnlyEvent;
    /**
     * The identifier of an order.
     * @member {String} orderId
     * @type {String}
     */
    orderId: string;
    /**
     * A date in [ISO 8601](https://developer-docs.amazon.com/sp-api/docs/iso-8601) date-time format.
     * @member {Date} postedDate
     * @type {Date}
     */
    postedDate: Date;
    /**
     * @member {Currency} amount
     * @type {Currency}
     */
    amount: Currency;
}
import { Currency } from './Currency.js';
//# sourceMappingURL=EBTRefundReimbursementOnlyEvent.d.ts.map