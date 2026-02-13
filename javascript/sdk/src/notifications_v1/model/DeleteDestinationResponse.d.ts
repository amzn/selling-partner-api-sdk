/**
 * The DeleteDestinationResponse model module.
 * @module notifications_v1/model/DeleteDestinationResponse
 * @version v1
 */
export class DeleteDestinationResponse {
    /**
     * Constructs a <code>DeleteDestinationResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {DeleteDestinationResponse} obj Optional instance to populate.
     * @return {DeleteDestinationResponse} The populated <code>DeleteDestinationResponse</code> instance.
     */
    static constructFromObject(data: any, obj: DeleteDestinationResponse): DeleteDestinationResponse;
    /**
     * A list of error responses returned when a request is unsuccessful.
     * @member {Error[]} errors
     * @type {Error[]}
     */
    errors: Error[];
}
import { Error } from './Error.js';
//# sourceMappingURL=DeleteDestinationResponse.d.ts.map