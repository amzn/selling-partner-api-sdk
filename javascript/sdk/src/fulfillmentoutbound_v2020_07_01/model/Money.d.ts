/**
 * The Money model module.
 * @module fulfillmentoutbound_v2020_07_01/model/Money
 * @version 2020-07-01
 */
export class Money {
    /**
     * Constructs a <code>Money</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {Money} obj Optional instance to populate.
     * @return {Money} The populated <code>Money</code> instance.
     */
    static constructFromObject(data: any, obj: Money): Money;
    /**
     * Constructs a new <code>Money</code>.
     * An amount of money, including units in the form of currency.
     * @alias module:fulfillmentoutbound_v2020_07_01/model/Money
     * @class
     * @param currencyCode {String} Three digit currency code in ISO 4217 format.
     * @param value {String} A decimal number with no loss of precision. Useful when precision loss is unacceptable, as with currencies. Follows RFC7159 for number representation.
     */
    constructor(currencyCode: string, value: string);
    currencyCode: string;
    value: string;
}
//# sourceMappingURL=Money.d.ts.map