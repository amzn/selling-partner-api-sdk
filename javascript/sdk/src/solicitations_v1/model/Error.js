/**
 * Selling Partner API for Solicitations
 * With the Solicitations API you can build applications that send non-critical solicitations to buyers. You can get a list of solicitation types that are available for an order that you specify, then call an operation that sends a solicitation to the buyer for that order. Buyers cannot respond to solicitations sent by this API, and these solicitations do not appear in the Messaging section of Seller Central or in the recipient's Message Center. The Solicitations API returns responses that are formed according to the <a href=https://tools.ietf.org/html/draft-kelly-json-hal-08>JSON Hypertext Application Language</a> (HAL) standard.
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
 * The Error model module.
 * @module solicitations_v1/model/Error
 * @version v1
 */
export class Error {
  /**
   * Constructs a new <code>Error</code>.
   * Error response returned when the request is unsuccessful.
   * @alias module:solicitations_v1/model/Error
   * @class
   * @param code {String} An error code that identifies the type of error that occurred.
   * @param message {String} A message that describes the error condition.
   */
  constructor(code, message) {
    this.code = code;
    this.message = message;
  }

  /**
   * Constructs a <code>Error</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:solicitations_v1/model/Error} obj Optional instance to populate.
   * @return {module:solicitations_v1/model/Error} The populated <code>Error</code> instance.
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
      obj = obj || new Error();
      if (data.hasOwnProperty('code'))
        obj.code = ApiClient.convertToType(data['code'], 'String');
      if (data.hasOwnProperty('message'))
        obj.message = ApiClient.convertToType(data['message'], 'String');
      if (data.hasOwnProperty('details'))
        obj.details = ApiClient.convertToType(data['details'], 'String');
    }
    return obj;
  }
}

/**
 * An error code that identifies the type of error that occurred.
 * @member {String} code
 */
Error.prototype.code = undefined;

/**
 * A message that describes the error condition.
 * @member {String} message
 */
Error.prototype.message = undefined;

/**
 * Additional details that can help the caller understand or fix the issue.
 * @member {String} details
 */
Error.prototype.details = undefined;


