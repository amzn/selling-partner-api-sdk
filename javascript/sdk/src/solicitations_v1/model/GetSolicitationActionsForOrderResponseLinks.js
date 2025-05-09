/**
 * Selling Partner API for Solicitations
 * With the Solicitations API you can build applications that send non-critical solicitations to buyers. You can get a list of solicitation types that are available for an order that you specify, then call an operation that sends a solicitation to the buyer for that order. Buyers cannot respond to solicitations sent by this API, and these solicitations do not appear in the Messaging section of Seller Central or in the recipient's Message Center. The Solicitations API returns responses that are formed according to the <a href=https://tools.ietf.org/html/draft-kelly-json-hal-08>JSON Hypertext Application Language</a> (HAL) standard.
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
import { LinkObject } from './LinkObject.js'

/**
 * The GetSolicitationActionsForOrderResponseLinks model module.
 * @module solicitations_v1/model/GetSolicitationActionsForOrderResponseLinks
 * @version v1
 */
export class GetSolicitationActionsForOrderResponseLinks {
  /**
   * Constructs a new <code>GetSolicitationActionsForOrderResponseLinks</code>.
   * @alias module:solicitations_v1/model/GetSolicitationActionsForOrderResponseLinks
   * @class
   * @param self {module:solicitations_v1/model/LinkObject}
   * @param actions {Array.<module:solicitations_v1/model/LinkObject>} Eligible actions for the specified amazonOrderId.
   */
  constructor (self, actions) {
    this.self = self
    this.actions = actions
  }

  /**
   * Constructs a <code>GetSolicitationActionsForOrderResponseLinks</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:solicitations_v1/model/GetSolicitationActionsForOrderResponseLinks} obj Optional instance to populate.
   * @return {module:solicitations_v1/model/GetSolicitationActionsForOrderResponseLinks} The populated <code>GetSolicitationActionsForOrderResponseLinks</code> instance.
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
      obj = obj || new GetSolicitationActionsForOrderResponseLinks()
      if (data.hasOwnProperty('self')) { obj.self = LinkObject.constructFromObject(data.self) }
      if (data.hasOwnProperty('actions')) { obj.actions = ApiClient.convertToType(data.actions, [LinkObject]) }
    }
    return obj
  }
}

/**
 * @member {module:solicitations_v1/model/LinkObject} self
 */
GetSolicitationActionsForOrderResponseLinks.prototype.self = undefined

/**
 * Eligible actions for the specified amazonOrderId.
 * @member {Array.<module:solicitations_v1/model/LinkObject>} actions
 */
GetSolicitationActionsForOrderResponseLinks.prototype.actions = undefined
