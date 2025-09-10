/**
 * The GetShipmentItemsResponse model module.
 * @module fulfillmentinbound_v0/model/GetShipmentItemsResponse
 * @version v0
 */
export class GetShipmentItemsResponse {
    /**
     * Constructs a <code>GetShipmentItemsResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {GetShipmentItemsResponse} obj Optional instance to populate.
     * @return {GetShipmentItemsResponse} The populated <code>GetShipmentItemsResponse</code> instance.
     */
    static constructFromObject(data: any, obj: GetShipmentItemsResponse): GetShipmentItemsResponse;
    /**
     * @member {GetShipmentItemsResult} payload
     * @type {GetShipmentItemsResult}
     */
    payload: GetShipmentItemsResult;
    /**
     * A list of error responses returned when a request is unsuccessful.
     * @member {[Error]} errors
     * @type {[Error]}
     */
    errors: [Error];
}
import { GetShipmentItemsResult } from './GetShipmentItemsResult.js';
import { Error } from './Error.js';
//# sourceMappingURL=GetShipmentItemsResponse.d.ts.map