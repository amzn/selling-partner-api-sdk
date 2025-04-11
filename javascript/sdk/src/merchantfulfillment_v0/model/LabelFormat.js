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

import {ApiClient} from '../ApiClient.js';

/**
* Enum class LabelFormat.
* @enum {}
* @readonly
*/
export class LabelFormat {
    
        /**
         * value: "PDF"
         * @const
         */
        "PDF" = "PDF";

    
        /**
         * value: "PNG"
         * @const
         */
        "PNG" = "PNG";

    
        /**
         * value: "ZPL203"
         * @const
         */
        "ZPL203" = "ZPL203";

    
        /**
         * value: "ZPL300"
         * @const
         */
        "ZPL300" = "ZPL300";

    
        /**
         * value: "ShippingServiceDefault"
         * @const
         */
        "ShippingServiceDefault" = "ShippingServiceDefault";

    

    /**
    * Returns a <code>LabelFormat</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:merchantfulfillment_v0/model/LabelFormat} The enum <code>LabelFormat</code> value.
    */
    static constructFromObject(object) {
        return object;
    }
}
