/**
 * The FeaturedOfferExpectedPriceRequest model module.
 * @module pricing_v2022_05_01/model/FeaturedOfferExpectedPriceRequest
 * @version 2022-05-01
 */
export class FeaturedOfferExpectedPriceRequest {
    /**
     * Constructs a <code>FeaturedOfferExpectedPriceRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {FeaturedOfferExpectedPriceRequest} obj Optional instance to populate.
     * @return {FeaturedOfferExpectedPriceRequest} The populated <code>FeaturedOfferExpectedPriceRequest</code> instance.
     */
    static constructFromObject(data: any, obj: FeaturedOfferExpectedPriceRequest): FeaturedOfferExpectedPriceRequest;
    /**
     * Constructs a new <code>FeaturedOfferExpectedPriceRequest</code>.
     * An individual FOEP request for a particular SKU.
     * @alias module:pricing_v2022_05_01/model/FeaturedOfferExpectedPriceRequest
     * @class
     * @implements module:pricing_v2022_05_01/model/BatchRequest
     * @implements module:pricing_v2022_05_01/model/FeaturedOfferExpectedPriceRequestParams
     * @param uri {String} The URI associated with an individual request within a batch. For `FeaturedOfferExpectedPrice`, this is `/products/pricing/2022-05-01/offer/featuredOfferExpectedPrice`.
     * @param method {HttpMethod}
     * @param marketplaceId {String} The marketplace ID is the globally unique identifier of a marketplace. To find the ID for your marketplace, refer to [Marketplace IDs](https://developer-docs.amazon.com/sp-api/docs/marketplace-ids).
     * @param sku {String} The seller SKU of the item.
     */
    constructor(uri: string, method: HttpMethod, marketplaceId: string, sku: string);
    uri: string;
    method: HttpMethod;
    marketplaceId: string;
    sku: string;
    /**
     * Additional HTTP body information that is associated with an individual request within a batch.
     * @member {{String: Object}} body
     * @type {{String: Object}}
     */
    body: {
        String: any;
    };
    /**
     * A mapping of additional HTTP headers to send or receive for an individual request within a batch.
     * @member {{String: String}} headers
     * @type {{String: String}}
     */
    headers: {
        String: string;
    };
    /**
     * @member {Segment} segment
     * @type {Segment}
     */
    segment: Segment;
}
import { HttpMethod } from './HttpMethod.js';
import { Segment } from './Segment.js';
//# sourceMappingURL=FeaturedOfferExpectedPriceRequest.d.ts.map