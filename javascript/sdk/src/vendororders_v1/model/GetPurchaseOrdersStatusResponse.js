/**
 * Selling Partner API for Retail Procurement Orders
 * The Selling Partner API for Retail Procurement Orders provides programmatic access to vendor orders data.
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
import {Error} from './Error.js';
import {OrderListStatus} from './OrderListStatus.js';

/**
 * The GetPurchaseOrdersStatusResponse model module.
 * @module vendororders_v1/model/GetPurchaseOrdersStatusResponse
 * @version v1
 */
export class GetPurchaseOrdersStatusResponse {
  /**
   * Constructs a new <code>GetPurchaseOrdersStatusResponse</code>.
   * The response schema for the getPurchaseOrdersStatus operation.
   * @alias module:vendororders_v1/model/GetPurchaseOrdersStatusResponse
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>GetPurchaseOrdersStatusResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:vendororders_v1/model/GetPurchaseOrdersStatusResponse} obj Optional instance to populate.
   * @return {module:vendororders_v1/model/GetPurchaseOrdersStatusResponse} The populated <code>GetPurchaseOrdersStatusResponse</code> instance.
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
      obj = obj || new GetPurchaseOrdersStatusResponse();
      if (data.hasOwnProperty('payload'))
        obj.payload = OrderListStatus.constructFromObject(data['payload']);
      if (data.hasOwnProperty('errors'))
        obj.errors = ApiClient.convertToType(data['errors'], [Error]);
    }
    return obj;
  }
}

/**
 * @member {module:vendororders_v1/model/OrderListStatus} payload
 */
GetPurchaseOrdersStatusResponse.prototype.payload = undefined;

/**
 * A list of error responses returned when a request is unsuccessful.
 * @member {Array.<module:vendororders_v1/model/Error>} errors
 */
GetPurchaseOrdersStatusResponse.prototype.errors = undefined;


