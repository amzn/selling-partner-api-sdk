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
import {DetailedShippingTimeType} from './DetailedShippingTimeType.js';
import {MoneyType} from './MoneyType.js';
import {OfferCustomerType} from './OfferCustomerType.js';
import {Points} from './Points.js';
import {PrimeInformationType} from './PrimeInformationType.js';
import {QuantityDiscountPriceType} from './QuantityDiscountPriceType.js';
import {SellerFeedbackType} from './SellerFeedbackType.js';
import {ShipsFromType} from './ShipsFromType.js';

/**
 * The OfferDetail model module.
 * @module pricing_v0/model/OfferDetail
 * @version v0
 */
export class OfferDetail {
  /**
   * Constructs a new <code>OfferDetail</code>.
   * Schema for an individual offer. Object in &#x60;OfferDetailList&#x60;.
   * @alias module:pricing_v0/model/OfferDetail
   * @class
   * @param subCondition {String} The subcondition of the item. Subcondition values: New, Mint, Very Good, Good, Acceptable, Poor, Club, OEM, Warranty, Refurbished Warranty, Refurbished, Open Box, or Other.
   * @param shippingTime {module:pricing_v0/model/DetailedShippingTimeType} 
   * @param listingPrice {module:pricing_v0/model/MoneyType} 
   * @param shipping {module:pricing_v0/model/MoneyType} 
   * @param isFulfilledByAmazon {Boolean} When true, the offer is fulfilled by Amazon.
   */
  constructor(subCondition, shippingTime, listingPrice, shipping, isFulfilledByAmazon) {
    this.subCondition = subCondition;
    this.shippingTime = shippingTime;
    this.listingPrice = listingPrice;
    this.shipping = shipping;
    this.isFulfilledByAmazon = isFulfilledByAmazon;
  }

  /**
   * Constructs a <code>OfferDetail</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:pricing_v0/model/OfferDetail} obj Optional instance to populate.
   * @return {module:pricing_v0/model/OfferDetail} The populated <code>OfferDetail</code> instance.
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
      obj = obj || new OfferDetail();
      if (data.hasOwnProperty('MyOffer'))
        obj.myOffer = ApiClient.convertToType(data['MyOffer'], 'Boolean');
      if (data.hasOwnProperty('offerType'))
        obj.offerType = OfferCustomerType.constructFromObject(data['offerType']);
      if (data.hasOwnProperty('SubCondition'))
        obj.subCondition = ApiClient.convertToType(data['SubCondition'], 'String');
      if (data.hasOwnProperty('SellerId'))
        obj.sellerId = ApiClient.convertToType(data['SellerId'], 'String');
      if (data.hasOwnProperty('ConditionNotes'))
        obj.conditionNotes = ApiClient.convertToType(data['ConditionNotes'], 'String');
      if (data.hasOwnProperty('SellerFeedbackRating'))
        obj.sellerFeedbackRating = SellerFeedbackType.constructFromObject(data['SellerFeedbackRating']);
      if (data.hasOwnProperty('ShippingTime'))
        obj.shippingTime = DetailedShippingTimeType.constructFromObject(data['ShippingTime']);
      if (data.hasOwnProperty('ListingPrice'))
        obj.listingPrice = MoneyType.constructFromObject(data['ListingPrice']);
      if (data.hasOwnProperty('quantityDiscountPrices'))
        obj.quantityDiscountPrices = ApiClient.convertToType(data['quantityDiscountPrices'], [QuantityDiscountPriceType]);
      if (data.hasOwnProperty('Points'))
        obj.points = Points.constructFromObject(data['Points']);
      if (data.hasOwnProperty('Shipping'))
        obj.shipping = MoneyType.constructFromObject(data['Shipping']);
      if (data.hasOwnProperty('ShipsFrom'))
        obj.shipsFrom = ShipsFromType.constructFromObject(data['ShipsFrom']);
      if (data.hasOwnProperty('IsFulfilledByAmazon'))
        obj.isFulfilledByAmazon = ApiClient.convertToType(data['IsFulfilledByAmazon'], 'Boolean');
      if (data.hasOwnProperty('PrimeInformation'))
        obj.primeInformation = PrimeInformationType.constructFromObject(data['PrimeInformation']);
      if (data.hasOwnProperty('IsBuyBoxWinner'))
        obj.isBuyBoxWinner = ApiClient.convertToType(data['IsBuyBoxWinner'], 'Boolean');
      if (data.hasOwnProperty('IsFeaturedMerchant'))
        obj.isFeaturedMerchant = ApiClient.convertToType(data['IsFeaturedMerchant'], 'Boolean');
    }
    return obj;
  }
}

/**
 * When true, this is the seller's offer.
 * @member {Boolean} myOffer
 */
OfferDetail.prototype.myOffer = undefined;

/**
 * @member {module:pricing_v0/model/OfferCustomerType} offerType
 */
OfferDetail.prototype.offerType = undefined;

/**
 * The subcondition of the item. Subcondition values: New, Mint, Very Good, Good, Acceptable, Poor, Club, OEM, Warranty, Refurbished Warranty, Refurbished, Open Box, or Other.
 * @member {String} subCondition
 */
OfferDetail.prototype.subCondition = undefined;

/**
 * The seller identifier for the offer.
 * @member {String} sellerId
 */
OfferDetail.prototype.sellerId = undefined;

/**
 * Information about the condition of the item.
 * @member {String} conditionNotes
 */
OfferDetail.prototype.conditionNotes = undefined;

/**
 * @member {module:pricing_v0/model/SellerFeedbackType} sellerFeedbackRating
 */
OfferDetail.prototype.sellerFeedbackRating = undefined;

/**
 * @member {module:pricing_v0/model/DetailedShippingTimeType} shippingTime
 */
OfferDetail.prototype.shippingTime = undefined;

/**
 * @member {module:pricing_v0/model/MoneyType} listingPrice
 */
OfferDetail.prototype.listingPrice = undefined;

/**
 * List of `QuantityDiscountPrice` that contains item's pricing information when buy in bulk.
 * @member {Array.<module:pricing_v0/model/QuantityDiscountPriceType>} quantityDiscountPrices
 */
OfferDetail.prototype.quantityDiscountPrices = undefined;

/**
 * @member {module:pricing_v0/model/Points} points
 */
OfferDetail.prototype.points = undefined;

/**
 * @member {module:pricing_v0/model/MoneyType} shipping
 */
OfferDetail.prototype.shipping = undefined;

/**
 * @member {module:pricing_v0/model/ShipsFromType} shipsFrom
 */
OfferDetail.prototype.shipsFrom = undefined;

/**
 * When true, the offer is fulfilled by Amazon.
 * @member {Boolean} isFulfilledByAmazon
 */
OfferDetail.prototype.isFulfilledByAmazon = undefined;

/**
 * @member {module:pricing_v0/model/PrimeInformationType} primeInformation
 */
OfferDetail.prototype.primeInformation = undefined;

/**
 * When true, the offer is currently in the Buy Box. There can be up to two Buy Box winners at any time per ASIN, one that is eligible for Prime and one that is not eligible for Prime.
 * @member {Boolean} isBuyBoxWinner
 */
OfferDetail.prototype.isBuyBoxWinner = undefined;

/**
 * When true, the seller of the item is eligible to win the Buy Box.
 * @member {Boolean} isFeaturedMerchant
 */
OfferDetail.prototype.isFeaturedMerchant = undefined;


