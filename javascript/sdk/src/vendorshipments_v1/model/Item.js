/**
 * Selling Partner API for Retail Procurement Shipments
 * The Selling Partner API for Retail Procurement Shipments provides programmatic access to retail shipping data for vendors.
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
import {ItemDetails} from './ItemDetails.js';
import {ItemQuantity} from './ItemQuantity.js';

/**
 * The Item model module.
 * @module vendorshipments_v1/model/Item
 * @version v1
 */
export class Item {
  /**
   * Constructs a new <code>Item</code>.
   * Details of the item being shipped.
   * @alias module:vendorshipments_v1/model/Item
   * @class
   * @param itemSequenceNumber {String} Item sequence number for the item. The first item will be 001, the second 002, and so on. This number is used as a reference to refer to this item from the carton or pallet level.
   * @param shippedQuantity {module:vendorshipments_v1/model/ItemQuantity} 
   */
  constructor(itemSequenceNumber, shippedQuantity) {
    this.itemSequenceNumber = itemSequenceNumber;
    this.shippedQuantity = shippedQuantity;
  }

  /**
   * Constructs a <code>Item</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:vendorshipments_v1/model/Item} obj Optional instance to populate.
   * @return {module:vendorshipments_v1/model/Item} The populated <code>Item</code> instance.
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
        obj.itemSequenceNumber = ApiClient.convertToType(data['itemSequenceNumber'], 'String');
      if (data.hasOwnProperty('amazonProductIdentifier'))
        obj.amazonProductIdentifier = ApiClient.convertToType(data['amazonProductIdentifier'], 'String');
      if (data.hasOwnProperty('vendorProductIdentifier'))
        obj.vendorProductIdentifier = ApiClient.convertToType(data['vendorProductIdentifier'], 'String');
      if (data.hasOwnProperty('shippedQuantity'))
        obj.shippedQuantity = ItemQuantity.constructFromObject(data['shippedQuantity']);
      if (data.hasOwnProperty('itemDetails'))
        obj.itemDetails = ItemDetails.constructFromObject(data['itemDetails']);
    }
    return obj;
  }
}

/**
 * Item sequence number for the item. The first item will be 001, the second 002, and so on. This number is used as a reference to refer to this item from the carton or pallet level.
 * @member {String} itemSequenceNumber
 */
Item.prototype.itemSequenceNumber = undefined;

/**
 * Buyer Standard Identification Number (ASIN) of an item.
 * @member {String} amazonProductIdentifier
 */
Item.prototype.amazonProductIdentifier = undefined;

/**
 * The vendor selected product identification of the item. Should be the same as was sent in the purchase order.
 * @member {String} vendorProductIdentifier
 */
Item.prototype.vendorProductIdentifier = undefined;

/**
 * @member {module:vendorshipments_v1/model/ItemQuantity} shippedQuantity
 */
Item.prototype.shippedQuantity = undefined;

/**
 * @member {module:vendorshipments_v1/model/ItemDetails} itemDetails
 */
Item.prototype.itemDetails = undefined;


