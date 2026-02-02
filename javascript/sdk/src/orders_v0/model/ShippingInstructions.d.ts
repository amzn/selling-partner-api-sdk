/**
 * The ShippingInstructions model module.
 * @module orders_v0/model/ShippingInstructions
 * @version v0
 */
export class ShippingInstructions {
    /**
     * Constructs a <code>ShippingInstructions</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {ShippingInstructions} obj Optional instance to populate.
     * @return {ShippingInstructions} The populated <code>ShippingInstructions</code> instance.
     */
    static constructFromObject(data: any, obj: ShippingInstructions): ShippingInstructions;
    /**
     * The name of the carrier that delivers the package.
     * @member {String} carrierCode
     * @type {String}
     */
    carrierCode: string;
    /**
     * The ship method that is used for the order.
     * @member {String} shippingMethod
     * @type {String}
     */
    shippingMethod: string;
    /**
     * @member {FulfillmentPlanShippingConstraints} shippingConstraints
     * @type {FulfillmentPlanShippingConstraints}
     */
    shippingConstraints: FulfillmentPlanShippingConstraints;
}
import { FulfillmentPlanShippingConstraints } from './FulfillmentPlanShippingConstraints.js';
//# sourceMappingURL=ShippingInstructions.d.ts.map