/**
 * The Selling Partner API for Amazon Warehousing and Distribution
 * The Selling Partner API for Amazon Warehousing and Distribution (AWD) provides programmatic access to information about AWD shipments and inventory.
 *
 * The version of the OpenAPI document: 2024-05-09
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import {ApiClient} from '../ApiClient.js';

/**
* Enum class InboundStatus.
* @enum {}
* @readonly
*/
export default class InboundStatus {
    
        /**
         * value: "DRAFT"
         * @const
         */
        "DRAFT" = "DRAFT";

    
        /**
         * value: "VALIDATING"
         * @const
         */
        "VALIDATING" = "VALIDATING";

    
        /**
         * value: "CONFIRMED"
         * @const
         */
        "CONFIRMED" = "CONFIRMED";

    
        /**
         * value: "CLOSED"
         * @const
         */
        "CLOSED" = "CLOSED";

    
        /**
         * value: "EXPIRED"
         * @const
         */
        "EXPIRED" = "EXPIRED";

    
        /**
         * value: "CANCELLED"
         * @const
         */
        "CANCELLED" = "CANCELLED";

    

    /**
    * Returns a <code>InboundStatus</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:js_client.awd_v2024_05_09.model/InboundStatus} The enum <code>InboundStatus</code> value.
    */
    static constructFromObject(object) {
        return object;
    }
}
