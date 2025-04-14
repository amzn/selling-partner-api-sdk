/**
 * Selling Partner API for Retail Procurement Payments
 * The Selling Partner API for Retail Procurement Payments provides programmatic access to vendors payments data.
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
import {TotalWeight} from './TotalWeight.js';

/**
 * The ItemQuantity model module.
 * @module vendorinvoices_v1/model/ItemQuantity
 * @version v1
 */
export class ItemQuantity {
  /**
   * Constructs a new <code>ItemQuantity</code>.
   * Details of quantity.
   * @alias module:vendorinvoices_v1/model/ItemQuantity
   * @class
   * @param amount {Number} Quantity of an item. This value should not be zero.
   * @param unitOfMeasure {module:vendorinvoices_v1/model/ItemQuantity.UnitOfMeasureEnum} Unit of measure for the quantity.
   */
  constructor(amount, unitOfMeasure) {
    this.amount = amount;
    this.unitOfMeasure = unitOfMeasure;
  }

  /**
   * Constructs a <code>ItemQuantity</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:vendorinvoices_v1/model/ItemQuantity} obj Optional instance to populate.
   * @return {module:vendorinvoices_v1/model/ItemQuantity} The populated <code>ItemQuantity</code> instance.
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
      if (data.hasOwnProperty('unitSize'))
        obj.unitSize = ApiClient.convertToType(data['unitSize'], 'Number');
      if (data.hasOwnProperty('totalWeight'))
        obj.totalWeight = TotalWeight.constructFromObject(data['totalWeight']);
    }
    return obj;
  }
}

/**
 * Quantity of an item. This value should not be zero.
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
     * value: "Cases"
     * @const
     */
    "Cases": "Cases",

    /**
     * value: "Eaches"
     * @const
     */
    "Eaches": "Eaches"
};

/**
 * Unit of measure for the quantity.
 * @member {module:vendorinvoices_v1/model/ItemQuantity.UnitOfMeasureEnum} unitOfMeasure
 */
ItemQuantity.prototype.unitOfMeasure = undefined;

/**
 * The case size, if the unit of measure value is Cases.
 * @member {Number} unitSize
 */
ItemQuantity.prototype.unitSize = undefined;

/**
 * @member {module:vendorinvoices_v1/model/TotalWeight} totalWeight
 */
ItemQuantity.prototype.totalWeight = undefined;


