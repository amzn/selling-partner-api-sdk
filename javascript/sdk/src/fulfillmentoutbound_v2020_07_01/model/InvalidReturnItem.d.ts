/**
 * The InvalidReturnItem model module.
 * @module fulfillmentoutbound_v2020_07_01/model/InvalidReturnItem
 * @version 2020-07-01
 */
export class InvalidReturnItem {
    /**
     * Constructs a <code>InvalidReturnItem</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {InvalidReturnItem} obj Optional instance to populate.
     * @return {InvalidReturnItem} The populated <code>InvalidReturnItem</code> instance.
     */
    static constructFromObject(data: any, obj: InvalidReturnItem): InvalidReturnItem;
    /**
     * Constructs a new <code>InvalidReturnItem</code>.
     * An item that is invalid for return.
     * @alias module:fulfillmentoutbound_v2020_07_01/model/InvalidReturnItem
     * @class
     * @param sellerReturnItemId {String} An identifier the seller assigns to the return item.
     * @param sellerFulfillmentOrderItemId {String} The identifier assigned to the item by the seller when the fulfillment order was created.
     * @param invalidItemReason {InvalidItemReason}
     */
    constructor(sellerReturnItemId: string, sellerFulfillmentOrderItemId: string, invalidItemReason: InvalidItemReason);
    sellerReturnItemId: string;
    sellerFulfillmentOrderItemId: string;
    invalidItemReason: InvalidItemReason;
}
import { InvalidItemReason } from './InvalidItemReason.js';
//# sourceMappingURL=InvalidReturnItem.d.ts.map