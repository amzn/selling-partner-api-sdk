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
import {GetSchemaResponseLinks} from './GetSchemaResponseLinks.js';

/**
 * The GetSchemaResponse model module.
 * @module messaging_v1/model/GetSchemaResponse
 * @version v1
 */
export class GetSchemaResponse {
  /**
   * Constructs a new <code>GetSchemaResponse</code>.
   * The &#x60;GET&#x60; request schema response.
   * @alias module:messaging_v1/model/GetSchemaResponse
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>GetSchemaResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:messaging_v1/model/GetSchemaResponse} obj Optional instance to populate.
   * @return {module:messaging_v1/model/GetSchemaResponse} The populated <code>GetSchemaResponse</code> instance.
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
      obj = obj || new GetSchemaResponse();
      if (data.hasOwnProperty('_links'))
        obj.links = GetSchemaResponseLinks.constructFromObject(data['_links']);
      if (data.hasOwnProperty('payload'))
        obj.payload = ApiClient.convertToType(data['payload'], {'String': Object});
      if (data.hasOwnProperty('errors'))
        obj.errors = ApiClient.convertToType(data['errors'], [Error]);
    }
    return obj;
  }
}

/**
 * @member {module:messaging_v1/model/GetSchemaResponseLinks} links
 */
GetSchemaResponse.prototype.links = undefined;

/**
 * A JSON schema document describing the expected payload of the action. This object can be validated against <a href=http://json-schema.org/draft-04/schema>http://json-schema.org/draft-04/schema</a>.
 * @member {Object.<String, Object>} payload
 */
GetSchemaResponse.prototype.payload = undefined;

/**
 * A list of error responses returned when a request is unsuccessful.
 * @member {Array.<module:messaging_v1/model/Error>} errors
 */
GetSchemaResponse.prototype.errors = undefined;


