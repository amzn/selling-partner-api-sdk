/**
 * The GetBillOfLadingResponse model module.
 * @module fulfillmentinbound_v0/model/GetBillOfLadingResponse
 * @version v0
 */
export class GetBillOfLadingResponse {
    /**
     * Constructs a <code>GetBillOfLadingResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {GetBillOfLadingResponse} obj Optional instance to populate.
     * @return {GetBillOfLadingResponse} The populated <code>GetBillOfLadingResponse</code> instance.
     */
    static constructFromObject(data: any, obj: GetBillOfLadingResponse): GetBillOfLadingResponse;
    /**
     * @member {BillOfLadingDownloadURL} payload
     * @type {BillOfLadingDownloadURL}
     */
    payload: BillOfLadingDownloadURL;
    /**
     * A list of error responses returned when a request is unsuccessful.
     * @member {Array[]} errors
     * @type {Array[]}
     */
    errors: any[][];
}
import { BillOfLadingDownloadURL } from './BillOfLadingDownloadURL.js';
//# sourceMappingURL=GetBillOfLadingResponse.d.ts.map