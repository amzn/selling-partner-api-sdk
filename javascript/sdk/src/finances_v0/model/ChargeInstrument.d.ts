/**
 * The ChargeInstrument model module.
 * @module finances_v0/model/ChargeInstrument
 * @version v0
 */
export class ChargeInstrument {
    /**
     * Constructs a <code>ChargeInstrument</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {ChargeInstrument} obj Optional instance to populate.
     * @return {ChargeInstrument} The populated <code>ChargeInstrument</code> instance.
     */
    static constructFromObject(data: any, obj: ChargeInstrument): ChargeInstrument;
    /**
     * A short description of the charge instrument.
     * @member {String} description
     * @type {String}
     */
    description: string;
    /**
     * The account tail (trailing digits) of the charge instrument.
     * @member {String} tail
     * @type {String}
     */
    tail: string;
    /**
     * @member {Currency} amount
     * @type {Currency}
     */
    amount: Currency;
}
import { Currency } from './Currency.js';
//# sourceMappingURL=ChargeInstrument.d.ts.map