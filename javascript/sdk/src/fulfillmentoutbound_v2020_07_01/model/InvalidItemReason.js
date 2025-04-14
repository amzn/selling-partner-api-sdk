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
import {InvalidItemReasonCode} from './InvalidItemReasonCode.js';

/**
 * The InvalidItemReason model module.
 * @module fulfillmentoutbound_v2020_07_01/model/InvalidItemReason
 * @version 2020-07-01
 */
export class InvalidItemReason {
  /**
   * Constructs a new <code>InvalidItemReason</code>.
   * The reason that the item is invalid for return.
   * @alias module:fulfillmentoutbound_v2020_07_01/model/InvalidItemReason
   * @class
   * @param invalidItemReasonCode {module:fulfillmentoutbound_v2020_07_01/model/InvalidItemReasonCode} 
   * @param description {String} A human readable description of the invalid item reason code.
   */
  constructor(invalidItemReasonCode, description) {
    this.invalidItemReasonCode = invalidItemReasonCode;
    this.description = description;
  }

  /**
   * Constructs a <code>InvalidItemReason</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:fulfillmentoutbound_v2020_07_01/model/InvalidItemReason} obj Optional instance to populate.
   * @return {module:fulfillmentoutbound_v2020_07_01/model/InvalidItemReason} The populated <code>InvalidItemReason</code> instance.
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
      obj = obj || new InvalidItemReason();
      if (data.hasOwnProperty('invalidItemReasonCode'))
        obj.invalidItemReasonCode = InvalidItemReasonCode.constructFromObject(data['invalidItemReasonCode']);
      if (data.hasOwnProperty('description'))
        obj.description = ApiClient.convertToType(data['description'], 'String');
    }
    return obj;
  }
}

/**
 * @member {module:fulfillmentoutbound_v2020_07_01/model/InvalidItemReasonCode} invalidItemReasonCode
 */
InvalidItemReason.prototype.invalidItemReasonCode = undefined;

/**
 * A human readable description of the invalid item reason code.
 * @member {String} description
 */
InvalidItemReason.prototype.description = undefined;


