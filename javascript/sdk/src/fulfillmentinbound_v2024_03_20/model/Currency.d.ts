/**
 * The Currency model module.
 * @module fulfillmentinbound_v2024_03_20/model/Currency
 * @version 2024-03-20
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
     * The type and amount of currency.
     * @alias module:fulfillmentinbound_v2024_03_20/model/Currency
     * @class
     * @param amount {Number} Decimal value of the currency.
     * @param code {String} ISO 4217 standard of a currency code.
     */
    constructor(amount: number, code: string);
    amount: number;
    code: string;
}
//# sourceMappingURL=Currency.d.ts.map