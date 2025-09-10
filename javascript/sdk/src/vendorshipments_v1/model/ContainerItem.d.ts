/**
 * The ContainerItem model module.
 * @module vendorshipments_v1/model/ContainerItem
 * @version v1
 */
export class ContainerItem {
    /**
     * Constructs a <code>ContainerItem</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {ContainerItem} obj Optional instance to populate.
     * @return {ContainerItem} The populated <code>ContainerItem</code> instance.
     */
    static constructFromObject(data: any, obj: ContainerItem): ContainerItem;
    /**
     * Constructs a new <code>ContainerItem</code>.
     * Carton/Pallet level details for the item.
     * @alias module:vendorshipments_v1/model/ContainerItem
     * @class
     * @param itemReference {String} The reference number for the item. Please provide the itemSequenceNumber from the 'items' segment to refer to that item's details here.
     * @param shippedQuantity {ItemQuantity}
     */
    constructor(itemReference: string, shippedQuantity: ItemQuantity);
    itemReference: string;
    shippedQuantity: ItemQuantity;
    /**
     * @member {ItemDetails} itemDetails
     * @type {ItemDetails}
     */
    itemDetails: ItemDetails;
}
import { ItemQuantity } from './ItemQuantity.js';
import { ItemDetails } from './ItemDetails.js';
//# sourceMappingURL=ContainerItem.d.ts.map