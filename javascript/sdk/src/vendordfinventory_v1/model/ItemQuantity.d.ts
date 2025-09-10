/**
 * The ItemQuantity model module.
 * @module vendordfinventory_v1/model/ItemQuantity
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
     * @alias module:vendordfinventory_v1/model/ItemQuantity
     * @class
     * @param unitOfMeasure {String} Unit of measure for the available quantity.
     */
    constructor(unitOfMeasure: string);
    unitOfMeasure: string;
    /**
     * Quantity of units available for a specific item.
     * @member {Number} amount
     * @type {Number}
     */
    amount: number;
}
//# sourceMappingURL=ItemQuantity.d.ts.map