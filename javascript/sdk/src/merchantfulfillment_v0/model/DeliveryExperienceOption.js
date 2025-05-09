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

/**
* Enum class DeliveryExperienceOption.
* @enum {}
* @readonly
*/
export class DeliveryExperienceOption {
  /**
         * value: "DeliveryConfirmationWithAdultSignature"
         * @const
         */
  'DeliveryConfirmationWithAdultSignature' = 'DeliveryConfirmationWithAdultSignature'

  /**
         * value: "DeliveryConfirmationWithSignature"
         * @const
         */
  'DeliveryConfirmationWithSignature' = 'DeliveryConfirmationWithSignature'

  /**
         * value: "DeliveryConfirmationWithoutSignature"
         * @const
         */
  'DeliveryConfirmationWithoutSignature' = 'DeliveryConfirmationWithoutSignature'

  /**
         * value: "NoTracking"
         * @const
         */
  'NoTracking' = 'NoTracking'

  /**
         * value: "NoPreference"
         * @const
         */
  'NoPreference' = 'NoPreference'

  /**
    * Returns a <code>DeliveryExperienceOption</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:merchantfulfillment_v0/model/DeliveryExperienceOption} The enum <code>DeliveryExperienceOption</code> value.
    */
  static constructFromObject (object) {
    return object
  }
}
