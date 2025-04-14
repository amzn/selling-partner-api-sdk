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
* Enum class ShippingSpeedCategory.
* @enum {}
* @readonly
*/
export class ShippingSpeedCategory {
    
        /**
         * value: "Standard"
         * @const
         */
        "Standard" = "Standard";

    
        /**
         * value: "Expedited"
         * @const
         */
        "Expedited" = "Expedited";

    
        /**
         * value: "Priority"
         * @const
         */
        "Priority" = "Priority";

    
        /**
         * value: "ScheduledDelivery"
         * @const
         */
        "ScheduledDelivery" = "ScheduledDelivery";

    

    /**
    * Returns a <code>ShippingSpeedCategory</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:fulfillmentoutbound_v2020_07_01/model/ShippingSpeedCategory} The enum <code>ShippingSpeedCategory</code> value.
    */
    static constructFromObject(object) {
        return object;
    }
}
