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
import {InventoryItem} from './InventoryItem.js';

/**
 * The AddInventoryRequest model module.
 * @module fbainventory_v1/model/AddInventoryRequest
 * @version v1
 */
export class AddInventoryRequest {
  /**
   * Constructs a new <code>AddInventoryRequest</code>.
   * The object with the list of Inventory to be added
   * @alias module:fbainventory_v1/model/AddInventoryRequest
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>AddInventoryRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:fbainventory_v1/model/AddInventoryRequest} obj Optional instance to populate.
   * @return {module:fbainventory_v1/model/AddInventoryRequest} The populated <code>AddInventoryRequest</code> instance.
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
      obj = obj || new AddInventoryRequest();
      if (data.hasOwnProperty('inventoryItems'))
        obj.inventoryItems = ApiClient.convertToType(data['inventoryItems'], [InventoryItem]);
    }
    return obj;
  }
}

/**
 * List of Inventory to be added
 * @member {Array.<module:fbainventory_v1/model/InventoryItem>} inventoryItems
 */
AddInventoryRequest.prototype.inventoryItems = undefined;


