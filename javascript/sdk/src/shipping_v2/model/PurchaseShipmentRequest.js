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
import {RequestedDocumentSpecification} from './RequestedDocumentSpecification.js';
import {RequestedValueAddedService} from './RequestedValueAddedService.js';

/**
 * The PurchaseShipmentRequest model module.
 * @module shipping_v2/model/PurchaseShipmentRequest
 * @version v2
 */
export class PurchaseShipmentRequest {
  /**
   * Constructs a new <code>PurchaseShipmentRequest</code>.
   * The request schema for the purchaseShipment operation.
   * @alias module:shipping_v2/model/PurchaseShipmentRequest
   * @class
   * @param requestToken {String} A unique token generated to identify a getRates operation.
   * @param rateId {String} An identifier for the rate (shipment offering) provided by a shipping service provider.
   * @param requestedDocumentSpecification {module:shipping_v2/model/RequestedDocumentSpecification} 
   */
  constructor(requestToken, rateId, requestedDocumentSpecification) {
    this.requestToken = requestToken;
    this.rateId = rateId;
    this.requestedDocumentSpecification = requestedDocumentSpecification;
  }

  /**
   * Constructs a <code>PurchaseShipmentRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:shipping_v2/model/PurchaseShipmentRequest} obj Optional instance to populate.
   * @return {module:shipping_v2/model/PurchaseShipmentRequest} The populated <code>PurchaseShipmentRequest</code> instance.
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
      obj = obj || new PurchaseShipmentRequest();
      if (data.hasOwnProperty('requestToken'))
        obj.requestToken = ApiClient.convertToType(data['requestToken'], 'String');
      if (data.hasOwnProperty('rateId'))
        obj.rateId = ApiClient.convertToType(data['rateId'], 'String');
      if (data.hasOwnProperty('requestedDocumentSpecification'))
        obj.requestedDocumentSpecification = RequestedDocumentSpecification.constructFromObject(data['requestedDocumentSpecification']);
      if (data.hasOwnProperty('requestedValueAddedServices'))
        obj.requestedValueAddedServices = ApiClient.convertToType(data['requestedValueAddedServices'], [RequestedValueAddedService]);
      if (data.hasOwnProperty('additionalInputs'))
        obj.additionalInputs = ApiClient.convertToType(data['additionalInputs'], {'String': Object});
    }
    return obj;
  }
}

/**
 * A unique token generated to identify a getRates operation.
 * @member {String} requestToken
 */
PurchaseShipmentRequest.prototype.requestToken = undefined;

/**
 * An identifier for the rate (shipment offering) provided by a shipping service provider.
 * @member {String} rateId
 */
PurchaseShipmentRequest.prototype.rateId = undefined;

/**
 * @member {module:shipping_v2/model/RequestedDocumentSpecification} requestedDocumentSpecification
 */
PurchaseShipmentRequest.prototype.requestedDocumentSpecification = undefined;

/**
 * The value-added services to be added to a shipping service purchase.
 * @member {Array.<module:shipping_v2/model/RequestedValueAddedService>} requestedValueAddedServices
 */
PurchaseShipmentRequest.prototype.requestedValueAddedServices = undefined;

/**
 * The additional inputs required to purchase a shipping offering, in JSON format. The JSON provided here must adhere to the JSON schema that is returned in the response to the getAdditionalInputs operation.  Additional inputs are only required when indicated by the requiresAdditionalInputs property in the response to the getRates operation.
 * @member {Object.<String, Object>} additionalInputs
 */
PurchaseShipmentRequest.prototype.additionalInputs = undefined;


