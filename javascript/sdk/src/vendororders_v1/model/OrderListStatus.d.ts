/**
 * The OrderListStatus model module.
 * @module vendororders_v1/model/OrderListStatus
 * @version v1
 */
export class OrderListStatus {
    /**
     * Constructs a <code>OrderListStatus</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {OrderListStatus} obj Optional instance to populate.
     * @return {OrderListStatus} The populated <code>OrderListStatus</code> instance.
     */
    static constructFromObject(data: any, obj: OrderListStatus): OrderListStatus;
    /**
     * @member {Pagination} pagination
     * @type {Pagination}
     */
    pagination: Pagination;
    /**
     * Represents an order status within the OrderListStatus.
     * @member {[OrderStatus]} ordersStatus
     * @type {[OrderStatus]}
     */
    ordersStatus: [OrderStatus];
}
import { Pagination } from './Pagination.js';
import { OrderStatus } from './OrderStatus.js';
//# sourceMappingURL=OrderListStatus.d.ts.map