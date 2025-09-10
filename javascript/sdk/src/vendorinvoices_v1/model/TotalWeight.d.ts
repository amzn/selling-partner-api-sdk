/**
 * The TotalWeight model module.
 * @module vendorinvoices_v1/model/TotalWeight
 * @version v1
 */
export class TotalWeight {
    /**
     * Constructs a <code>TotalWeight</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {TotalWeight} obj Optional instance to populate.
     * @return {TotalWeight} The populated <code>TotalWeight</code> instance.
     */
    static constructFromObject(data: any, obj: TotalWeight): TotalWeight;
    /**
     * Constructs a new <code>TotalWeight</code>.
     * The aggregate weight of this item being invoiced. This information will be available for items sold by weight.
     * @alias module:vendorinvoices_v1/model/TotalWeight
     * @class
     * @param unitOfMeasure {String} The unit of measure for items sold by weight.
     * @param amount {String} A decimal number with no loss of precision. Useful when precision loss is unacceptable, as with currencies. Follows RFC7159 for number representation. <br>**Pattern** : `^-?(0|([1-9]\\d*))(\\.\\d+)?([eE][+-]?\\d+)?$`.
     */
    constructor(unitOfMeasure: string, amount: string);
    unitOfMeasure: string;
    amount: string;
}
export namespace TotalWeight {
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
//# sourceMappingURL=TotalWeight.d.ts.map