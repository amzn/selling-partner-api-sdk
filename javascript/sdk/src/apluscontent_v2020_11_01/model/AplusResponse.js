/**
 * Selling Partner API for A+ Content Management
 * Use the A+ Content API to build applications that help selling partners add rich marketing content to their Amazon product detail pages. Selling partners can use A+ content to share their brand and product story, which helps buyers make informed purchasing decisions. Selling partners use content modules to add images and text.
 *
 * The version of the OpenAPI document: 2020-11-01
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import {ApiClient} from '../ApiClient.js';
import {Error} from './Error.js';

/**
 * The AplusResponse model module.
 * @module apluscontent_v2020_11_01/model/AplusResponse
 * @version 2020-11-01
 */
export class AplusResponse {
  /**
   * Constructs a new <code>AplusResponse</code>.
   * The base response data for all A+ Content operations when a request is successful or partially successful. Individual operations can extend this with additional data.
   * @alias module:apluscontent_v2020_11_01/model/AplusResponse
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>AplusResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:apluscontent_v2020_11_01/model/AplusResponse} obj Optional instance to populate.
   * @return {module:apluscontent_v2020_11_01/model/AplusResponse} The populated <code>AplusResponse</code> instance.
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
      obj = obj || new AplusResponse();
      if (data.hasOwnProperty('warnings'))
        obj.warnings = ApiClient.convertToType(data['warnings'], [Error]);
    }
    return obj;
  }
}

/**
 * A set of messages to the user, such as warnings or comments.
 * @member {Array.<module:apluscontent_v2020_11_01/model/Error>} warnings
 */
AplusResponse.prototype.warnings = undefined;


