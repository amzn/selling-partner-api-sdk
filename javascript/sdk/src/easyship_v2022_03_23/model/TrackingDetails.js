/**
 * Selling Partner API for Easy Ship
 * Use the Selling Partner API for Easy Ship to build applications for sellers to manage and ship Amazon Easy Ship orders. With this API, you can get available time slots, schedule and reschedule Easy Ship orders, and print shipping labels, invoices, and warranties. To review the differences in Easy Ship operations by marketplace, refer to [Marketplace support](https://developer-docs.amazon.com/sp-api/docs/easyship-api-v2022-03-23-use-case-guide#marketplace-support).
 *
 * The version of the OpenAPI document: 2022-03-23
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import {ApiClient} from '../ApiClient.js';

/**
 * The TrackingDetails model module.
 * @module easyship_v2022_03_23/model/TrackingDetails
 * @version 2022-03-23
 */
export class TrackingDetails {
  /**
   * Constructs a new <code>TrackingDetails</code>.
   * Representation of tracking metadata.
   * @alias module:easyship_v2022_03_23/model/TrackingDetails
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>TrackingDetails</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:easyship_v2022_03_23/model/TrackingDetails} obj Optional instance to populate.
   * @return {module:easyship_v2022_03_23/model/TrackingDetails} The populated <code>TrackingDetails</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      switch(typeof data) {
        case 'string':
          obj = String(data);
          break;
        case 'number':
          obj = Number(data);
          break;
        case 'boolean':
          obj = Boolean(data);
          break;
      }
      obj = obj || new TrackingDetails();
      if (data.hasOwnProperty('trackingId'))
        obj.trackingId = ApiClient.convertToType(data['trackingId'], 'String');
    }
    return obj;
  }
}

/**
 * A string of up to 255 characters.
 * @member {String} trackingId
 */
TrackingDetails.prototype.trackingId = undefined;


