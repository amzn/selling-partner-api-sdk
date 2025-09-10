/**
 * The CurrencyAmount model module.
 * @module merchantfulfillment_v0/model/CurrencyAmount
 * @version v0
 */
export class CurrencyAmount {
    /**
     * Constructs a <code>CurrencyAmount</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {CurrencyAmount} obj Optional instance to populate.
     * @return {CurrencyAmount} The populated <code>CurrencyAmount</code> instance.
     */
    static constructFromObject(data: any, obj: CurrencyAmount): CurrencyAmount;
    /**
     * Constructs a new <code>CurrencyAmount</code>.
     * Currency type and amount.
     * @alias module:merchantfulfillment_v0/model/CurrencyAmount
     * @class
     * @param currencyCode {String} Three-digit currency code in ISO 4217 format.
     * @param amount {Number} The currency amount.
     */
    constructor(currencyCode: string, amount: number);
    currencyCode: string;
    amount: number;
}
//# sourceMappingURL=CurrencyAmount.d.ts.map