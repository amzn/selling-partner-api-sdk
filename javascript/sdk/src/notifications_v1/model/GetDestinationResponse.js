/**
 * Selling Partner API for Notifications
 * The Selling Partner API for Notifications lets you subscribe to notifications that are relevant to a selling partner's business. Using this API you can create a destination to receive notifications, subscribe to notifications, delete notification subscriptions, and more.  For more information, refer to the [Notifications Use Case Guide](https://developer-docs.amazon.com/sp-api/docs/notifications-api-v1-use-case-guide).
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
import {Destination} from './Destination.js';
import {Error} from './Error.js';

/**
 * The GetDestinationResponse model module.
 * @module notifications_v1/model/GetDestinationResponse
 * @version v1
 */
export class GetDestinationResponse {
  /**
   * Constructs a new <code>GetDestinationResponse</code>.
   * The response schema for the &#x60;getDestination&#x60; operation.
   * @alias module:notifications_v1/model/GetDestinationResponse
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>GetDestinationResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:notifications_v1/model/GetDestinationResponse} obj Optional instance to populate.
   * @return {module:notifications_v1/model/GetDestinationResponse} The populated <code>GetDestinationResponse</code> instance.
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
      obj = obj || new GetDestinationResponse();
      if (data.hasOwnProperty('payload'))
        obj.payload = Destination.constructFromObject(data['payload']);
      if (data.hasOwnProperty('errors'))
        obj.errors = ApiClient.convertToType(data['errors'], [Error]);
    }
    return obj;
  }
}

/**
 * @member {module:notifications_v1/model/Destination} payload
 */
GetDestinationResponse.prototype.payload = undefined;

/**
 * A list of error responses returned when a request is unsuccessful.
 * @member {Array.<module:notifications_v1/model/Error>} errors
 */
GetDestinationResponse.prototype.errors = undefined;


