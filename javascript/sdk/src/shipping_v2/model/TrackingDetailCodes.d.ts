/**
 * The TrackingDetailCodes model module.
 * @module shipping_v2/model/TrackingDetailCodes
 * @version v2
 */
export class TrackingDetailCodes {
    /**
     * Constructs a <code>TrackingDetailCodes</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {TrackingDetailCodes} obj Optional instance to populate.
     * @return {TrackingDetailCodes} The populated <code>TrackingDetailCodes</code> instance.
     */
    static constructFromObject(data: any, obj: TrackingDetailCodes): TrackingDetailCodes;
    /**
     * Constructs a new <code>TrackingDetailCodes</code>.
     * Contains detail codes that provide additional details related to the forward and return leg of the shipment.
     * @alias module:shipping_v2/model/TrackingDetailCodes
     * @class
     * @param forward {[DetailCodes]} Contains detail codes that provide additional details related to the forward leg of the shipment.
     * @param returns {[DetailCodes]} Contains detail codes that provide additional details related to the return leg of the shipment.
     */
    constructor(forward: [DetailCodes], returns: [DetailCodes]);
    forward: [DetailCodes];
    returns: [DetailCodes];
}
import { DetailCodes } from './DetailCodes.js';
//# sourceMappingURL=TrackingDetailCodes.d.ts.map