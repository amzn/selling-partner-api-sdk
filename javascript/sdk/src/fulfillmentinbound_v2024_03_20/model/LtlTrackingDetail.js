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

import { ApiClient } from '../ApiClient.js'

/**
 * The LtlTrackingDetail model module.
 * @module fulfillmentinbound_v2024_03_20/model/LtlTrackingDetail
 * @version 2024-03-20
 */
export class LtlTrackingDetail {
  /**
   * Constructs a new <code>LtlTrackingDetail</code>.
   * Contains information related to Less-Than-Truckload (LTL) shipment tracking.
   * @alias module:fulfillmentinbound_v2024_03_20/model/LtlTrackingDetail
   * @class
   */
  constructor () {
  }

  /**
   * Constructs a <code>LtlTrackingDetail</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:fulfillmentinbound_v2024_03_20/model/LtlTrackingDetail} obj Optional instance to populate.
   * @return {module:fulfillmentinbound_v2024_03_20/model/LtlTrackingDetail} The populated <code>LtlTrackingDetail</code> instance.
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
      obj = obj || new LtlTrackingDetail()
      if (data.hasOwnProperty('billOfLadingNumber')) { obj.billOfLadingNumber = ApiClient.convertToType(data.billOfLadingNumber, 'String') }
      if (data.hasOwnProperty('freightBillNumber')) { obj.freightBillNumber = ApiClient.convertToType(data.freightBillNumber, ['String']) }
    }
    return obj
  }
}

/**
 * The number of the carrier shipment acknowledgement document.
 * @member {String} billOfLadingNumber
 */
LtlTrackingDetail.prototype.billOfLadingNumber = undefined

/**
 * The number associated with the freight bill.
 * @member {Array.<String>} freightBillNumber
 */
LtlTrackingDetail.prototype.freightBillNumber = undefined
