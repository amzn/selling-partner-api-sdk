/**
 * The MoneyAmount model module.
 * @module services_v1/model/MoneyAmount
 * @version v1
 */
export class MoneyAmount {
    /**
     * Constructs a <code>MoneyAmount</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {MoneyAmount} obj Optional instance to populate.
     * @return {MoneyAmount} The populated <code>MoneyAmount</code> instance.
     */
    static constructFromObject(data: Object, obj: MoneyAmount): MoneyAmount;
    /**
     * Constructs a new <code>MoneyAmount</code>.
     * The monetary amount and type of currency.
     * @alias module:services_v1/model/MoneyAmount
     * @class
     * @param value {Number} The monetary value.
     * @param currency {String} The currency code in ISO 4217 format.
     */
    constructor(value: number, currency: string);
    value: number;
    currency: string;
}
//# sourceMappingURL=MoneyAmount.d.ts.map