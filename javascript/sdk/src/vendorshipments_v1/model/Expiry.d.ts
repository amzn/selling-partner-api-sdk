/**
 * The Expiry model module.
 * @module vendorshipments_v1/model/Expiry
 * @version v1
 */
export class Expiry {
    /**
     * Constructs a <code>Expiry</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {Expiry} obj Optional instance to populate.
     * @return {Expiry} The populated <code>Expiry</code> instance.
     */
    static constructFromObject(data: any, obj: Expiry): Expiry;
    /**
     * Production, packaging or assembly date determined by the manufacturer. Its meaning is determined based on the trade item context.
     * @member {Date} manufacturerDate
     * @type {Date}
     */
    manufacturerDate: Date;
    /**
     * The date that determines the limit of consumption or use of a product. Its meaning is determined based on the trade item context.
     * @member {Date} expiryDate
     * @type {Date}
     */
    expiryDate: Date;
    /**
     * @member {Duration} expiryAfterDuration
     * @type {Duration}
     */
    expiryAfterDuration: Duration;
}
import { Duration } from './Duration.js';
//# sourceMappingURL=Expiry.d.ts.map