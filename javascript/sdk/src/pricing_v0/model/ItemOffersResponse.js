/**
 * Selling Partner API for Pricing
 * The Selling Partner API for Pricing helps you programmatically retrieve product pricing and offer information for Amazon Marketplace products.
 *
 * The version of the OpenAPI document: v0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import {ApiClient} from '../ApiClient.js';
import {BatchOffersResponse} from './BatchOffersResponse.js';
import {GetOffersHttpStatusLine} from './GetOffersHttpStatusLine.js';
import {GetOffersResponse} from './GetOffersResponse.js';
import {HttpResponseHeaders} from './HttpResponseHeaders.js';
import {ItemOffersRequestParams} from './ItemOffersRequestParams.js';

/**
 * The ItemOffersResponse model module.
 * @module pricing_v0/model/ItemOffersResponse
 * @version v0
 */
export class ItemOffersResponse {
  /**
   * Constructs a new <code>ItemOffersResponse</code>.
   * Schema for an individual &#x60;ItemOffersResponse&#x60;
   * @alias module:pricing_v0/model/ItemOffersResponse
   * @class
   * @implements module:pricing_v0/model/BatchOffersResponse
   * @param body {module:pricing_v0/model/GetOffersResponse} 
   * @param request {module:pricing_v0/model/ItemOffersRequestParams} 
   */
  constructor(body, request) {
    BatchOffersResponse.call(this, body);
    this.body = body;
    this.request = request;
  }

  /**
   * Constructs a <code>ItemOffersResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:pricing_v0/model/ItemOffersResponse} obj Optional instance to populate.
   * @return {module:pricing_v0/model/ItemOffersResponse} The populated <code>ItemOffersResponse</code> instance.
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
      obj = obj || new ItemOffersResponse();
      BatchOffersResponse.constructFromObject(data, obj);
      if (data.hasOwnProperty('headers'))
        obj.headers = HttpResponseHeaders.constructFromObject(data['headers']);
      if (data.hasOwnProperty('status'))
        obj.status = GetOffersHttpStatusLine.constructFromObject(data['status']);
      if (data.hasOwnProperty('body'))
        obj.body = GetOffersResponse.constructFromObject(data['body']);
      if (data.hasOwnProperty('request'))
        obj.request = ItemOffersRequestParams.constructFromObject(data['request']);
    }
    return obj;
  }
}

/**
 * @member {module:pricing_v0/model/HttpResponseHeaders} headers
 */
ItemOffersResponse.prototype.headers = undefined;

/**
 * @member {module:pricing_v0/model/GetOffersHttpStatusLine} status
 */
ItemOffersResponse.prototype.status = undefined;

/**
 * @member {module:pricing_v0/model/GetOffersResponse} body
 */
ItemOffersResponse.prototype.body = undefined;

/**
 * @member {module:pricing_v0/model/ItemOffersRequestParams} request
 */
ItemOffersResponse.prototype.request = undefined;

// Implement BatchOffersResponse interface:
/**
 * @member {module:pricing_v0/model/HttpResponseHeaders} headers
 */
BatchOffersResponse.prototype.headers = undefined;

/**
 * @member {module:pricing_v0/model/GetOffersHttpStatusLine} status
 */
BatchOffersResponse.prototype.status = undefined;

/**
 * @member {module:pricing_v0/model/GetOffersResponse} body
 */
BatchOffersResponse.prototype.body = undefined;


