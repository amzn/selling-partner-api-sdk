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

/**
 * The PackingOptionSummary model module.
 * @module fulfillmentinbound_v2024_03_20/model/PackingOptionSummary
 * @version 2024-03-20
 */
export class PackingOptionSummary {
  /**
   * Constructs a new <code>PackingOptionSummary</code>.
   * Summary information about a packing option.
   * @alias module:fulfillmentinbound_v2024_03_20/model/PackingOptionSummary
   * @class
   * @param packingOptionId {String} Identifier of a packing option.
   * @param status {String} The status of a packing option. Possible values: 'OFFERED', 'ACCEPTED', 'EXPIRED'.
   */
  constructor(packingOptionId, status) {
    this.packingOptionId = packingOptionId;
    this.status = status;
  }

  /**
   * Constructs a <code>PackingOptionSummary</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:fulfillmentinbound_v2024_03_20/model/PackingOptionSummary} obj Optional instance to populate.
   * @return {module:fulfillmentinbound_v2024_03_20/model/PackingOptionSummary} The populated <code>PackingOptionSummary</code> instance.
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
      obj = obj || new PackingOptionSummary();
      if (data.hasOwnProperty('packingOptionId'))
        obj.packingOptionId = ApiClient.convertToType(data['packingOptionId'], 'String');
      if (data.hasOwnProperty('status'))
        obj.status = ApiClient.convertToType(data['status'], 'String');
    }
    return obj;
  }
}

/**
 * Identifier of a packing option.
 * @member {String} packingOptionId
 */
PackingOptionSummary.prototype.packingOptionId = undefined;

/**
 * The status of a packing option. Possible values: 'OFFERED', 'ACCEPTED', 'EXPIRED'.
 * @member {String} status
 */
PackingOptionSummary.prototype.status = undefined;


