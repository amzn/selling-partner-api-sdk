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
import {ListingOffersRequest} from './ListingOffersRequest.js';

/**
 * The GetListingOffersBatchRequest model module.
 * @module pricing_v0/model/GetListingOffersBatchRequest
 * @version v0
 */
export class GetListingOffersBatchRequest {
  /**
   * Constructs a new <code>GetListingOffersBatchRequest</code>.
   * The request associated with the &#x60;getListingOffersBatch&#x60; API call.
   * @alias module:pricing_v0/model/GetListingOffersBatchRequest
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>GetListingOffersBatchRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:pricing_v0/model/GetListingOffersBatchRequest} obj Optional instance to populate.
   * @return {module:pricing_v0/model/GetListingOffersBatchRequest} The populated <code>GetListingOffersBatchRequest</code> instance.
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
      obj = obj || new GetListingOffersBatchRequest();
      if (data.hasOwnProperty('requests'))
        obj.requests = ApiClient.convertToType(data['requests'], [ListingOffersRequest]);
    }
    return obj;
  }
}

/**
 * A list of `getListingOffers` batched requests to run.
 * @member {Array.<module:pricing_v0/model/ListingOffersRequest>} requests
 */
GetListingOffersBatchRequest.prototype.requests = undefined;


