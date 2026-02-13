/**
 * The SAFETReimbursementEvent model module.
 * @module finances_v0/model/SAFETReimbursementEvent
 * @version v0
 */
export class SAFETReimbursementEvent {
    /**
     * Constructs a <code>SAFETReimbursementEvent</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {SAFETReimbursementEvent} obj Optional instance to populate.
     * @return {SAFETReimbursementEvent} The populated <code>SAFETReimbursementEvent</code> instance.
     */
    static constructFromObject(data: any, obj: SAFETReimbursementEvent): SAFETReimbursementEvent;
    /**
     * A date in [ISO 8601](https://developer-docs.amazon.com/sp-api/docs/iso-8601) date-time format.
     * @member {Date} postedDate
     * @type {Date}
     */
    postedDate: Date;
    /**
     * A SAFE-T claim identifier.
     * @member {String} sAFETClaimId
     * @type {String}
     */
    sAFETClaimId: string;
    /**
     * @member {Currency} reimbursedAmount
     * @type {Currency}
     */
    reimbursedAmount: Currency;
    /**
     * Indicates why the seller was reimbursed.
     * @member {String} reasonCode
     * @type {String}
     */
    reasonCode: string;
    /**
     * A list of `SAFETReimbursementItem`.
     * @member {SAFETReimbursementItem[]} sAFETReimbursementItemList
     * @type {SAFETReimbursementItem[]}
     */
    sAFETReimbursementItemList: SAFETReimbursementItem[];
}
import { Currency } from './Currency.js';
import { SAFETReimbursementItem } from './SAFETReimbursementItem.js';
//# sourceMappingURL=SAFETReimbursementEvent.d.ts.map