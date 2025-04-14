/**
 * Selling Partner API for Product Fees
 * The Selling Partner API for Product Fees lets you programmatically retrieve estimated fees for a product. You can then account for those fees in your pricing.
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
import {FeeDetail} from './FeeDetail.js';
import {MoneyType} from './MoneyType.js';

/**
 * The FeesEstimate model module.
 * @module productfees_v0/model/FeesEstimate
 * @version v0
 */
export class FeesEstimate {
  /**
   * Constructs a new <code>FeesEstimate</code>.
   * The total estimated fees for an item and a list of details.
   * @alias module:productfees_v0/model/FeesEstimate
   * @class
   * @param timeOfFeesEstimation {Date} The time at which the fees were estimated. This defaults to the time the request is made.
   */
  constructor(timeOfFeesEstimation) {
    this.timeOfFeesEstimation = timeOfFeesEstimation;
  }

  /**
   * Constructs a <code>FeesEstimate</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:productfees_v0/model/FeesEstimate} obj Optional instance to populate.
   * @return {module:productfees_v0/model/FeesEstimate} The populated <code>FeesEstimate</code> instance.
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
      obj = obj || new FeesEstimate();
      if (data.hasOwnProperty('TimeOfFeesEstimation'))
        obj.timeOfFeesEstimation = ApiClient.convertToType(data['TimeOfFeesEstimation'], 'Date');
      if (data.hasOwnProperty('TotalFeesEstimate'))
        obj.totalFeesEstimate = MoneyType.constructFromObject(data['TotalFeesEstimate']);
      if (data.hasOwnProperty('FeeDetailList'))
        obj.feeDetailList = ApiClient.convertToType(data['FeeDetailList'], [FeeDetail]);
    }
    return obj;
  }
}

/**
 * The time at which the fees were estimated. This defaults to the time the request is made.
 * @member {Date} timeOfFeesEstimation
 */
FeesEstimate.prototype.timeOfFeesEstimation = undefined;

/**
 * @member {module:productfees_v0/model/MoneyType} totalFeesEstimate
 */
FeesEstimate.prototype.totalFeesEstimate = undefined;

/**
 * A list of other fees that contribute to a given fee.
 * @member {Array.<module:productfees_v0/model/FeeDetail>} feeDetailList
 */
FeesEstimate.prototype.feeDetailList = undefined;


