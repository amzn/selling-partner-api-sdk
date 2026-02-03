/**
 * The OrderList model module.
 * @module vendordforders_v2021_12_28/model/OrderList
 * @version 2021-12-28
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
     * Represents a purchase order within the OrderList.
     * @member {Array[]} orders
     * @type {Array[]}
     */
    orders: any[][];
}
import { Pagination } from './Pagination.js';
//# sourceMappingURL=OrderList.d.ts.map