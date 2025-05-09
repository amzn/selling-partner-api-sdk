/**
 * Selling Partner API for Merchant Fulfillment
 * With the Selling Partner API for Merchant Fulfillment, you can build applications that sellers can use to purchase shipping for non-Prime and Prime orders using Amazon's Buy Shipping Services.
 *
 * The version of the OpenAPI document: v0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import { ApiClient } from '../ApiClient.js'
import { CarrierWillPickUpOption } from './CarrierWillPickUpOption.js'
import { CurrencyAmount } from './CurrencyAmount.js'

/**
 * The AvailableCarrierWillPickUpOption model module.
 * @module merchantfulfillment_v0/model/AvailableCarrierWillPickUpOption
 * @version v0
 */
export class AvailableCarrierWillPickUpOption {
  /**
   * Constructs a new <code>AvailableCarrierWillPickUpOption</code>.
   * Indicates whether the carrier will pick up the package, and what fee is charged, if any.
   * @alias module:merchantfulfillment_v0/model/AvailableCarrierWillPickUpOption
   * @class
   * @param carrierWillPickUpOption {module:merchantfulfillment_v0/model/CarrierWillPickUpOption}
   * @param charge {module:merchantfulfillment_v0/model/CurrencyAmount}
   */
  constructor (carrierWillPickUpOption, charge) {
    this.carrierWillPickUpOption = carrierWillPickUpOption
    this.charge = charge
  }

  /**
   * Constructs a <code>AvailableCarrierWillPickUpOption</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:merchantfulfillment_v0/model/AvailableCarrierWillPickUpOption} obj Optional instance to populate.
   * @return {module:merchantfulfillment_v0/model/AvailableCarrierWillPickUpOption} The populated <code>AvailableCarrierWillPickUpOption</code> instance.
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
      obj = obj || new AvailableCarrierWillPickUpOption()
      if (data.hasOwnProperty('CarrierWillPickUpOption')) { obj.carrierWillPickUpOption = CarrierWillPickUpOption.constructFromObject(data.CarrierWillPickUpOption) }
      if (data.hasOwnProperty('Charge')) { obj.charge = CurrencyAmount.constructFromObject(data.Charge) }
    }
    return obj
  }
}

/**
 * @member {module:merchantfulfillment_v0/model/CarrierWillPickUpOption} carrierWillPickUpOption
 */
AvailableCarrierWillPickUpOption.prototype.carrierWillPickUpOption = undefined

/**
 * @member {module:merchantfulfillment_v0/model/CurrencyAmount} charge
 */
AvailableCarrierWillPickUpOption.prototype.charge = undefined
