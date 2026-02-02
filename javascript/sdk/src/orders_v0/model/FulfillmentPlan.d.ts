/**
 * The FulfillmentPlan model module.
 * @module orders_v0/model/FulfillmentPlan
 * @version v0
 */
export class FulfillmentPlan {
    /**
     * Constructs a <code>FulfillmentPlan</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {FulfillmentPlan} obj Optional instance to populate.
     * @return {FulfillmentPlan} The populated <code>FulfillmentPlan</code> instance.
     */
    static constructFromObject(data: any, obj: FulfillmentPlan): FulfillmentPlan;
    /**
     * Constructs a new <code>FulfillmentPlan</code>.
     * A collection of order items that are to be fulfilled from the same location with the same shipping, pickup, and service instructions.
     * @alias module:orders_v0/model/FulfillmentPlan
     * @class
     * @param fulfillmentPlanId {String} Unique identifier for a fulfillment plan.
     * @param creationDate {String} Time when the fulfillment plan was created in [ISO 8601](https://developer-docs.amazon.com/sp-api/docs/iso-8601) format.
     * @param fulfillmentType {String} Type of fulfillment
     * @param fulfillmentPlanStatus {String} The fulfillment plan status.
     * @param lastStatusUpdateDate {String} The time when the fulfillment plan's status was last updated in [ISO 8601](https://developer-docs.amazon.com/sp-api/docs/iso-8601) format.
     * @param fulfillmentPlanItems {[FulfillmentPlanItem]} The details of the order items that are included in the fulfillment plan.
     */
    constructor(fulfillmentPlanId: string, creationDate: string, fulfillmentType: string, fulfillmentPlanStatus: string, lastStatusUpdateDate: string, fulfillmentPlanItems: [FulfillmentPlanItem]);
    fulfillmentPlanId: string;
    creationDate: string;
    fulfillmentType: string;
    fulfillmentPlanStatus: string;
    lastStatusUpdateDate: string;
    fulfillmentPlanItems: [FulfillmentPlanItem];
    /**
     * @member {FulfillmentLocation} fulfillmentLocation
     * @type {FulfillmentLocation}
     */
    fulfillmentLocation: FulfillmentLocation;
    /**
     * @member {ShippingInstructions} shippingInstructions
     * @type {ShippingInstructions}
     */
    shippingInstructions: ShippingInstructions;
}
export namespace FulfillmentPlan {
    namespace FulfillmentTypeEnum {
        let INSTORE_PICKUP: string;
        let SERVICE: string;
        let SHIP: string;
    }
    /**
     * *
     */
    type FulfillmentTypeEnum = string;
    namespace FulfillmentPlanStatusEnum {
        let ACTIVE: string;
        let ABORTED: string;
        let COMPLETED: string;
        let PARTIALLY_FULFILLED: string;
    }
    /**
     * *
     */
    type FulfillmentPlanStatusEnum = string;
}
import { FulfillmentPlanItem } from './FulfillmentPlanItem.js';
import { FulfillmentLocation } from './FulfillmentLocation.js';
import { ShippingInstructions } from './ShippingInstructions.js';
//# sourceMappingURL=FulfillmentPlan.d.ts.map