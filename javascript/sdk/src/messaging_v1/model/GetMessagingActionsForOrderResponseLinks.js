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
import {LinkObject} from './LinkObject.js';

/**
 * The GetMessagingActionsForOrderResponseLinks model module.
 * @module messaging_v1/model/GetMessagingActionsForOrderResponseLinks
 * @version v1
 */
export class GetMessagingActionsForOrderResponseLinks {
  /**
   * Constructs a new <code>GetMessagingActionsForOrderResponseLinks</code>.
   * The links response that is associated with the specified &#x60;amazonOrderId&#x60;.
   * @alias module:messaging_v1/model/GetMessagingActionsForOrderResponseLinks
   * @class
   * @param self {module:messaging_v1/model/LinkObject} 
   * @param actions {Array.<module:messaging_v1/model/LinkObject>} Eligible actions for the specified amazonOrderId.
   */
  constructor(self, actions) {
    this.self = self;
    this.actions = actions;
  }

  /**
   * Constructs a <code>GetMessagingActionsForOrderResponseLinks</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:messaging_v1/model/GetMessagingActionsForOrderResponseLinks} obj Optional instance to populate.
   * @return {module:messaging_v1/model/GetMessagingActionsForOrderResponseLinks} The populated <code>GetMessagingActionsForOrderResponseLinks</code> instance.
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
      obj = obj || new GetMessagingActionsForOrderResponseLinks();
      if (data.hasOwnProperty('self'))
        obj.self = LinkObject.constructFromObject(data['self']);
      if (data.hasOwnProperty('actions'))
        obj.actions = ApiClient.convertToType(data['actions'], [LinkObject]);
    }
    return obj;
  }
}

/**
 * @member {module:messaging_v1/model/LinkObject} self
 */
GetMessagingActionsForOrderResponseLinks.prototype.self = undefined;

/**
 * Eligible actions for the specified amazonOrderId.
 * @member {Array.<module:messaging_v1/model/LinkObject>} actions
 */
GetMessagingActionsForOrderResponseLinks.prototype.actions = undefined;


