/**
 * The TaxDetail model module.
 * @module vendordfpayments_v1/model/TaxDetail
 * @version v1
 */
export class TaxDetail {
    /**
     * Constructs a <code>TaxDetail</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {TaxDetail} obj Optional instance to populate.
     * @return {TaxDetail} The populated <code>TaxDetail</code> instance.
     */
    static constructFromObject(data: any, obj: TaxDetail): TaxDetail;
    /**
     * Constructs a new <code>TaxDetail</code>.
     * Details of tax amount applied.
     * @alias module:vendordfpayments_v1/model/TaxDetail
     * @class
     * @param taxType {String} Type of the tax applied.
     * @param taxAmount {Money}
     */
    constructor(taxType: string, taxAmount: Money);
    taxType: string;
    taxAmount: Money;
    /**
     * A decimal number with no loss of precision. Useful when precision loss is unacceptable, as with currencies. Follows RFC7159 for number representation. <br>**Pattern** : `^-?(0|([1-9]\\d*))(\\.\\d+)?([eE][+-]?\\d+)?$`.
     * @member {String} taxRate
     * @type {String}
     */
    taxRate: string;
    /**
     * @member {Money} taxableAmount
     * @type {Money}
     */
    taxableAmount: Money;
}
export namespace TaxDetail {
    /**
     * *
     */
    type TaxTypeEnum = string;
    let TaxTypeEnum: {
        /**
           * value: "CGST"
           * @const
           */
        CGST: string;
        /**
           * value: "SGST"
           * @const
           */
        SGST: string;
        /**
           * value: "CESS"
           * @const
           */
        CESS: string;
        /**
           * value: "UTGST"
           * @const
           */
        UTGST: string;
        /**
           * value: "IGST"
           * @const
           */
        IGST: string;
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
           * value: "TVA"
           * @const
           */
        TVA: string;
        /**
           * value: "VAT"
           * @const
           */
        VAT: string;
        /**
           * value: "GST"
           * @const
           */
        GST: string;
        /**
           * value: "ST"
           * @const
           */
        ST: string;
        /**
           * value: "Consumption"
           * @const
           */
        Consumption: string;
        /**
           * value: "MutuallyDefined"
           * @const
           */
        MutuallyDefined: string;
        /**
           * value: "DomesticVAT"
           * @const
           */
        DomesticVAT: string;
    };
}
import { Money } from './Money.js';
//# sourceMappingURL=TaxDetail.d.ts.map