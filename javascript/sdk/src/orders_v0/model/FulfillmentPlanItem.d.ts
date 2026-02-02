/**
 * The FulfillmentPlanItem model module.
 * @module orders_v0/model/FulfillmentPlanItem
 * @version v0
 */
export class FulfillmentPlanItem {
    /**
     * Constructs a <code>FulfillmentPlanItem</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {FulfillmentPlanItem} obj Optional instance to populate.
     * @return {FulfillmentPlanItem} The populated <code>FulfillmentPlanItem</code> instance.
     */
    static constructFromObject(data: any, obj: FulfillmentPlanItem): FulfillmentPlanItem;
    /**
     * Constructs a new <code>FulfillmentPlanItem</code>.
     * The order items associated with this fulfillment plan.
     * @alias module:orders_v0/model/FulfillmentPlanItem
     * @class
     * @param orderItemId {String} An Amazon-defined associated order item's order item identifier.
     * @param measurement {Measurement}
     */
    constructor(orderItemId: string, measurement: Measurement);
    orderItemId: string;
    measurement: Measurement;
}
import { Measurement } from './Measurement.js';
//# sourceMappingURL=FulfillmentPlanItem.d.ts.map