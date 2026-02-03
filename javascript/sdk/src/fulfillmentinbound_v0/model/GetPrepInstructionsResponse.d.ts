/**
 * The GetPrepInstructionsResponse model module.
 * @module fulfillmentinbound_v0/model/GetPrepInstructionsResponse
 * @version v0
 */
export class GetPrepInstructionsResponse {
    /**
     * Constructs a <code>GetPrepInstructionsResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {GetPrepInstructionsResponse} obj Optional instance to populate.
     * @return {GetPrepInstructionsResponse} The populated <code>GetPrepInstructionsResponse</code> instance.
     */
    static constructFromObject(data: any, obj: GetPrepInstructionsResponse): GetPrepInstructionsResponse;
    /**
     * @member {GetPrepInstructionsResult} payload
     * @type {GetPrepInstructionsResult}
     */
    payload: GetPrepInstructionsResult;
    /**
     * A list of error responses returned when a request is unsuccessful.
     * @member {Array[]} errors
     * @type {Array[]}
     */
    errors: any[][];
}
import { GetPrepInstructionsResult } from './GetPrepInstructionsResult.js';
//# sourceMappingURL=GetPrepInstructionsResponse.d.ts.map