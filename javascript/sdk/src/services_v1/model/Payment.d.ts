/**
 * The Payment model module.
 * @module services_v1/model/Payment
 * @version v1
 */
export class Payment {
    /**
     * Constructs a <code>Payment</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {Payment} obj Optional instance to populate.
     * @return {Payment} The populated <code>Payment</code> instance.
     */
    static constructFromObject(data: Object, obj: Payment): Payment;
    /**
     * @member {MoneyAmount} amount
     * @type {MoneyAmount}
     */
    amount: MoneyAmount;
    /**
     * The payment instrument used for the transaction.
     * @member {String} instrument
     * @type {String}
     */
    instrument: string;
}
import { MoneyAmount } from './MoneyAmount.js';
//# sourceMappingURL=Payment.d.ts.map