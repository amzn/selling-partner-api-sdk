/**
 * The CustomAttribute model module.
 * @module externalfulfillmentshipments_v2024_09_11/model/CustomAttribute
 * @version 2024-09-11
 */
export class CustomAttribute {
    /**
     * Constructs a <code>CustomAttribute</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {CustomAttribute} obj Optional instance to populate.
     * @return {CustomAttribute} The populated <code>CustomAttribute</code> instance.
     */
    static constructFromObject(data: any, obj: CustomAttribute): CustomAttribute;
    /**
     * The key of the custom attribute. Must be unique.
     * @member {String} key
     * @type {String}
     */
    key: string;
    /**
     * @member {CustomAttributeType} type
     * @type {CustomAttributeType}
     */
    type: CustomAttributeType;
    /**
     * The value of the custom attribute.
     * @member {String} value
     * @type {String}
     */
    value: string;
}
import { CustomAttributeType } from './CustomAttributeType.js';
//# sourceMappingURL=CustomAttribute.d.ts.map