/**
 * The GetSupplySourcesResponse model module.
 * @module supplysources_v2020_07_01/model/GetSupplySourcesResponse
 * @version 2020-07-01
 */
export class GetSupplySourcesResponse {
    /**
     * Constructs a <code>GetSupplySourcesResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {GetSupplySourcesResponse} obj Optional instance to populate.
     * @return {GetSupplySourcesResponse} The populated <code>GetSupplySourcesResponse</code> instance.
     */
    static constructFromObject(data: any, obj: GetSupplySourcesResponse): GetSupplySourcesResponse;
    /**
     * The list of `SupplySource`s.
     * @member {[SupplySourceListInner]} supplySources
     * @type {[SupplySourceListInner]}
     */
    supplySources: [SupplySourceListInner];
    /**
     * If present, use this pagination token to retrieve the next page of supply sources.
     * @member {String} nextPageToken
     * @type {String}
     */
    nextPageToken: string;
}
import { SupplySourceListInner } from './SupplySourceListInner.js';
//# sourceMappingURL=GetSupplySourcesResponse.d.ts.map