/**
 * Selling Partner API for Services
 * With the Services API, you can build applications that help service providers get and modify their service orders and manage their resources.
 *
 * The version of the OpenAPI document: v1
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import { ApiClient } from '../ApiClient.js'
import { Error } from './Error.js'
import { Warning } from './Warning.js'

/**
 * The SetAppointmentResponse model module.
 * @module services_v1/model/SetAppointmentResponse
 * @version v1
 */
export class SetAppointmentResponse {
  /**
   * Constructs a new <code>SetAppointmentResponse</code>.
   * Response schema for the &#x60;addAppointmentForServiceJobByServiceJobId&#x60; and &#x60;rescheduleAppointmentForServiceJobByServiceJobId&#x60; operations.
   * @alias module:services_v1/model/SetAppointmentResponse
   * @class
   */
  constructor () {
  }

  /**
   * Constructs a <code>SetAppointmentResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:services_v1/model/SetAppointmentResponse} obj Optional instance to populate.
   * @return {module:services_v1/model/SetAppointmentResponse} The populated <code>SetAppointmentResponse</code> instance.
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
      obj = obj || new SetAppointmentResponse()
      if (data.hasOwnProperty('appointmentId')) { obj.appointmentId = ApiClient.convertToType(data.appointmentId, 'String') }
      if (data.hasOwnProperty('warnings')) { obj.warnings = ApiClient.convertToType(data.warnings, [Warning]) }
      if (data.hasOwnProperty('errors')) { obj.errors = ApiClient.convertToType(data.errors, [Error]) }
    }
    return obj
  }
}

/**
 * The appointment identifier.
 * @member {String} appointmentId
 */
SetAppointmentResponse.prototype.appointmentId = undefined

/**
 * A list of warnings returned in the sucessful execution response of an API request.
 * @member {Array.<module:services_v1/model/Warning>} warnings
 */
SetAppointmentResponse.prototype.warnings = undefined

/**
 * A list of error responses returned when a request is unsuccessful.
 * @member {Array.<module:services_v1/model/Error>} errors
 */
SetAppointmentResponse.prototype.errors = undefined
