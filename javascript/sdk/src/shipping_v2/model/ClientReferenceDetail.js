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
 * The ClientReferenceDetail model module.
 * @module shipping_v2/model/ClientReferenceDetail
 * @version v2
 */
export class ClientReferenceDetail {
  /**
   * Constructs a new <code>ClientReferenceDetail</code>.
   * Client Reference Details
   * @alias module:shipping_v2/model/ClientReferenceDetail
   * @class
   * @param clientReferenceType {module:shipping_v2/model/ClientReferenceDetail.ClientReferenceTypeEnum} Client Reference type.
   * @param clientReferenceId {String} The Client Reference Id.
   */
  constructor(clientReferenceType, clientReferenceId) {
    this.clientReferenceType = clientReferenceType;
    this.clientReferenceId = clientReferenceId;
  }

  /**
   * Constructs a <code>ClientReferenceDetail</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:shipping_v2/model/ClientReferenceDetail} obj Optional instance to populate.
   * @return {module:shipping_v2/model/ClientReferenceDetail} The populated <code>ClientReferenceDetail</code> instance.
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
      obj = obj || new ClientReferenceDetail();
      if (data.hasOwnProperty('clientReferenceType'))
        obj.clientReferenceType = ApiClient.convertToType(data['clientReferenceType'], 'String');
      if (data.hasOwnProperty('clientReferenceId'))
        obj.clientReferenceId = ApiClient.convertToType(data['clientReferenceId'], 'String');
    }
    return obj;
  }
}

/**
 * Allowed values for the <code>clientReferenceType</code> property.
 * @enum {String}
 * @readonly
 */
ClientReferenceDetail['ClientReferenceTypeEnum'] = {

    /**
     * value: "IntegratorShipperId"
     * @const
     */
    "IntegratorShipperId": "IntegratorShipperId",

    /**
     * value: "IntegratorMerchantId"
     * @const
     */
    "IntegratorMerchantId": "IntegratorMerchantId"
};

/**
 * Client Reference type.
 * @member {module:shipping_v2/model/ClientReferenceDetail.ClientReferenceTypeEnum} clientReferenceType
 */
ClientReferenceDetail.prototype.clientReferenceType = undefined;

/**
 * The Client Reference Id.
 * @member {String} clientReferenceId
 */
ClientReferenceDetail.prototype.clientReferenceId = undefined;


