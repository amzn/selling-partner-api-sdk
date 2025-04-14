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

/**
 * The CreateClaimResponse model module.
 * @module shipping_v2/model/CreateClaimResponse
 * @version v2
 */
export class CreateClaimResponse {
  /**
   * Constructs a new <code>CreateClaimResponse</code>.
   * The response schema for the createClaim operation.
   * @alias module:shipping_v2/model/CreateClaimResponse
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>CreateClaimResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:shipping_v2/model/CreateClaimResponse} obj Optional instance to populate.
   * @return {module:shipping_v2/model/CreateClaimResponse} The populated <code>CreateClaimResponse</code> instance.
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
      obj = obj || new CreateClaimResponse();
      if (data.hasOwnProperty('claimId'))
        obj.claimId = ApiClient.convertToType(data['claimId'], 'String');
    }
    return obj;
  }
}

/**
 * The claim identifier originally returned by the createClaim operation.
 * @member {String} claimId
 */
CreateClaimResponse.prototype.claimId = undefined;


