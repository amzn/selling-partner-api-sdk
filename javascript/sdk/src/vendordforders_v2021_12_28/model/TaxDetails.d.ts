/**
 * The TaxDetails model module.
 * @module vendordforders_v2021_12_28/model/TaxDetails
 * @version 2021-12-28
 */
export class TaxDetails {
    /**
     * Constructs a <code>TaxDetails</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {TaxDetails} obj Optional instance to populate.
     * @return {TaxDetails} The populated <code>TaxDetails</code> instance.
     */
    static constructFromObject(data: any, obj: TaxDetails): TaxDetails;
    /**
     * Constructs a new <code>TaxDetails</code>.
     * The tax details for the order. _Note:_ Amazon calculates tax on the list price (Amazon retail price).
     * @alias module:vendordforders_v2021_12_28/model/TaxDetails
     * @class
     * @param taxAmount {Money}
     */
    constructor(taxAmount: Money);
    taxAmount: Money;
    /**
     * A decimal number with no loss of precision. Useful when precision loss is unacceptable, as with currencies. Follows RFC7159 for number representation.
     * @member {String} taxRate
     * @type {String}
     */
    taxRate: string;
    /**
     * @member {Money} taxableAmount
     * @type {Money}
     */
    taxableAmount: Money;
    /**
     * Tax type.
     * @member {String} type
     * @type {String}
     */
    type: string;
}
export namespace TaxDetails {
    /**
     * *
     */
    type TypeEnum = string;
    let TypeEnum: {
        /**
           * value: "CONSUMPTION"
           * @const
           */
        CONSUMPTION: string;
        /**
           * value: "GST"
           * @const
           */
        GST: string;
        /**
           * value: "MwSt."
           * @const
           */
        'MwSt.': string;
        /**
           * value: "PST"
           * @const
           */
        PST: string;
        /**
           * value: "TOTAL"
           * @const
           */
        TOTAL: string;
        /**
           * value: "TVA"
           * @const
           */
        TVA: string;
        /**
           * value: "VAT"
           * @const
           */
        VAT: string;
    };
}
import { Money } from './Money.js';
//# sourceMappingURL=TaxDetails.d.ts.map