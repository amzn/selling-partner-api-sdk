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
import {Address} from './Address.js';

/**
 * The UnmanifestedShipmentLocation model module.
 * @module shipping_v2/model/UnmanifestedShipmentLocation
 * @version v2
 */
export class UnmanifestedShipmentLocation {
  /**
   * Constructs a new <code>UnmanifestedShipmentLocation</code>.
   * UnmanifestedShipmentLocation info 
   * @alias module:shipping_v2/model/UnmanifestedShipmentLocation
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>UnmanifestedShipmentLocation</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:shipping_v2/model/UnmanifestedShipmentLocation} obj Optional instance to populate.
   * @return {module:shipping_v2/model/UnmanifestedShipmentLocation} The populated <code>UnmanifestedShipmentLocation</code> instance.
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
      obj = obj || new UnmanifestedShipmentLocation();
      if (data.hasOwnProperty('address'))
        obj.address = Address.constructFromObject(data['address']);
      if (data.hasOwnProperty('lastManifestDate'))
        obj.lastManifestDate = ApiClient.convertToType(data['lastManifestDate'], 'String');
    }
    return obj;
  }
}

/**
 * @member {module:shipping_v2/model/Address} address
 */
UnmanifestedShipmentLocation.prototype.address = undefined;

/**
 * Its Last Manifest Date.
 * @member {String} lastManifestDate
 */
UnmanifestedShipmentLocation.prototype.lastManifestDate = undefined;


