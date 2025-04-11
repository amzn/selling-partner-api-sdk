/**
 * Selling Partner API for Retail Procurement Payments
 * The Selling Partner API for Retail Procurement Payments provides programmatic access to vendors payments data.
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
* Enum class NetCostUnitOfMeasure.
* @enum {}
* @readonly
*/
export class NetCostUnitOfMeasure {
    
        /**
         * value: "POUNDS"
         * @const
         */
        "POUNDS" = "POUNDS";

    
        /**
         * value: "OUNCES"
         * @const
         */
        "OUNCES" = "OUNCES";

    
        /**
         * value: "GRAMS"
         * @const
         */
        "GRAMS" = "GRAMS";

    
        /**
         * value: "KILOGRAMS"
         * @const
         */
        "KILOGRAMS" = "KILOGRAMS";

    

    /**
    * Returns a <code>NetCostUnitOfMeasure</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:vendorinvoices_v1/model/NetCostUnitOfMeasure} The enum <code>NetCostUnitOfMeasure</code> value.
    */
    static constructFromObject(object) {
        return object;
    }
}
