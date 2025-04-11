/**
 * Selling Partner API for Direct Fulfillment Inventory Updates
 * The Selling Partner API for Direct Fulfillment Inventory Updates provides programmatic access to a direct fulfillment vendor's inventory updates.
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
 * The TransactionReference model module.
 * @module vendordfinventory_v1/model/TransactionReference
 * @version v1
 */
export class TransactionReference {
  /**
   * Constructs a new <code>TransactionReference</code>.
   * Response containing the transaction ID.
   * @alias module:vendordfinventory_v1/model/TransactionReference
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>TransactionReference</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:vendordfinventory_v1/model/TransactionReference} obj Optional instance to populate.
   * @return {module:vendordfinventory_v1/model/TransactionReference} The populated <code>TransactionReference</code> instance.
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
      obj = obj || new TransactionReference();
      if (data.hasOwnProperty('transactionId'))
        obj.transactionId = ApiClient.convertToType(data['transactionId'], 'String');
    }
    return obj;
  }
}

/**
 * GUID to identify this transaction. This value can be used with the Transaction Status API to return the status of this transaction.
 * @member {String} transactionId
 */
TransactionReference.prototype.transactionId = undefined;


