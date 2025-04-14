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
import {UpdateReservationRecord} from './UpdateReservationRecord.js';

/**
 * The UpdateReservationResponse model module.
 * @module services_v1/model/UpdateReservationResponse
 * @version v1
 */
export class UpdateReservationResponse {
  /**
   * Constructs a new <code>UpdateReservationResponse</code>.
   * Response schema for the &#x60;updateReservation&#x60; operation.
   * @alias module:services_v1/model/UpdateReservationResponse
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>UpdateReservationResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:services_v1/model/UpdateReservationResponse} obj Optional instance to populate.
   * @return {module:services_v1/model/UpdateReservationResponse} The populated <code>UpdateReservationResponse</code> instance.
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
      obj = obj || new UpdateReservationResponse();
      if (data.hasOwnProperty('payload'))
        obj.payload = UpdateReservationRecord.constructFromObject(data['payload']);
      if (data.hasOwnProperty('errors'))
        obj.errors = ApiClient.convertToType(data['errors'], [Error]);
    }
    return obj;
  }
}

/**
 * @member {module:services_v1/model/UpdateReservationRecord} payload
 */
UpdateReservationResponse.prototype.payload = undefined;

/**
 * A list of error responses returned when a request is unsuccessful.
 * @member {Array.<module:services_v1/model/Error>} errors
 */
UpdateReservationResponse.prototype.errors = undefined;


