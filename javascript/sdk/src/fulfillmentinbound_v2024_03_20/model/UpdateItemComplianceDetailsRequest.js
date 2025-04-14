/**
 * The Selling Partner API for FBA inbound operations.
 * The Selling Partner API for Fulfillment By Amazon (FBA) Inbound. The FBA Inbound API enables building inbound workflows to create, manage, and send shipments into Amazon's fulfillment network. The API has interoperability with the Send-to-Amazon user interface.
 *
 * The version of the OpenAPI document: 2024-03-20
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import {ApiClient} from '../ApiClient.js';
import {TaxDetails} from './TaxDetails.js';

/**
 * The UpdateItemComplianceDetailsRequest model module.
 * @module fulfillmentinbound_v2024_03_20/model/UpdateItemComplianceDetailsRequest
 * @version 2024-03-20
 */
export class UpdateItemComplianceDetailsRequest {
  /**
   * Constructs a new <code>UpdateItemComplianceDetailsRequest</code>.
   * The &#x60;updateItemComplianceDetails&#x60; request.
   * @alias module:fulfillmentinbound_v2024_03_20/model/UpdateItemComplianceDetailsRequest
   * @class
   * @param msku {String} The merchant SKU, a merchant-supplied identifier for a specific SKU.
   * @param taxDetails {module:fulfillmentinbound_v2024_03_20/model/TaxDetails} 
   */
  constructor(msku, taxDetails) {
    this.msku = msku;
    this.taxDetails = taxDetails;
  }

  /**
   * Constructs a <code>UpdateItemComplianceDetailsRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:fulfillmentinbound_v2024_03_20/model/UpdateItemComplianceDetailsRequest} obj Optional instance to populate.
   * @return {module:fulfillmentinbound_v2024_03_20/model/UpdateItemComplianceDetailsRequest} The populated <code>UpdateItemComplianceDetailsRequest</code> instance.
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
      obj = obj || new UpdateItemComplianceDetailsRequest();
      if (data.hasOwnProperty('msku'))
        obj.msku = ApiClient.convertToType(data['msku'], 'String');
      if (data.hasOwnProperty('taxDetails'))
        obj.taxDetails = TaxDetails.constructFromObject(data['taxDetails']);
    }
    return obj;
  }
}

/**
 * The merchant SKU, a merchant-supplied identifier for a specific SKU.
 * @member {String} msku
 */
UpdateItemComplianceDetailsRequest.prototype.msku = undefined;

/**
 * @member {module:fulfillmentinbound_v2024_03_20/model/TaxDetails} taxDetails
 */
UpdateItemComplianceDetailsRequest.prototype.taxDetails = undefined;


