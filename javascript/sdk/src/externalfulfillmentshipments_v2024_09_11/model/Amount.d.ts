/**
 * The Amount model module.
 * @module externalfulfillmentshipments_v2024_09_11/model/Amount
 * @version 2024-09-11
 */
export class Amount {
    /**
     * Constructs a <code>Amount</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {Amount} obj Optional instance to populate.
     * @return {Amount} The populated <code>Amount</code> instance.
     */
    static constructFromObject(data: any, obj: Amount): Amount;
    /**
     * Constructs a new <code>Amount</code>.
     * An amount of money, including units in the form of currency.
     * @alias module:externalfulfillmentshipments_v2024_09_11/model/Amount
     * @class
     * @param value {String} A decimal number with no loss of precision. Useful when precision loss is unacceptable, as with currencies.
     * @param currencyCode {String} Three digit currency code in ISO 4217 format.
     */
    constructor(value: string, currencyCode: string);
    value: string;
    currencyCode: string;
}
//# sourceMappingURL=Amount.d.ts.map