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
import { Breakdown } from './Breakdown.js'
import { Context } from './Context.js'
import { Currency } from './Currency.js'
import { ItemRelatedIdentifier } from './ItemRelatedIdentifier.js'

/**
 * The Item model module.
 * @module finances_2024_06_19/model/Item
 * @version 2024-06-19
 */
export class Item {
  /**
   * Constructs a new <code>Item</code>.
   * Additional information about the items in Transaction.
   * @alias module:finances_2024_06_19/model/Item
   * @class
   */
  constructor () {
  }

  /**
   * Constructs a <code>Item</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:finances_2024_06_19/model/Item} obj Optional instance to populate.
   * @return {module:finances_2024_06_19/model/Item} The populated <code>Item</code> instance.
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
      obj = obj || new Item()
      if (data.hasOwnProperty('description')) { obj.description = ApiClient.convertToType(data.description, 'String') }
      if (data.hasOwnProperty('relatedIdentifiers')) { obj.relatedIdentifiers = ApiClient.convertToType(data.relatedIdentifiers, [ItemRelatedIdentifier]) }
      if (data.hasOwnProperty('totalAmount')) { obj.totalAmount = Currency.constructFromObject(data.totalAmount) }
      if (data.hasOwnProperty('breakdowns')) { obj.breakdowns = ApiClient.convertToType(data.breakdowns, [Breakdown]) }
      if (data.hasOwnProperty('contexts')) { obj.contexts = ApiClient.convertToType(data.contexts, [Context]) }
    }
    return obj
  }
}

/**
 * Description of items in the transaction
 * @member {String} description
 */
Item.prototype.description = undefined

/**
 * Related Business identifiers of the item in Transaction.
 * @member {Array.<module:finances_2024_06_19/model/ItemRelatedIdentifier>} relatedIdentifiers
 */
Item.prototype.relatedIdentifiers = undefined

/**
 * @member {module:finances_2024_06_19/model/Currency} totalAmount
 */
Item.prototype.totalAmount = undefined

/**
 * A list of breakdowns that detail how the total amount is calculated for the transaction.
 * @member {Array.<module:finances_2024_06_19/model/Breakdown>} breakdowns
 */
Item.prototype.breakdowns = undefined

/**
 * List of additional Information about the item.
 * @member {Array.<module:finances_2024_06_19/model/Context>} contexts
 */
Item.prototype.contexts = undefined
