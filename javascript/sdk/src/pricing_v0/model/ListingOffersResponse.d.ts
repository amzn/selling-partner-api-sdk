/**
 * The ListingOffersResponse model module.
 * @module pricing_v0/model/ListingOffersResponse
 * @version v0
 */
export class ListingOffersResponse {
    /**
     * Constructs a <code>ListingOffersResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {ListingOffersResponse} obj Optional instance to populate.
     * @return {ListingOffersResponse} The populated <code>ListingOffersResponse</code> instance.
     */
    static constructFromObject(data: any, obj: ListingOffersResponse): ListingOffersResponse;
    /**
     * Constructs a new <code>ListingOffersResponse</code>.
     * Schema for an individual &#x60;ListingOffersResponse&#x60;
     * @alias module:pricing_v0/model/ListingOffersResponse
     * @class
     * @implements module:pricing_v0/model/BatchOffersResponse
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
    /**
     * @member {ListingOffersRequestParams} request
     * @type {ListingOffersRequestParams}
     */
    request: ListingOffersRequestParams;
}
import { GetOffersResponse } from './GetOffersResponse.js';
import { HttpResponseHeaders } from './HttpResponseHeaders.js';
import { GetOffersHttpStatusLine } from './GetOffersHttpStatusLine.js';
import { ListingOffersRequestParams } from './ListingOffersRequestParams.js';
//# sourceMappingURL=ListingOffersResponse.d.ts.map