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
import {OrderItemStatus} from './OrderItemStatus.js';
import {PartyIdentification} from './PartyIdentification.js';

/**
 * The OrderStatus model module.
 * @module vendororders_v1/model/OrderStatus
 * @version v1
 */
export class OrderStatus {
  /**
   * Constructs a new <code>OrderStatus</code>.
   * Current status of a purchase order.
   * @alias module:vendororders_v1/model/OrderStatus
   * @class
   * @param purchaseOrderNumber {String} The buyer's purchase order number for this order. Formatting Notes: 8-character alpha-numeric code.
   * @param purchaseOrderStatus {module:vendororders_v1/model/OrderStatus.PurchaseOrderStatusEnum} The status of the buyer's purchase order for this order.
   * @param purchaseOrderDate {Date} The date the purchase order was placed. Must be in ISO-8601 date/time format.
   * @param sellingParty {module:vendororders_v1/model/PartyIdentification} 
   * @param shipToParty {module:vendororders_v1/model/PartyIdentification} 
   * @param itemStatus {Array.<module:vendororders_v1/model/OrderItemStatus>} Detailed description of items order status.
   */
  constructor(purchaseOrderNumber, purchaseOrderStatus, purchaseOrderDate, sellingParty, shipToParty, itemStatus) {
    this.purchaseOrderNumber = purchaseOrderNumber;
    this.purchaseOrderStatus = purchaseOrderStatus;
    this.purchaseOrderDate = purchaseOrderDate;
    this.sellingParty = sellingParty;
    this.shipToParty = shipToParty;
    this.itemStatus = itemStatus;
  }

  /**
   * Constructs a <code>OrderStatus</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:vendororders_v1/model/OrderStatus} obj Optional instance to populate.
   * @return {module:vendororders_v1/model/OrderStatus} The populated <code>OrderStatus</code> instance.
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
      obj = obj || new OrderStatus();
      if (data.hasOwnProperty('purchaseOrderNumber'))
        obj.purchaseOrderNumber = ApiClient.convertToType(data['purchaseOrderNumber'], 'String');
      if (data.hasOwnProperty('purchaseOrderStatus'))
        obj.purchaseOrderStatus = ApiClient.convertToType(data['purchaseOrderStatus'], 'String');
      if (data.hasOwnProperty('purchaseOrderDate'))
        obj.purchaseOrderDate = ApiClient.convertToType(data['purchaseOrderDate'], 'Date');
      if (data.hasOwnProperty('lastUpdatedDate'))
        obj.lastUpdatedDate = ApiClient.convertToType(data['lastUpdatedDate'], 'Date');
      if (data.hasOwnProperty('sellingParty'))
        obj.sellingParty = PartyIdentification.constructFromObject(data['sellingParty']);
      if (data.hasOwnProperty('shipToParty'))
        obj.shipToParty = PartyIdentification.constructFromObject(data['shipToParty']);
      if (data.hasOwnProperty('itemStatus'))
        obj.itemStatus = ApiClient.convertToType(data['itemStatus'], [OrderItemStatus]);
    }
    return obj;
  }
}

/**
 * The buyer's purchase order number for this order. Formatting Notes: 8-character alpha-numeric code.
 * @member {String} purchaseOrderNumber
 */
OrderStatus.prototype.purchaseOrderNumber = undefined;

/**
 * Allowed values for the <code>purchaseOrderStatus</code> property.
 * @enum {String}
 * @readonly
 */
OrderStatus['PurchaseOrderStatusEnum'] = {

    /**
     * value: "OPEN"
     * @const
     */
    "OPEN": "OPEN",

    /**
     * value: "CLOSED"
     * @const
     */
    "CLOSED": "CLOSED"
};

/**
 * The status of the buyer's purchase order for this order.
 * @member {module:vendororders_v1/model/OrderStatus.PurchaseOrderStatusEnum} purchaseOrderStatus
 */
OrderStatus.prototype.purchaseOrderStatus = undefined;

/**
 * The date the purchase order was placed. Must be in ISO-8601 date/time format.
 * @member {Date} purchaseOrderDate
 */
OrderStatus.prototype.purchaseOrderDate = undefined;

/**
 * The date when the purchase order was last updated. Must be in ISO-8601 date/time format.
 * @member {Date} lastUpdatedDate
 */
OrderStatus.prototype.lastUpdatedDate = undefined;

/**
 * @member {module:vendororders_v1/model/PartyIdentification} sellingParty
 */
OrderStatus.prototype.sellingParty = undefined;

/**
 * @member {module:vendororders_v1/model/PartyIdentification} shipToParty
 */
OrderStatus.prototype.shipToParty = undefined;

/**
 * Detailed description of items order status.
 * @member {Array.<module:vendororders_v1/model/OrderItemStatus>} itemStatus
 */
OrderStatus.prototype.itemStatus = undefined;


