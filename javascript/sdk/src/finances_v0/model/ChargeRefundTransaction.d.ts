/**
 * The ChargeRefundTransaction model module.
 * @module finances_v0/model/ChargeRefundTransaction
 * @version v0
 */
export class ChargeRefundTransaction {
    /**
     * Constructs a <code>ChargeRefundTransaction</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {ChargeRefundTransaction} obj Optional instance to populate.
     * @return {ChargeRefundTransaction} The populated <code>ChargeRefundTransaction</code> instance.
     */
    static constructFromObject(data: any, obj: ChargeRefundTransaction): ChargeRefundTransaction;
    /**
     * @member {Currency} chargeAmount
     * @type {Currency}
     */
    chargeAmount: Currency;
    /**
     * The type of charge.
     * @member {String} chargeType
     * @type {String}
     */
    chargeType: string;
}
import { Currency } from './Currency.js';
//# sourceMappingURL=ChargeRefundTransaction.d.ts.map