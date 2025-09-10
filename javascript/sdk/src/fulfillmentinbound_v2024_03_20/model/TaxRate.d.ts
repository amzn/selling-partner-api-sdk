/**
 * The TaxRate model module.
 * @module fulfillmentinbound_v2024_03_20/model/TaxRate
 * @version 2024-03-20
 */
export class TaxRate {
    /**
     * Constructs a <code>TaxRate</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {TaxRate} obj Optional instance to populate.
     * @return {TaxRate} The populated <code>TaxRate</code> instance.
     */
    static constructFromObject(data: any, obj: TaxRate): TaxRate;
    /**
     * Rate of cess tax.
     * @member {Number} cessRate
     * @type {Number}
     */
    cessRate: number;
    /**
     * Rate of gst tax.
     * @member {Number} gstRate
     * @type {Number}
     */
    gstRate: number;
    /**
     * Type of tax. Possible values: `CGST`, `SGST`, `IGST`, `TOTAL_TAX`.
     * @member {String} taxType
     * @type {String}
     */
    taxType: string;
}
//# sourceMappingURL=TaxRate.d.ts.map