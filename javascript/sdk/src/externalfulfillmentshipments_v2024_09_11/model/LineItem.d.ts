/**
 * The LineItem model module.
 * @module externalfulfillmentshipments_v2024_09_11/model/LineItem
 * @version 2024-09-11
 */
export class LineItem {
    /**
     * Constructs a <code>LineItem</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {LineItem} obj Optional instance to populate.
     * @return {LineItem} The populated <code>LineItem</code> instance.
     */
    static constructFromObject(data: any, obj: LineItem): LineItem;
    /**
     * Constructs a new <code>LineItem</code>.
     * Information about the line item being confirmed or rejected.
     * @alias module:externalfulfillmentshipments_v2024_09_11/model/LineItem
     * @class
     * @param id {String} The identifier of the line item from the shipment that is being confirmed or rejected by the seller.
     */
    constructor(id: string);
    id: string;
    /**
     * The quantity of the line item.
     * @member {Number} quantity
     * @type {Number}
     */
    quantity: number;
}
//# sourceMappingURL=LineItem.d.ts.map