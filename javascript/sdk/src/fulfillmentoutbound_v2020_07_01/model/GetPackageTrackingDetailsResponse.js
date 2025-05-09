/**
 * Selling Partner APIs for Fulfillment Outbound
 * The Selling Partner API for Fulfillment Outbound lets you create applications that help a seller fulfill Multi-Channel Fulfillment orders using their inventory in Amazon's fulfillment network. You can get information on both potential and existing fulfillment orders.
 *
 * The version of the OpenAPI document: 2020-07-01
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import { ApiClient } from '../ApiClient.js'
import { Error } from './Error.js'
import { PackageTrackingDetails } from './PackageTrackingDetails.js'

/**
 * The GetPackageTrackingDetailsResponse model module.
 * @module fulfillmentoutbound_v2020_07_01/model/GetPackageTrackingDetailsResponse
 * @version 2020-07-01
 */
export class GetPackageTrackingDetailsResponse {
  /**
   * Constructs a new <code>GetPackageTrackingDetailsResponse</code>.
   * The response schema for the &#x60;getPackageTrackingDetails&#x60; operation.
   * @alias module:fulfillmentoutbound_v2020_07_01/model/GetPackageTrackingDetailsResponse
   * @class
   */
  constructor () {
  }

  /**
   * Constructs a <code>GetPackageTrackingDetailsResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:fulfillmentoutbound_v2020_07_01/model/GetPackageTrackingDetailsResponse} obj Optional instance to populate.
   * @return {module:fulfillmentoutbound_v2020_07_01/model/GetPackageTrackingDetailsResponse} The populated <code>GetPackageTrackingDetailsResponse</code> instance.
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
      obj = obj || new GetPackageTrackingDetailsResponse()
      if (data.hasOwnProperty('payload')) { obj.payload = PackageTrackingDetails.constructFromObject(data.payload) }
      if (data.hasOwnProperty('errors')) { obj.errors = ApiClient.convertToType(data.errors, [Error]) }
    }
    return obj
  }
}

/**
 * @member {module:fulfillmentoutbound_v2020_07_01/model/PackageTrackingDetails} payload
 */
GetPackageTrackingDetailsResponse.prototype.payload = undefined

/**
 * A list of error responses returned when a request is unsuccessful.
 * @member {Array.<module:fulfillmentoutbound_v2020_07_01/model/Error>} errors
 */
GetPackageTrackingDetailsResponse.prototype.errors = undefined
