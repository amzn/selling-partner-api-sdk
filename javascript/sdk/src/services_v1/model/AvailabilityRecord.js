/**
 * Selling Partner API for Services
 * With the Services API, you can build applications that help service providers get and modify their service orders and manage their resources.
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
import {Recurrence} from './Recurrence.js';

/**
 * The AvailabilityRecord model module.
 * @module services_v1/model/AvailabilityRecord
 * @version v1
 */
export class AvailabilityRecord {
  /**
   * Constructs a new <code>AvailabilityRecord</code>.
   * &#x60;AvailabilityRecord&#x60; to represent the capacity of a resource over a time range.
   * @alias module:services_v1/model/AvailabilityRecord
   * @class
   * @param startTime {Date} Denotes the time from when the resource is available in a day in ISO-8601 format.
   * @param endTime {Date} Denotes the time till when the resource is available in a day in ISO-8601 format.
   */
  constructor(startTime, endTime) {
    this.startTime = startTime;
    this.endTime = endTime;
  }

  /**
   * Constructs a <code>AvailabilityRecord</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:services_v1/model/AvailabilityRecord} obj Optional instance to populate.
   * @return {module:services_v1/model/AvailabilityRecord} The populated <code>AvailabilityRecord</code> instance.
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
      obj = obj || new AvailabilityRecord();
      if (data.hasOwnProperty('startTime'))
        obj.startTime = ApiClient.convertToType(data['startTime'], 'Date');
      if (data.hasOwnProperty('endTime'))
        obj.endTime = ApiClient.convertToType(data['endTime'], 'Date');
      if (data.hasOwnProperty('recurrence'))
        obj.recurrence = Recurrence.constructFromObject(data['recurrence']);
      if (data.hasOwnProperty('capacity'))
        obj.capacity = ApiClient.convertToType(data['capacity'], 'Number');
    }
    return obj;
  }
}

/**
 * Denotes the time from when the resource is available in a day in ISO-8601 format.
 * @member {Date} startTime
 */
AvailabilityRecord.prototype.startTime = undefined;

/**
 * Denotes the time till when the resource is available in a day in ISO-8601 format.
 * @member {Date} endTime
 */
AvailabilityRecord.prototype.endTime = undefined;

/**
 * @member {module:services_v1/model/Recurrence} recurrence
 */
AvailabilityRecord.prototype.recurrence = undefined;

/**
 * Signifies the capacity of a resource which is available.
 * @member {Number} capacity
 */
AvailabilityRecord.prototype.capacity = undefined;


