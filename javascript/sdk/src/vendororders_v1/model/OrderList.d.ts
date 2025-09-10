/**
 * The OrderList model module.
 * @module vendororders_v1/model/OrderList
 * @version v1
 */
export class OrderList {
    /**
     * Constructs a <code>OrderList</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {OrderList} obj Optional instance to populate.
     * @return {OrderList} The populated <code>OrderList</code> instance.
     */
    static constructFromObject(data: any, obj: OrderList): OrderList;
    /**
     * @member {Pagination} pagination
     * @type {Pagination}
     */
    pagination: Pagination;
    /**
     * Represents an individual order within the OrderList.
     * @member {[Order]} orders
     * @type {[Order]}
     */
    orders: [Order];
}
import { Pagination } from './Pagination.js';
import { Order } from './Order.js';
//# sourceMappingURL=OrderList.d.ts.map