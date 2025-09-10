/**
 * The ItemReviewTopicsResponse model module.
 * @module customerFeedback_2024_06_01/model/ItemReviewTopicsResponse
 * @version 2024-06-01
 */
export class ItemReviewTopicsResponse {
    /**
     * Constructs a <code>ItemReviewTopicsResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {ItemReviewTopicsResponse} obj Optional instance to populate.
     * @return {ItemReviewTopicsResponse} The populated <code>ItemReviewTopicsResponse</code> instance.
     */
    static constructFromObject(data: any, obj: ItemReviewTopicsResponse): ItemReviewTopicsResponse;
    /**
     * Constructs a new <code>ItemReviewTopicsResponse</code>.
     * The response for the &#x60;getItemReviewTopics&#x60; operation.
     * @alias module:customerFeedback_2024_06_01/model/ItemReviewTopicsResponse
     * @class
     * @param asin {String} The requested ASIN. The Amazon Standard Identification Number (ASIN) is the unique identifier of a product within a marketplace.
     * @param itemName {String} The product title of the requested ASIN.
     * @param marketplaceId {String} The requested marketplace id.
     * @param countryCode {String} The two digit country code of the requested marketplace id, in ISO 3166-1 alpha-2 format.
     * @param dateRange {DateRange}
     * @param topics {ItemReviewTopics}
     */
    constructor(asin: string, itemName: string, marketplaceId: string, countryCode: string, dateRange: DateRange, topics: ItemReviewTopics);
    asin: string;
    itemName: string;
    marketplaceId: string;
    countryCode: string;
    dateRange: DateRange;
    topics: ItemReviewTopics;
}
import { DateRange } from './DateRange.js';
import { ItemReviewTopics } from './ItemReviewTopics.js';
//# sourceMappingURL=ItemReviewTopicsResponse.d.ts.map