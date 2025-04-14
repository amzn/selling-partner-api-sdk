/**
 * Selling Partner API for Data Kiosk
 * The Selling Partner API for Data Kiosk lets you submit GraphQL queries from a variety of schemas to help selling partners manage their businesses.
 *
 * The version of the OpenAPI document: 2023-11-15
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import {ApiClient} from '../ApiClient.js';

/**
 * The GetQueriesResponsePagination model module.
 * @module datakiosk_v2023_11_15/model/GetQueriesResponsePagination
 * @version 2023-11-15
 */
export class GetQueriesResponsePagination {
  /**
   * Constructs a new <code>GetQueriesResponsePagination</code>.
   * When a request has results that are not included in this response, pagination occurs. This means the results are divided into pages. To retrieve the next page, you must pass the &#x60;nextToken&#x60; as the &#x60;paginationToken&#x60; query parameter in the subsequent &#x60;getQueries&#x60; request. All other parameters must be provided with the same values that were provided with the request that generated this token, with the exception of &#x60;pageSize&#x60; which can be modified between calls to &#x60;getQueries&#x60;. When there are no more pages to fetch, the &#x60;nextToken&#x60; field will be absent.
   * @alias module:datakiosk_v2023_11_15/model/GetQueriesResponsePagination
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>GetQueriesResponsePagination</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:datakiosk_v2023_11_15/model/GetQueriesResponsePagination} obj Optional instance to populate.
   * @return {module:datakiosk_v2023_11_15/model/GetQueriesResponsePagination} The populated <code>GetQueriesResponsePagination</code> instance.
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
      obj = obj || new GetQueriesResponsePagination();
      if (data.hasOwnProperty('nextToken'))
        obj.nextToken = ApiClient.convertToType(data['nextToken'], 'String');
    }
    return obj;
  }
}

/**
 * A token that can be used to fetch the next page of results.
 * @member {String} nextToken
 */
GetQueriesResponsePagination.prototype.nextToken = undefined;


