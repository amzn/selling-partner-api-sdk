/**
 * Selling Partner APIs for Fulfillment Outbound
 * The Selling Partner API for Fulfillment Outbound lets you create applications that help a seller fulfill Multi-Channel Fulfillment orders using their inventory in Amazon's fulfillment network. You can get information on both potential and existing fulfillment orders.
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
* Enum class FulfillmentReturnItemStatus.
* @enum {}
* @readonly
*/
export default class FulfillmentReturnItemStatus {
    
        /**
         * value: "New"
         * @const
         */
        "New" = "New";

    
        /**
         * value: "Processed"
         * @const
         */
        "Processed" = "Processed";

    

    /**
    * Returns a <code>FulfillmentReturnItemStatus</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:js_client.fulfillmentoutbound_v2020_07_01.model/FulfillmentReturnItemStatus} The enum <code>FulfillmentReturnItemStatus</code> value.
    */
    static constructFromObject(object) {
        return object;
    }
}
