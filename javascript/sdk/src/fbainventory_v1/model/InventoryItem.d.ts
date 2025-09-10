/**
 * The InventoryItem model module.
 * @module fbainventory_v1/model/InventoryItem
 * @version v1
 */
export class InventoryItem {
    /**
     * Constructs a <code>InventoryItem</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {InventoryItem} obj Optional instance to populate.
     * @return {InventoryItem} The populated <code>InventoryItem</code> instance.
     */
    static constructFromObject(data: any, obj: InventoryItem): InventoryItem;
    /**
     * Constructs a new <code>InventoryItem</code>.
     * An item in the list of inventory to be added.
     * @alias module:fbainventory_v1/model/InventoryItem
     * @class
     * @param sellerSku {String} The seller SKU of the item.
     * @param marketplaceId {String} The marketplaceId.
     * @param quantity {Number} The quantity of item to add.
     */
    constructor(sellerSku: string, marketplaceId: string, quantity: number);
    sellerSku: string;
    marketplaceId: string;
    quantity: number;
}
//# sourceMappingURL=InventoryItem.d.ts.map