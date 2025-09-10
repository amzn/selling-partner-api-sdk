/**
 * The PackedItem model module.
 * @module vendordfshipping_v2021_12_28/model/PackedItem
 * @version 2021-12-28
 */
export class PackedItem {
    /**
     * Constructs a <code>PackedItem</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {PackedItem} obj Optional instance to populate.
     * @return {PackedItem} The populated <code>PackedItem</code> instance.
     */
    static constructFromObject(data: any, obj: PackedItem): PackedItem;
    /**
     * Constructs a new <code>PackedItem</code>.
     * An item that has been packed into a container for shipping.
     * @alias module:vendordfshipping_v2021_12_28/model/PackedItem
     * @class
     * @param itemSequenceNumber {Number} The sequence number of the item. The number must be the same as the order number of the item.
     * @param packedQuantity {ItemQuantity}
     */
    constructor(itemSequenceNumber: number, packedQuantity: ItemQuantity);
    itemSequenceNumber: number;
    packedQuantity: ItemQuantity;
    /**
     * The buyer's Amazon Standard Identification Number (ASIN) of an item. Either `buyerProductIdentifier` or `vendorProductIdentifier` is required.
     * @member {String} buyerProductIdentifier
     * @type {String}
     */
    buyerProductIdentifier: string;
    /**
     * The piece number of the item in this container. This is required when the item is split across different containers.
     * @member {Number} pieceNumber
     * @type {Number}
     */
    pieceNumber: number;
    /**
     * An item's product identifier, which the vendor selects. This identifier should be the same as the identifier, such as a SKU, in the purchase order.
     * @member {String} vendorProductIdentifier
     * @type {String}
     */
    vendorProductIdentifier: string;
}
import { ItemQuantity } from './ItemQuantity.js';
//# sourceMappingURL=PackedItem.d.ts.map