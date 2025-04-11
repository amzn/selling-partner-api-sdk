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
import {Reservation} from './Reservation.js';

/**
 * The CreateReservationRequest model module.
 * @module services_v1/model/CreateReservationRequest
 * @version v1
 */
export class CreateReservationRequest {
  /**
   * Constructs a new <code>CreateReservationRequest</code>.
   * Request schema for the &#x60;createReservation&#x60; operation.
   * @alias module:services_v1/model/CreateReservationRequest
   * @class
   * @param resourceId {String} Resource (store) identifier.
   * @param reservation {module:services_v1/model/Reservation} 
   */
  constructor(resourceId, reservation) {
    this.resourceId = resourceId;
    this.reservation = reservation;
  }

  /**
   * Constructs a <code>CreateReservationRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:services_v1/model/CreateReservationRequest} obj Optional instance to populate.
   * @return {module:services_v1/model/CreateReservationRequest} The populated <code>CreateReservationRequest</code> instance.
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
      obj = obj || new CreateReservationRequest();
      if (data.hasOwnProperty('resourceId'))
        obj.resourceId = ApiClient.convertToType(data['resourceId'], 'String');
      if (data.hasOwnProperty('reservation'))
        obj.reservation = Reservation.constructFromObject(data['reservation']);
    }
    return obj;
  }
}

/**
 * Resource (store) identifier.
 * @member {String} resourceId
 */
CreateReservationRequest.prototype.resourceId = undefined;

/**
 * @member {module:services_v1/model/Reservation} reservation
 */
CreateReservationRequest.prototype.reservation = undefined;


