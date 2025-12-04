/**
 * The DeliveryQuantity model module.
 * @module fulfillmentoutbound_v2020_07_01/model/DeliveryQuantity
 * @version 2020-07-01
 */
export class DeliveryQuantity {
    /**
     * Constructs a <code>DeliveryQuantity</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {DeliveryQuantity} obj Optional instance to populate.
     * @return {DeliveryQuantity} The populated <code>DeliveryQuantity</code> instance.
     */
    static constructFromObject(data: any, obj: DeliveryQuantity): DeliveryQuantity;
    /**
     * Constructs a new <code>DeliveryQuantity</code>.
     * A quantity based on unit of measure.
     * @alias module:fulfillmentoutbound_v2020_07_01/model/DeliveryQuantity
     * @class
     * @param unitOfMeasure {String} The unit of measure for the amount.
     * @param amount {String} A decimal number with no loss of precision. Useful when precision loss is unacceptable, as with currencies. Follows RFC7159 for number representation.
     */
    constructor(unitOfMeasure: string, amount: string);
    unitOfMeasure: string;
    amount: string;
}
export namespace DeliveryQuantity {
    namespace UnitOfMeasureEnum {
        let Each: string;
    }
    /**
     * *
     */
    type UnitOfMeasureEnum = string;
}
//# sourceMappingURL=DeliveryQuantity.d.ts.map