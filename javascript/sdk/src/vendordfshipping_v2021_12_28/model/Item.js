/**
 * Selling Partner API for Direct Fulfillment Shipping
 * Use the Selling Partner API for Direct Fulfillment Shipping to access a direct fulfillment vendor's shipping data.
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
import {ItemQuantity} from './ItemQuantity.js';

/**
 * The Item model module.
 * @module vendordfshipping_v2021_12_28/model/Item
 * @version 2021-12-28
 */
export class Item {
  /**
   * Constructs a new <code>Item</code>.
   * Details of the item being shipped.
   * @alias module:vendordfshipping_v2021_12_28/model/Item
   * @class
   * @param itemSequenceNumber {Number} The sequence number of the item. The number must be the same as the order number of the item.
   * @param shippedQuantity {module:vendordfshipping_v2021_12_28/model/ItemQuantity} 
   */
  constructor(itemSequenceNumber, shippedQuantity) {
    this.itemSequenceNumber = itemSequenceNumber;
    this.shippedQuantity = shippedQuantity;
  }

  /**
   * Constructs a <code>Item</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:vendordfshipping_v2021_12_28/model/Item} obj Optional instance to populate.
   * @return {module:vendordfshipping_v2021_12_28/model/Item} The populated <code>Item</code> instance.
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
      obj = obj || new Item();
      if (data.hasOwnProperty('itemSequenceNumber'))
        obj.itemSequenceNumber = ApiClient.convertToType(data['itemSequenceNumber'], 'Number');
      if (data.hasOwnProperty('buyerProductIdentifier'))
        obj.buyerProductIdentifier = ApiClient.convertToType(data['buyerProductIdentifier'], 'String');
      if (data.hasOwnProperty('vendorProductIdentifier'))
        obj.vendorProductIdentifier = ApiClient.convertToType(data['vendorProductIdentifier'], 'String');
      if (data.hasOwnProperty('shippedQuantity'))
        obj.shippedQuantity = ItemQuantity.constructFromObject(data['shippedQuantity']);
    }
    return obj;
  }
}

/**
 * The sequence number of the item. The number must be the same as the order number of the item.
 * @member {Number} itemSequenceNumber
 */
Item.prototype.itemSequenceNumber = undefined;

/**
 * The buyer's Amazon Standard Identification Number (ASIN) of an item. Either `buyerProductIdentifier` or `vendorProductIdentifier` is required.
 * @member {String} buyerProductIdentifier
 */
Item.prototype.buyerProductIdentifier = undefined;

/**
 * An item's product identifier, which the vendor selects. This identifier should be the same as the identifier, such as a SKU, in the purchase order.
 * @member {String} vendorProductIdentifier
 */
Item.prototype.vendorProductIdentifier = undefined;

/**
 * @member {module:vendordfshipping_v2021_12_28/model/ItemQuantity} shippedQuantity
 */
Item.prototype.shippedQuantity = undefined;


