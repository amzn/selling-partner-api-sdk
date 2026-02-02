/**
 * The Money model module.
 * @module orders_v2026_01_01/model/Money
 * @version 2026-01-01
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
     * @alias module:orders_v2026_01_01/model/Money
     * @class
     * @param amount {String} A decimal number with no loss of precision. Follows RFC 7159 for number representation.
     * @param currencyCode {String} The three-letter currency code that identifies the currency type, following ISO 4217 international standards.
     */
    constructor(amount: string, currencyCode: string);
    amount: string;
    currencyCode: string;
}
//# sourceMappingURL=Money.d.ts.map