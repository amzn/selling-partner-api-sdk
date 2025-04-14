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
import {Address} from './Address.js';
import {DeliveryPreferences} from './DeliveryPreferences.js';

/**
 * The OrderAddress model module.
 * @module orders_v0/model/OrderAddress
 * @version v0
 */
export class OrderAddress {
  /**
   * Constructs a new <code>OrderAddress</code>.
   * The shipping address for the order.
   * @alias module:orders_v0/model/OrderAddress
   * @class
   * @param amazonOrderId {String} An Amazon-defined order identifier, in 3-7-7 format.
   */
  constructor(amazonOrderId) {
    this.amazonOrderId = amazonOrderId;
  }

  /**
   * Constructs a <code>OrderAddress</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:orders_v0/model/OrderAddress} obj Optional instance to populate.
   * @return {module:orders_v0/model/OrderAddress} The populated <code>OrderAddress</code> instance.
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
      obj = obj || new OrderAddress();
      if (data.hasOwnProperty('AmazonOrderId'))
        obj.amazonOrderId = ApiClient.convertToType(data['AmazonOrderId'], 'String');
      if (data.hasOwnProperty('BuyerCompanyName'))
        obj.buyerCompanyName = ApiClient.convertToType(data['BuyerCompanyName'], 'String');
      if (data.hasOwnProperty('ShippingAddress'))
        obj.shippingAddress = Address.constructFromObject(data['ShippingAddress']);
      if (data.hasOwnProperty('DeliveryPreferences'))
        obj.deliveryPreferences = DeliveryPreferences.constructFromObject(data['DeliveryPreferences']);
    }
    return obj;
  }
}

/**
 * An Amazon-defined order identifier, in 3-7-7 format.
 * @member {String} amazonOrderId
 */
OrderAddress.prototype.amazonOrderId = undefined;

/**
 * The company name of the contact buyer. For IBA orders, the buyer company must be Amazon entities.
 * @member {String} buyerCompanyName
 */
OrderAddress.prototype.buyerCompanyName = undefined;

/**
 * @member {module:orders_v0/model/Address} shippingAddress
 */
OrderAddress.prototype.shippingAddress = undefined;

/**
 * @member {module:orders_v0/model/DeliveryPreferences} deliveryPreferences
 */
OrderAddress.prototype.deliveryPreferences = undefined;


