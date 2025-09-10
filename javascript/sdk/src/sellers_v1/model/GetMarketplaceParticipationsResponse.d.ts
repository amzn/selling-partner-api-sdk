/**
 * The GetMarketplaceParticipationsResponse model module.
 * @module sellers_v1/model/GetMarketplaceParticipationsResponse
 * @version v1
 */
export class GetMarketplaceParticipationsResponse {
    /**
     * Constructs a <code>GetMarketplaceParticipationsResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {GetMarketplaceParticipationsResponse} obj Optional instance to populate.
     * @return {GetMarketplaceParticipationsResponse} The populated <code>GetMarketplaceParticipationsResponse</code> instance.
     */
    static constructFromObject(data: any, obj: GetMarketplaceParticipationsResponse): GetMarketplaceParticipationsResponse;
    /**
     * List of marketplace participations.
     * @member {[MarketplaceParticipation]} payload
     * @type {[MarketplaceParticipation]}
     */
    payload: [MarketplaceParticipation];
    /**
     * A list of error responses returned when a request is unsuccessful.
     * @member {[Error]} errors
     * @type {[Error]}
     */
    errors: [Error];
}
import { MarketplaceParticipation } from './MarketplaceParticipation.js';
import { Error } from './Error.js';
//# sourceMappingURL=GetMarketplaceParticipationsResponse.d.ts.map