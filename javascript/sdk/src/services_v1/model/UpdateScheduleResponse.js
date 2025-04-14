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
import {Error} from './Error.js';
import {UpdateScheduleRecord} from './UpdateScheduleRecord.js';

/**
 * The UpdateScheduleResponse model module.
 * @module services_v1/model/UpdateScheduleResponse
 * @version v1
 */
export class UpdateScheduleResponse {
  /**
   * Constructs a new <code>UpdateScheduleResponse</code>.
   * Response schema for the &#x60;updateSchedule&#x60; operation.
   * @alias module:services_v1/model/UpdateScheduleResponse
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>UpdateScheduleResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:services_v1/model/UpdateScheduleResponse} obj Optional instance to populate.
   * @return {module:services_v1/model/UpdateScheduleResponse} The populated <code>UpdateScheduleResponse</code> instance.
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
      obj = obj || new UpdateScheduleResponse();
      if (data.hasOwnProperty('payload'))
        obj.payload = ApiClient.convertToType(data['payload'], [UpdateScheduleRecord]);
      if (data.hasOwnProperty('errors'))
        obj.errors = ApiClient.convertToType(data['errors'], [Error]);
    }
    return obj;
  }
}

/**
 * Contains the `UpdateScheduleRecords` for which the error/warning has occurred.
 * @member {Array.<module:services_v1/model/UpdateScheduleRecord>} payload
 */
UpdateScheduleResponse.prototype.payload = undefined;

/**
 * A list of error responses returned when a request is unsuccessful.
 * @member {Array.<module:services_v1/model/Error>} errors
 */
UpdateScheduleResponse.prototype.errors = undefined;


