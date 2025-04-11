/**
 * Selling Partner API for Services
 * With the Services API, you can build applications that help service providers get and modify their service orders and manage their resources.
 *
 * The version of the OpenAPI document: v1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import {ApiClient} from '../ApiClient.js';

/**
* Enum class CapacityType.
* @enum {}
* @readonly
*/
export class CapacityType {
    
        /**
         * value: "SCHEDULED_CAPACITY"
         * @const
         */
        "SCHEDULED_CAPACITY" = "SCHEDULED_CAPACITY";

    
        /**
         * value: "AVAILABLE_CAPACITY"
         * @const
         */
        "AVAILABLE_CAPACITY" = "AVAILABLE_CAPACITY";

    
        /**
         * value: "ENCUMBERED_CAPACITY"
         * @const
         */
        "ENCUMBERED_CAPACITY" = "ENCUMBERED_CAPACITY";

    
        /**
         * value: "RESERVED_CAPACITY"
         * @const
         */
        "RESERVED_CAPACITY" = "RESERVED_CAPACITY";

    

    /**
    * Returns a <code>CapacityType</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:services_v1/model/CapacityType} The enum <code>CapacityType</code> value.
    */
    static constructFromObject(object) {
        return object;
    }
}
