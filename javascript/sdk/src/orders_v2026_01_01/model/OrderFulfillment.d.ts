/**
 * The OrderFulfillment model module.
 * @module orders_v2026_01_01/model/OrderFulfillment
 * @version 2026-01-01
 */
export class OrderFulfillment {
    /**
     * Constructs a <code>OrderFulfillment</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {OrderFulfillment} obj Optional instance to populate.
     * @return {OrderFulfillment} The populated <code>OrderFulfillment</code> instance.
     */
    static constructFromObject(data: any, obj: OrderFulfillment): OrderFulfillment;
    /**
     * Constructs a new <code>OrderFulfillment</code>.
     * Information about how the order is being processed, packed, and shipped to the customer.
     * @alias module:orders_v2026_01_01/model/OrderFulfillment
     * @class
     * @param fulfillmentStatus {FulfillmentStatus}
     */
    constructor(fulfillmentStatus: FulfillmentStatus);
    fulfillmentStatus: FulfillmentStatus;
    /**
     * Specifies whether Amazon or the merchant is responsible for fulfilling this order.  **Possible values**: `AMAZON`, `MERCHANT`.
     * @member {String} fulfilledBy
     * @type {String}
     */
    fulfilledBy: string;
    /**
     * The category of the shipping speed option selected by the customer at checkout.  **Possible values**: `EXPEDITED`, `FREE_ECONOMY`, `NEXT_DAY`, `PRIORITY`, `SAME_DAY`, `SECOND_DAY`, `SCHEDULED`, `STANDARD`.
     * @member {String} fulfillmentServiceLevel
     * @type {String}
     */
    fulfillmentServiceLevel: string;
    /**
     * @member {DateTimeRange} shipByWindow
     * @type {DateTimeRange}
     */
    shipByWindow: DateTimeRange;
    /**
     * @member {DateTimeRange} deliverByWindow
     * @type {DateTimeRange}
     */
    deliverByWindow: DateTimeRange;
}
import { FulfillmentStatus } from './FulfillmentStatus.js';
import { DateTimeRange } from './DateTimeRange.js';
//# sourceMappingURL=OrderFulfillment.d.ts.map