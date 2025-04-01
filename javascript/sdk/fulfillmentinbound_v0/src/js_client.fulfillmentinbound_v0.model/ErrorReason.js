/**
 * Selling Partner API for Fulfillment Inbound
 * The Selling Partner API for Fulfillment Inbound lets you create applications that create and update inbound shipments of inventory to Amazon's fulfillment network.
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
* Enum class ErrorReason.
* @enum {}
* @readonly
*/
export default class ErrorReason {
    
        /**
         * value: "DoesNotExist"
         * @const
         */
        "DoesNotExist" = "DoesNotExist";

    
        /**
         * value: "InvalidASIN"
         * @const
         */
        "InvalidASIN" = "InvalidASIN";

    

    /**
    * Returns a <code>ErrorReason</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:js_client.fulfillmentinbound_v0.model/ErrorReason} The enum <code>ErrorReason</code> value.
    */
    static constructFromObject(object) {
        return object;
    }
}
