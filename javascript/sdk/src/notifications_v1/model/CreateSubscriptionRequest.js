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
import {ProcessingDirective} from './ProcessingDirective.js';

/**
 * The CreateSubscriptionRequest model module.
 * @module notifications_v1/model/CreateSubscriptionRequest
 * @version v1
 */
export class CreateSubscriptionRequest {
  /**
   * Constructs a new <code>CreateSubscriptionRequest</code>.
   * The request schema for the &#x60;createSubscription&#x60; operation.
   * @alias module:notifications_v1/model/CreateSubscriptionRequest
   * @class
   * @param payloadVersion {String} The version of the payload object to be used in the notification.
   * @param destinationId {String} The identifier for the destination where notifications will be delivered.
   */
  constructor(payloadVersion, destinationId) {
    this.payloadVersion = payloadVersion;
    this.destinationId = destinationId;
  }

  /**
   * Constructs a <code>CreateSubscriptionRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:notifications_v1/model/CreateSubscriptionRequest} obj Optional instance to populate.
   * @return {module:notifications_v1/model/CreateSubscriptionRequest} The populated <code>CreateSubscriptionRequest</code> instance.
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
      obj = obj || new CreateSubscriptionRequest();
      if (data.hasOwnProperty('payloadVersion'))
        obj.payloadVersion = ApiClient.convertToType(data['payloadVersion'], 'String');
      if (data.hasOwnProperty('destinationId'))
        obj.destinationId = ApiClient.convertToType(data['destinationId'], 'String');
      if (data.hasOwnProperty('processingDirective'))
        obj.processingDirective = ProcessingDirective.constructFromObject(data['processingDirective']);
    }
    return obj;
  }
}

/**
 * The version of the payload object to be used in the notification.
 * @member {String} payloadVersion
 */
CreateSubscriptionRequest.prototype.payloadVersion = undefined;

/**
 * The identifier for the destination where notifications will be delivered.
 * @member {String} destinationId
 */
CreateSubscriptionRequest.prototype.destinationId = undefined;

/**
 * @member {module:notifications_v1/model/ProcessingDirective} processingDirective
 */
CreateSubscriptionRequest.prototype.processingDirective = undefined;


