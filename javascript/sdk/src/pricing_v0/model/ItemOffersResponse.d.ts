/**
 * The ItemOffersResponse model module.
 * @module pricing_v0/model/ItemOffersResponse
 * @version v0
 */
export class ItemOffersResponse {
    /**
     * Constructs a <code>ItemOffersResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {ItemOffersResponse} obj Optional instance to populate.
     * @return {ItemOffersResponse} The populated <code>ItemOffersResponse</code> instance.
     */
    static constructFromObject(data: any, obj: ItemOffersResponse): ItemOffersResponse;
    /**
     * Constructs a new <code>ItemOffersResponse</code>.
     * Schema for an individual &#x60;ItemOffersResponse&#x60;
     * @alias module:pricing_v0/model/ItemOffersResponse
     * @class
     * @implements module:pricing_v0/model/BatchOffersResponse
     * @param body {GetOffersResponse}
     * @param request {ItemOffersRequestParams}
     */
    constructor(body: GetOffersResponse, request: ItemOffersRequestParams);
    body: GetOffersResponse;
    request: ItemOffersRequestParams;
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
import { ItemOffersRequestParams } from './ItemOffersRequestParams.js';
import { HttpResponseHeaders } from './HttpResponseHeaders.js';
import { GetOffersHttpStatusLine } from './GetOffersHttpStatusLine.js';
//# sourceMappingURL=ItemOffersResponse.d.ts.map