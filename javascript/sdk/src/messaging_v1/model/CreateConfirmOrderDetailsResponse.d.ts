/**
 * The CreateConfirmOrderDetailsResponse model module.
 * @module messaging_v1/model/CreateConfirmOrderDetailsResponse
 * @version v1
 */
export class CreateConfirmOrderDetailsResponse {
    /**
     * Constructs a <code>CreateConfirmOrderDetailsResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {CreateConfirmOrderDetailsResponse} obj Optional instance to populate.
     * @return {CreateConfirmOrderDetailsResponse} The populated <code>CreateConfirmOrderDetailsResponse</code> instance.
     */
    static constructFromObject(data: any, obj: CreateConfirmOrderDetailsResponse): CreateConfirmOrderDetailsResponse;
    /**
     * A list of error responses returned when a request is unsuccessful.
     * @member {Error[]} errors
     * @type {Error[]}
     */
    errors: Error[];
}
import { Error } from './Error.js';
//# sourceMappingURL=CreateConfirmOrderDetailsResponse.d.ts.map