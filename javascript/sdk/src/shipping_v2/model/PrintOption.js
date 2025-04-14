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
import {SupportedDocumentDetail} from './SupportedDocumentDetail.js';

/**
 * The PrintOption model module.
 * @module shipping_v2/model/PrintOption
 * @version v2
 */
export class PrintOption {
  /**
   * Constructs a new <code>PrintOption</code>.
   * The format options available for a label.
   * @alias module:shipping_v2/model/PrintOption
   * @class
   * @param supportedPageLayouts {Array.<String>} A list of the supported page layout options for a document.
   * @param supportedFileJoiningOptions {Array.<Boolean>} A list of the supported needFileJoining boolean values for a document.
   * @param supportedDocumentDetails {Array.<module:shipping_v2/model/SupportedDocumentDetail>} A list of the supported documented details.
   */
  constructor(supportedPageLayouts, supportedFileJoiningOptions, supportedDocumentDetails) {
    this.supportedPageLayouts = supportedPageLayouts;
    this.supportedFileJoiningOptions = supportedFileJoiningOptions;
    this.supportedDocumentDetails = supportedDocumentDetails;
  }

  /**
   * Constructs a <code>PrintOption</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:shipping_v2/model/PrintOption} obj Optional instance to populate.
   * @return {module:shipping_v2/model/PrintOption} The populated <code>PrintOption</code> instance.
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
      obj = obj || new PrintOption();
      if (data.hasOwnProperty('supportedDPIs'))
        obj.supportedDPIs = ApiClient.convertToType(data['supportedDPIs'], ['Number']);
      if (data.hasOwnProperty('supportedPageLayouts'))
        obj.supportedPageLayouts = ApiClient.convertToType(data['supportedPageLayouts'], ['String']);
      if (data.hasOwnProperty('supportedFileJoiningOptions'))
        obj.supportedFileJoiningOptions = ApiClient.convertToType(data['supportedFileJoiningOptions'], ['Boolean']);
      if (data.hasOwnProperty('supportedDocumentDetails'))
        obj.supportedDocumentDetails = ApiClient.convertToType(data['supportedDocumentDetails'], [SupportedDocumentDetail]);
    }
    return obj;
  }
}

/**
 * A list of the supported DPI options for a document.
 * @member {Array.<Number>} supportedDPIs
 */
PrintOption.prototype.supportedDPIs = undefined;

/**
 * A list of the supported page layout options for a document.
 * @member {Array.<String>} supportedPageLayouts
 */
PrintOption.prototype.supportedPageLayouts = undefined;

/**
 * A list of the supported needFileJoining boolean values for a document.
 * @member {Array.<Boolean>} supportedFileJoiningOptions
 */
PrintOption.prototype.supportedFileJoiningOptions = undefined;

/**
 * A list of the supported documented details.
 * @member {Array.<module:shipping_v2/model/SupportedDocumentDetail>} supportedDocumentDetails
 */
PrintOption.prototype.supportedDocumentDetails = undefined;


