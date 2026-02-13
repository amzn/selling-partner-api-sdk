/**
 * The UpdateShipmentStatusErrorResponse model module.
 * @module orders_v0/model/UpdateShipmentStatusErrorResponse
 * @version v0
 */
export class UpdateShipmentStatusErrorResponse {
    /**
     * Constructs a <code>UpdateShipmentStatusErrorResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {UpdateShipmentStatusErrorResponse} obj Optional instance to populate.
     * @return {UpdateShipmentStatusErrorResponse} The populated <code>UpdateShipmentStatusErrorResponse</code> instance.
     */
    static constructFromObject(data: any, obj: UpdateShipmentStatusErrorResponse): UpdateShipmentStatusErrorResponse;
    /**
     * A list of error responses returned when a request is unsuccessful.
     * @member {Error[]} errors
     * @type {Error[]}
     */
    errors: Error[];
}
import { Error } from './Error.js';
//# sourceMappingURL=UpdateShipmentStatusErrorResponse.d.ts.map