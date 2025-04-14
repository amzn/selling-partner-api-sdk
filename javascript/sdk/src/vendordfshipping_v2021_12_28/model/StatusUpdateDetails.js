/**
 * Selling Partner API for Direct Fulfillment Shipping
 * Use the Selling Partner API for Direct Fulfillment Shipping to access a direct fulfillment vendor's shipping data.
 *
 * The version of the OpenAPI document: 2021-12-28
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import {ApiClient} from '../ApiClient.js';
import {Address} from './Address.js';
import {ShipmentSchedule} from './ShipmentSchedule.js';

/**
 * The StatusUpdateDetails model module.
 * @module vendordfshipping_v2021_12_28/model/StatusUpdateDetails
 * @version 2021-12-28
 */
export class StatusUpdateDetails {
  /**
   * Constructs a new <code>StatusUpdateDetails</code>.
   * Details for the shipment status update given by the vendor for the specific package.
   * @alias module:vendordfshipping_v2021_12_28/model/StatusUpdateDetails
   * @class
   * @param trackingNumber {String} The shipment tracking number is required for every package and should match the `trackingNumber` sent for the shipment confirmation.
   * @param statusCode {String} Indicates the shipment status code of the package that provides transportation information for Amazon tracking systems and ultimately for the final customer. For more information, refer to the [Additional Fields Explanation](https://developer-docs.amazon.com/sp-api/docs/vendor-direct-fulfillment-shipping-api-use-case-guide#additional-fields-explanation).
   * @param reasonCode {String} Provides a reason code for the status of the package that will provide additional information about the transportation status. For more information, refer to the [Additional Fields Explanation](https://developer-docs.amazon.com/sp-api/docs/vendor-direct-fulfillment-shipping-api-use-case-guide#additional-fields-explanation).
   * @param statusDateTime {Date} The date and time when the shipment status was updated. Values are in [ISO 8601](https://developer-docs.amazon.com/sp-api/docs/iso-8601) date-time format, with UTC time zone or UTC offset. For example, 2020-07-16T23:00:00Z or 2020-07-16T23:00:00+01:00.
   * @param statusLocationAddress {module:vendordfshipping_v2021_12_28/model/Address} 
   */
  constructor(trackingNumber, statusCode, reasonCode, statusDateTime, statusLocationAddress) {
    this.trackingNumber = trackingNumber;
    this.statusCode = statusCode;
    this.reasonCode = reasonCode;
    this.statusDateTime = statusDateTime;
    this.statusLocationAddress = statusLocationAddress;
  }

  /**
   * Constructs a <code>StatusUpdateDetails</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:vendordfshipping_v2021_12_28/model/StatusUpdateDetails} obj Optional instance to populate.
   * @return {module:vendordfshipping_v2021_12_28/model/StatusUpdateDetails} The populated <code>StatusUpdateDetails</code> instance.
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
      obj = obj || new StatusUpdateDetails();
      if (data.hasOwnProperty('trackingNumber'))
        obj.trackingNumber = ApiClient.convertToType(data['trackingNumber'], 'String');
      if (data.hasOwnProperty('statusCode'))
        obj.statusCode = ApiClient.convertToType(data['statusCode'], 'String');
      if (data.hasOwnProperty('reasonCode'))
        obj.reasonCode = ApiClient.convertToType(data['reasonCode'], 'String');
      if (data.hasOwnProperty('statusDateTime'))
        obj.statusDateTime = ApiClient.convertToType(data['statusDateTime'], 'Date');
      if (data.hasOwnProperty('statusLocationAddress'))
        obj.statusLocationAddress = Address.constructFromObject(data['statusLocationAddress']);
      if (data.hasOwnProperty('shipmentSchedule'))
        obj.shipmentSchedule = ShipmentSchedule.constructFromObject(data['shipmentSchedule']);
    }
    return obj;
  }
}

/**
 * The shipment tracking number is required for every package and should match the `trackingNumber` sent for the shipment confirmation.
 * @member {String} trackingNumber
 */
StatusUpdateDetails.prototype.trackingNumber = undefined;

/**
 * Indicates the shipment status code of the package that provides transportation information for Amazon tracking systems and ultimately for the final customer. For more information, refer to the [Additional Fields Explanation](https://developer-docs.amazon.com/sp-api/docs/vendor-direct-fulfillment-shipping-api-use-case-guide#additional-fields-explanation).
 * @member {String} statusCode
 */
StatusUpdateDetails.prototype.statusCode = undefined;

/**
 * Provides a reason code for the status of the package that will provide additional information about the transportation status. For more information, refer to the [Additional Fields Explanation](https://developer-docs.amazon.com/sp-api/docs/vendor-direct-fulfillment-shipping-api-use-case-guide#additional-fields-explanation).
 * @member {String} reasonCode
 */
StatusUpdateDetails.prototype.reasonCode = undefined;

/**
 * The date and time when the shipment status was updated. Values are in [ISO 8601](https://developer-docs.amazon.com/sp-api/docs/iso-8601) date-time format, with UTC time zone or UTC offset. For example, 2020-07-16T23:00:00Z or 2020-07-16T23:00:00+01:00.
 * @member {Date} statusDateTime
 */
StatusUpdateDetails.prototype.statusDateTime = undefined;

/**
 * @member {module:vendordfshipping_v2021_12_28/model/Address} statusLocationAddress
 */
StatusUpdateDetails.prototype.statusLocationAddress = undefined;

/**
 * @member {module:vendordfshipping_v2021_12_28/model/ShipmentSchedule} shipmentSchedule
 */
StatusUpdateDetails.prototype.shipmentSchedule = undefined;


