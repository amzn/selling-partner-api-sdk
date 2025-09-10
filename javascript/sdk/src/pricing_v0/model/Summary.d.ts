/**
 * The Summary model module.
 * @module pricing_v0/model/Summary
 * @version v0
 */
export class Summary {
    /**
     * Constructs a <code>Summary</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {Summary} obj Optional instance to populate.
     * @return {Summary} The populated <code>Summary</code> instance.
     */
    static constructFromObject(data: any, obj: Summary): Summary;
    /**
     * Constructs a new <code>Summary</code>.
     * Contains price information about the product, including the LowestPrices and BuyBoxPrices, the ListPrice, the SuggestedLowerPricePlusShipping, and NumberOfOffers and NumberOfBuyBoxEligibleOffers.
     * @alias module:pricing_v0/model/Summary
     * @class
     * @param totalOfferCount {Number} The number of unique offers contained in NumberOfOffers.
     */
    constructor(totalOfferCount: number);
    totalOfferCount: number;
    /**
     * A list that contains the total number of offers information for given conditions and fulfillment channels.
     * @member {[OfferCountType]} numberOfOffers
     * @type {[OfferCountType]}
     */
    numberOfOffers: [OfferCountType];
    /**
     * A list of the lowest prices.
     * @member {[LowestPriceType]} lowestPrices
     * @type {[LowestPriceType]}
     */
    lowestPrices: [LowestPriceType];
    /**
     * A list of the Buy Box prices.
     * @member {[BuyBoxPriceType]} buyBoxPrices
     * @type {[BuyBoxPriceType]}
     */
    buyBoxPrices: [BuyBoxPriceType];
    /**
     * @member {MoneyType} listPrice
     * @type {MoneyType}
     */
    listPrice: MoneyType;
    /**
     * @member {MoneyType} competitivePriceThreshold
     * @type {MoneyType}
     */
    competitivePriceThreshold: MoneyType;
    /**
     * @member {MoneyType} suggestedLowerPricePlusShipping
     * @type {MoneyType}
     */
    suggestedLowerPricePlusShipping: MoneyType;
    /**
     * A list of sales rank information for the item, by category.
     * @member {[SalesRankType]} salesRankings
     * @type {[SalesRankType]}
     */
    salesRankings: [SalesRankType];
    /**
     * A list that contains the total number of offers that are eligible for the Buy Box for the given conditions and fulfillment channels.
     * @member {[OfferCountType]} buyBoxEligibleOffers
     * @type {[OfferCountType]}
     */
    buyBoxEligibleOffers: [OfferCountType];
    /**
     * When the status is ActiveButTooSoonForProcessing, this is the time when the offers will be available for processing.
     * @member {Date} offersAvailableTime
     * @type {Date}
     */
    offersAvailableTime: Date;
}
import { OfferCountType } from './OfferCountType.js';
import { LowestPriceType } from './LowestPriceType.js';
import { BuyBoxPriceType } from './BuyBoxPriceType.js';
import { MoneyType } from './MoneyType.js';
import { SalesRankType } from './SalesRankType.js';
//# sourceMappingURL=Summary.d.ts.map