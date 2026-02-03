/**
 * The GetFulfillmentPreviewResponse model module.
 * @module fulfillmentoutbound_v2020_07_01/model/GetFulfillmentPreviewResponse
 * @version 2020-07-01
 */
export class GetFulfillmentPreviewResponse {
    /**
     * Constructs a <code>GetFulfillmentPreviewResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {GetFulfillmentPreviewResponse} obj Optional instance to populate.
     * @return {GetFulfillmentPreviewResponse} The populated <code>GetFulfillmentPreviewResponse</code> instance.
     */
    static constructFromObject(data: any, obj: GetFulfillmentPreviewResponse): GetFulfillmentPreviewResponse;
    /**
     * @member {GetFulfillmentPreviewResult} payload
     * @type {GetFulfillmentPreviewResult}
     */
    payload: GetFulfillmentPreviewResult;
    /**
     * A list of error responses returned when a request is unsuccessful.
     * @member {Array[]} errors
     * @type {Array[]}
     */
    errors: any[][];
}
import { GetFulfillmentPreviewResult } from './GetFulfillmentPreviewResult.js';
//# sourceMappingURL=GetFulfillmentPreviewResponse.d.ts.map