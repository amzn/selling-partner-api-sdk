/**
 * The AccessibilityAttributes model module.
 * @module shipping_v2/model/AccessibilityAttributes
 * @version v2
 */
export class AccessibilityAttributes {
    /**
     * Constructs a <code>AccessibilityAttributes</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {AccessibilityAttributes} obj Optional instance to populate.
     * @return {AccessibilityAttributes} The populated <code>AccessibilityAttributes</code> instance.
     */
    static constructFromObject(data: any, obj: AccessibilityAttributes): AccessibilityAttributes;
    /**
     * The approximate distance of access point from input postalCode's centroid.
     * @member {String} distance
     * @type {String}
     */
    distance: string;
    /**
     * The approximate (static) drive time from input postal code's centroid.
     * @member {Number} driveTime
     * @type {Number}
     */
    driveTime: number;
}
//# sourceMappingURL=AccessibilityAttributes.d.ts.map