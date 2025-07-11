/**
 * Selling Partner API for Pricing
 * The Selling Partner API for Pricing helps you programmatically retrieve product pricing and offer pricing information for Amazon Marketplace products.  For more information, refer to the [Product Pricing v2022-05-01 Use Case Guide](https://developer-docs.amazon.com/sp-api/docs/product-pricing-api-v2022-05-01-use-case-guide).
 *
 * The version of the OpenAPI document: 2022-05-01
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import { ApiClient } from '../ApiClient.js'
import { Segment } from './Segment.js'

/**
 * The FeaturedOfferExpectedPriceRequestParams model module.
 * @module pricing_v2022_05_01/model/FeaturedOfferExpectedPriceRequestParams
 * @version 2022-05-01
 */
export class FeaturedOfferExpectedPriceRequestParams {
  /**
   * Constructs a new <code>FeaturedOfferExpectedPriceRequestParams</code>.
   * The parameters for an individual request.
   * @alias module:pricing_v2022_05_01/model/FeaturedOfferExpectedPriceRequestParams
   * @class
   * @param marketplaceId {String} The marketplace ID is the globally unique identifier of a marketplace. To find the ID for your marketplace, refer to [Marketplace IDs](https://developer-docs.amazon.com/sp-api/docs/marketplace-ids).
   * @param sku {String} The seller SKU of the item.
   */
  constructor (marketplaceId, sku) {
    this.marketplaceId = marketplaceId
    this.sku = sku
  }

  /**
   * Constructs a <code>FeaturedOfferExpectedPriceRequestParams</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:pricing_v2022_05_01/model/FeaturedOfferExpectedPriceRequestParams} obj Optional instance to populate.
   * @return {module:pricing_v2022_05_01/model/FeaturedOfferExpectedPriceRequestParams} The populated <code>FeaturedOfferExpectedPriceRequestParams</code> instance.
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
      obj = obj || new FeaturedOfferExpectedPriceRequestParams()
      if (data.hasOwnProperty('marketplaceId')) { obj.marketplaceId = ApiClient.convertToType(data.marketplaceId, 'String') }
      if (data.hasOwnProperty('sku')) { obj.sku = ApiClient.convertToType(data.sku, 'String') }
      if (data.hasOwnProperty('segment')) { obj.segment = Segment.constructFromObject(data.segment) }
    }
    return obj
  }
}

/**
 * The marketplace ID is the globally unique identifier of a marketplace. To find the ID for your marketplace, refer to [Marketplace IDs](https://developer-docs.amazon.com/sp-api/docs/marketplace-ids).
 * @member {String} marketplaceId
 */
FeaturedOfferExpectedPriceRequestParams.prototype.marketplaceId = undefined

/**
 * The seller SKU of the item.
 * @member {String} sku
 */
FeaturedOfferExpectedPriceRequestParams.prototype.sku = undefined

/**
 * @member {module:pricing_v2022_05_01/model/Segment} segment
 */
FeaturedOfferExpectedPriceRequestParams.prototype.segment = undefined
