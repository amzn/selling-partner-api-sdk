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
import {ItemQuantity} from './ItemQuantity.js';
import {Money} from './Money.js';

/**
 * The PurchaseOrderItems model module.
 * @module vendorshipments_v1/model/PurchaseOrderItems
 * @version v1
 */
export class PurchaseOrderItems {
  /**
   * Constructs a new <code>PurchaseOrderItems</code>.
   * Details of the item being shipped.
   * @alias module:vendorshipments_v1/model/PurchaseOrderItems
   * @class
   * @param itemSequenceNumber {String} Item sequence number for the item. The first item will be 001, the second 002, and so on. This number is used as a reference to refer to this item from the carton or pallet level.
   * @param shippedQuantity {module:vendorshipments_v1/model/ItemQuantity} 
   */
  constructor(itemSequenceNumber, shippedQuantity) {
    this.itemSequenceNumber = itemSequenceNumber;
    this.shippedQuantity = shippedQuantity;
  }

  /**
   * Constructs a <code>PurchaseOrderItems</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:vendorshipments_v1/model/PurchaseOrderItems} obj Optional instance to populate.
   * @return {module:vendorshipments_v1/model/PurchaseOrderItems} The populated <code>PurchaseOrderItems</code> instance.
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
      obj = obj || new PurchaseOrderItems();
      if (data.hasOwnProperty('itemSequenceNumber'))
        obj.itemSequenceNumber = ApiClient.convertToType(data['itemSequenceNumber'], 'String');
      if (data.hasOwnProperty('buyerProductIdentifier'))
        obj.buyerProductIdentifier = ApiClient.convertToType(data['buyerProductIdentifier'], 'String');
      if (data.hasOwnProperty('vendorProductIdentifier'))
        obj.vendorProductIdentifier = ApiClient.convertToType(data['vendorProductIdentifier'], 'String');
      if (data.hasOwnProperty('shippedQuantity'))
        obj.shippedQuantity = ItemQuantity.constructFromObject(data['shippedQuantity']);
      if (data.hasOwnProperty('maximumRetailPrice'))
        obj.maximumRetailPrice = Money.constructFromObject(data['maximumRetailPrice']);
    }
    return obj;
  }
}

/**
 * Item sequence number for the item. The first item will be 001, the second 002, and so on. This number is used as a reference to refer to this item from the carton or pallet level.
 * @member {String} itemSequenceNumber
 */
PurchaseOrderItems.prototype.itemSequenceNumber = undefined;

/**
 * Amazon Standard Identification Number (ASIN) for a SKU
 * @member {String} buyerProductIdentifier
 */
PurchaseOrderItems.prototype.buyerProductIdentifier = undefined;

/**
 * The vendor selected product identification of the item. Should be the same as was sent in the purchase order.
 * @member {String} vendorProductIdentifier
 */
PurchaseOrderItems.prototype.vendorProductIdentifier = undefined;

/**
 * @member {module:vendorshipments_v1/model/ItemQuantity} shippedQuantity
 */
PurchaseOrderItems.prototype.shippedQuantity = undefined;

/**
 * @member {module:vendorshipments_v1/model/Money} maximumRetailPrice
 */
PurchaseOrderItems.prototype.maximumRetailPrice = undefined;


