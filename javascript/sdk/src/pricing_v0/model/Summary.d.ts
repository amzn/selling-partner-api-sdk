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
     * @member {Array[]} numberOfOffers
     * @type {Array[]}
     */
    numberOfOffers: any[][];
    /**
     * A list of the lowest prices.
     * @member {Array[]} lowestPrices
     * @type {Array[]}
     */
    lowestPrices: any[][];
    /**
     * A list of the Buy Box prices.
     * @member {Array[]} buyBoxPrices
     * @type {Array[]}
     */
    buyBoxPrices: any[][];
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
     * @member {Array[]} salesRankings
     * @type {Array[]}
     */
    salesRankings: any[][];
    /**
     * A list that contains the total number of offers that are eligible for the Buy Box for the given conditions and fulfillment channels.
     * @member {Array[]} buyBoxEligibleOffers
     * @type {Array[]}
     */
    buyBoxEligibleOffers: any[][];
    /**
     * When the status is ActiveButTooSoonForProcessing, this is the time when the offers will be available for processing.
     * @member {Date} offersAvailableTime
     * @type {Date}
     */
    offersAvailableTime: Date;
}
import { MoneyType } from './MoneyType.js';
//# sourceMappingURL=Summary.d.ts.map