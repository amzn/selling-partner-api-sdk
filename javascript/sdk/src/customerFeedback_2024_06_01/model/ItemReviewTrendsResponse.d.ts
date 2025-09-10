/**
 * The ItemReviewTrendsResponse model module.
 * @module customerFeedback_2024_06_01/model/ItemReviewTrendsResponse
 * @version 2024-06-01
 */
export class ItemReviewTrendsResponse {
    /**
     * Constructs a <code>ItemReviewTrendsResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {ItemReviewTrendsResponse} obj Optional instance to populate.
     * @return {ItemReviewTrendsResponse} The populated <code>ItemReviewTrendsResponse</code> instance.
     */
    static constructFromObject(data: any, obj: ItemReviewTrendsResponse): ItemReviewTrendsResponse;
    /**
     * Constructs a new <code>ItemReviewTrendsResponse</code>.
     * The response for the &#x60;getItemReviewTrends&#x60; operation.
     * @alias module:customerFeedback_2024_06_01/model/ItemReviewTrendsResponse
     * @class
     * @param asin {String} The requested ASIN. The Amazon Standard Identification Number (ASIN) is the unique identifier of a product within a marketplace.
     * @param itemName {String} The product title of the requested ASIN.
     * @param marketplaceId {String} The requested marketplace id.
     * @param countryCode {String} The two digit country code of the requested marketplace id, in ISO 3166-1 alpha-2 format.
     * @param dateRange {DateRange}
     * @param reviewTrends {ItemReviewTrends}
     */
    constructor(asin: string, itemName: string, marketplaceId: string, countryCode: string, dateRange: DateRange, reviewTrends: ItemReviewTrends);
    asin: string;
    itemName: string;
    marketplaceId: string;
    countryCode: string;
    dateRange: DateRange;
    reviewTrends: ItemReviewTrends;
}
import { DateRange } from './DateRange.js';
import { ItemReviewTrends } from './ItemReviewTrends.js';
//# sourceMappingURL=ItemReviewTrendsResponse.d.ts.map