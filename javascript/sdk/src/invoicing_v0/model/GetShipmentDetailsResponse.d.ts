/**
 * The GetShipmentDetailsResponse model module.
 * @module invoicing_v0/model/GetShipmentDetailsResponse
 * @version v0
 */
export class GetShipmentDetailsResponse {
    /**
     * Constructs a <code>GetShipmentDetailsResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {GetShipmentDetailsResponse} obj Optional instance to populate.
     * @return {GetShipmentDetailsResponse} The populated <code>GetShipmentDetailsResponse</code> instance.
     */
    static constructFromObject(data: any, obj: GetShipmentDetailsResponse): GetShipmentDetailsResponse;
    /**
     * @member {ShipmentDetail} payload
     * @type {ShipmentDetail}
     */
    payload: ShipmentDetail;
    /**
     * A list of error responses returned when a request is unsuccessful.
     * @member {Array[]} errors
     * @type {Array[]}
     */
    errors: any[][];
}
import { ShipmentDetail } from './ShipmentDetail.js';
//# sourceMappingURL=GetShipmentDetailsResponse.d.ts.map