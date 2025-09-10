/**
 * The Promise model module.
 * @module shipping_v2/model/Promise
 * @version v2
 */
export class Promise {
    /**
     * Constructs a <code>Promise</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {Promise} obj Optional instance to populate.
     * @return {Promise} The populated <code>Promise</code> instance.
     */
    static constructFromObject(data: any, obj: Promise): Promise;
    /**
     * @member {TimeWindow} deliveryWindow
     * @type {TimeWindow}
     */
    deliveryWindow: TimeWindow;
    /**
     * @member {TimeWindow} pickupWindow
     * @type {TimeWindow}
     */
    pickupWindow: TimeWindow;
}
import { TimeWindow } from './TimeWindow.js';
//# sourceMappingURL=Promise.d.ts.map