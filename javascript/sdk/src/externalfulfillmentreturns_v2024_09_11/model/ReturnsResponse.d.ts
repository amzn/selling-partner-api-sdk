/**
 * The ReturnsResponse model module.
 * @module externalfulfillmentreturns_v2024_09_11/model/ReturnsResponse
 * @version 2024-09-11
 */
export class ReturnsResponse {
    /**
     * Constructs a <code>ReturnsResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {ReturnsResponse} obj Optional instance to populate.
     * @return {ReturnsResponse} The populated <code>ReturnsResponse</code> instance.
     */
    static constructFromObject(data: any, obj: ReturnsResponse): ReturnsResponse;
    /**
     * A list of returns.
     * @member {[Return]} returns
     * @type {[Return]}
     */
    returns: [Return];
    /**
     * A token that you use to retrieve the next page of results. The response includes `nextToken` when there are multiple pages of results. To get the next page of results, call the operation with this token and include the same arguments as the call that produced the token. To get a complete list, call this operation until `nextToken` is null. Note that this operation can return empty pages.
     * @member {String} nextToken
     * @type {String}
     */
    nextToken: string;
}
import { Return } from './Return.js';
//# sourceMappingURL=ReturnsResponse.d.ts.map