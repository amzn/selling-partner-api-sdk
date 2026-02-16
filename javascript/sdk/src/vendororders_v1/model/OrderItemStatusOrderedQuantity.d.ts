/**
 * The OrderItemStatusOrderedQuantity model module.
 * @module vendororders_v1/model/OrderItemStatusOrderedQuantity
 * @version v1
 */
export class OrderItemStatusOrderedQuantity {
    /**
     * Constructs a <code>OrderItemStatusOrderedQuantity</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {OrderItemStatusOrderedQuantity} obj Optional instance to populate.
     * @return {OrderItemStatusOrderedQuantity} The populated <code>OrderItemStatusOrderedQuantity</code> instance.
     */
    static constructFromObject(data: any, obj: OrderItemStatusOrderedQuantity): OrderItemStatusOrderedQuantity;
    /**
     * @member {ItemQuantity} orderedQuantity
     * @type {ItemQuantity}
     */
    orderedQuantity: ItemQuantity;
    /**
     * Details of item quantity ordered.
     * @member {OrderedQuantityDetails[]} orderedQuantityDetails
     * @type {OrderedQuantityDetails[]}
     */
    orderedQuantityDetails: OrderedQuantityDetails[];
}
import { ItemQuantity } from './ItemQuantity.js';
import { OrderedQuantityDetails } from './OrderedQuantityDetails.js';
//# sourceMappingURL=OrderItemStatusOrderedQuantity.d.ts.map