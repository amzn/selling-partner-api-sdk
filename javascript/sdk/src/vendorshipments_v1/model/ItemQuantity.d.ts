/**
 * The ItemQuantity model module.
 * @module vendorshipments_v1/model/ItemQuantity
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
     * Details of item quantity.
     * @alias module:vendorshipments_v1/model/ItemQuantity
     * @class
     * @param amount {Number} Amount of units shipped for a specific item at a shipment level. If the item is present only in certain cartons or pallets within the shipment, please provide this at the appropriate carton or pallet level.
     * @param unitOfMeasure {String} Unit of measure for the shipped quantity.
     */
    constructor(amount: number, unitOfMeasure: string);
    amount: number;
    unitOfMeasure: string;
    /**
     * The case size, in the event that we ordered using cases. Otherwise, 1.
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