/**
 * The Currency model module.
 * @module sellerWallet_2024_03_01/model/Currency
 * @version 2024-03-01
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
     * The three-digit currency code in ISO 4217 format.
     * @member {String} currencyCode
     * @type {String}
     */
    currencyCode: string;
    /**
     * A decimal number such as amount or FX rate.
     * @member {Number} currencyAmount
     * @type {Number}
     */
    currencyAmount: number;
}
//# sourceMappingURL=Currency.d.ts.map