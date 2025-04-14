/**
 * Selling Partner API for Messaging
 * With the Messaging API you can build applications that send messages to buyers. You can get a list of message types that are available for an order that you specify, then call an operation that sends a message to the buyer for that order. The Messaging API returns responses that are formed according to the <a href=https://tools.ietf.org/html/draft-kelly-json-hal-08>JSON Hypertext Application Language</a> (HAL) standard.
 *
 * The version of the OpenAPI document: v1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import {ApiClient} from '../ApiClient.js';
import {Error} from './Error.js';

/**
 * The CreateConfirmOrderDetailsResponse model module.
 * @module messaging_v1/model/CreateConfirmOrderDetailsResponse
 * @version v1
 */
export class CreateConfirmOrderDetailsResponse {
  /**
   * Constructs a new <code>CreateConfirmOrderDetailsResponse</code>.
   * The response schema for the createConfirmOrderDetails operation.
   * @alias module:messaging_v1/model/CreateConfirmOrderDetailsResponse
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>CreateConfirmOrderDetailsResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:messaging_v1/model/CreateConfirmOrderDetailsResponse} obj Optional instance to populate.
   * @return {module:messaging_v1/model/CreateConfirmOrderDetailsResponse} The populated <code>CreateConfirmOrderDetailsResponse</code> instance.
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
      obj = obj || new CreateConfirmOrderDetailsResponse();
      if (data.hasOwnProperty('errors'))
        obj.errors = ApiClient.convertToType(data['errors'], [Error]);
    }
    return obj;
  }
}

/**
 * A list of error responses returned when a request is unsuccessful.
 * @member {Array.<module:messaging_v1/model/Error>} errors
 */
CreateConfirmOrderDetailsResponse.prototype.errors = undefined;


