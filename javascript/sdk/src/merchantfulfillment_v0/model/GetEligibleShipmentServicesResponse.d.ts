/**
 * The GetEligibleShipmentServicesResponse model module.
 * @module merchantfulfillment_v0/model/GetEligibleShipmentServicesResponse
 * @version v0
 */
export class GetEligibleShipmentServicesResponse {
    /**
     * Constructs a <code>GetEligibleShipmentServicesResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {GetEligibleShipmentServicesResponse} obj Optional instance to populate.
     * @return {GetEligibleShipmentServicesResponse} The populated <code>GetEligibleShipmentServicesResponse</code> instance.
     */
    static constructFromObject(data: any, obj: GetEligibleShipmentServicesResponse): GetEligibleShipmentServicesResponse;
    /**
     * @member {GetEligibleShipmentServicesResult} payload
     * @type {GetEligibleShipmentServicesResult}
     */
    payload: GetEligibleShipmentServicesResult;
    /**
     * A list of error responses returned when a request is unsuccessful.
     * @member {Array[]} errors
     * @type {Array[]}
     */
    errors: any[][];
}
import { GetEligibleShipmentServicesResult } from './GetEligibleShipmentServicesResult.js';
//# sourceMappingURL=GetEligibleShipmentServicesResponse.d.ts.map