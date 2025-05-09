/**
 * Selling Partner API for Retail Procurement Orders
 * The Selling Partner API for Retail Procurement Orders provides programmatic access to vendor orders data.
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
import { Address } from './Address.js'
import { TaxRegistrationDetails } from './TaxRegistrationDetails.js'

/**
 * The PartyIdentification model module.
 * @module vendororders_v1/model/PartyIdentification
 * @version v1
 */
export class PartyIdentification {
  /**
   * Constructs a new <code>PartyIdentification</code>.
   * Name, address and tax details of a party.
   * @alias module:vendororders_v1/model/PartyIdentification
   * @class
   * @param partyId {String} Assigned identification for the party. For example, warehouse code or vendor code. Please refer to specific party for more details.
   */
  constructor (partyId) {
    this.partyId = partyId
  }

  /**
   * Constructs a <code>PartyIdentification</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:vendororders_v1/model/PartyIdentification} obj Optional instance to populate.
   * @return {module:vendororders_v1/model/PartyIdentification} The populated <code>PartyIdentification</code> instance.
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
      obj = obj || new PartyIdentification()
      if (data.hasOwnProperty('partyId')) { obj.partyId = ApiClient.convertToType(data.partyId, 'String') }
      if (data.hasOwnProperty('address')) { obj.address = Address.constructFromObject(data.address) }
      if (data.hasOwnProperty('taxInfo')) { obj.taxInfo = TaxRegistrationDetails.constructFromObject(data.taxInfo) }
    }
    return obj
  }
}

/**
 * Assigned identification for the party. For example, warehouse code or vendor code. Please refer to specific party for more details.
 * @member {String} partyId
 */
PartyIdentification.prototype.partyId = undefined

/**
 * @member {module:vendororders_v1/model/Address} address
 */
PartyIdentification.prototype.address = undefined

/**
 * @member {module:vendororders_v1/model/TaxRegistrationDetails} taxInfo
 */
PartyIdentification.prototype.taxInfo = undefined
