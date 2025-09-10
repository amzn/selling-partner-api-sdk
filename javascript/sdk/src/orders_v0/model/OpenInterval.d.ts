/**
 * The OpenInterval model module.
 * @module orders_v0/model/OpenInterval
 * @version v0
 */
export class OpenInterval {
    /**
     * Constructs a <code>OpenInterval</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {OpenInterval} obj Optional instance to populate.
     * @return {OpenInterval} The populated <code>OpenInterval</code> instance.
     */
    static constructFromObject(data: any, obj: OpenInterval): OpenInterval;
    /**
     * @member {OpenTimeInterval} startTime
     * @type {OpenTimeInterval}
     */
    startTime: OpenTimeInterval;
    /**
     * @member {OpenTimeInterval} endTime
     * @type {OpenTimeInterval}
     */
    endTime: OpenTimeInterval;
}
import { OpenTimeInterval } from './OpenTimeInterval.js';
//# sourceMappingURL=OpenInterval.d.ts.map