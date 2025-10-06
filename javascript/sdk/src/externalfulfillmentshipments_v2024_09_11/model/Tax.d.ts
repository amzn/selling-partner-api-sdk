/**
 * The Tax model module.
 * @module externalfulfillmentshipments_v2024_09_11/model/Tax
 * @version 2024-09-11
 */
export class Tax {
    /**
     * Constructs a <code>Tax</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {Tax} obj Optional instance to populate.
     * @return {Tax} The populated <code>Tax</code> instance.
     */
    static constructFromObject(data: any, obj: Tax): Tax;
    /**
     * Constructs a new <code>Tax</code>.
     * Information about taxes.
     * @alias module:externalfulfillmentshipments_v2024_09_11/model/Tax
     * @class
     * @param charge {ChargeBreakup}
     */
    constructor(charge: ChargeBreakup);
    charge: ChargeBreakup;
    /**
     * The type of tax.
     * @member {String} type
     * @type {String}
     */
    type: string;
    /**
     * A decimal number with no loss of precision. Useful when precision loss is unacceptable, as with currencies.
     * @member {String} rate
     * @type {String}
     */
    rate: string;
}
export namespace Tax {
    namespace TypeEnum {
        let VAT: string;
        let CST: string;
        let IGST: string;
        let SGST: string;
        let CGST: string;
        let UTGST: string;
        let CESS: string;
        let OTHER: string;
        let TOTAL: string;
    }
    /**
     * *
     */
    type TypeEnum = string;
}
import { ChargeBreakup } from './ChargeBreakup.js';
//# sourceMappingURL=Tax.d.ts.map