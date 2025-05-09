/**
 * Selling Partner API for Merchant Fulfillment
 * With the Selling Partner API for Merchant Fulfillment, you can build applications that sellers can use to purchase shipping for non-Prime and Prime orders using Amazon's Buy Shipping Services.
 *
 * The version of the OpenAPI document: v0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import { ApiClient } from '../ApiClient.js'

/**
 * The LabelFormatOptionRequest model module.
 * @module merchantfulfillment_v0/model/LabelFormatOptionRequest
 * @version v0
 */
export class LabelFormatOptionRequest {
  /**
   * Constructs a new <code>LabelFormatOptionRequest</code>.
   * Whether to include a packing slip.
   * @alias module:merchantfulfillment_v0/model/LabelFormatOptionRequest
   * @class
   */
  constructor () {
  }

  /**
   * Constructs a <code>LabelFormatOptionRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:merchantfulfillment_v0/model/LabelFormatOptionRequest} obj Optional instance to populate.
   * @return {module:merchantfulfillment_v0/model/LabelFormatOptionRequest} The populated <code>LabelFormatOptionRequest</code> instance.
   */
  static constructFromObject (data, obj) {
    if (data) {
      switch (typeof data) {
        case 'string':
          obj = String(data)
          break
        case 'number':
          obj = Number(data)
          break
        case 'boolean':
          obj = Boolean(data)
          break
      }
      obj = obj || new LabelFormatOptionRequest()
      if (data.hasOwnProperty('IncludePackingSlipWithLabel')) { obj.includePackingSlipWithLabel = ApiClient.convertToType(data.IncludePackingSlipWithLabel, 'Boolean') }
    }
    return obj
  }
}

/**
 * When true, include a packing slip with the label.
 * @member {Boolean} includePackingSlipWithLabel
 */
LabelFormatOptionRequest.prototype.includePackingSlipWithLabel = undefined
