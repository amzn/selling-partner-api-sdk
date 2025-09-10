/**
 * The AssociatedItem model module.
 * @module services_v1/model/AssociatedItem
 * @version v1
 */
export class AssociatedItem {
    /**
     * Constructs a <code>AssociatedItem</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {AssociatedItem} obj Optional instance to populate.
     * @return {AssociatedItem} The populated <code>AssociatedItem</code> instance.
     */
    static constructFromObject(data: any, obj: AssociatedItem): AssociatedItem;
    /**
     * The Amazon Standard Identification Number (ASIN) of the item.
     * @member {String} asin
     * @type {String}
     */
    asin: string;
    /**
     * The title of the item.
     * @member {String} title
     * @type {String}
     */
    title: string;
    /**
     * The total number of items included in the order.
     * @member {Number} quantity
     * @type {Number}
     */
    quantity: number;
    /**
     * The Amazon-defined identifier for an order placed by the buyer, in 3-7-7 format.
     * @member {String} orderId
     * @type {String}
     */
    orderId: string;
    /**
     * The status of the item.
     * @member {String} itemStatus
     * @type {String}
     */
    itemStatus: string;
    /**
     * The brand name of the item.
     * @member {String} brandName
     * @type {String}
     */
    brandName: string;
    /**
     * @member {ItemDelivery} itemDelivery
     * @type {ItemDelivery}
     */
    itemDelivery: ItemDelivery;
}
export namespace AssociatedItem {
    namespace ItemStatusEnum {
        let ACTIVE: string;
        let CANCELLED: string;
        let SHIPPED: string;
        let DELIVERED: string;
    }
    /**
     * *
     */
    type ItemStatusEnum = string;
}
import { ItemDelivery } from './ItemDelivery.js';
//# sourceMappingURL=AssociatedItem.d.ts.map