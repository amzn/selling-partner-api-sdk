/**
 * The GetPricingResponse model module.
 * @module pricing_v0/model/GetPricingResponse
 * @version v0
 */
export class GetPricingResponse {
    /**
     * Constructs a <code>GetPricingResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {GetPricingResponse} obj Optional instance to populate.
     * @return {GetPricingResponse} The populated <code>GetPricingResponse</code> instance.
     */
    static constructFromObject(data: any, obj: GetPricingResponse): GetPricingResponse;
    /**
     * The payload for the `getPricing` and `getCompetitivePricing` operations.
     * @member {[Price]} payload
     * @type {[Price]}
     */
    payload: [Price];
    /**
     * A list of error responses returned when a request is unsuccessful.
     * @member {[Error]} errors
     * @type {[Error]}
     */
    errors: [Error];
}
import { Price } from './Price.js';
import { Error } from './Error.js';
//# sourceMappingURL=GetPricingResponse.d.ts.map