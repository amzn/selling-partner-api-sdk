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
import {SupplySourceCapabilities} from './SupplySourceCapabilities.js';
import {SupplySourceConfiguration} from './SupplySourceConfiguration.js';
import {SupplySourceStatusReadOnly} from './SupplySourceStatusReadOnly.js';

/**
 * The SupplySource model module.
 * @module supplysources_v2020_07_01/model/SupplySource
 * @version 2020-07-01
 */
export class SupplySource {
  /**
   * Constructs a new <code>SupplySource</code>.
   * The supply source details, including configurations and capabilities.
   * @alias module:supplysources_v2020_07_01/model/SupplySource
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>SupplySource</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:supplysources_v2020_07_01/model/SupplySource} obj Optional instance to populate.
   * @return {module:supplysources_v2020_07_01/model/SupplySource} The populated <code>SupplySource</code> instance.
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
      obj = obj || new SupplySource();
      if (data.hasOwnProperty('supplySourceId'))
        obj.supplySourceId = ApiClient.convertToType(data['supplySourceId'], 'String');
      if (data.hasOwnProperty('supplySourceCode'))
        obj.supplySourceCode = ApiClient.convertToType(data['supplySourceCode'], 'String');
      if (data.hasOwnProperty('alias'))
        obj.alias = ApiClient.convertToType(data['alias'], 'String');
      if (data.hasOwnProperty('status'))
        obj.status = SupplySourceStatusReadOnly.constructFromObject(data['status']);
      if (data.hasOwnProperty('address'))
        obj.address = Address.constructFromObject(data['address']);
      if (data.hasOwnProperty('configuration'))
        obj.configuration = SupplySourceConfiguration.constructFromObject(data['configuration']);
      if (data.hasOwnProperty('capabilities'))
        obj.capabilities = SupplySourceCapabilities.constructFromObject(data['capabilities']);
      if (data.hasOwnProperty('createdAt'))
        obj.createdAt = ApiClient.convertToType(data['createdAt'], 'String');
      if (data.hasOwnProperty('updatedAt'))
        obj.updatedAt = ApiClient.convertToType(data['updatedAt'], 'String');
    }
    return obj;
  }
}

/**
 * An Amazon generated unique supply source ID.
 * @member {String} supplySourceId
 */
SupplySource.prototype.supplySourceId = undefined;

/**
 * The seller-provided unique supply source code.
 * @member {String} supplySourceCode
 */
SupplySource.prototype.supplySourceCode = undefined;

/**
 * The custom alias for this supply source
 * @member {String} alias
 */
SupplySource.prototype.alias = undefined;

/**
 * @member {module:supplysources_v2020_07_01/model/SupplySourceStatusReadOnly} status
 */
SupplySource.prototype.status = undefined;

/**
 * @member {module:supplysources_v2020_07_01/model/Address} address
 */
SupplySource.prototype.address = undefined;

/**
 * @member {module:supplysources_v2020_07_01/model/SupplySourceConfiguration} configuration
 */
SupplySource.prototype.configuration = undefined;

/**
 * @member {module:supplysources_v2020_07_01/model/SupplySourceCapabilities} capabilities
 */
SupplySource.prototype.capabilities = undefined;

/**
 * A date and time in the rfc3339 format.
 * @member {String} createdAt
 */
SupplySource.prototype.createdAt = undefined;

/**
 * A date and time in the rfc3339 format.
 * @member {String} updatedAt
 */
SupplySource.prototype.updatedAt = undefined;


