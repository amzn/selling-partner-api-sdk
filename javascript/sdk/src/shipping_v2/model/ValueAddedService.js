/**
 * Amazon Shipping API
 * The Amazon Shipping API is designed to support outbound shipping use cases both for orders originating on Amazon-owned marketplaces as well as external channels/marketplaces. With these APIs, you can request shipping rates, create shipments, cancel shipments, and track shipments.
 *
 * The version of the OpenAPI document: v2
 * Contact: swa-api-core@amazon.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import {ApiClient} from '../ApiClient.js';
import {Currency} from './Currency.js';

/**
 * The ValueAddedService model module.
 * @module shipping_v2/model/ValueAddedService
 * @version v2
 */
export class ValueAddedService {
  /**
   * Constructs a new <code>ValueAddedService</code>.
   * A value-added service available for purchase with a shipment service offering.
   * @alias module:shipping_v2/model/ValueAddedService
   * @class
   * @param id {String} The identifier for the value-added service.
   * @param name {String} The name of the value-added service.
   * @param cost {module:shipping_v2/model/Currency} 
   */
  constructor(id, name, cost) {
    this.id = id;
    this.name = name;
    this.cost = cost;
  }

  /**
   * Constructs a <code>ValueAddedService</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:shipping_v2/model/ValueAddedService} obj Optional instance to populate.
   * @return {module:shipping_v2/model/ValueAddedService} The populated <code>ValueAddedService</code> instance.
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
      obj = obj || new ValueAddedService();
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], 'String');
      if (data.hasOwnProperty('name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
      if (data.hasOwnProperty('cost'))
        obj.cost = Currency.constructFromObject(data['cost']);
    }
    return obj;
  }
}

/**
 * The identifier for the value-added service.
 * @member {String} id
 */
ValueAddedService.prototype.id = undefined;

/**
 * The name of the value-added service.
 * @member {String} name
 */
ValueAddedService.prototype.name = undefined;

/**
 * @member {module:shipping_v2/model/Currency} cost
 */
ValueAddedService.prototype.cost = undefined;


