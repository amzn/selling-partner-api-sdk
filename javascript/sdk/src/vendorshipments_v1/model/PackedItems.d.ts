/**
 * The PackedItems model module.
 * @module vendorshipments_v1/model/PackedItems
 * @version v1
 */
export class PackedItems {
    /**
     * Constructs a <code>PackedItems</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {PackedItems} obj Optional instance to populate.
     * @return {PackedItems} The populated <code>PackedItems</code> instance.
     */
    static constructFromObject(data: any, obj: PackedItems): PackedItems;
    /**
     * Item sequence number for the item. The first item will be 001, the second 002, and so on. This number is used as a reference to refer to this item from the carton or pallet level.
     * @member {String} itemSequenceNumber
     * @type {String}
     */
    itemSequenceNumber: string;
    /**
     * Buyer Standard Identification Number (ASIN) of an item.
     * @member {String} buyerProductIdentifier
     * @type {String}
     */
    buyerProductIdentifier: string;
    /**
     * The vendor selected product identification of the item. Should be the same as was sent in the purchase order.
     * @member {String} vendorProductIdentifier
     * @type {String}
     */
    vendorProductIdentifier: string;
    /**
     * @member {ItemQuantity} packedQuantity
     * @type {ItemQuantity}
     */
    packedQuantity: ItemQuantity;
    /**
     * @member {PackageItemDetails} itemDetails
     * @type {PackageItemDetails}
     */
    itemDetails: PackageItemDetails;
}
import { ItemQuantity } from './ItemQuantity.js';
import { PackageItemDetails } from './PackageItemDetails.js';
//# sourceMappingURL=PackedItems.d.ts.map