/**
 * The ChargeRefundEvent model module.
 * @module finances_v0/model/ChargeRefundEvent
 * @version v0
 */
export class ChargeRefundEvent {
    /**
     * Constructs a <code>ChargeRefundEvent</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {ChargeRefundEvent} obj Optional instance to populate.
     * @return {ChargeRefundEvent} The populated <code>ChargeRefundEvent</code> instance.
     */
    static constructFromObject(data: any, obj: ChargeRefundEvent): ChargeRefundEvent;
    /**
     * A date in [ISO 8601](https://developer-docs.amazon.com/sp-api/docs/iso-8601) date-time format.
     * @member {Date} postedDate
     * @type {Date}
     */
    postedDate: Date;
    /**
     * The reason given for a charge refund. For example, `SubscriptionFeeCorrection`.
     * @member {String} reasonCode
     * @type {String}
     */
    reasonCode: string;
    /**
     * A description of the Reason Code. For example, `SubscriptionFeeCorrection`.
     * @member {String} reasonCodeDescription
     * @type {String}
     */
    reasonCodeDescription: string;
    /**
     * A list of `ChargeRefund` transactions
     * @member {[ChargeRefundTransaction]} chargeRefundTransactions
     * @type {[ChargeRefundTransaction]}
     */
    chargeRefundTransactions: [ChargeRefundTransaction];
}
import { ChargeRefundTransaction } from './ChargeRefundTransaction.js';
//# sourceMappingURL=ChargeRefundEvent.d.ts.map