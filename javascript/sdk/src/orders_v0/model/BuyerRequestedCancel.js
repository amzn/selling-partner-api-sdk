/**
 * Selling Partner API for Orders
 * Use the Orders Selling Partner API to programmatically retrieve order information. With this API, you can develop fast, flexible, and custom applications to manage order synchronization, perform order research, and create demand-based decision support tools.   _Note:_ For the JP, AU, and SG marketplaces, the Orders API supports orders from 2016 onward. For all other marketplaces, the Orders API supports orders for the last two years (orders older than this don't show up in the response).
 *
 * The version of the OpenAPI document: v0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import {ApiClient} from '../ApiClient.js';

/**
 * The BuyerRequestedCancel model module.
 * @module orders_v0/model/BuyerRequestedCancel
 * @version v0
 */
export class BuyerRequestedCancel {
  /**
   * Constructs a new <code>BuyerRequestedCancel</code>.
   * Information about whether or not a buyer requested cancellation.
   * @alias module:orders_v0/model/BuyerRequestedCancel
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>BuyerRequestedCancel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:orders_v0/model/BuyerRequestedCancel} obj Optional instance to populate.
   * @return {module:orders_v0/model/BuyerRequestedCancel} The populated <code>BuyerRequestedCancel</code> instance.
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
      obj = obj || new BuyerRequestedCancel();
      if (data.hasOwnProperty('IsBuyerRequestedCancel'))
        obj.isBuyerRequestedCancel = ApiClient.convertToType(data['IsBuyerRequestedCancel'], 'String');
      if (data.hasOwnProperty('BuyerCancelReason'))
        obj.buyerCancelReason = ApiClient.convertToType(data['BuyerCancelReason'], 'String');
    }
    return obj;
  }
}

/**
 * Indicate whether the buyer has requested cancellation.  **Possible Values**: `true`, `false`.
 * @member {String} isBuyerRequestedCancel
 */
BuyerRequestedCancel.prototype.isBuyerRequestedCancel = undefined;

/**
 * The reason that the buyer requested cancellation.
 * @member {String} buyerCancelReason
 */
BuyerRequestedCancel.prototype.buyerCancelReason = undefined;


