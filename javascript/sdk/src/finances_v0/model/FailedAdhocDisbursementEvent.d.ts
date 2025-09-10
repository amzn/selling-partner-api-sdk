/**
 * The FailedAdhocDisbursementEvent model module.
 * @module finances_v0/model/FailedAdhocDisbursementEvent
 * @version v0
 */
export class FailedAdhocDisbursementEvent {
    /**
     * Constructs a <code>FailedAdhocDisbursementEvent</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {FailedAdhocDisbursementEvent} obj Optional instance to populate.
     * @return {FailedAdhocDisbursementEvent} The populated <code>FailedAdhocDisbursementEvent</code> instance.
     */
    static constructFromObject(data: any, obj: FailedAdhocDisbursementEvent): FailedAdhocDisbursementEvent;
    /**
     * The type of fund transfer.   Example \"Refund\"
     * @member {String} fundsTransfersType
     * @type {String}
     */
    fundsTransfersType: string;
    /**
     * The transfer identifier.
     * @member {String} transferId
     * @type {String}
     */
    transferId: string;
    /**
     * The disbursement identifier.
     * @member {String} disbursementId
     * @type {String}
     */
    disbursementId: string;
    /**
     * The type of payment for disbursement.   Example `CREDIT_CARD`
     * @member {String} paymentDisbursementType
     * @type {String}
     */
    paymentDisbursementType: string;
    /**
     * The status of the failed `AdhocDisbursement`.   Example `HARD_DECLINED`
     * @member {String} status
     * @type {String}
     */
    status: string;
    /**
     * @member {Currency} transferAmount
     * @type {Currency}
     */
    transferAmount: Currency;
    /**
     * Fields with a schema type of date are in ISO 8601 date time format (for example GroupBeginDate).
     * @member {Date} postedDate
     * @type {Date}
     */
    postedDate: Date;
}
import { Currency } from './Currency.js';
//# sourceMappingURL=FailedAdhocDisbursementEvent.d.ts.map