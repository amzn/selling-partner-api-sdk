/**
 * Selling Partner API for Retail Procurement Orders
 * The Selling Partner API for Retail Procurement Orders provides programmatic access to vendor orders data.
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
import {TransactionId} from './TransactionId.js';

/**
 * The SubmitAcknowledgementResponse model module.
 * @module vendororders_v1/model/SubmitAcknowledgementResponse
 * @version v1
 */
export class SubmitAcknowledgementResponse {
  /**
   * Constructs a new <code>SubmitAcknowledgementResponse</code>.
   * The response schema for the submitAcknowledgement operation
   * @alias module:vendororders_v1/model/SubmitAcknowledgementResponse
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>SubmitAcknowledgementResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:vendororders_v1/model/SubmitAcknowledgementResponse} obj Optional instance to populate.
   * @return {module:vendororders_v1/model/SubmitAcknowledgementResponse} The populated <code>SubmitAcknowledgementResponse</code> instance.
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
      obj = obj || new SubmitAcknowledgementResponse();
      if (data.hasOwnProperty('payload'))
        obj.payload = TransactionId.constructFromObject(data['payload']);
      if (data.hasOwnProperty('errors'))
        obj.errors = ApiClient.convertToType(data['errors'], [Error]);
    }
    return obj;
  }
}

/**
 * @member {module:vendororders_v1/model/TransactionId} payload
 */
SubmitAcknowledgementResponse.prototype.payload = undefined;

/**
 * A list of error responses returned when a request is unsuccessful.
 * @member {Array.<module:vendororders_v1/model/Error>} errors
 */
SubmitAcknowledgementResponse.prototype.errors = undefined;


