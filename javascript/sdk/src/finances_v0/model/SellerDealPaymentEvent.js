/**
 * Selling Partner API for Finances
 * The Selling Partner API for Finances helps you obtain financial information relevant to a seller's business. You can obtain financial events for a given order, financial event group, or date range without having to wait until a statement period closes. You can also obtain financial event groups for a given date range.
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
import {Currency} from './Currency.js';

/**
 * The SellerDealPaymentEvent model module.
 * @module finances_v0/model/SellerDealPaymentEvent
 * @version v0
 */
export class SellerDealPaymentEvent {
  /**
   * Constructs a new <code>SellerDealPaymentEvent</code>.
   * An event linked to the payment of a fee related to the specified deal.
   * @alias module:finances_v0/model/SellerDealPaymentEvent
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>SellerDealPaymentEvent</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:finances_v0/model/SellerDealPaymentEvent} obj Optional instance to populate.
   * @return {module:finances_v0/model/SellerDealPaymentEvent} The populated <code>SellerDealPaymentEvent</code> instance.
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
      obj = obj || new SellerDealPaymentEvent();
      if (data.hasOwnProperty('postedDate'))
        obj.postedDate = ApiClient.convertToType(data['postedDate'], 'Date');
      if (data.hasOwnProperty('dealId'))
        obj.dealId = ApiClient.convertToType(data['dealId'], 'String');
      if (data.hasOwnProperty('dealDescription'))
        obj.dealDescription = ApiClient.convertToType(data['dealDescription'], 'String');
      if (data.hasOwnProperty('eventType'))
        obj.eventType = ApiClient.convertToType(data['eventType'], 'String');
      if (data.hasOwnProperty('feeType'))
        obj.feeType = ApiClient.convertToType(data['feeType'], 'String');
      if (data.hasOwnProperty('feeAmount'))
        obj.feeAmount = Currency.constructFromObject(data['feeAmount']);
      if (data.hasOwnProperty('taxAmount'))
        obj.taxAmount = Currency.constructFromObject(data['taxAmount']);
      if (data.hasOwnProperty('totalAmount'))
        obj.totalAmount = Currency.constructFromObject(data['totalAmount']);
    }
    return obj;
  }
}

/**
 * Fields with a schema type of date are in ISO 8601 date time format (for example GroupBeginDate).
 * @member {Date} postedDate
 */
SellerDealPaymentEvent.prototype.postedDate = undefined;

/**
 * The unique identifier of the deal.
 * @member {String} dealId
 */
SellerDealPaymentEvent.prototype.dealId = undefined;

/**
 * The internal description of the deal.
 * @member {String} dealDescription
 */
SellerDealPaymentEvent.prototype.dealDescription = undefined;

/**
 * The type of event: SellerDealComplete.
 * @member {String} eventType
 */
SellerDealPaymentEvent.prototype.eventType = undefined;

/**
 * The type of fee: RunLightningDealFee.
 * @member {String} feeType
 */
SellerDealPaymentEvent.prototype.feeType = undefined;

/**
 * @member {module:finances_v0/model/Currency} feeAmount
 */
SellerDealPaymentEvent.prototype.feeAmount = undefined;

/**
 * @member {module:finances_v0/model/Currency} taxAmount
 */
SellerDealPaymentEvent.prototype.taxAmount = undefined;

/**
 * @member {module:finances_v0/model/Currency} totalAmount
 */
SellerDealPaymentEvent.prototype.totalAmount = undefined;


