/**
 * The GetShipmentsResponse model module.
 * @module fulfillmentinbound_v0/model/GetShipmentsResponse
 * @version v0
 */
export class GetShipmentsResponse {
    /**
     * Constructs a <code>GetShipmentsResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {GetShipmentsResponse} obj Optional instance to populate.
     * @return {GetShipmentsResponse} The populated <code>GetShipmentsResponse</code> instance.
     */
    static constructFromObject(data: any, obj: GetShipmentsResponse): GetShipmentsResponse;
    /**
     * @member {GetShipmentsResult} payload
     * @type {GetShipmentsResult}
     */
    payload: GetShipmentsResult;
    /**
     * A list of error responses returned when a request is unsuccessful.
     * @member {Error[]} errors
     * @type {Error[]}
     */
    errors: Error[];
}
import { GetShipmentsResult } from './GetShipmentsResult.js';
import { Error } from './Error.js';
//# sourceMappingURL=GetShipmentsResponse.d.ts.map