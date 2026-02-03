/**
 * The GetDeliveryOffersResponse model module.
 * @module fulfillmentoutbound_v2020_07_01/model/GetDeliveryOffersResponse
 * @version 2020-07-01
 */
export class GetDeliveryOffersResponse {
    /**
     * Constructs a <code>GetDeliveryOffersResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {GetDeliveryOffersResponse} obj Optional instance to populate.
     * @return {GetDeliveryOffersResponse} The populated <code>GetDeliveryOffersResponse</code> instance.
     */
    static constructFromObject(data: any, obj: GetDeliveryOffersResponse): GetDeliveryOffersResponse;
    /**
     * @member {GetDeliveryOffersResult} payload
     * @type {GetDeliveryOffersResult}
     */
    payload: GetDeliveryOffersResult;
    /**
     * A list of error responses returned when a request is unsuccessful.
     * @member {Array[]} errors
     * @type {Array[]}
     */
    errors: any[][];
}
import { GetDeliveryOffersResult } from './GetDeliveryOffersResult.js';
//# sourceMappingURL=GetDeliveryOffersResponse.d.ts.map