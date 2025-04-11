/**
 * Selling Partner API for Replenishment
 * The Selling Partner API for Replenishment (Replenishment API) provides programmatic access to replenishment program metrics and offers. These programs provide recurring delivery of any replenishable item at a frequency chosen by the customer.  The Replenishment API is available worldwide wherever Amazon Subscribe & Save is available or is supported. The API is available to vendors and FBA selling partners.
 *
 * The version of the OpenAPI document: 2022-11-07
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import {ApiClient} from '../ApiClient.js';

/**
* Enum class AutoEnrollmentPreference.
* @enum {}
* @readonly
*/
export class AutoEnrollmentPreference {
    
        /**
         * value: "OPTED_IN"
         * @const
         */
        "OPTED_IN" = "OPTED_IN";

    
        /**
         * value: "OPTED_OUT"
         * @const
         */
        "OPTED_OUT" = "OPTED_OUT";

    

    /**
    * Returns a <code>AutoEnrollmentPreference</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:replenishment_v2022_11_07/model/AutoEnrollmentPreference} The enum <code>AutoEnrollmentPreference</code> value.
    */
    static constructFromObject(object) {
        return object;
    }
}
