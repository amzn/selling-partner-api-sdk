/**
 * The Selling Partner API for Amazon Warehousing and Distribution
 * The Selling Partner API for Amazon Warehousing and Distribution (AWD) provides programmatic access to information about AWD shipments and inventory.
 *
 * The version of the OpenAPI document: 2024-05-09
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import {ApiClient} from '../ApiClient.js';
import {InventorySummary} from './InventorySummary.js';

/**
 * The InventoryListing model module.
 * @module awd_v2024_05_09/model/InventoryListing
 * @version 2024-05-09
 */
export class InventoryListing {
  /**
   * Constructs a new <code>InventoryListing</code>.
   * AWD inventory payload.
   * @alias module:awd_v2024_05_09/model/InventoryListing
   * @class
   * @param inventory {Array.<module:awd_v2024_05_09/model/InventorySummary>} List of inventory summaries.
   */
  constructor(inventory) {
    this.inventory = inventory;
  }

  /**
   * Constructs a <code>InventoryListing</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:awd_v2024_05_09/model/InventoryListing} obj Optional instance to populate.
   * @return {module:awd_v2024_05_09/model/InventoryListing} The populated <code>InventoryListing</code> instance.
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
      obj = obj || new InventoryListing();
      if (data.hasOwnProperty('inventory'))
        obj.inventory = ApiClient.convertToType(data['inventory'], [InventorySummary]);
      if (data.hasOwnProperty('nextToken'))
        obj.nextToken = ApiClient.convertToType(data['nextToken'], 'String');
    }
    return obj;
  }
}

/**
 * List of inventory summaries.
 * @member {Array.<module:awd_v2024_05_09/model/InventorySummary>} inventory
 */
InventoryListing.prototype.inventory = undefined;

/**
 * A token that is used to retrieve the next page of results. The response includes `nextToken` when the number of results exceeds the specified `maxResults` value. To get the next page of results, call the operation with this token and include the same arguments as the call that produced the token. To get a complete list, call this operation until `nextToken` is null. Note that this operation can return empty pages.
 * @member {String} nextToken
 */
InventoryListing.prototype.nextToken = undefined;


