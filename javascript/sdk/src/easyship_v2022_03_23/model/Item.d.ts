/**
 * The Item model module.
 * @module easyship_v2022_03_23/model/Item
 * @version 2022-03-23
 */
export class Item {
    /**
     * Constructs a <code>Item</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {Item} obj Optional instance to populate.
     * @return {Item} The populated <code>Item</code> instance.
     */
    static constructFromObject(data: any, obj: Item): Item;
    /**
     * The Amazon-defined order item identifier.
     * @member {String} orderItemId
     * @type {String}
     */
    orderItemId: string;
    /**
     * A list of serial numbers for the items associated with the `OrderItemId` value.
     * @member {[String]} orderItemSerialNumbers
     * @type {[String]}
     */
    orderItemSerialNumbers: [string];
}
//# sourceMappingURL=Item.d.ts.map