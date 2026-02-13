/**
 * The OrderChangeTypeFilter model module.
 * @module notifications_v1/model/OrderChangeTypeFilter
 * @version v1
 */
export class OrderChangeTypeFilter {
    /**
     * Constructs a <code>OrderChangeTypeFilter</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {OrderChangeTypeFilter} obj Optional instance to populate.
     * @return {OrderChangeTypeFilter} The populated <code>OrderChangeTypeFilter</code> instance.
     */
    static constructFromObject(data: any, obj: OrderChangeTypeFilter): OrderChangeTypeFilter;
    /**
     * A list of order change types to subscribe to (for example: `BuyerRequestedChange`). To receive notifications of all change types, do not provide this list.
     * @member {OrderChangeTypeEnum[]} orderChangeTypes
     * @type {OrderChangeTypeEnum[]}
     */
    orderChangeTypes: OrderChangeTypeEnum[];
}
import { OrderChangeTypeEnum } from './OrderChangeTypeEnum.js';
//# sourceMappingURL=OrderChangeTypeFilter.d.ts.map