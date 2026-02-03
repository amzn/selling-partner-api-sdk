/**
 * The SubmitShipmentConfirmationResponse model module.
 * @module vendorshipments_v1/model/SubmitShipmentConfirmationResponse
 * @version v1
 */
export class SubmitShipmentConfirmationResponse {
    /**
     * Constructs a <code>SubmitShipmentConfirmationResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {SubmitShipmentConfirmationResponse} obj Optional instance to populate.
     * @return {SubmitShipmentConfirmationResponse} The populated <code>SubmitShipmentConfirmationResponse</code> instance.
     */
    static constructFromObject(data: any, obj: SubmitShipmentConfirmationResponse): SubmitShipmentConfirmationResponse;
    /**
     * @member {SubmitShipmentConfirmationResult} payload
     * @type {SubmitShipmentConfirmationResult}
     */
    payload: SubmitShipmentConfirmationResult;
    /**
     * A list of error responses returned when a request is unsuccessful.
     * @member {Array[]} errors
     * @type {Array[]}
     */
    errors: any[][];
}
import { SubmitShipmentConfirmationResult } from './SubmitShipmentConfirmationResult.js';
//# sourceMappingURL=SubmitShipmentConfirmationResponse.d.ts.map