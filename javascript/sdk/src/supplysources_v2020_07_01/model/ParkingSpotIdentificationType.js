/**
 * Selling Partner API for Supply Sources
 * Manage configurations and capabilities of seller supply sources.
 *
 * The version of the OpenAPI document: 2020-07-01
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import {ApiClient} from '../ApiClient.js';

/**
* Enum class ParkingSpotIdentificationType.
* @enum {}
* @readonly
*/
export class ParkingSpotIdentificationType {
    
        /**
         * value: "Numbered"
         * @const
         */
        "Numbered" = "Numbered";

    
        /**
         * value: "Other"
         * @const
         */
        "Other" = "Other";

    

    /**
    * Returns a <code>ParkingSpotIdentificationType</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:supplysources_v2020_07_01/model/ParkingSpotIdentificationType} The enum <code>ParkingSpotIdentificationType</code> value.
    */
    static constructFromObject(object) {
        return object;
    }
}
