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
* Enum class LabelOwner.
* @enum {}
* @readonly
*/
export class LabelOwner {
    
        /**
         * value: "AMAZON"
         * @const
         */
        "AMAZON" = "AMAZON";

    
        /**
         * value: "SELF"
         * @const
         */
        "SELF" = "SELF";

    

    /**
    * Returns a <code>LabelOwner</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:awd_v2024_05_09/model/LabelOwner} The enum <code>LabelOwner</code> value.
    */
    static constructFromObject(object) {
        return object;
    }
}
