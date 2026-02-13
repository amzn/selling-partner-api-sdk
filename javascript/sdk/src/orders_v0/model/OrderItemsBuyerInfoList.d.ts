/**
 * The OrderItemsBuyerInfoList model module.
 * @module orders_v0/model/OrderItemsBuyerInfoList
 * @version v0
 */
export class OrderItemsBuyerInfoList {
    /**
     * Constructs a <code>OrderItemsBuyerInfoList</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {OrderItemsBuyerInfoList} obj Optional instance to populate.
     * @return {OrderItemsBuyerInfoList} The populated <code>OrderItemsBuyerInfoList</code> instance.
     */
    static constructFromObject(data: any, obj: OrderItemsBuyerInfoList): OrderItemsBuyerInfoList;
    /**
     * Constructs a new <code>OrderItemsBuyerInfoList</code>.
     * A single order item&#39;s buyer information list with the order ID.
     * @alias module:orders_v0/model/OrderItemsBuyerInfoList
     * @class
     * @param orderItems {OrderItemBuyerInfo[]} A single order item's buyer information list.
     * @param amazonOrderId {String} An Amazon-defined order identifier, in 3-7-7 format.
     */
    constructor(orderItems: OrderItemBuyerInfo[], amazonOrderId: string);
    orderItems: OrderItemBuyerInfo[];
    amazonOrderId: string;
    /**
     * When present and not empty, pass this string token in the next request to return the next response page.
     * @member {String} nextToken
     * @type {String}
     */
    nextToken: string;
}
import { OrderItemBuyerInfo } from './OrderItemBuyerInfo.js';
//# sourceMappingURL=OrderItemsBuyerInfoList.d.ts.map