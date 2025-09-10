/**
 * The PurchaseShipmentResponse model module.
 * @module shipping_v2/model/PurchaseShipmentResponse
 * @version v2
 */
export class PurchaseShipmentResponse {
    /**
     * Constructs a <code>PurchaseShipmentResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {PurchaseShipmentResponse} obj Optional instance to populate.
     * @return {PurchaseShipmentResponse} The populated <code>PurchaseShipmentResponse</code> instance.
     */
    static constructFromObject(data: any, obj: PurchaseShipmentResponse): PurchaseShipmentResponse;
    /**
     * @member {PurchaseShipmentResult} payload
     * @type {PurchaseShipmentResult}
     */
    payload: PurchaseShipmentResult;
}
import { PurchaseShipmentResult } from './PurchaseShipmentResult.js';
//# sourceMappingURL=PurchaseShipmentResponse.d.ts.map