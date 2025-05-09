/**
 * The Selling Partner API for Amazon Warehousing and Distribution
 * The Selling Partner API for Amazon Warehousing and Distribution (AWD) provides programmatic access to information about AWD shipments and inventory.
 *
 * The version of the OpenAPI document: 2024-05-09
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import { ApiClient } from '../ApiClient.js'

/**
 * The ExpirationDetails model module.
 * @module awd_v2024_05_09/model/ExpirationDetails
 * @version 2024-05-09
 */
export class ExpirationDetails {
  /**
   * Constructs a new <code>ExpirationDetails</code>.
   * The expiration details of the inventory. This object will only appear if the details parameter in the request is set to &#x60;SHOW&#x60;.
   * @alias module:awd_v2024_05_09/model/ExpirationDetails
   * @class
   */
  constructor () {
  }

  /**
   * Constructs a <code>ExpirationDetails</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:awd_v2024_05_09/model/ExpirationDetails} obj Optional instance to populate.
   * @return {module:awd_v2024_05_09/model/ExpirationDetails} The populated <code>ExpirationDetails</code> instance.
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
      obj = obj || new ExpirationDetails()
      if (data.hasOwnProperty('expiration')) { obj.expiration = ApiClient.convertToType(data.expiration, 'Date') }
      if (data.hasOwnProperty('onhandQuantity')) { obj.onhandQuantity = ApiClient.convertToType(data.onhandQuantity, 'Number') }
    }
    return obj
  }
}

/**
 * The expiration date of the SKU.
 * @member {Date} expiration
 */
ExpirationDetails.prototype.expiration = undefined

/**
 * The quantity that is present in AWD.
 * @member {Number} onhandQuantity
 */
ExpirationDetails.prototype.onhandQuantity = undefined
