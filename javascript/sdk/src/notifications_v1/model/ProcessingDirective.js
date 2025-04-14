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
import {EventFilter} from './EventFilter.js';

/**
 * The ProcessingDirective model module.
 * @module notifications_v1/model/ProcessingDirective
 * @version v1
 */
export class ProcessingDirective {
  /**
   * Constructs a new <code>ProcessingDirective</code>.
   * Additional information passed to the subscription to control the processing of notifications. For example, you can use an &#x60;eventFilter&#x60; to customize your subscription to send notifications for only the specified &#x60;marketplaceId&#x60;s, or select the aggregation time period at which to send notifications (for example: limit to one notification every five minutes for high frequency notifications). The specific features available vary depending on the &#x60;notificationType&#x60;.  This feature is currently only supported by the &#x60;ANY_OFFER_CHANGED&#x60; and &#x60;ORDER_CHANGE&#x60; &#x60;notificationType&#x60;s.
   * @alias module:notifications_v1/model/ProcessingDirective
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>ProcessingDirective</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:notifications_v1/model/ProcessingDirective} obj Optional instance to populate.
   * @return {module:notifications_v1/model/ProcessingDirective} The populated <code>ProcessingDirective</code> instance.
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
      obj = obj || new ProcessingDirective();
      if (data.hasOwnProperty('eventFilter'))
        obj.eventFilter = EventFilter.constructFromObject(data['eventFilter']);
    }
    return obj;
  }
}

/**
 * @member {module:notifications_v1/model/EventFilter} eventFilter
 */
ProcessingDirective.prototype.eventFilter = undefined;


