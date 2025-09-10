/**
 * The FeaturedOfferExpectedPriceRequestParams model module.
 * @module pricing_v2022_05_01/model/FeaturedOfferExpectedPriceRequestParams
 * @version 2022-05-01
 */
export class FeaturedOfferExpectedPriceRequestParams {
    /**
     * Constructs a <code>FeaturedOfferExpectedPriceRequestParams</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {FeaturedOfferExpectedPriceRequestParams} obj Optional instance to populate.
     * @return {FeaturedOfferExpectedPriceRequestParams} The populated <code>FeaturedOfferExpectedPriceRequestParams</code> instance.
     */
    static constructFromObject(data: any, obj: FeaturedOfferExpectedPriceRequestParams): FeaturedOfferExpectedPriceRequestParams;
    /**
     * Constructs a new <code>FeaturedOfferExpectedPriceRequestParams</code>.
     * The parameters for an individual request.
     * @alias module:pricing_v2022_05_01/model/FeaturedOfferExpectedPriceRequestParams
     * @class
     * @param marketplaceId {String} The marketplace ID is the globally unique identifier of a marketplace. To find the ID for your marketplace, refer to [Marketplace IDs](https://developer-docs.amazon.com/sp-api/docs/marketplace-ids).
     * @param sku {String} The seller SKU of the item.
     */
    constructor(marketplaceId: string, sku: string);
    marketplaceId: string;
    sku: string;
    /**
     * @member {Segment} segment
     * @type {Segment}
     */
    segment: Segment;
}
import { Segment } from './Segment.js';
//# sourceMappingURL=FeaturedOfferExpectedPriceRequestParams.d.ts.map