/**
 * The BatchResponse model module.
 * @module pricing_v2022_05_01/model/BatchResponse
 * @version 2022-05-01
 */
export class BatchResponse {
    /**
     * Constructs a <code>BatchResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {BatchResponse} obj Optional instance to populate.
     * @return {BatchResponse} The populated <code>BatchResponse</code> instance.
     */
    static constructFromObject(data: any, obj: BatchResponse): BatchResponse;
    /**
     * Constructs a new <code>BatchResponse</code>.
     * The common properties for responses to individual requests within a batch.
     * @alias module:pricing_v2022_05_01/model/BatchResponse
     * @class
     * @param headers {{String: String}} A mapping of additional HTTP headers to send or receive for an individual request within a batch.
     * @param status {HttpStatusLine}
     */
    constructor(headers: {
        String: string;
    }, status: HttpStatusLine);
    headers: {
        String: string;
    };
    status: HttpStatusLine;
}
import { HttpStatusLine } from './HttpStatusLine.js';
//# sourceMappingURL=BatchResponse.d.ts.map