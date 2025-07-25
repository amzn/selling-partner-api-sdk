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

/**
 * The PaymentsContext model module.
 * @module finances_2024_06_19/model/PaymentsContext
 * @version 2024-06-19
 */
export class PaymentsContext {
  /**
   * Constructs a new <code>PaymentsContext</code>.
   * Additional information related to Payments related transactions.
   * @alias module:finances_2024_06_19/model/PaymentsContext
   * @class
   */
  constructor () {
  }

  /**
   * Constructs a <code>PaymentsContext</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:finances_2024_06_19/model/PaymentsContext} obj Optional instance to populate.
   * @return {module:finances_2024_06_19/model/PaymentsContext} The populated <code>PaymentsContext</code> instance.
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
      obj = obj || new PaymentsContext()
      if (data.hasOwnProperty('paymentType')) { obj.paymentType = ApiClient.convertToType(data.paymentType, 'String') }
      if (data.hasOwnProperty('paymentMethod')) { obj.paymentMethod = ApiClient.convertToType(data.paymentMethod, 'String') }
      if (data.hasOwnProperty('paymentReference')) { obj.paymentReference = ApiClient.convertToType(data.paymentReference, 'String') }
      if (data.hasOwnProperty('paymentDate')) { obj.paymentDate = ApiClient.convertToType(data.paymentDate, 'Date') }
    }
    return obj
  }
}

/**
 * Type of payment made.
 * @member {String} paymentType
 */
PaymentsContext.prototype.paymentType = undefined

/**
 * Method of payment made.
 * @member {String} paymentMethod
 */
PaymentsContext.prototype.paymentMethod = undefined

/**
 * Reference number of payment made.
 * @member {String} paymentReference
 */
PaymentsContext.prototype.paymentReference = undefined

/**
 * Fields with a schema type of date are in ISO 8601 date time format (for example GroupBeginDate).
 * @member {Date} paymentDate
 */
PaymentsContext.prototype.paymentDate = undefined
