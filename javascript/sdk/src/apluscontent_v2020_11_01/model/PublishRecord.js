/**
 * Selling Partner API for A+ Content Management
 * Use the A+ Content API to build applications that help selling partners add rich marketing content to their Amazon product detail pages. Selling partners can use A+ content to share their brand and product story, which helps buyers make informed purchasing decisions. Selling partners use content modules to add images and text.
 *
 * The version of the OpenAPI document: 2020-11-01
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import { ApiClient } from '../ApiClient.js'
import { ContentType } from './ContentType.js'

/**
 * The PublishRecord model module.
 * @module apluscontent_v2020_11_01/model/PublishRecord
 * @version 2020-11-01
 */
export class PublishRecord {
  /**
   * Constructs a new <code>PublishRecord</code>.
   * The full context for an A+ Content publishing event.
   * @alias module:apluscontent_v2020_11_01/model/PublishRecord
   * @class
   * @param marketplaceId {String} The marketplace ID is the globally unique identifier of a marketplace. To find the ID for your marketplace, refer to [Marketplace IDs](https://developer-docs.amazon.com/sp-api/docs/marketplace-ids).
   * @param locale {String} The IETF language tag, which supports the primary language subtag and one secondary language subtag. The secondary language subtag is usually a regional designation. This doesn't support subtags other than the primary and secondary subtags. **Pattern:** ^[a-z]{2,}-[A-Z0-9]{2,}$
   * @param asin {String} The Amazon Standard Identification Number (ASIN).
   * @param contentType {module:apluscontent_v2020_11_01/model/ContentType}
   * @param contentReferenceKey {String} A unique reference key for the A+ Content document. A content reference key cannot form a permalink and might change in the future. A content reference key is not guaranteed to match any A+ content identifier.
   */
  constructor (marketplaceId, locale, asin, contentType, contentReferenceKey) {
    this.marketplaceId = marketplaceId
    this.locale = locale
    this.asin = asin
    this.contentType = contentType
    this.contentReferenceKey = contentReferenceKey
  }

  /**
   * Constructs a <code>PublishRecord</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:apluscontent_v2020_11_01/model/PublishRecord} obj Optional instance to populate.
   * @return {module:apluscontent_v2020_11_01/model/PublishRecord} The populated <code>PublishRecord</code> instance.
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
      obj = obj || new PublishRecord()
      if (data.hasOwnProperty('marketplaceId')) { obj.marketplaceId = ApiClient.convertToType(data.marketplaceId, 'String') }
      if (data.hasOwnProperty('locale')) { obj.locale = ApiClient.convertToType(data.locale, 'String') }
      if (data.hasOwnProperty('asin')) { obj.asin = ApiClient.convertToType(data.asin, 'String') }
      if (data.hasOwnProperty('contentType')) { obj.contentType = ContentType.constructFromObject(data.contentType) }
      if (data.hasOwnProperty('contentSubType')) { obj.contentSubType = ApiClient.convertToType(data.contentSubType, 'String') }
      if (data.hasOwnProperty('contentReferenceKey')) { obj.contentReferenceKey = ApiClient.convertToType(data.contentReferenceKey, 'String') }
    }
    return obj
  }
}

/**
 * The marketplace ID is the globally unique identifier of a marketplace. To find the ID for your marketplace, refer to [Marketplace IDs](https://developer-docs.amazon.com/sp-api/docs/marketplace-ids).
 * @member {String} marketplaceId
 */
PublishRecord.prototype.marketplaceId = undefined

/**
 * The IETF language tag, which supports the primary language subtag and one secondary language subtag. The secondary language subtag is usually a regional designation. This doesn't support subtags other than the primary and secondary subtags. **Pattern:** ^[a-z]{2,}-[A-Z0-9]{2,}$
 * @member {String} locale
 */
PublishRecord.prototype.locale = undefined

/**
 * The Amazon Standard Identification Number (ASIN).
 * @member {String} asin
 */
PublishRecord.prototype.asin = undefined

/**
 * @member {module:apluscontent_v2020_11_01/model/ContentType} contentType
 */
PublishRecord.prototype.contentType = undefined

/**
 * The A+ Content document subtype. This represents a special-purpose type of an A+ Content document. Not every A+ Content document type has a subtype, and subtypes can change at any time.
 * @member {String} contentSubType
 */
PublishRecord.prototype.contentSubType = undefined

/**
 * A unique reference key for the A+ Content document. A content reference key cannot form a permalink and might change in the future. A content reference key is not guaranteed to match any A+ content identifier.
 * @member {String} contentReferenceKey
 */
PublishRecord.prototype.contentReferenceKey = undefined
