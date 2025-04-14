/**
 * Selling Partner API for Services
 * With the Services API, you can build applications that help service providers get and modify their service orders and manage their resources.
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

/**
 * The Buyer model module.
 * @module services_v1/model/Buyer
 * @version v1
 */
export class Buyer {
  /**
   * Constructs a new <code>Buyer</code>.
   * Information about the buyer.
   * @alias module:services_v1/model/Buyer
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>Buyer</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:services_v1/model/Buyer} obj Optional instance to populate.
   * @return {module:services_v1/model/Buyer} The populated <code>Buyer</code> instance.
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
      obj = obj || new Buyer();
      if (data.hasOwnProperty('buyerId'))
        obj.buyerId = ApiClient.convertToType(data['buyerId'], 'String');
      if (data.hasOwnProperty('name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
      if (data.hasOwnProperty('phone'))
        obj.phone = ApiClient.convertToType(data['phone'], 'String');
      if (data.hasOwnProperty('isPrimeMember'))
        obj.isPrimeMember = ApiClient.convertToType(data['isPrimeMember'], 'Boolean');
    }
    return obj;
  }
}

/**
 * The identifier of the buyer.
 * @member {String} buyerId
 */
Buyer.prototype.buyerId = undefined;

/**
 * The name of the buyer.
 * @member {String} name
 */
Buyer.prototype.name = undefined;

/**
 * The phone number of the buyer.
 * @member {String} phone
 */
Buyer.prototype.phone = undefined;

/**
 * When true, the service is for an Amazon Prime buyer.
 * @member {Boolean} isPrimeMember
 */
Buyer.prototype.isPrimeMember = undefined;


