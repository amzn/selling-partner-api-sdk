/**
 * The Selling Partner API for Finances
 * The Selling Partner API for Finances helps you obtain financial information relevant to a seller's business. You can obtain financial events for a given order or date range without having to wait until a statement period closes.
 *
 * The version of the OpenAPI document: 2024-06-19
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import { ApiClient } from '../ApiClient.js'
import { Error } from './Error.js'

/**
 * The ErrorList model module.
 * @module finances_2024_06_19/model/ErrorList
 * @version 2024-06-19
 */
export class ErrorList {
  /**
   * Constructs a new <code>ErrorList</code>.
   * A list of error responses returned when a request is unsuccessful.
   * @alias module:finances_2024_06_19/model/ErrorList
   * @class
   * @param errors {Array.<module:finances_2024_06_19/model/Error>} Error response returned when the request is unsuccessful.
   */
  constructor (errors) {
    this.errors = errors
  }

  /**
   * Constructs a <code>ErrorList</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:finances_2024_06_19/model/ErrorList} obj Optional instance to populate.
   * @return {module:finances_2024_06_19/model/ErrorList} The populated <code>ErrorList</code> instance.
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
      obj = obj || new ErrorList()
      if (data.hasOwnProperty('errors')) { obj.errors = ApiClient.convertToType(data.errors, [Error]) }
    }
    return obj
  }
}

/**
 * Error response returned when the request is unsuccessful.
 * @member {Array.<module:finances_2024_06_19/model/Error>} errors
 */
ErrorList.prototype.errors = undefined
