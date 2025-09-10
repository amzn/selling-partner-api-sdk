/**
 * The ItemQuantity model module.
 * @module vendorinvoices_v1/model/ItemQuantity
 * @version v1
 */
export class ItemQuantity {
    /**
     * Constructs a <code>ItemQuantity</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {ItemQuantity} obj Optional instance to populate.
     * @return {ItemQuantity} The populated <code>ItemQuantity</code> instance.
     */
    static constructFromObject(data: any, obj: ItemQuantity): ItemQuantity;
    /**
     * Constructs a new <code>ItemQuantity</code>.
     * Details of quantity.
     * @alias module:vendorinvoices_v1/model/ItemQuantity
     * @class
     * @param amount {Number} Quantity of an item. This value should not be zero.
     * @param unitOfMeasure {String} Unit of measure for the quantity.
     */
    constructor(amount: number, unitOfMeasure: string);
    amount: number;
    unitOfMeasure: string;
    /**
     * The case size, if the unit of measure value is Cases.
     * @member {Number} unitSize
     * @type {Number}
     */
    unitSize: number;
    /**
     * @member {TotalWeight} totalWeight
     * @type {TotalWeight}
     */
    totalWeight: TotalWeight;
}
export namespace ItemQuantity {
    namespace UnitOfMeasureEnum {
        let Cases: string;
        let Eaches: string;
    }
    /**
     * *
     */
    type UnitOfMeasureEnum = string;
}
import { TotalWeight } from './TotalWeight.js';
//# sourceMappingURL=ItemQuantity.d.ts.map