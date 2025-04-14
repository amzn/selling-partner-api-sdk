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
* Enum class LabelStatus.
* @enum {}
* @readonly
*/
export class LabelStatus {
    
        /**
         * value: "GENERATING"
         * @const
         */
        "GENERATING" = "GENERATING";

    
        /**
         * value: "GENERATED"
         * @const
         */
        "GENERATED" = "GENERATED";

    
        /**
         * value: "GENERATION_FAILED"
         * @const
         */
        "GENERATION_FAILED" = "GENERATION_FAILED";

    
        /**
         * value: "NOT_READY"
         * @const
         */
        "NOT_READY" = "NOT_READY";

    

    /**
    * Returns a <code>LabelStatus</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:awd_v2024_05_09/model/LabelStatus} The enum <code>LabelStatus</code> value.
    */
    static constructFromObject(object) {
        return object;
    }
}
