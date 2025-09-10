/**
 * The OneClickShipmentResponse model module.
 * @module shipping_v2/model/OneClickShipmentResponse
 * @version v2
 */
export class OneClickShipmentResponse {
    /**
     * Constructs a <code>OneClickShipmentResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {OneClickShipmentResponse} obj Optional instance to populate.
     * @return {OneClickShipmentResponse} The populated <code>OneClickShipmentResponse</code> instance.
     */
    static constructFromObject(data: any, obj: OneClickShipmentResponse): OneClickShipmentResponse;
    /**
     * @member {OneClickShipmentResult} payload
     * @type {OneClickShipmentResult}
     */
    payload: OneClickShipmentResult;
}
import { OneClickShipmentResult } from './OneClickShipmentResult.js';
//# sourceMappingURL=OneClickShipmentResponse.d.ts.map