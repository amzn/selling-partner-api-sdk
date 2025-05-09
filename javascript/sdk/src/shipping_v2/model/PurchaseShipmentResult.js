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

import { ApiClient } from '../ApiClient.js'
import { Benefits } from './Benefits.js'
import { PackageDocumentDetail } from './PackageDocumentDetail.js'
import { Promise } from './Promise.js'

/**
 * The PurchaseShipmentResult model module.
 * @module shipping_v2/model/PurchaseShipmentResult
 * @version v2
 */
export class PurchaseShipmentResult {
  /**
   * Constructs a new <code>PurchaseShipmentResult</code>.
   * The payload for the purchaseShipment operation.
   * @alias module:shipping_v2/model/PurchaseShipmentResult
   * @class
   * @param shipmentId {String} The unique shipment identifier provided by a shipping service.
   * @param packageDocumentDetails {Array.<module:shipping_v2/model/PackageDocumentDetail>} A list of post-purchase details about a package that will be shipped using a shipping service.
   * @param promise {module:shipping_v2/model/Promise}
   */
  constructor (shipmentId, packageDocumentDetails, promise) {
    this.shipmentId = shipmentId
    this.packageDocumentDetails = packageDocumentDetails
    this.promise = promise
  }

  /**
   * Constructs a <code>PurchaseShipmentResult</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:shipping_v2/model/PurchaseShipmentResult} obj Optional instance to populate.
   * @return {module:shipping_v2/model/PurchaseShipmentResult} The populated <code>PurchaseShipmentResult</code> instance.
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
      obj = obj || new PurchaseShipmentResult()
      if (data.hasOwnProperty('shipmentId')) { obj.shipmentId = ApiClient.convertToType(data.shipmentId, 'String') }
      if (data.hasOwnProperty('packageDocumentDetails')) { obj.packageDocumentDetails = ApiClient.convertToType(data.packageDocumentDetails, [PackageDocumentDetail]) }
      if (data.hasOwnProperty('promise')) { obj.promise = Promise.constructFromObject(data.promise) }
      if (data.hasOwnProperty('benefits')) { obj.benefits = Benefits.constructFromObject(data.benefits) }
    }
    return obj
  }
}

/**
 * The unique shipment identifier provided by a shipping service.
 * @member {String} shipmentId
 */
PurchaseShipmentResult.prototype.shipmentId = undefined

/**
 * A list of post-purchase details about a package that will be shipped using a shipping service.
 * @member {Array.<module:shipping_v2/model/PackageDocumentDetail>} packageDocumentDetails
 */
PurchaseShipmentResult.prototype.packageDocumentDetails = undefined

/**
 * @member {module:shipping_v2/model/Promise} promise
 */
PurchaseShipmentResult.prototype.promise = undefined

/**
 * @member {module:shipping_v2/model/Benefits} benefits
 */
PurchaseShipmentResult.prototype.benefits = undefined
