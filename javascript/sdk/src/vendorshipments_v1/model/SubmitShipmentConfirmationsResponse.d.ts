/**
 * The SubmitShipmentConfirmationsResponse model module.
 * @module vendorshipments_v1/model/SubmitShipmentConfirmationsResponse
 * @version v1
 */
export class SubmitShipmentConfirmationsResponse {
    /**
     * Constructs a <code>SubmitShipmentConfirmationsResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {SubmitShipmentConfirmationsResponse} obj Optional instance to populate.
     * @return {SubmitShipmentConfirmationsResponse} The populated <code>SubmitShipmentConfirmationsResponse</code> instance.
     */
    static constructFromObject(data: any, obj: SubmitShipmentConfirmationsResponse): SubmitShipmentConfirmationsResponse;
    /**
     * @member {TransactionReference} payload
     * @type {TransactionReference}
     */
    payload: TransactionReference;
    /**
     * A list of error responses returned when a request is unsuccessful.
     * @member {[Error]} errors
     * @type {[Error]}
     */
    errors: [Error];
}
import { TransactionReference } from './TransactionReference.js';
import { Error } from './Error.js';
//# sourceMappingURL=SubmitShipmentConfirmationsResponse.d.ts.map