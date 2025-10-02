/**
 * The ChargeBreakup model module.
 * @module externalfulfillmentshipments_v2024_09_11/model/ChargeBreakup
 * @version 2024-09-11
 */
export class ChargeBreakup {
    /**
     * Constructs a <code>ChargeBreakup</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {ChargeBreakup} obj Optional instance to populate.
     * @return {ChargeBreakup} The populated <code>ChargeBreakup</code> instance.
     */
    static constructFromObject(data: any, obj: ChargeBreakup): ChargeBreakup;
    /**
     * Constructs a new <code>ChargeBreakup</code>.
     * The composition of the charge.
     * @alias module:externalfulfillmentshipments_v2024_09_11/model/ChargeBreakup
     * @class
     * @param baseAmount {Amount}
     * @param discountAmount {Amount}
     * @param netAmount {Amount}
     */
    constructor(baseAmount: Amount, discountAmount: Amount, netAmount: Amount);
    baseAmount: Amount;
    discountAmount: Amount;
    netAmount: Amount;
}
import { Amount } from './Amount.js';
//# sourceMappingURL=ChargeBreakup.d.ts.map