/**
 * The ConfirmShipmentErrorResponse model module.
 * @module orders_v0/model/ConfirmShipmentErrorResponse
 * @version v0
 */
export class ConfirmShipmentErrorResponse {
    /**
     * Constructs a <code>ConfirmShipmentErrorResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {ConfirmShipmentErrorResponse} obj Optional instance to populate.
     * @return {ConfirmShipmentErrorResponse} The populated <code>ConfirmShipmentErrorResponse</code> instance.
     */
    static constructFromObject(data: any, obj: ConfirmShipmentErrorResponse): ConfirmShipmentErrorResponse;
    /**
     * A list of error responses returned when a request is unsuccessful.
     * @member {Error[]} errors
     * @type {Error[]}
     */
    errors: Error[];
}
import { Error } from './Error.js';
//# sourceMappingURL=ConfirmShipmentErrorResponse.d.ts.map