/**
 * The Money model module.
 * @module vendordforders_v2021_12_28/model/Money
 * @version 2021-12-28
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
     * Three digit currency code in ISO 4217 format. String of length 3.
     * @member {String} currencyCode
     * @type {String}
     */
    currencyCode: string;
    /**
     * A decimal number with no loss of precision. Useful when precision loss is unacceptable, as with currencies. Follows RFC7159 for number representation.
     * @member {String} amount
     * @type {String}
     */
    amount: string;
}
//# sourceMappingURL=Money.d.ts.map