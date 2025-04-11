/**
 * Selling Partner APIs for Fulfillment Outbound
 * The Selling Partner API for Fulfillment Outbound lets you create applications that help a seller fulfill Multi-Channel Fulfillment orders using their inventory in Amazon's fulfillment network. You can get information on both potential and existing fulfillment orders.
 *
 * The version of the OpenAPI document: 2020-07-01
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import {ApiClient} from '../ApiClient.js';

/**
 * The DateRange model module.
 * @module fulfillmentoutbound_v2020_07_01/model/DateRange
 * @version 2020-07-01
 */
export class DateRange {
  /**
   * Constructs a new <code>DateRange</code>.
   * The time range within which something (for example, a delivery) will occur.
   * @alias module:fulfillmentoutbound_v2020_07_01/model/DateRange
   * @class
   * @param earliest {Date} Date timestamp
   * @param latest {Date} Date timestamp
   */
  constructor(earliest, latest) {
    this.earliest = earliest;
    this.latest = latest;
  }

  /**
   * Constructs a <code>DateRange</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:fulfillmentoutbound_v2020_07_01/model/DateRange} obj Optional instance to populate.
   * @return {module:fulfillmentoutbound_v2020_07_01/model/DateRange} The populated <code>DateRange</code> instance.
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
      obj = obj || new DateRange();
      if (data.hasOwnProperty('earliest'))
        obj.earliest = ApiClient.convertToType(data['earliest'], 'Date');
      if (data.hasOwnProperty('latest'))
        obj.latest = ApiClient.convertToType(data['latest'], 'Date');
    }
    return obj;
  }
}

/**
 * Date timestamp
 * @member {Date} earliest
 */
DateRange.prototype.earliest = undefined;

/**
 * Date timestamp
 * @member {Date} latest
 */
DateRange.prototype.latest = undefined;


