/**
 * Selling Partner API for Direct Fulfillment Transaction Status
 * The Selling Partner API for Direct Fulfillment Transaction Status provides programmatic access to a direct fulfillment vendor's transaction status.
 *
 * The version of the OpenAPI document: 2021-12-28
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import {ApiClient} from '../ApiClient.js';
import {Transaction} from './Transaction.js';

/**
 * The TransactionStatus model module.
 * @module vendordftransactions_v2021_12_28/model/TransactionStatus
 * @version 2021-12-28
 */
export class TransactionStatus {
  /**
   * Constructs a new <code>TransactionStatus</code>.
   * The payload for the getTransactionStatus operation.
   * @alias module:vendordftransactions_v2021_12_28/model/TransactionStatus
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>TransactionStatus</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:vendordftransactions_v2021_12_28/model/TransactionStatus} obj Optional instance to populate.
   * @return {module:vendordftransactions_v2021_12_28/model/TransactionStatus} The populated <code>TransactionStatus</code> instance.
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
      obj = obj || new TransactionStatus();
      if (data.hasOwnProperty('transactionStatus'))
        obj.transactionStatus = Transaction.constructFromObject(data['transactionStatus']);
    }
    return obj;
  }
}

/**
 * @member {module:vendordftransactions_v2021_12_28/model/Transaction} transactionStatus
 */
TransactionStatus.prototype.transactionStatus = undefined;


