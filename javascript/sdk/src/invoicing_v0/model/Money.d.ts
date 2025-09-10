/**
 * The Money model module.
 * @module invoicing_v0/model/Money
 * @version v0
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
     * Three-digit currency code in ISO 4217 format.
     * @member {String} currencyCode
     * @type {String}
     */
    currencyCode: string;
    /**
     * The currency amount.
     * @member {String} amount
     * @type {String}
     */
    amount: string;
}
//# sourceMappingURL=Money.d.ts.map