/**
 * The MoneyType model module.
 * @module pricing_v0/model/MoneyType
 * @version v0
 */
export class MoneyType {
    /**
     * Constructs a <code>MoneyType</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {MoneyType} obj Optional instance to populate.
     * @return {MoneyType} The populated <code>MoneyType</code> instance.
     */
    static constructFromObject(data: any, obj: MoneyType): MoneyType;
    /**
     * The currency code in ISO 4217 format.
     * @member {String} currencyCode
     * @type {String}
     */
    currencyCode: string;
    /**
     * The monetary value.
     * @member {Number} amount
     * @type {Number}
     */
    amount: number;
}
//# sourceMappingURL=MoneyType.d.ts.map