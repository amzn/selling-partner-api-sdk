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
 * The ReasonCodeDetails model module.
 * @module fulfillmentoutbound_v2020_07_01/model/ReasonCodeDetails
 * @version 2020-07-01
 */
export class ReasonCodeDetails {
  /**
   * Constructs a new <code>ReasonCodeDetails</code>.
   * A return reason code, a description, and an optional description translation.
   * @alias module:fulfillmentoutbound_v2020_07_01/model/ReasonCodeDetails
   * @class
   * @param returnReasonCode {String} A code that indicates a valid return reason.
   * @param description {String} A human readable description of the return reason code.
   */
  constructor(returnReasonCode, description) {
    this.returnReasonCode = returnReasonCode;
    this.description = description;
  }

  /**
   * Constructs a <code>ReasonCodeDetails</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:fulfillmentoutbound_v2020_07_01/model/ReasonCodeDetails} obj Optional instance to populate.
   * @return {module:fulfillmentoutbound_v2020_07_01/model/ReasonCodeDetails} The populated <code>ReasonCodeDetails</code> instance.
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
      obj = obj || new ReasonCodeDetails();
      if (data.hasOwnProperty('returnReasonCode'))
        obj.returnReasonCode = ApiClient.convertToType(data['returnReasonCode'], 'String');
      if (data.hasOwnProperty('description'))
        obj.description = ApiClient.convertToType(data['description'], 'String');
      if (data.hasOwnProperty('translatedDescription'))
        obj.translatedDescription = ApiClient.convertToType(data['translatedDescription'], 'String');
    }
    return obj;
  }
}

/**
 * A code that indicates a valid return reason.
 * @member {String} returnReasonCode
 */
ReasonCodeDetails.prototype.returnReasonCode = undefined;

/**
 * A human readable description of the return reason code.
 * @member {String} description
 */
ReasonCodeDetails.prototype.description = undefined;

/**
 * A translation of the description. The translation is in the language specified in the Language request parameter.
 * @member {String} translatedDescription
 */
ReasonCodeDetails.prototype.translatedDescription = undefined;


