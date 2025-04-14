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

/**
 * The OperatingHour model module.
 * @module supplysources_v2020_07_01/model/OperatingHour
 * @version 2020-07-01
 */
export class OperatingHour {
  /**
   * Constructs a new <code>OperatingHour</code>.
   * The operating hour schema
   * @alias module:supplysources_v2020_07_01/model/OperatingHour
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>OperatingHour</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:supplysources_v2020_07_01/model/OperatingHour} obj Optional instance to populate.
   * @return {module:supplysources_v2020_07_01/model/OperatingHour} The populated <code>OperatingHour</code> instance.
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
      obj = obj || new OperatingHour();
      if (data.hasOwnProperty('startTime'))
        obj.startTime = ApiClient.convertToType(data['startTime'], 'String');
      if (data.hasOwnProperty('endTime'))
        obj.endTime = ApiClient.convertToType(data['endTime'], 'String');
    }
    return obj;
  }
}

/**
 * The opening time, ISO 8601 formatted timestamp without date, HH:mm.
 * @member {String} startTime
 */
OperatingHour.prototype.startTime = undefined;

/**
 * The closing time, ISO 8601 formatted timestamp without date, HH:mm.
 * @member {String} endTime
 */
OperatingHour.prototype.endTime = undefined;


