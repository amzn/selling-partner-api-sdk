/**
 * The AssociatedItem model module.
 * @module orders_v0/model/AssociatedItem
 * @version v0
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
     * The order item's order identifier, in 3-7-7 format.
     * @member {String} orderId
     * @type {String}
     */
    orderId: string;
    /**
     * An Amazon-defined item identifier for the associated item.
     * @member {String} orderItemId
     * @type {String}
     */
    orderItemId: string;
    /**
     * @member {AssociationType} associationType
     * @type {AssociationType}
     */
    associationType: AssociationType;
}
import { AssociationType } from './AssociationType.js';
//# sourceMappingURL=AssociatedItem.d.ts.map