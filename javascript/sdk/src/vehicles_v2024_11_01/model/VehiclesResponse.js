/**
 * The Selling Partner API for Automotive.
 * The Selling Partner API for Automotive provides programmatic access to information needed by selling partners to provide compatibility information about their listed products.
 *
 * The version of the OpenAPI document: 2024-11-01
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import { ApiClient } from '../ApiClient.js'
import { Pagination } from './Pagination.js'
import { Vehicle } from './Vehicle.js'

/**
 * The VehiclesResponse model module.
 * @module vehicles_v2024_11_01/model/VehiclesResponse
 * @version 2024-11-01
 */
export class VehiclesResponse {
  /**
   * Constructs a new <code>VehiclesResponse</code>.
   * Get paginated list of vehicle from Amazon&#39;s catalog
   * @alias module:vehicles_v2024_11_01/model/VehiclesResponse
   * @class
   * @param vehicles {Array.<module:vehicles_v2024_11_01/model/Vehicle>} List of vehicles from Amazon's catalog.
   */
  constructor (vehicles) {
    this.vehicles = vehicles
  }

  /**
   * Constructs a <code>VehiclesResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:vehicles_v2024_11_01/model/VehiclesResponse} obj Optional instance to populate.
   * @return {module:vehicles_v2024_11_01/model/VehiclesResponse} The populated <code>VehiclesResponse</code> instance.
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
      obj = obj || new VehiclesResponse()
      if (data.hasOwnProperty('pagination')) { obj.pagination = Pagination.constructFromObject(data.pagination) }
      if (data.hasOwnProperty('vehicles')) { obj.vehicles = ApiClient.convertToType(data.vehicles, [Vehicle]) }
    }
    return obj
  }
}

/**
 * @member {module:vehicles_v2024_11_01/model/Pagination} pagination
 */
VehiclesResponse.prototype.pagination = undefined

/**
 * List of vehicles from Amazon's catalog.
 * @member {Array.<module:vehicles_v2024_11_01/model/Vehicle>} vehicles
 */
VehiclesResponse.prototype.vehicles = undefined
