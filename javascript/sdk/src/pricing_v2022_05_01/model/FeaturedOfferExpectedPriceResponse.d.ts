/**
 * The FeaturedOfferExpectedPriceResponse model module.
 * @module pricing_v2022_05_01/model/FeaturedOfferExpectedPriceResponse
 * @version 2022-05-01
 */
export class FeaturedOfferExpectedPriceResponse {
    /**
     * Constructs a <code>FeaturedOfferExpectedPriceResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {FeaturedOfferExpectedPriceResponse} obj Optional instance to populate.
     * @return {FeaturedOfferExpectedPriceResponse} The populated <code>FeaturedOfferExpectedPriceResponse</code> instance.
     */
    static constructFromObject(data: any, obj: FeaturedOfferExpectedPriceResponse): FeaturedOfferExpectedPriceResponse;
    /**
     * Constructs a new <code>FeaturedOfferExpectedPriceResponse</code>.
     * Schema for an individual FOEP response.
     * @alias module:pricing_v2022_05_01/model/FeaturedOfferExpectedPriceResponse
     * @class
     * @implements module:pricing_v2022_05_01/model/BatchResponse
     * @param headers {{String: String}} A mapping of additional HTTP headers to send or receive for an individual request within a batch.
     * @param status {HttpStatusLine}
     * @param request {FeaturedOfferExpectedPriceRequestParams}
     */
    constructor(headers: {
        String: string;
    }, status: HttpStatusLine, request: FeaturedOfferExpectedPriceRequestParams);
    headers: {
        String: string;
    };
    status: HttpStatusLine;
    request: FeaturedOfferExpectedPriceRequestParams;
    /**
     * @member {FeaturedOfferExpectedPriceResponseBody} body
     * @type {FeaturedOfferExpectedPriceResponseBody}
     */
    body: FeaturedOfferExpectedPriceResponseBody;
}
import { HttpStatusLine } from './HttpStatusLine.js';
import { FeaturedOfferExpectedPriceRequestParams } from './FeaturedOfferExpectedPriceRequestParams.js';
import { FeaturedOfferExpectedPriceResponseBody } from './FeaturedOfferExpectedPriceResponseBody.js';
//# sourceMappingURL=FeaturedOfferExpectedPriceResponse.d.ts.map