/**
 * The AccessPoint model module.
 * @module shipping_v2/model/AccessPoint
 * @version v2
 */
export class AccessPoint {
    /**
     * Constructs a <code>AccessPoint</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {AccessPoint} obj Optional instance to populate.
     * @return {AccessPoint} The populated <code>AccessPoint</code> instance.
     */
    static constructFromObject(data: any, obj: AccessPoint): AccessPoint;
    /**
     * Unique identifier for the access point
     * @member {String} accessPointId
     * @type {String}
     */
    accessPointId: string;
    /**
     * Name of entity (store/hub etc) where this access point is located
     * @member {String} name
     * @type {String}
     */
    name: string;
    /**
     * Timezone of access point
     * @member {String} timezone
     * @type {String}
     */
    timezone: string;
    /**
     * @member {AccessPointType} type
     * @type {AccessPointType}
     */
    type: AccessPointType;
    /**
     * @member {AccessibilityAttributes} accessibilityAttributes
     * @type {AccessibilityAttributes}
     */
    accessibilityAttributes: AccessibilityAttributes;
    /**
     * @member {Address} address
     * @type {Address}
     */
    address: Address;
    /**
     * Exception operating hours for Access Point
     * @member {Array[]} exceptionOperatingHours
     * @type {Array[]}
     */
    exceptionOperatingHours: any[][];
    /**
     * Assistance type enum for Access point i.e. STAFF_ASSISTED or SELF_ASSISTED
     * @member {String} assistanceType
     * @type {String}
     */
    assistanceType: string;
    /**
     * The score of access point, based on proximity to postal code and sorting preference. This can be used to sort access point results on shipper's end.
     * @member {String} score
     * @type {String}
     */
    score: string;
    /**
     * Map of day of the week to operating hours of that day
     * @member {{String: OperatingHours}} standardOperatingHours
     * @type {{String: OperatingHours}}
     */
    standardOperatingHours: {
        String: OperatingHours;
    };
}
export namespace AccessPoint {
    namespace AssistanceTypeEnum {
        let STAFF_ASSISTED: string;
        let SELF_ASSISTED: string;
    }
    /**
     * *
     */
    type AssistanceTypeEnum = string;
}
import { AccessPointType } from './AccessPointType.js';
import { AccessibilityAttributes } from './AccessibilityAttributes.js';
import { Address } from './Address.js';
import { OperatingHours } from './OperatingHours.js';
//# sourceMappingURL=AccessPoint.d.ts.map