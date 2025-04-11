/**
 * Amazon Shipping API
 * The Amazon Shipping API is designed to support outbound shipping use cases both for orders originating on Amazon-owned marketplaces as well as external channels/marketplaces. With these APIs, you can request shipping rates, create shipments, cancel shipments, and track shipments.
 *
 * The version of the OpenAPI document: v2
 * Contact: swa-api-core@amazon.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import {ApiClient} from '../ApiClient.js';

/**
 * The CarrierAccount model module.
 * @module shipping_v2/model/CarrierAccount
 * @version v2
 */
export class CarrierAccount {
  /**
   * Constructs a new <code>CarrierAccount</code>.
   * Carrier Account details used to fetch rates.
   * @alias module:shipping_v2/model/CarrierAccount
   * @class
   * @param carrierAccountId {String} Identifier for the seller's carrier account.
   * @param carrierId {String} The carrier identifier for the offering, provided by the carrier.
   */
  constructor(carrierAccountId, carrierId) {
    this.carrierAccountId = carrierAccountId;
    this.carrierId = carrierId;
  }

  /**
   * Constructs a <code>CarrierAccount</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:shipping_v2/model/CarrierAccount} obj Optional instance to populate.
   * @return {module:shipping_v2/model/CarrierAccount} The populated <code>CarrierAccount</code> instance.
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
      obj = obj || new CarrierAccount();
      if (data.hasOwnProperty('carrierAccountId'))
        obj.carrierAccountId = ApiClient.convertToType(data['carrierAccountId'], 'String');
      if (data.hasOwnProperty('carrierId'))
        obj.carrierId = ApiClient.convertToType(data['carrierId'], 'String');
    }
    return obj;
  }
}

/**
 * Identifier for the seller's carrier account.
 * @member {String} carrierAccountId
 */
CarrierAccount.prototype.carrierAccountId = undefined;

/**
 * The carrier identifier for the offering, provided by the carrier.
 * @member {String} carrierId
 */
CarrierAccount.prototype.carrierId = undefined;


