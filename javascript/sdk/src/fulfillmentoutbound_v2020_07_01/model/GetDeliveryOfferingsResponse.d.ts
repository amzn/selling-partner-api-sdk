/**
 * The GetDeliveryOfferingsResponse model module.
 * @module fulfillmentoutbound_v2020_07_01/model/GetDeliveryOfferingsResponse
 * @version 2020-07-01
 */
export class GetDeliveryOfferingsResponse {
    /**
     * Constructs a <code>GetDeliveryOfferingsResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {GetDeliveryOfferingsResponse} obj Optional instance to populate.
     * @return {GetDeliveryOfferingsResponse} The populated <code>GetDeliveryOfferingsResponse</code> instance.
     */
    static constructFromObject(data: any, obj: GetDeliveryOfferingsResponse): GetDeliveryOfferingsResponse;
    /**
     * @member {GetDeliveryOfferingsResult} payload
     * @type {GetDeliveryOfferingsResult}
     */
    payload: GetDeliveryOfferingsResult;
    /**
     * A list of error responses returned when a request is unsuccessful.
     * @member {[Error]} errors
     * @type {[Error]}
     */
    errors: [Error];
}
import { GetDeliveryOfferingsResult } from './GetDeliveryOfferingsResult.js';
import { Error } from './Error.js';
//# sourceMappingURL=GetDeliveryOfferingsResponse.d.ts.map