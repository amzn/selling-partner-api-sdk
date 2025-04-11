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

/**
 * The CreateUnexpectedProblemRequest model module.
 * @module messaging_v1/model/CreateUnexpectedProblemRequest
 * @version v1
 */
export class CreateUnexpectedProblemRequest {
  /**
   * Constructs a new <code>CreateUnexpectedProblemRequest</code>.
   * The request schema for the createUnexpectedProblem operation.
   * @alias module:messaging_v1/model/CreateUnexpectedProblemRequest
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>CreateUnexpectedProblemRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:messaging_v1/model/CreateUnexpectedProblemRequest} obj Optional instance to populate.
   * @return {module:messaging_v1/model/CreateUnexpectedProblemRequest} The populated <code>CreateUnexpectedProblemRequest</code> instance.
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
      obj = obj || new CreateUnexpectedProblemRequest();
      if (data.hasOwnProperty('text'))
        obj.text = ApiClient.convertToType(data['text'], 'String');
    }
    return obj;
  }
}

/**
 * The text to be sent to the buyer. Only links related to unexpected problem calls are allowed. Do not include HTML or email addresses. The text must be written in the buyer's language of preference, which can be retrieved from the GetAttributes operation.
 * @member {String} text
 */
CreateUnexpectedProblemRequest.prototype.text = undefined;


