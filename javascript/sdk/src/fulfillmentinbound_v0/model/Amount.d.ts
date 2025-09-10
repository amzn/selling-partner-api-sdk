/**
 * The Amount model module.
 * @module fulfillmentinbound_v0/model/Amount
 * @version v0
 */
export class Amount {
    /**
     * Constructs a <code>Amount</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {Amount} obj Optional instance to populate.
     * @return {Amount} The populated <code>Amount</code> instance.
     */
    static constructFromObject(data: any, obj: Amount): Amount;
    /**
     * Constructs a new <code>Amount</code>.
     * The monetary value.
     * @alias module:fulfillmentinbound_v0/model/Amount
     * @class
     * @param currencyCode {CurrencyCode}
     * @param value {Number} Number format that supports decimal.
     */
    constructor(currencyCode: CurrencyCode, value: number);
    currencyCode: CurrencyCode;
    value: number;
}
import { CurrencyCode } from './CurrencyCode.js';
//# sourceMappingURL=Amount.d.ts.map