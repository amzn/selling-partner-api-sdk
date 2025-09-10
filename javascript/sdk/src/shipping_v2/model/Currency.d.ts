/**
 * The Currency model module.
 * @module shipping_v2/model/Currency
 * @version v2
 */
export class Currency {
    /**
     * Constructs a <code>Currency</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {Currency} obj Optional instance to populate.
     * @return {Currency} The populated <code>Currency</code> instance.
     */
    static constructFromObject(data: any, obj: Currency): Currency;
    /**
     * Constructs a new <code>Currency</code>.
     * The monetary value in the currency indicated, in ISO 4217 standard format.
     * @alias module:shipping_v2/model/Currency
     * @class
     * @param value {Number} The monetary value.
     * @param unit {String} The ISO 4217 format 3-character currency code.
     */
    constructor(value: number, unit: string);
    value: number;
    unit: string;
}
//# sourceMappingURL=Currency.d.ts.map