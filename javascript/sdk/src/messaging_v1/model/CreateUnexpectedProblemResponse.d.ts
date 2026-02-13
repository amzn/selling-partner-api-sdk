/**
 * The CreateUnexpectedProblemResponse model module.
 * @module messaging_v1/model/CreateUnexpectedProblemResponse
 * @version v1
 */
export class CreateUnexpectedProblemResponse {
    /**
     * Constructs a <code>CreateUnexpectedProblemResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {CreateUnexpectedProblemResponse} obj Optional instance to populate.
     * @return {CreateUnexpectedProblemResponse} The populated <code>CreateUnexpectedProblemResponse</code> instance.
     */
    static constructFromObject(data: any, obj: CreateUnexpectedProblemResponse): CreateUnexpectedProblemResponse;
    /**
     * A list of error responses returned when a request is unsuccessful.
     * @member {Error[]} errors
     * @type {Error[]}
     */
    errors: Error[];
}
import { Error } from './Error.js';
//# sourceMappingURL=CreateUnexpectedProblemResponse.d.ts.map