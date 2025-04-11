/**
 * Selling Partner API for Supply Sources
 * Manage configurations and capabilities of seller supply sources.
 *
 * The version of the OpenAPI document: 2020-07-01
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import {ApiClient} from '../ApiClient.js';
import {Address} from './Address.js';

/**
 * The SupplySourceListInner model module.
 * @module supplysources_v2020_07_01/model/SupplySourceListInner
 * @version 2020-07-01
 */
export class SupplySourceListInner {
  /**
   * Constructs a new <code>SupplySourceListInner</code>.
   * @alias module:supplysources_v2020_07_01/model/SupplySourceListInner
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>SupplySourceListInner</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:supplysources_v2020_07_01/model/SupplySourceListInner} obj Optional instance to populate.
   * @return {module:supplysources_v2020_07_01/model/SupplySourceListInner} The populated <code>SupplySourceListInner</code> instance.
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
      obj = obj || new SupplySourceListInner();
      if (data.hasOwnProperty('alias'))
        obj.alias = ApiClient.convertToType(data['alias'], 'String');
      if (data.hasOwnProperty('supplySourceId'))
        obj.supplySourceId = ApiClient.convertToType(data['supplySourceId'], 'String');
      if (data.hasOwnProperty('supplySourceCode'))
        obj.supplySourceCode = ApiClient.convertToType(data['supplySourceCode'], 'String');
      if (data.hasOwnProperty('address'))
        obj.address = Address.constructFromObject(data['address']);
    }
    return obj;
  }
}

/**
 * The custom alias for this supply source
 * @member {String} alias
 */
SupplySourceListInner.prototype.alias = undefined;

/**
 * An Amazon generated unique supply source ID.
 * @member {String} supplySourceId
 */
SupplySourceListInner.prototype.supplySourceId = undefined;

/**
 * The seller-provided unique supply source code.
 * @member {String} supplySourceCode
 */
SupplySourceListInner.prototype.supplySourceCode = undefined;

/**
 * @member {module:supplysources_v2020_07_01/model/Address} address
 */
SupplySourceListInner.prototype.address = undefined;


