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
import {Reservation} from './Reservation.js';
import {Warning} from './Warning.js';

/**
 * The CreateReservationRecord model module.
 * @module services_v1/model/CreateReservationRecord
 * @version v1
 */
export class CreateReservationRecord {
  /**
   * Constructs a new <code>CreateReservationRecord</code>.
   * &#x60;CreateReservationRecord&#x60; entity contains the &#x60;Reservation&#x60; if there is an error/warning while performing the requested operation on it, otherwise it will contain the new &#x60;reservationId&#x60;.
   * @alias module:services_v1/model/CreateReservationRecord
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>CreateReservationRecord</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:services_v1/model/CreateReservationRecord} obj Optional instance to populate.
   * @return {module:services_v1/model/CreateReservationRecord} The populated <code>CreateReservationRecord</code> instance.
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
      obj = obj || new CreateReservationRecord();
      if (data.hasOwnProperty('reservation'))
        obj.reservation = Reservation.constructFromObject(data['reservation']);
      if (data.hasOwnProperty('warnings'))
        obj.warnings = ApiClient.convertToType(data['warnings'], [Warning]);
      if (data.hasOwnProperty('errors'))
        obj.errors = ApiClient.convertToType(data['errors'], [Error]);
    }
    return obj;
  }
}

/**
 * @member {module:services_v1/model/Reservation} reservation
 */
CreateReservationRecord.prototype.reservation = undefined;

/**
 * A list of warnings returned in the sucessful execution response of an API request.
 * @member {Array.<module:services_v1/model/Warning>} warnings
 */
CreateReservationRecord.prototype.warnings = undefined;

/**
 * A list of error responses returned when a request is unsuccessful.
 * @member {Array.<module:services_v1/model/Error>} errors
 */
CreateReservationRecord.prototype.errors = undefined;


