/**
 * The Charge model module.
 * @module externalfulfillmentshipments_v2024_09_11/model/Charge
 * @version 2024-09-11
 */
export class Charge {
    /**
     * Constructs a <code>Charge</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {Charge} obj Optional instance to populate.
     * @return {Charge} The populated <code>Charge</code> instance.
     */
    static constructFromObject(data: any, obj: Charge): Charge;
    /**
     * Constructs a new <code>Charge</code>.
     * A shipment&#39;s charge with relevant tax information.
     * @alias module:externalfulfillmentshipments_v2024_09_11/model/Charge
     * @class
     * @param baseCharge {ChargeBreakup}
     * @param chargeType {String} The type of charge.
     * @param totalCharge {ChargeBreakup}
     * @param totalTax {Tax}
     */
    constructor(baseCharge: ChargeBreakup, chargeType: string, totalCharge: ChargeBreakup, totalTax: Tax);
    baseCharge: ChargeBreakup;
    chargeType: string;
    totalCharge: ChargeBreakup;
    totalTax: Tax;
    /**
     * The tax charge details.
     * @member {[Tax]} taxBreakup
     * @type {[Tax]}
     */
    taxBreakup: [Tax];
}
export namespace Charge {
    namespace ChargeTypeEnum {
        let PRODUCT: string;
        let SHIPPING: string;
        let GIFT_WRAP: string;
        let TOTAL: string;
        let OTHER: string;
    }
    /**
     * *
     */
    type ChargeTypeEnum = string;
}
import { ChargeBreakup } from './ChargeBreakup.js';
import { Tax } from './Tax.js';
//# sourceMappingURL=Charge.d.ts.map