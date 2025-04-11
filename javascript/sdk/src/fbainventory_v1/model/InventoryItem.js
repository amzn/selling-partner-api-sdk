/**
 * Selling Partner API for FBA Inventory
 * The Selling Partner API for FBA Inventory lets you programmatically retrieve information about inventory in Amazon's fulfillment network.
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
 * The InventoryItem model module.
 * @module fbainventory_v1/model/InventoryItem
 * @version v1
 */
export class InventoryItem {
  /**
   * Constructs a new <code>InventoryItem</code>.
   * An item in the list of inventory to be added.
   * @alias module:fbainventory_v1/model/InventoryItem
   * @class
   * @param sellerSku {String} The seller SKU of the item.
   * @param marketplaceId {String} The marketplaceId.
   * @param quantity {Number} The quantity of item to add.
   */
  constructor(sellerSku, marketplaceId, quantity) {
    this.sellerSku = sellerSku;
    this.marketplaceId = marketplaceId;
    this.quantity = quantity;
  }

  /**
   * Constructs a <code>InventoryItem</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:fbainventory_v1/model/InventoryItem} obj Optional instance to populate.
   * @return {module:fbainventory_v1/model/InventoryItem} The populated <code>InventoryItem</code> instance.
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
      obj = obj || new InventoryItem();
      if (data.hasOwnProperty('sellerSku'))
        obj.sellerSku = ApiClient.convertToType(data['sellerSku'], 'String');
      if (data.hasOwnProperty('marketplaceId'))
        obj.marketplaceId = ApiClient.convertToType(data['marketplaceId'], 'String');
      if (data.hasOwnProperty('quantity'))
        obj.quantity = ApiClient.convertToType(data['quantity'], 'Number');
    }
    return obj;
  }
}

/**
 * The seller SKU of the item.
 * @member {String} sellerSku
 */
InventoryItem.prototype.sellerSku = undefined;

/**
 * The marketplaceId.
 * @member {String} marketplaceId
 */
InventoryItem.prototype.marketplaceId = undefined;

/**
 * The quantity of item to add.
 * @member {Number} quantity
 */
InventoryItem.prototype.quantity = undefined;


