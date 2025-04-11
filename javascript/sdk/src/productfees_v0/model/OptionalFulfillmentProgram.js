/**
 * Selling Partner API for Product Fees
 * The Selling Partner API for Product Fees lets you programmatically retrieve estimated fees for a product. You can then account for those fees in your pricing.
 *
 * The version of the OpenAPI document: v0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import {ApiClient} from '../ApiClient.js';

/**
* Enum class OptionalFulfillmentProgram.
* @enum {}
* @readonly
*/
export class OptionalFulfillmentProgram {
    
        /**
         * value: "FBA_CORE"
         * @const
         */
        "FBA_CORE" = "FBA_CORE";

    
        /**
         * value: "FBA_SNL"
         * @const
         */
        "FBA_SNL" = "FBA_SNL";

    
        /**
         * value: "FBA_EFN"
         * @const
         */
        "FBA_EFN" = "FBA_EFN";

    

    /**
    * Returns a <code>OptionalFulfillmentProgram</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:productfees_v0/model/OptionalFulfillmentProgram} The enum <code>OptionalFulfillmentProgram</code> value.
    */
    static constructFromObject(object) {
        return object;
    }
}
