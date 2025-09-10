/**
 * The Money model module.
 * @module vendororders_v1/model/Money
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
     * Three digit currency code in ISO 4217 format. String of length 3.
     * @member {String} currencyCode
     * @type {String}
     */
    currencyCode: string;
    /**
     * A decimal number with no loss of precision. Useful when precision loss is unacceptable, as with currencies. Follows RFC7159 for number representation. <br>**Pattern** : `^-?(0|([1-9]\\d*))(\\.\\d+)?([eE][+-]?\\d+)?$`.
     * @member {String} amount
     * @type {String}
     */
    amount: string;
    /**
     * The unit of measure for prices of items sold by weight. If this field is absent, the item is sold by eaches.
     * @member {String} unitOfMeasure
     * @type {String}
     */
    unitOfMeasure: string;
}
export namespace Money {
    namespace UnitOfMeasureEnum {
        let POUNDS: string;
        let OUNCES: string;
        let GRAMS: string;
        let KILOGRAMS: string;
    }
    /**
     * *
     */
    type UnitOfMeasureEnum = string;
}
//# sourceMappingURL=Money.d.ts.map