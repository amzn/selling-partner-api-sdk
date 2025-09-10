/**
 * The BatchOffersResponse model module.
 * @module pricing_v0/model/BatchOffersResponse
 * @version v0
 */
export class BatchOffersResponse {
    /**
     * Constructs a <code>BatchOffersResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {BatchOffersResponse} obj Optional instance to populate.
     * @return {BatchOffersResponse} The populated <code>BatchOffersResponse</code> instance.
     */
    static constructFromObject(data: any, obj: BatchOffersResponse): BatchOffersResponse;
    /**
     * Constructs a new <code>BatchOffersResponse</code>.
     * Common schema that present in &#x60;ItemOffersResponse&#x60; and &#x60;ListingOffersResponse&#x60;
     * @alias module:pricing_v0/model/BatchOffersResponse
     * @class
     * @param body {GetOffersResponse}
     */
    constructor(body: GetOffersResponse);
    body: GetOffersResponse;
    /**
     * @member {HttpResponseHeaders} headers
     * @type {HttpResponseHeaders}
     */
    headers: HttpResponseHeaders;
    /**
     * @member {GetOffersHttpStatusLine} status
     * @type {GetOffersHttpStatusLine}
     */
    status: GetOffersHttpStatusLine;
}
import { GetOffersResponse } from './GetOffersResponse.js';
import { HttpResponseHeaders } from './HttpResponseHeaders.js';
import { GetOffersHttpStatusLine } from './GetOffersHttpStatusLine.js';
//# sourceMappingURL=BatchOffersResponse.d.ts.map