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
 * The SellingPartnerMetadata model module.
 * @module finances_2024_06_19/model/SellingPartnerMetadata
 * @version 2024-06-19
 */
export class SellingPartnerMetadata {
  /**
   * Constructs a new <code>SellingPartnerMetadata</code>.
   * Metadata describing the seller.
   * @alias module:finances_2024_06_19/model/SellingPartnerMetadata
   * @class
   */
  constructor () {
  }

  /**
   * Constructs a <code>SellingPartnerMetadata</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:finances_2024_06_19/model/SellingPartnerMetadata} obj Optional instance to populate.
   * @return {module:finances_2024_06_19/model/SellingPartnerMetadata} The populated <code>SellingPartnerMetadata</code> instance.
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
      obj = obj || new SellingPartnerMetadata()
      if (data.hasOwnProperty('sellingPartnerId')) { obj.sellingPartnerId = ApiClient.convertToType(data.sellingPartnerId, 'String') }
      if (data.hasOwnProperty('accountType')) { obj.accountType = ApiClient.convertToType(data.accountType, 'String') }
      if (data.hasOwnProperty('marketplaceId')) { obj.marketplaceId = ApiClient.convertToType(data.marketplaceId, 'String') }
    }
    return obj
  }
}

/**
 * Unique seller identifier.
 * @member {String} sellingPartnerId
 */
SellingPartnerMetadata.prototype.sellingPartnerId = undefined

/**
 * Account type of transaction.
 * @member {String} accountType
 */
SellingPartnerMetadata.prototype.accountType = undefined

/**
 * The identifier of the marketplace where the transaction occurred. The marketplace ID is the globally unique identifier of a marketplace. To find the ID for your marketplace, refer to [Marketplace IDs](https://developer-docs.amazon.com/sp-api/docs/marketplace-ids).
 * @member {String} marketplaceId
 */
SellingPartnerMetadata.prototype.marketplaceId = undefined
