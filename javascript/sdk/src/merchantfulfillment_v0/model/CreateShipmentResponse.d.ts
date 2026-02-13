/**
 * The CreateShipmentResponse model module.
 * @module merchantfulfillment_v0/model/CreateShipmentResponse
 * @version v0
 */
export class CreateShipmentResponse {
    /**
     * Constructs a <code>CreateShipmentResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {CreateShipmentResponse} obj Optional instance to populate.
     * @return {CreateShipmentResponse} The populated <code>CreateShipmentResponse</code> instance.
     */
    static constructFromObject(data: any, obj: CreateShipmentResponse): CreateShipmentResponse;
    /**
     * @member {Shipment} payload
     * @type {Shipment}
     */
    payload: Shipment;
    /**
     * A list of error responses returned when a request is unsuccessful.
     * @member {Error[]} errors
     * @type {Error[]}
     */
    errors: Error[];
}
import { Shipment } from './Shipment.js';
import { Error } from './Error.js';
//# sourceMappingURL=CreateShipmentResponse.d.ts.map