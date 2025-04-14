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
import {SupplySourceCapabilities} from './SupplySourceCapabilities.js';
import {SupplySourceConfiguration} from './SupplySourceConfiguration.js';

/**
 * The UpdateSupplySourceRequest model module.
 * @module supplysources_v2020_07_01/model/UpdateSupplySourceRequest
 * @version 2020-07-01
 */
export class UpdateSupplySourceRequest {
  /**
   * Constructs a new <code>UpdateSupplySourceRequest</code>.
   * A request to update the configuration and capabilities of a supply source.
   * @alias module:supplysources_v2020_07_01/model/UpdateSupplySourceRequest
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>UpdateSupplySourceRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:supplysources_v2020_07_01/model/UpdateSupplySourceRequest} obj Optional instance to populate.
   * @return {module:supplysources_v2020_07_01/model/UpdateSupplySourceRequest} The populated <code>UpdateSupplySourceRequest</code> instance.
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
      obj = obj || new UpdateSupplySourceRequest();
      if (data.hasOwnProperty('alias'))
        obj.alias = ApiClient.convertToType(data['alias'], 'String');
      if (data.hasOwnProperty('configuration'))
        obj.configuration = SupplySourceConfiguration.constructFromObject(data['configuration']);
      if (data.hasOwnProperty('capabilities'))
        obj.capabilities = SupplySourceCapabilities.constructFromObject(data['capabilities']);
    }
    return obj;
  }
}

/**
 * The custom alias for this supply source
 * @member {String} alias
 */
UpdateSupplySourceRequest.prototype.alias = undefined;

/**
 * @member {module:supplysources_v2020_07_01/model/SupplySourceConfiguration} configuration
 */
UpdateSupplySourceRequest.prototype.configuration = undefined;

/**
 * @member {module:supplysources_v2020_07_01/model/SupplySourceCapabilities} capabilities
 */
UpdateSupplySourceRequest.prototype.capabilities = undefined;


