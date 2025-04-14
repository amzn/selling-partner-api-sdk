/**
 * The Selling Partner API for Automotive.
 * The Selling Partner API for Automotive provides programmatic access to information needed by selling partners to provide compatibility information about their listed products.
 *
 * The version of the OpenAPI document: 2024-11-01
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import {ApiClient} from '../ApiClient.js';

/**
 * The Pagination model module.
 * @module vehicles_v2024_11_01/model/Pagination
 * @version 2024-11-01
 */
export class Pagination {
  /**
   * Constructs a new <code>Pagination</code>.
   * When a request produces a response that exceeds the &#x60;pageSize&#x60;, pagination occurs. This means the response is divided into individual pages. To retrieve the next page or the previous page, you must pass the &#x60;nextToken&#x60; value or the &#x60;previousToken&#x60; value as the &#x60;pageToken&#x60; parameter in the next request. When you receive the last page, there will be no &#x60;nextToken&#x60; key in the pagination object.
   * @alias module:vehicles_v2024_11_01/model/Pagination
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>Pagination</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:vehicles_v2024_11_01/model/Pagination} obj Optional instance to populate.
   * @return {module:vehicles_v2024_11_01/model/Pagination} The populated <code>Pagination</code> instance.
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
      obj = obj || new Pagination();
      if (data.hasOwnProperty('nextToken'))
        obj.nextToken = ApiClient.convertToType(data['nextToken'], 'String');
      if (data.hasOwnProperty('previousToken'))
        obj.previousToken = ApiClient.convertToType(data['previousToken'], 'String');
    }
    return obj;
  }
}

/**
 * A token that can be used to fetch the next page.
 * @member {String} nextToken
 */
Pagination.prototype.nextToken = undefined;

/**
 * A token that can be used to fetch the previous page.
 * @member {String} previousToken
 */
Pagination.prototype.previousToken = undefined;


