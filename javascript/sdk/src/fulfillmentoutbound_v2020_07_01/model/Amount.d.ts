/**
 * The Amount model module.
 * @module fulfillmentoutbound_v2020_07_01/model/Amount
 * @version 2020-07-01
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
     * A quantity based on unit of measure.
     * @alias module:fulfillmentoutbound_v2020_07_01/model/Amount
     * @class
     * @param unitOfMeasure {String} The unit of measure for the amount.
     * @param value {String} A decimal number with no loss of precision. Useful when precision loss is unacceptable, as with currencies. Follows RFC7159 for number representation.
     */
    constructor(unitOfMeasure: string, value: string);
    unitOfMeasure: string;
    value: string;
}
export namespace Amount {
    namespace UnitOfMeasureEnum {
        let Eaches: string;
    }
    /**
     * *
     */
    type UnitOfMeasureEnum = string;
}
//# sourceMappingURL=Amount.d.ts.map