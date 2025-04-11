/**
 * Selling Partner API for Pricing
 * The Selling Partner API for Pricing helps you programmatically retrieve product pricing and offer information for Amazon Marketplace products.
 *
 * The version of the OpenAPI document: v0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import {ApiClient} from '../ApiClient.js';
import {BuyBoxPriceType} from './BuyBoxPriceType.js';
import {LowestPriceType} from './LowestPriceType.js';
import {MoneyType} from './MoneyType.js';
import {OfferCountType} from './OfferCountType.js';
import {SalesRankType} from './SalesRankType.js';

/**
 * The Summary model module.
 * @module pricing_v0/model/Summary
 * @version v0
 */
export class Summary {
  /**
   * Constructs a new <code>Summary</code>.
   * Contains price information about the product, including the LowestPrices and BuyBoxPrices, the ListPrice, the SuggestedLowerPricePlusShipping, and NumberOfOffers and NumberOfBuyBoxEligibleOffers.
   * @alias module:pricing_v0/model/Summary
   * @class
   * @param totalOfferCount {Number} The number of unique offers contained in NumberOfOffers.
   */
  constructor(totalOfferCount) {
    this.totalOfferCount = totalOfferCount;
  }

  /**
   * Constructs a <code>Summary</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:pricing_v0/model/Summary} obj Optional instance to populate.
   * @return {module:pricing_v0/model/Summary} The populated <code>Summary</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      switch(typeof data) {
        case 'string':
          obj = String(data);
          break;
        case 'number':
          obj = Number(data);
          break;
        case 'boolean':
          obj = Boolean(data);
          break;
      }
      obj = obj || new Summary();
      if (data.hasOwnProperty('TotalOfferCount'))
        obj.totalOfferCount = ApiClient.convertToType(data['TotalOfferCount'], 'Number');
      if (data.hasOwnProperty('NumberOfOffers'))
        obj.numberOfOffers = ApiClient.convertToType(data['NumberOfOffers'], [OfferCountType]);
      if (data.hasOwnProperty('LowestPrices'))
        obj.lowestPrices = ApiClient.convertToType(data['LowestPrices'], [LowestPriceType]);
      if (data.hasOwnProperty('BuyBoxPrices'))
        obj.buyBoxPrices = ApiClient.convertToType(data['BuyBoxPrices'], [BuyBoxPriceType]);
      if (data.hasOwnProperty('ListPrice'))
        obj.listPrice = MoneyType.constructFromObject(data['ListPrice']);
      if (data.hasOwnProperty('CompetitivePriceThreshold'))
        obj.competitivePriceThreshold = MoneyType.constructFromObject(data['CompetitivePriceThreshold']);
      if (data.hasOwnProperty('SuggestedLowerPricePlusShipping'))
        obj.suggestedLowerPricePlusShipping = MoneyType.constructFromObject(data['SuggestedLowerPricePlusShipping']);
      if (data.hasOwnProperty('SalesRankings'))
        obj.salesRankings = ApiClient.convertToType(data['SalesRankings'], [SalesRankType]);
      if (data.hasOwnProperty('BuyBoxEligibleOffers'))
        obj.buyBoxEligibleOffers = ApiClient.convertToType(data['BuyBoxEligibleOffers'], [OfferCountType]);
      if (data.hasOwnProperty('OffersAvailableTime'))
        obj.offersAvailableTime = ApiClient.convertToType(data['OffersAvailableTime'], 'Date');
    }
    return obj;
  }
}

/**
 * The number of unique offers contained in NumberOfOffers.
 * @member {Number} totalOfferCount
 */
Summary.prototype.totalOfferCount = undefined;

/**
 * A list that contains the total number of offers information for given conditions and fulfillment channels.
 * @member {Array.<module:pricing_v0/model/OfferCountType>} numberOfOffers
 */
Summary.prototype.numberOfOffers = undefined;

/**
 * A list of the lowest prices.
 * @member {Array.<module:pricing_v0/model/LowestPriceType>} lowestPrices
 */
Summary.prototype.lowestPrices = undefined;

/**
 * A list of the Buy Box prices.
 * @member {Array.<module:pricing_v0/model/BuyBoxPriceType>} buyBoxPrices
 */
Summary.prototype.buyBoxPrices = undefined;

/**
 * @member {module:pricing_v0/model/MoneyType} listPrice
 */
Summary.prototype.listPrice = undefined;

/**
 * @member {module:pricing_v0/model/MoneyType} competitivePriceThreshold
 */
Summary.prototype.competitivePriceThreshold = undefined;

/**
 * @member {module:pricing_v0/model/MoneyType} suggestedLowerPricePlusShipping
 */
Summary.prototype.suggestedLowerPricePlusShipping = undefined;

/**
 * A list of sales rank information for the item, by category.
 * @member {Array.<module:pricing_v0/model/SalesRankType>} salesRankings
 */
Summary.prototype.salesRankings = undefined;

/**
 * A list that contains the total number of offers that are eligible for the Buy Box for the given conditions and fulfillment channels.
 * @member {Array.<module:pricing_v0/model/OfferCountType>} buyBoxEligibleOffers
 */
Summary.prototype.buyBoxEligibleOffers = undefined;

/**
 * When the status is ActiveButTooSoonForProcessing, this is the time when the offers will be available for processing.
 * @member {Date} offersAvailableTime
 */
Summary.prototype.offersAvailableTime = undefined;


