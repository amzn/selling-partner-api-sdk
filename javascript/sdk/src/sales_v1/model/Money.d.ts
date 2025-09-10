/**
 * The Money model module.
 * @module sales_v1/model/Money
 * @version v1
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
     * The currency type and the amount.
     * @alias module:sales_v1/model/Money
     * @class
     * @param currencyCode {String} Three-digit currency code. In ISO 4217 format.
     * @param amount {String} A decimal number with no loss of precision. Useful when precision loss is unnaceptable, as with currencies. Follows RFC7159 for number representation.
     */
    constructor(currencyCode: string, amount: string);
    currencyCode: string;
    amount: string;
}
//# sourceMappingURL=Money.d.ts.map