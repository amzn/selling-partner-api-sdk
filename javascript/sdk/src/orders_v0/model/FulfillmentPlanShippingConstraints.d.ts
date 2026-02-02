/**
 * The FulfillmentPlanShippingConstraints model module.
 * @module orders_v0/model/FulfillmentPlanShippingConstraints
 * @version v0
 */
export class FulfillmentPlanShippingConstraints {
    /**
     * Constructs a <code>FulfillmentPlanShippingConstraints</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {FulfillmentPlanShippingConstraints} obj Optional instance to populate.
     * @return {FulfillmentPlanShippingConstraints} The populated <code>FulfillmentPlanShippingConstraints</code> instance.
     */
    static constructFromObject(data: any, obj: FulfillmentPlanShippingConstraints): FulfillmentPlanShippingConstraints;
    /**
     * @member {FulfillmentPlanConstraintType} palletDelivery
     * @type {FulfillmentPlanConstraintType}
     */
    palletDelivery: FulfillmentPlanConstraintType;
    /**
     * @member {FulfillmentPlanConstraintType} signatureConfirmation
     * @type {FulfillmentPlanConstraintType}
     */
    signatureConfirmation: FulfillmentPlanConstraintType;
}
import { FulfillmentPlanConstraintType } from './FulfillmentPlanConstraintType.js';
//# sourceMappingURL=FulfillmentPlanShippingConstraints.d.ts.map