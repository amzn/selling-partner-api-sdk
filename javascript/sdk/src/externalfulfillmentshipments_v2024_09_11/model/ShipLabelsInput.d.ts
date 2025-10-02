/**
 * The ShipLabelsInput model module.
 * @module externalfulfillmentshipments_v2024_09_11/model/ShipLabelsInput
 * @version 2024-09-11
 */
export class ShipLabelsInput {
    /**
     * Constructs a <code>ShipLabelsInput</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {ShipLabelsInput} obj Optional instance to populate.
     * @return {ShipLabelsInput} The populated <code>ShipLabelsInput</code> instance.
     */
    static constructFromObject(data: any, obj: ShipLabelsInput): ShipLabelsInput;
    /**
     * Constructs a new <code>ShipLabelsInput</code>.
     * Tracking details for multiple packages.
     * @alias module:externalfulfillmentshipments_v2024_09_11/model/ShipLabelsInput
     * @class
     * @param packageIds {[String]} The subset of package IDs used to generate a label.
     */
    constructor(packageIds: [string]);
    packageIds: [string];
    /**
     * @member {CourierSupportedAttributes} courierSupportedAttributes
     * @type {CourierSupportedAttributes}
     */
    courierSupportedAttributes: CourierSupportedAttributes;
}
import { CourierSupportedAttributes } from './CourierSupportedAttributes.js';
//# sourceMappingURL=ShipLabelsInput.d.ts.map