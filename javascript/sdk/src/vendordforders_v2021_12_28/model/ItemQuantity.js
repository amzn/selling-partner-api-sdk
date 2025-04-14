/**
 * Selling Partner API for Direct Fulfillment Orders
 * The Selling Partner API for Direct Fulfillment Orders provides programmatic access to a direct fulfillment vendor's order data.
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

/**
 * The ItemQuantity model module.
 * @module vendordforders_v2021_12_28/model/ItemQuantity
 * @version 2021-12-28
 */
export class ItemQuantity {
  /**
   * Constructs a new <code>ItemQuantity</code>.
   * Details of quantity ordered.
   * @alias module:vendordforders_v2021_12_28/model/ItemQuantity
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>ItemQuantity</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:vendordforders_v2021_12_28/model/ItemQuantity} obj Optional instance to populate.
   * @return {module:vendordforders_v2021_12_28/model/ItemQuantity} The populated <code>ItemQuantity</code> instance.
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
      obj = obj || new ItemQuantity();
      if (data.hasOwnProperty('amount'))
        obj.amount = ApiClient.convertToType(data['amount'], 'Number');
      if (data.hasOwnProperty('unitOfMeasure'))
        obj.unitOfMeasure = ApiClient.convertToType(data['unitOfMeasure'], 'String');
    }
    return obj;
  }
}

/**
 * Acknowledged quantity. This value should not be zero.
 * @member {Number} amount
 */
ItemQuantity.prototype.amount = undefined;

/**
 * Allowed values for the <code>unitOfMeasure</code> property.
 * @enum {String}
 * @readonly
 */
ItemQuantity['UnitOfMeasureEnum'] = {

    /**
     * value: "Each"
     * @const
     */
    "Each": "Each"
};

/**
 * Unit of measure for the acknowledged quantity.
 * @member {module:vendordforders_v2021_12_28/model/ItemQuantity.UnitOfMeasureEnum} unitOfMeasure
 */
ItemQuantity.prototype.unitOfMeasure = undefined;


