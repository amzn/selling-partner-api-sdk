/**
 * Selling Partner API for Orders
 * Use the Orders Selling Partner API to programmatically retrieve order information. With this API, you can develop fast, flexible, and custom applications to manage order synchronization, perform order research, and create demand-based decision support tools.   _Note:_ For the JP, AU, and SG marketplaces, the Orders API supports orders from 2016 onward. For all other marketplaces, the Orders API supports orders for the last two years (orders older than this don't show up in the response).
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
import { Money } from './Money.js'

/**
 * The PaymentExecutionDetailItem model module.
 * @module orders_v0/model/PaymentExecutionDetailItem
 * @version v0
 */
export class PaymentExecutionDetailItem {
  /**
   * Constructs a new <code>PaymentExecutionDetailItem</code>.
   * Information about a sub-payment method used to pay for a COD order.
   * @alias module:orders_v0/model/PaymentExecutionDetailItem
   * @class
   * @param payment {module:orders_v0/model/Money}
   * @param paymentMethod {String} A sub-payment method for a COD order.  **Possible values**: * `COD`: Cash on delivery  * `GC`: Gift card  * `PointsAccount`: Amazon Points * `Invoice`: Invoice
   */
  constructor (payment, paymentMethod) {
    this.payment = payment
    this.paymentMethod = paymentMethod
  }

  /**
   * Constructs a <code>PaymentExecutionDetailItem</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:orders_v0/model/PaymentExecutionDetailItem} obj Optional instance to populate.
   * @return {module:orders_v0/model/PaymentExecutionDetailItem} The populated <code>PaymentExecutionDetailItem</code> instance.
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
      obj = obj || new PaymentExecutionDetailItem()
      if (data.hasOwnProperty('Payment')) { obj.payment = Money.constructFromObject(data.Payment) }
      if (data.hasOwnProperty('PaymentMethod')) { obj.paymentMethod = ApiClient.convertToType(data.PaymentMethod, 'String') }
    }
    return obj
  }
}

/**
 * @member {module:orders_v0/model/Money} payment
 */
PaymentExecutionDetailItem.prototype.payment = undefined

/**
 * A sub-payment method for a COD order.  **Possible values**: * `COD`: Cash on delivery  * `GC`: Gift card  * `PointsAccount`: Amazon Points * `Invoice`: Invoice
 * @member {String} paymentMethod
 */
PaymentExecutionDetailItem.prototype.paymentMethod = undefined
