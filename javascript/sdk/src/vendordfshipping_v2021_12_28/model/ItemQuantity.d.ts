/**
 * The ItemQuantity model module.
 * @module vendordfshipping_v2021_12_28/model/ItemQuantity
 * @version 2021-12-28
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
     * @alias module:vendordfshipping_v2021_12_28/model/ItemQuantity
     * @class
     * @param amount {Number} Quantity of units shipped for a specific item at a shipment level. If the item is present only in certain packages or pallets within the shipment, please provide this at the appropriate package or pallet level.
     * @param unitOfMeasure {String} Unit of measure for the shipped quantity.
     */
    constructor(amount: number, unitOfMeasure: string);
    amount: number;
    unitOfMeasure: string;
}
//# sourceMappingURL=ItemQuantity.d.ts.map