/**
 * The GetShipmentResponse model module.
 * @module merchantfulfillment_v0/model/GetShipmentResponse
 * @version v0
 */
export class GetShipmentResponse {
    /**
     * Constructs a <code>GetShipmentResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {GetShipmentResponse} obj Optional instance to populate.
     * @return {GetShipmentResponse} The populated <code>GetShipmentResponse</code> instance.
     */
    static constructFromObject(data: any, obj: GetShipmentResponse): GetShipmentResponse;
    /**
     * @member {Shipment} payload
     * @type {Shipment}
     */
    payload: Shipment;
    /**
     * A list of error responses returned when a request is unsuccessful.
     * @member {Array[]} errors
     * @type {Array[]}
     */
    errors: any[][];
}
import { Shipment } from './Shipment.js';
//# sourceMappingURL=GetShipmentResponse.d.ts.map