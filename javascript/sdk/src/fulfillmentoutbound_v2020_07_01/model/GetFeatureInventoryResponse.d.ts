/**
 * The GetFeatureInventoryResponse model module.
 * @module fulfillmentoutbound_v2020_07_01/model/GetFeatureInventoryResponse
 * @version 2020-07-01
 */
export class GetFeatureInventoryResponse {
    /**
     * Constructs a <code>GetFeatureInventoryResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {GetFeatureInventoryResponse} obj Optional instance to populate.
     * @return {GetFeatureInventoryResponse} The populated <code>GetFeatureInventoryResponse</code> instance.
     */
    static constructFromObject(data: any, obj: GetFeatureInventoryResponse): GetFeatureInventoryResponse;
    /**
     * @member {GetFeatureInventoryResult} payload
     * @type {GetFeatureInventoryResult}
     */
    payload: GetFeatureInventoryResult;
    /**
     * A list of error responses returned when a request is unsuccessful.
     * @member {Error[]} errors
     * @type {Error[]}
     */
    errors: Error[];
}
import { GetFeatureInventoryResult } from './GetFeatureInventoryResult.js';
import { Error } from './Error.js';
//# sourceMappingURL=GetFeatureInventoryResponse.d.ts.map