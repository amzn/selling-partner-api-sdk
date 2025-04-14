/**
 * Selling Partner API for Easy Ship
 * Use the Selling Partner API for Easy Ship to build applications for sellers to manage and ship Amazon Easy Ship orders. With this API, you can get available time slots, schedule and reschedule Easy Ship orders, and print shipping labels, invoices, and warranties. To review the differences in Easy Ship operations by marketplace, refer to [Marketplace support](https://developer-docs.amazon.com/sp-api/docs/easyship-api-v2022-03-23-use-case-guide#marketplace-support).
 *
 * The version of the OpenAPI document: 2022-03-23
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import {ApiClient} from '../ApiClient.js';
import {TimeSlot} from './TimeSlot.js';

/**
 * The ListHandoverSlotsResponse model module.
 * @module easyship_v2022_03_23/model/ListHandoverSlotsResponse
 * @version 2022-03-23
 */
export class ListHandoverSlotsResponse {
  /**
   * Constructs a new <code>ListHandoverSlotsResponse</code>.
   * The response schema for the &#x60;listHandoverSlots&#x60; operation.
   * @alias module:easyship_v2022_03_23/model/ListHandoverSlotsResponse
   * @class
   * @param amazonOrderId {String} An Amazon-defined order identifier. Identifies the order that the seller wants to deliver using Amazon Easy Ship.
   * @param timeSlots {Array.<module:easyship_v2022_03_23/model/TimeSlot>} A list of time slots.
   */
  constructor(amazonOrderId, timeSlots) {
    this.amazonOrderId = amazonOrderId;
    this.timeSlots = timeSlots;
  }

  /**
   * Constructs a <code>ListHandoverSlotsResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:easyship_v2022_03_23/model/ListHandoverSlotsResponse} obj Optional instance to populate.
   * @return {module:easyship_v2022_03_23/model/ListHandoverSlotsResponse} The populated <code>ListHandoverSlotsResponse</code> instance.
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
      obj = obj || new ListHandoverSlotsResponse();
      if (data.hasOwnProperty('amazonOrderId'))
        obj.amazonOrderId = ApiClient.convertToType(data['amazonOrderId'], 'String');
      if (data.hasOwnProperty('timeSlots'))
        obj.timeSlots = ApiClient.convertToType(data['timeSlots'], [TimeSlot]);
    }
    return obj;
  }
}

/**
 * An Amazon-defined order identifier. Identifies the order that the seller wants to deliver using Amazon Easy Ship.
 * @member {String} amazonOrderId
 */
ListHandoverSlotsResponse.prototype.amazonOrderId = undefined;

/**
 * A list of time slots.
 * @member {Array.<module:easyship_v2022_03_23/model/TimeSlot>} timeSlots
 */
ListHandoverSlotsResponse.prototype.timeSlots = undefined;


