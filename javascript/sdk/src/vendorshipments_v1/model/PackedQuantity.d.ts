/**
 * The PackedQuantity model module.
 * @module vendorshipments_v1/model/PackedQuantity
 * @version v1
 */
export class PackedQuantity {
    /**
     * Constructs a <code>PackedQuantity</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {PackedQuantity} obj Optional instance to populate.
     * @return {PackedQuantity} The populated <code>PackedQuantity</code> instance.
     */
    static constructFromObject(data: any, obj: PackedQuantity): PackedQuantity;
    /**
     * Constructs a new <code>PackedQuantity</code>.
     * Details of item quantity.
     * @alias module:vendorshipments_v1/model/PackedQuantity
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
}
export namespace PackedQuantity {
    namespace UnitOfMeasureEnum {
        let Cases: string;
        let Eaches: string;
    }
    /**
     * *
     */
    type UnitOfMeasureEnum = string;
}
//# sourceMappingURL=PackedQuantity.d.ts.map